package com.example.chatroom;

import org.json.JSONObject;
import org.springframework.web.socket.*;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class ChatHandler extends TextWebSocketHandler {
    // sessionId → 用戶資料
    private static final Map<String, User> users = new ConcurrentHashMap<>();
    // sessionId → session
    private static final Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();

    static class User {
        String nickname;
        String avatar; // base64 string
        String sessionId;
        User(String nickname, String avatar, String sessionId) {
            this.nickname = nickname;
            this.avatar = avatar;
            this.sessionId = sessionId;
        }
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        // 等待登入
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        JSONObject obj = new JSONObject(message.getPayload());
        String type = obj.getString("type");
        if ("login".equals(type)) {
            String nickname = obj.getString("nickname");
            String avatar = obj.getString("avatar");
            users.put(session.getId(), new User(nickname, avatar, session.getId()));
            sessions.put(session.getId(), session);
            broadcastUserList();
        } else if ("chat".equals(type)) {
            String to = obj.getString("to");
            String text = obj.optString("text", "");
            String img = obj.optString("img", "");
            JSONObject msg = new JSONObject();
            msg.put("type", "chat");
            msg.put("from", session.getId());
            msg.put("nickname", users.get(session.getId()).nickname);
            msg.put("avatar", users.get(session.getId()).avatar);
            msg.put("text", text);
            msg.put("img", img);
            WebSocketSession target = sessions.get(to);
            if (target != null && target.isOpen()) {
                target.sendMessage(new TextMessage(msg.toString()));
            }
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        users.remove(session.getId());
        sessions.remove(session.getId());
        broadcastUserList();
    }

    private void broadcastUserList() {
        List<JSONObject> userList = new ArrayList<>();
        for (User user : users.values()) {
            JSONObject obj = new JSONObject();
            obj.put("id", user.sessionId);
            obj.put("nickname", user.nickname);
            obj.put("avatar", user.avatar);
            userList.add(obj);
        }
        JSONObject msg = new JSONObject();
        msg.put("type", "userlist");
        msg.put("users", userList);
        for (WebSocketSession sess : sessions.values()) {
            try {
                sess.sendMessage(new TextMessage(msg.toString()));
            } catch (Exception ignored) {}
        }
    }
}
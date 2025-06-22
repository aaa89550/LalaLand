// vote.js
export function initVoteFeature(sendVoteCallback) {
  const voteBtn = document.getElementById('vote-btn');
  const modal = document.getElementById('vote-modal');
  const closeBtn = document.getElementById('close-vote-modal');
  const addOptionBtn = document.getElementById('add-option-btn');
  const submitBtn = document.getElementById('submit-vote-btn');
  const questionInput = document.getElementById('vote-question');
  const optionsContainer = document.getElementById('vote-options');

  if (!voteBtn || !modal) return;

  voteBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  addOptionBtn.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'vote-option-input';
    input.placeholder = `選項 ${optionsContainer.children.length + 1}`;
    optionsContainer.appendChild(input);
  });

  submitBtn.addEventListener('click', () => {
    const question = questionInput.value.trim();
    const options = Array.from(optionsContainer.querySelectorAll('.vote-option-input'))
      .map(i => i.value.trim()).filter(Boolean);

    if (!question || options.length < 2) {
      alert('請輸入問題，並至少提供兩個選項');
      return;
    }

    const voteData = {
      type: 'vote',
      question,
      options,
      votes: Array(options.length).fill(0),
      voters: {},
      time: Date.now()
    };

    sendVoteCallback(voteData);
    modal.style.display = 'none';
    questionInput.value = '';
    optionsContainer.innerHTML = '';
    for (let i = 1; i <= 2; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'vote-option-input';
      input.placeholder = `選項 ${i}`;
      optionsContainer.appendChild(input);
    }
  });
}

export function listenToVoteUpdates(room = 'chat') {
  const messagesRef = ref(db, `groupChats/${room}/messages`);
  onChildChanged(messagesRef, (snap) => {
    const msg = snap.val();
    const msgId = snap.key;
    if (msg?.type === 'vote') {
      const existing = document.querySelector(`[data-msgid="${msgId}"]`);
      if (existing) existing.remove();
      appendMessage?.(msg, msgId);
    }
  });
}

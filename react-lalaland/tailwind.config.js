/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 主要色彩 - 大地色與海藍色主題
        earth: {
          brown: '#6a4e42',
          beige: '#f9f6f1',
          sand: '#fffaf3'
        },
        sea: {
          blue: '#2877b9',
          dark: '#1a4d80',
          light: '#e6f0fa'
        },
        accent: {
          green: '#56c596',
          coral: '#e36c60'
        },
        // 夜間模式
        dark: {
          bg: '#1e1e1e',
          card: '#2a2a2a',
          text: '#f0f0f0',
          accent: '#78c6b0'
        }
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(40, 119, 185, 0.08)',
        'medium': '0 4px 16px rgba(40, 119, 185, 0.12)',
        'strong': '0 8px 32px rgba(40, 119, 185, 0.16)'
      }
    },
  },
  plugins: [],
}
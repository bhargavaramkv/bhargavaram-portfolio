/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                marvel: {
                    blue: '#00C3FF', // Deep Sky Blue
                    dark: '#050505', // Almost Black
                    yellow: '#FFD700', // Gold
                    red: '#FF003C', // Cyberpunk Red
                },
                jarvis: {
                    blue: '#00C3FF',
                    bg: 'rgba(5, 5, 5, 0.95)',
                }
            },
            fontFamily: {
                comic: ['Bangers', 'cursive'],
                body: ['Roboto Condensed', 'sans-serif'],
            },
            backgroundImage: {
                'halftone': 'radial-gradient(circle, #333 1px, transparent 1px)',
                'comic-dots': 'radial-gradient(#00F0FF 1px, transparent 1px)',
                'grid-pattern': 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
            },
            backgroundSize: {
                'halftone': '20px 20px',
                'grid-pattern': '40px 40px',
            },
            boxShadow: {
                'comic': '4px 4px 0px 0px #00F0FF',
                'neon': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3)',
            },
            animation: {
                'scan': 'scan 3s linear infinite',
                'blob': 'blob 7s infinite',
                'shine': 'shine 1s forwards',
                'glitch': 'glitch 1s linear infinite',
            },
            keyframes: {
                scan: {
                    '0%': { top: '0%' },
                    '100%': { top: '100%' },
                },
                shine: {
                    '100%': { left: '125%' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                }
            }
        },
    },
    plugins: [],
}

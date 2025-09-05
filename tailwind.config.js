/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                'slow-spin': 'slow-spin 60s linear infinite',
                'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'move-background': 'move-background 15s ease infinite',
            },
            keyframes: {
                'slow-spin': {
                    '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                    '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '0.3' },
                    '50%': { opacity: '0.5' },
                },
                'move-background': {
                    '0%': { backgroundPosition: '0% 0%' },
                    '50%': { backgroundPosition: '100% 100%' },
                    '100%': { backgroundPosition: '0% 0%' },
                },
            },
            backgroundImage: {
                'gradient-radial-circles': 'repeating-radial-gradient(circle at 0 0, transparent 0, #f0f7ff 40px), repeating-linear-gradient(#f5f3ff55, #e0f2fe55)',
            },
        },
    },
    plugins: [],
}
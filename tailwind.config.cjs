const colors = require('tailwindcss/colors') // colors 모듈 가져오기

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}', // src 디렉토리 포함
    ],
    theme: {
        extend: {
            colors: {
                gray: colors.coolGray, // Tailwind 내장 coolGray
                blue: '#38bdf8', // 사용자 정의 색상
                yellow: '#fcd34d', // 사용자 정의 색상
                red: '#fca5a5', // 사용자 정의 색상
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,json}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'gray-sidebar': '#1c273c',
      'content': '#fdfdfd',
      'arrow': '#cdd4e0',
      primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
    },
    fontFamily: {
      display: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      fontSize: {
        '13px': '13px',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      height: {
        '22px': '22px',
      },
      width: {
        '100px': '100px',
        '70px': '70px',
        '9px': '9px',
        '1px': '1px',
      },
      padding: {
        '1.9rem': '1.9rem',
      },
      transitionProperty: {
        'width': 'width, background',
        'background': 'background',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ]
}


module.exports = {
  content: ["./src/**/*.{md,njk,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "\"Zen Kaku Gothic New\"",
          "\"Hiragino Kaku Gothic ProN\"",
          "Meiryo",
          "sans-serif"
        ],
        serif: [
          "\"Shippori Mincho\"",
          "\"Hiragino Mincho ProN\"",
          "serif"
        ]
      },
      colors: {
        ink: {
          900: "#1b1b1f",
          700: "#2d2d32"
        },
        accent: {
          500: "#f97316",
          600: "#ea580c"
        }
      },
      boxShadow: {
        card: "0 10px 30px -20px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};

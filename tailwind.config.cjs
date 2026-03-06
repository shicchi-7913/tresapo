module.exports = {
  content: ["./src/**/*.{md,njk,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "\"M PLUS Rounded 1c\"",
          "\"Hiragino Kaku Gothic ProN\"",
          "Meiryo",
          "sans-serif"
        ]
      },
      colors: {
        ink: {
          900: "#1b1b1f",
          700: "#2d2d32"
        },
        accent: {
          500: "#3b82f6",
          600: "#2563eb"
        }
      },
      boxShadow: {
        card: "0 10px 30px -20px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};

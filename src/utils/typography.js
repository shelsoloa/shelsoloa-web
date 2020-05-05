import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerWeight: '700',
    headerFontFamily: [
      "anka-coder",
      "serif"
  ],
    bodyFontFamily: [
      "Source Sans Pro",
      "sans-serif"
    ],
    googleFonts: [
      {
        name: "Damion",
        styles: ["400"]
      },
      {
        name: "Source Sans Pro",
        styles: ["400"]
      }
    ]
})

export default typography
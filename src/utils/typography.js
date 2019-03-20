import Typography from "typography"

const typography = new Typography({
	baseFontSize: "18px",
	baseLineHeight: 1.666,
	headerWeight: '700',
  	headerFontFamily: [
  		"Inconsolata",
	    "Georgia",
	    "serif"
	],
  	bodyFontFamily: [
  		"Inconsolata", 
  		"monospace"
  	],
  	googleFonts: [
  		{
  			name: "Damion",
  			styles: ["400"]
  		},
  		{
  			name: "Inconsolata",
  			styles: ["400", "700"]
  		}
  	]
})

export default typography
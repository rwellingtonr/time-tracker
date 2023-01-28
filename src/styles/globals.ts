import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle((props) => ({
	"*": {
		margin: 0,
		padding: 0,
		boxSizing: "border-box",
	},
	":focus": {
		outline: 0,
		boxShadow: `0 0 0 2px ${props.theme["green-500"]}`,
	},

	body: {
		background: props.theme["gray-900"],
		color: props.theme["gray-300"],
		"-webkit-font-smoothing": "antialiased",
	},
	"body, input, textarea, button": {
		fontFamily: "Roboto, sans-serif",
		fontWeight: 400,
		fontSize: "1rem",
	},
}))

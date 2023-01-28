import styled from "styled-components"

export const ButtonContainer = styled.button((props) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "0.5rem",
	padding: "1rem",
	width: "100%",
	border: 0,
	borderRadius: "8px",
	cursor: "pointer",
	background: props.theme["green-500"],
	color: props.theme["gray-100"],

	"&:not(:disabled):hover": {
		background: props.theme["green-700"],
	},

	"&:disabled": {
		cursor: "not-allowed",
		opacity: 0.7,
	},
}))

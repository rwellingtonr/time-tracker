import styled from "styled-components"

export const BaseInput = styled.input((props) => ({
	backgroundColor: props.theme["transparent"],
	height: "2.5rem",
	border: 0,
	borderBottom: `2px solid ${props.theme["gray-500"]}`,
	color: props.theme["gray-100"],
	fontWeight: "bold",
	fontSize: "1rem",
	padding: "0 0.5rem",

	"&::placeholder": {
		color: props.theme["gray-500"],
	},

	"&:focus": {
		boxShadow: "none",
		borderColor: props.theme["green-500"],
	},
}))

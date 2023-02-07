import styled from "styled-components"

const BaseButton = styled.button((props) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "0.5rem",
	padding: "1rem",
	width: "100%",
	border: 0,
	borderRadius: "8px",
	cursor: "pointer",
	color: props.theme["gray-100"],

	"&:disabled": {
		cursor: "not-allowed",
		opacity: 0.7,
	},
}))

export const ButtonStart = styled(BaseButton)`
	background: ${(props) => props.theme["green-500"]};
	

	&:not(:disabled):hover {
		background: ${(props) => props.theme["green-700"]};
	},

`
export const ButtonStop = styled(BaseButton)`
  background: ${(props) => props.theme["red-500"]};

	&:not(:disabled):hover {
		background: ${(props) => props.theme["red-700"]};
	},
`

import styled from "styled-components"

export const FormWrapper = styled.div((props) => ({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "0.5rem",
	color: props.theme["gray-100"],
	fontWeight: "bold",
	fontSize: "1.1rem",
	flexWrap: "wrap",
}))

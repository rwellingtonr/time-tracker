import styled from "styled-components"

export const HomeContainer = styled.main({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
})

export const FormContainer = styled.form({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "3.5rem",
})
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

export const CountDownContainer = styled.div((props) => ({
	fontFamily: "Roboto Mono, monospace",
	fontSize: "10rem",
	lineHeight: "8rem",
	color: props.theme["gray-100"],
	display: "flex",
	gap: "1rem",

	span: {
		background: props.theme["gray-700"],
		padding: "2rem 1rem",
		borderRadius: "8px",
	},
}))

export const Separator = styled.div((props) => ({
	padding: "2rem 0",
	color: props.theme["green-500"],
	width: "4rem",
	overflow: "hidden",
	display: "flex",
	justifyContent: "center",
}))

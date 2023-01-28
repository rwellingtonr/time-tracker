import styled from "styled-components"

export const LayoutContainer = styled.div((props) => ({
	maxWidth: "74rem",
	height: "calc(100vh - 10rem)",
	margin: "5rem auto",
	padding: "2.5rem",
	background: props.theme["gray-800"],
	borderRadius: "8px",
	display: "flex",
	flexDirection: "column",
}))

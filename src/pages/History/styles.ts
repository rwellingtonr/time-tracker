import styled from "styled-components"

export const HistoryContainer = styled.main((props) => ({
	padding: "3.5rem",
	display: "flex",
	flex: 1,
	flexDirection: "column",

	h1: {
		fontSize: "1.5rem",
		color: props.theme["gray-100"],
	},
}))

export const HistoryList = styled.div({
	flex: 1,
	overflow: "auto",
	marginTop: "2rem",
	maxHeight: "20rem",
})

export const TableWrapper = styled.table((props) => ({
	width: "100%",
	borderCollapse: "collapse",
	minWidth: "600px",

	th: {
		backgroundColor: props.theme["gray-600"],
		color: props.theme["gray-100"],
		padding: "1rem",
		textAlign: "left",
		fontSize: "0.875rem",
		lineHeight: 1.6,

		"&:first-child": {
			borderTopLeftRadius: "8px",
			paddingLeft: "1.5rem",
		},

		"&:last-child": {
			borderTopRightRadius: "8px",
			paddingRight: "1.5rem",
		},
	},

	td: {
		background: props.theme["gray-700"],
		borderTop: `4px solid ${props.theme["gray-800"]}`,
		fontSize: "0.875rem",
		padding: "1rem",
		lineHeight: 1.6,

		"&:first-child": {
			width: "50%",
			paddingLeft: "1.5rem",
		},
		"&:last-child": {
			paddingRight: "1.5rem",
		},
	},
}))

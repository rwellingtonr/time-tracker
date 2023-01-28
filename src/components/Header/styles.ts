import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const HeaderContainer = styled.header({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
})

export const NavWrapper = styled.nav({
	display: "flex",
	gap: "0.5rem",
})

export const AnchorWrapper = styled(NavLink)((props) => ({
	width: "3rem",
	height: "3rem",

	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	color: props.theme["gray-100"],
	borderTop: "3px solid transparent",
	borderBottom: "3px solid transparent",

	"&:hover": {
		borderBottom: `3px solid ${props.theme["green-500"]}`,
	},

	"&.active": {
		color: props.theme["green-500"],
	},
}))

import styled from "styled-components"

const statusColor = {
	done: "green-500",
	ongoing: "yellow-500",
	cancelled: "red-500",
} as const

type StatusSpanCode = {
	status: keyof typeof statusColor
}

export const Status = styled.span<StatusSpanCode>`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	&::before {
		content: "";
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 100%;
		background: ${(props) => props.theme[statusColor[props.status]]};
	}
`

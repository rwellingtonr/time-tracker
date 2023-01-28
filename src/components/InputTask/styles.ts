import styled from "styled-components"
import { BaseInput } from "../BaseInput/styles"

export const InputTaskContainer = styled(BaseInput)({
	flex: 1,

	"&::-webkit-calendar-picker-indicator": {
		display: "none !important",
	},
})

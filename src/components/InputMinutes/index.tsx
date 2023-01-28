import { InputHTMLAttributes } from "react"
import { InputMinutesContainer } from "./styles"

type InputNumberProps = InputHTMLAttributes<HTMLInputElement>

export function InputNumber(props: InputNumberProps) {
	return <InputMinutesContainer type="number" {...props} />
}

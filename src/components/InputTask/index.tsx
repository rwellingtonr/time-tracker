import { InputHTMLAttributes } from "react"
import { InputTaskContainer } from "./styles"

type InputTaskProps = InputHTMLAttributes<HTMLInputElement>

export function InputTask(props: InputTaskProps) {
	return <InputTaskContainer type="text" {...props} />
}

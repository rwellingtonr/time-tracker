import { InputMinutesContainer } from "~/components/InputMinutes/styles"
import { InputTaskContainer } from "~/components/InputTask/styles"
import { FormWrapper } from "./styles"
import { useCycle } from "~/context/CyclesProvider"
import { useFormContext } from "react-hook-form"

export function CycleForm() {
	const { activeCycle } = useCycle()
	const { register } = useFormContext()
	const isDisabledInput = !!activeCycle

	return (
		<FormWrapper>
			<label htmlFor="WorkingOn">Vou Trabalhar em:</label>

			<InputTaskContainer
				list="task-suggestion"
				id="WorkingOn"
				placeholder="Dê um nome para o seu projeto"
				disabled={isDisabledInput}
				{...register("task", { required: true })}
			/>

			<datalist id="task-suggestion">
				<option value="project 1" />
				<option value="project 2" />
				<option value="project 3" />
				<option value="other" />
			</datalist>
			<label htmlFor="HowLongTime">Durante</label>

			<InputMinutesContainer
				id="HowLongTime"
				placeholder="00"
				disabled={isDisabledInput}
				step={5}
				min={1}
				max={60}
				{...register("time", { valueAsNumber: true })}
			/>

			<span>minutos.</span>
		</FormWrapper>
	)
}

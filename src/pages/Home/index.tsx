import * as Styles from "./styles"
import { Play } from "phosphor-react"
import { Button } from "~/components/Button"
import { InputTask } from "~/components/InputTask"
import { InputNumber } from "~/components/InputMinutes"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const todoSchema = z.object({
	task: z.string().min(3, "Informe uma tarefa"),
	time: z.number().min(5).max(60),
})

type TodoSchemaType = z.infer<typeof todoSchema>

export function Home() {
	const { register, handleSubmit, watch } = useForm<TodoSchemaType>({
		resolver: zodResolver(todoSchema),
	})

	const task = watch("task")
	const isSubmitButtonDisabled = !task

	const handleCreateNewTask: SubmitHandler<TodoSchemaType> = (data) => {
		console.log(data)
	}

	return (
		<Styles.HomeContainer>
			<Styles.FormContainer onSubmit={handleSubmit(handleCreateNewTask)}>
				<Styles.FormWrapper>
					<label htmlFor="WorkingOn">Vou Trabalhar em:</label>
					<InputTask
						list="task-suggestion"
						id="WorkingOn"
						placeholder="Dê um nome para o seu projeto"
						{...register("task")}
					/>
					<datalist id="task-suggestion">
						<option value="project 1" />
						<option value="project 2" />
						<option value="project 3" />
						<option value="other" />
					</datalist>
					<label htmlFor="HowLongTime">Durante</label>
					<InputNumber
						id="HowLongTime"
						placeholder="00"
						step={5}
						min={5}
						max={60}
						{...register("time", { valueAsNumber: true })}
					/>
					<span>minutos.</span>
				</Styles.FormWrapper>
				<Styles.CountDownContainer>
					<span>0</span>
					<span>0</span>
					<Styles.Separator>:</Styles.Separator>
					<span>0</span>
					<span>0</span>
				</Styles.CountDownContainer>
				<Button type="submit" disabled={isSubmitButtonDisabled}>
					<Play size={24} />
					Começar
				</Button>{" "}
			</Styles.FormContainer>
		</Styles.HomeContainer>
	)
}

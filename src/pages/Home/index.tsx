import * as Styles from "./styles"
import { Play } from "phosphor-react"
import { Button } from "~/components/Button"
import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { uuid } from "~/utils/uuid"
import { InputTaskContainer } from "~/components/InputTask/styles"
import { InputMinutesContainer } from "~/components/InputMinutes/styles"

const todoSchema = z.object({
	task: z.string().min(3, "Informe uma tarefa"),
	time: z.number().min(5).max(60),
})

type TodoSchemaType = z.infer<typeof todoSchema>

interface Cycle {
	id: string
	task: string
	minutesAmount: number
}

export function Home() {
	const [cycles, setCycles] = useState<Cycle[]>([])
	const [activeId, setActiveId] = useState<string | null>(null)
	const [timePassed, setTimePassed] = useState<number>(0)

	const { register, handleSubmit, watch, reset } = useForm<TodoSchemaType>({
		resolver: zodResolver(todoSchema),
		defaultValues: {
			task: "",
			time: 0,
		},
	})

	const task = watch("task")
	const isSubmitButtonDisabled = !task
	console.log(task)

	const handleCreateNewTask: SubmitHandler<TodoSchemaType> = ({ task, time }) => {
		const newCycle: Cycle = {
			id: uuid(),
			minutesAmount: time,
			task,
		}
		setCycles((prev) => [...prev, newCycle])
		setActiveId(newCycle.id)
		reset()
	}
	// Pega o ciclo atual e calcula os segundos que se passaram
	const activeCycle = cycles.find((cycle) => cycle.id === activeId)
	const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
	const currentSeconds = totalSeconds ? totalSeconds - timePassed : 0

	// converte para o padrão do display
	const minutesAmount = Math.floor(currentSeconds / 60)
	const secondsAmount = currentSeconds % 60
	// Ajusta a formatação do display
	const minutes = String(minutesAmount).padStart(2, "0")
	const seconds = String(secondsAmount).padStart(2, "0")

	return (
		<Styles.HomeContainer>
			<Styles.FormContainer onSubmit={handleSubmit(handleCreateNewTask)}>
				<Styles.FormWrapper>
					<label htmlFor="WorkingOn">Vou Trabalhar em:</label>

					<InputTaskContainer
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

					<InputMinutesContainer
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
					<span>{minutes[0]}</span>
					<span>{minutes[1]}</span>
					<Styles.Separator>:</Styles.Separator>
					<span>{seconds[0]}</span>
					<span>{seconds[1]}</span>
				</Styles.CountDownContainer>
				<Button type="submit" disabled={isSubmitButtonDisabled}>
					<Play size={24} />
					Começar
				</Button>{" "}
			</Styles.FormContainer>
		</Styles.HomeContainer>
	)
}

import * as Styles from "./styles"
import { HandPalm, Play } from "phosphor-react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { ButtonStart, ButtonStop } from "~/components/Button/styles"
import { Countdown } from "./Components/Countdown"
import { CycleForm } from "./Components/CycleForm"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCycle } from "~/context/CyclesProvider"

const todoSchema = z.object({
	task: z.string().min(3, "Informe uma tarefa"),
	time: z.number().min(1).max(60),
})
type TodoSchemaType = z.infer<typeof todoSchema>

export function Home() {
	const { activeCycle, handleResetCycle, handleCreateNewCycle } = useCycle()

	const newCycleForm = useForm<TodoSchemaType>({
		resolver: zodResolver(todoSchema),
		defaultValues: {
			task: "",
			time: 0,
		},
	})
	const { handleSubmit, watch, reset } = newCycleForm
	const task = watch("task")
	const isSubmitButtonDisabled = !task
	console.log(task)

	const handleCreateNewTask: SubmitHandler<TodoSchemaType> = ({ task, time }) => {
		handleCreateNewCycle({ task, time })
		reset()
	}

	return (
		<Styles.HomeContainer>
			<Styles.FormContainer onSubmit={handleSubmit(handleCreateNewTask)}>
				<FormProvider {...newCycleForm}>
					<CycleForm />
				</FormProvider>
				<Countdown />
				{activeCycle ? (
					<ButtonStop type="button" onClick={handleResetCycle}>
						<HandPalm size={24} />
						Interromper
					</ButtonStop>
				) : (
					<ButtonStart type="submit" disabled={isSubmitButtonDisabled}>
						<Play size={24} />
						Começar
					</ButtonStart>
				)}
			</Styles.FormContainer>
		</Styles.HomeContainer>
	)
}

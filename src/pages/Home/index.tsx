import * as Styles from "./styles"
import { Play } from "phosphor-react"
import { Button } from "~/components/Button"
import { InputTask } from "~/components/InputTask"
import { InputNumber } from "~/components/InputMinutes"

export function Home() {
	return (
		<Styles.HomeContainer>
			<Styles.FormContainer>
				<Styles.FormWrapper>
					<label htmlFor="WorkingOn">Vou Trabalhar em:</label>
					<InputTask
						name="WorkingOn"
						list="task-suggestion"
						id="WorkingOn"
						placeholder="Dê um nome para o seu projeto"
					/>
					<datalist id="task-suggestion">
						<option value="project 1" />
						<option value="project 2" />
						<option value="project 3" />
						<option value="other" />
					</datalist>
					<label htmlFor="HowLongTime">Durante</label>
					<InputNumber id="HowLongTime" placeholder="00" step={5} min={5} max={60} />
					<span>minutos.</span>
				</Styles.FormWrapper>
				<Styles.CountDownContainer>
					<span>0</span>
					<span>0</span>
					<Styles.Separator>:</Styles.Separator>
					<span>0</span>
					<span>0</span>
				</Styles.CountDownContainer>
				<Button type="submit">
					<Play size={24} />
					Começar
				</Button>{" "}
			</Styles.FormContainer>
		</Styles.HomeContainer>
	)
}

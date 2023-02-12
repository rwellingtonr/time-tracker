import { useCycle } from "~/context/CyclesProvider"
import * as Styles from "./styles"
import { Status } from "~/components/Status/styles"
import { Cycle } from "~/context/CyclesProvider/types"
import { formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

const tableHeader = ["Tarefa", "Duração", "Início", "Status"]

export function History() {
	const { cycles } = useCycle()

	const renderStatus = (cycle: Cycle) => {
		if (cycle.endTime) {
			return <Status status="done">Concluído</Status>
		}
		if (cycle.interruptedTime) {
			return <Status status="cancelled">Interrompido</Status>
		}
		return <Status status="ongoing">Em andamento</Status>
	}

	return (
		<Styles.HistoryContainer>
			<h1>Meu histórico</h1>
			<Styles.HistoryList>
				<Styles.TableWrapper>
					<thead>
						<tr>
							{tableHeader.map((header) => (
								<th key={header}>{header}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{cycles.map((cycle) => (
							<tr key={cycle.id}>
								<td>{cycle.task}</td>
								<td>{cycle.minutesAmount} minutos</td>
								<td>
									{formatDistanceToNow(new Date(cycle?.startTime), {
										addSuffix: true,
										locale: ptBR,
									})}
								</td>
								<td>{renderStatus(cycle)}</td>
							</tr>
						))}
					</tbody>
				</Styles.TableWrapper>
			</Styles.HistoryList>
		</Styles.HistoryContainer>
	)
}

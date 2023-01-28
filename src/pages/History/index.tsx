import * as Styles from "./styles"
import { Status } from "~/components/Status/styles"

const tableHeader = ["Tarefa", "Duração", "Início", "Status"]

export function History() {
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
						{Array.from({ length: 10 }).map((_, i) => (
							<tr key={i}>
								<td>{`Tarefa ${i + 1}`}</td>
								<td>20 min</td>
								<td>há 2 meses</td>
								<td>
									<Status status="ongoing">Concluído </Status>
								</td>
							</tr>
						))}
					</tbody>
				</Styles.TableWrapper>
			</Styles.HistoryList>
		</Styles.HistoryContainer>
	)
}

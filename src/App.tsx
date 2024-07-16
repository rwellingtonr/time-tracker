import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/globals"
import { Router } from "./Router"
import { HashRouter } from "react-router-dom"
import { CyclesProvider } from "./context/CyclesProvider"

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<HashRouter>
				<CyclesProvider>
					<Router />
				</CyclesProvider>
			</HashRouter>
			<GlobalStyle />
		</ThemeProvider>
	)
}

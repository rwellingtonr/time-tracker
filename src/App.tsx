import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/globals"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { CyclesProvider } from "./context/CyclesProvider"

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<CyclesProvider>
					<Router />
				</CyclesProvider>
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	)
}

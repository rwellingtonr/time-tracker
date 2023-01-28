import { HeaderContainer, NavWrapper, AnchorWrapper } from "./styles"
import { Timer, Scroll } from "phosphor-react"
import igniteLogo from "~/assets/logo.svg"

export function Header() {
	return (
		<HeaderContainer>
			<img
				src={igniteLogo}
				alt="Dois triângulos verdes a 45 graus que representam o logo do curso ignite fornecido pela Rocketseat"
			/>
			<NavWrapper>
				<AnchorWrapper to="/" title="Timer">
					<Timer size={24} />
				</AnchorWrapper>
				<AnchorWrapper to="/history" title="Histórico">
					<Scroll size={24} />
				</AnchorWrapper>
			</NavWrapper>
		</HeaderContainer>
	)
}

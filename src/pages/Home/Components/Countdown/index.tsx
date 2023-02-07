import { useEffect } from "react"
import { CountDownContainer, Separator } from "./styles"
import { differenceInSeconds } from "date-fns"
import { useCycle } from "~/context/CyclesProvider"

export function Countdown() {
	const { activeCycle, handleEndTime, handleTimePassed, timePassed } = useCycle()

	// Pega o ciclo atual e calcula os segundos que se passaram
	const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
	const currentSeconds = totalSeconds ? totalSeconds - timePassed : 0

	// converte para o padrão do display
	const minutesAmount = Math.floor(currentSeconds / 60)
	const secondsAmount = currentSeconds % 60
	// Ajusta a formatação do display
	const minutes = String(minutesAmount).padStart(2, "0")
	const seconds = String(secondsAmount).padStart(2, "0")

	useEffect(() => {
		let interval: NodeJS.Timer
		if (activeCycle) {
			const oneSecond = 1000
			interval = setInterval(() => {
				const secDiff = differenceInSeconds(new Date(), activeCycle.startTime)

				if (secDiff > totalSeconds) {
					handleEndTime()
					clearInterval(interval)
					return
				}
				handleTimePassed(secDiff)
			}, oneSecond)
		}
		return () => {
			clearInterval(interval)
		}
	}, [activeCycle, totalSeconds, handleEndTime])

	useEffect(() => {
		if (activeCycle) {
			document.title = `${minutes}:${seconds}`
		}
	}, [minutes, seconds, activeCycle])

	return (
		<CountDownContainer>
			<span>{minutes[0]}</span>
			<span>{minutes[1]}</span>
			<Separator>:</Separator>
			<span>{seconds[0]}</span>
			<span>{seconds[1]}</span>
		</CountDownContainer>
	)
}

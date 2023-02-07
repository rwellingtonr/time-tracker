import { createContext, useContext, useState } from "react"
import type { CreateNewTask, Cycle, CycleContextProps, CycleProviderProps } from "./types"
import { uuid } from "~/utils/uuid"

const CycleContext = createContext({} as CycleContextProps)

export const useCycle = () => useContext(CycleContext)

export function CyclesProvider({ children }: CycleProviderProps) {
	const [cycles, setCycles] = useState<Cycle[]>([])
	const [activeId, setActiveId] = useState<string | null>(null)
	const [timePassed, setTimePassed] = useState<number>(0)

	const activeCycle = cycles.find((cycle) => cycle.id === activeId)
	const handleEndTime = () => {
		setCycles((prev) =>
			prev.map<Cycle>((cycle) => {
				if (cycle.id === activeId) {
					return {
						...cycle,
						endTime: new Date(),
					}
				}
				return cycle
			}),
		)
		setActiveId(null)
	}
	const handleResetCycle = () => {
		setCycles((prev) =>
			prev.map<Cycle>((cycle) => {
				if (cycle.id === activeId) {
					return {
						...cycle,
						interruptedTime: new Date(),
					}
				}
				return cycle
			}),
		)
		setActiveId(null)
	}

	const handleCreateNewCycle = ({ time, task }: CreateNewTask) => {
		const newCycle: Cycle = {
			id: uuid(),
			minutesAmount: time,
			task,
			startTime: new Date(),
		}
		setCycles((prev) => [...prev, newCycle])
		setTimePassed(0)
		setActiveId(newCycle.id)
	}

	const handleTimePassed = (time: number) => {
		setTimePassed(time)
	}

	return (
		<CycleContext.Provider
			value={{
				activeCycle,
				activeId,
				handleEndTime,
				handleResetCycle,
				handleTimePassed,
				timePassed,
				handleCreateNewCycle,
			}}
		>
			{children}
		</CycleContext.Provider>
	)
}

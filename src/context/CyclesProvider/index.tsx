import { createContext, useContext, useEffect, useReducer, useState } from "react"
import type { CreateNewTask, Cycle, CycleContextProps, CycleProviderProps } from "./types"
import { uuid } from "~/utils/uuid"
import { cyclesReducer } from "~/reducers/cycles/reducer"
import { addNewCycleAction, endCycleAction, interruptCycleAction } from "~/reducers/cycles/actions"
import { differenceInSeconds } from "date-fns"

const CycleContext = createContext({} as CycleContextProps)

export const useCycle = () => useContext(CycleContext)

export function CyclesProvider({ children }: CycleProviderProps) {
	const [cycleState, dispatch] = useReducer(
		cyclesReducer,
		{
			cycles: [],
			activeCycleId: null,
		},
		() => {
			const storageStateAsJson = sessionStorage.getItem("@ignite-timer-v1.0.0")
			if (storageStateAsJson) {
				return JSON.parse(storageStateAsJson)
			}
			return {
				cycles: [],
				activeCycleId: null,
			}
		},
	)
	const { cycles, activeCycleId } = cycleState

	const activeCycle = cycles?.find((cycle) => cycle.id === activeCycleId)
	const [timePassed, setTimePassed] = useState<number>(() => {
		if (activeCycle?.startTime) {
			const secDiff = differenceInSeconds(new Date(), new Date(activeCycle?.startTime))
			return secDiff
		}
		return 0
	})

	useEffect(() => {
		if (cycleState) {
			const stateJson = JSON.stringify(cycleState)

			sessionStorage.setItem("@ignite-timer-v1.0.0", stateJson)
		}
	}, [cycleState])

	const handleEndTime = () => {
		dispatch(endCycleAction())
	}
	const handleResetCycle = () => {
		dispatch(interruptCycleAction())
	}

	const handleCreateNewCycle = ({ time, task }: CreateNewTask) => {
		const newCycle: Cycle = {
			id: uuid(),
			minutesAmount: time,
			task,
			startTime: new Date(),
		}

		dispatch(addNewCycleAction(newCycle))
		setTimePassed(0)
	}

	const handleTimePassed = (time: number) => {
		setTimePassed(time)
	}

	return (
		<CycleContext.Provider
			value={{
				activeCycle,
				activeId: activeCycleId,
				handleEndTime,
				handleResetCycle,
				handleTimePassed,
				timePassed,
				handleCreateNewCycle,
				cycles,
			}}
		>
			{children}
		</CycleContext.Provider>
	)
}

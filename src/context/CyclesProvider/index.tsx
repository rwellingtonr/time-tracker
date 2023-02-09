import { createContext, useContext, useReducer, useState } from "react"
import type {
	CreateNewTask,
	Cycle,
	CycleContextProps,
	CycleProviderProps,
	CycleStates,
} from "./types"
import { uuid } from "~/utils/uuid"

const CycleContext = createContext({} as CycleContextProps)

export const useCycle = () => useContext(CycleContext)

export function CyclesProvider({ children }: CycleProviderProps) {
	const [cycleState, dispatch] = useReducer(
		(state: CycleStates, action: any) => {
			if (action.type === "ADD_NEW_CYCLE") {
				return {
					activeCycleId: action.payload.newCycle.id,
					cycles: [...state.cycles, action.payload.newCycle],
				}
			}

			if (action.type === "END_CYCLE") {
				const cycles = state.cycles.map((cycle) => {
					if (cycle.id === state.activeCycleId) {
						return {
							...cycle,
							endTime: new Date(),
						}
					}
					return cycle
				})

				return {
					cycles,
					activeCycleId: null,
				}
			}

			if (action.type === "INTERRUPT_CYCLE") {
				const cycles = state.cycles.map((cycle) => {
					if (cycle.id === state.activeCycleId) {
						return {
							...cycle,
							interruptedTime: new Date(),
						}
					}
					return cycle
				})
				return {
					cycles,
					activeCycleId: null,
				}
			}

			return state
		},
		{
			cycles: [],
			activeCycleId: null,
		},
	)

	const { activeCycleId, cycles } = cycleState

	const [timePassed, setTimePassed] = useState<number>(0)

	const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
	const handleEndTime = () => {
		dispatch({
			type: "END_CYCLE",
		})
	}
	const handleResetCycle = () => {
		dispatch({
			type: "INTERRUPT_CYCLE",
		})
	}

	const handleCreateNewCycle = ({ time, task }: CreateNewTask) => {
		const newCycle: Cycle = {
			id: uuid(),
			minutesAmount: time,
			task,
			startTime: new Date(),
		}

		dispatch({
			type: "ADD_NEW_CYCLE",
			payload: {
				newCycle,
			},
		})
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

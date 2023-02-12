import { CycleStates } from "~/context/CyclesProvider/types"
import { CyclesActions } from "./actions"
import { produce } from "immer"

export const cyclesReducer = (state: CycleStates, action: any) => {
	switch (action.type) {
		case CyclesActions.ADD_NEW_CYCLE: {
			return produce(state, (draft) => {
				draft.cycles.push(action.payload.newCycle)
				draft.activeCycleId = action.payload.newCycle.id
			})
		}
		case CyclesActions.END_CYCLE: {
			const indexOfCycleId = state.cycles.findIndex((cycle) => cycle.id === state.activeCycleId)
			if (indexOfCycleId < 0) {
				return state
			}
			return produce(state, (draft) => {
				draft.cycles[indexOfCycleId].endTime = new Date()
				draft.activeCycleId = null
			})
		}
		case CyclesActions.INTERRUPT_CYCLE: {
			const indexOfCycleId = state.cycles.findIndex((cycle) => cycle.id === state.activeCycleId)
			if (indexOfCycleId < 0) {
				return state
			}
			return produce(state, (draft) => {
				draft.cycles[indexOfCycleId].interruptedTime = new Date()
				draft.activeCycleId = null
			})
		}
		default:
			return state
	}
}

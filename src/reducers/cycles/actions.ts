import { Cycle } from "~/context/CyclesProvider/types"

export enum CyclesActions {
	ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
	END_CYCLE = "END_CYCLE",
	INTERRUPT_CYCLE = "INTERRUPT_CYCLE",
}

export const addNewCycleAction = (newCycle: Cycle) => {
	return {
		type: CyclesActions.ADD_NEW_CYCLE,
		payload: {
			newCycle,
		},
	}
}

export const interruptCycleAction = () => {
	return {
		type: CyclesActions.INTERRUPT_CYCLE,
	}
}

export const endCycleAction = () => {
	return {
		type: CyclesActions.END_CYCLE,
	}
}

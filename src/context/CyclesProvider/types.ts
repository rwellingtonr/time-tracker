import { ReactNode } from "react"

export type Cycle = {
	id: string
	task: string
	minutesAmount: number
	startTime: Date
	interruptedTime?: Date
	endTime?: Date
}

export type CycleContextProps = {
	handleEndTime: () => void
	handleResetCycle: () => void
	handleTimePassed: (seconds: number) => void
	handleCreateNewCycle: (task: CreateNewTask) => void
	timePassed: number
	activeCycle?: Cycle
	activeId: string | null
	cycles: Cycle[]
}
export type CycleProviderProps = {
	children: ReactNode
}
export type CreateNewTask = {
	task: string
	time: number
}

export type CycleStates = {
	cycles: Cycle[]
	activeCycleId: string | null
}

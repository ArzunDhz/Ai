import { create } from 'zustand'

interface ToggleStateType {
    showToggle: boolean
    switchToggle: () => void
}
interface InputType {
    inputDiamention: string
    switchInputDiamention: (s: string) => void
    inputOutputNo: string
    switchOutputNo: (s: string) => void
}

export const useToggle = create<ToggleStateType>()((set) => ({
    showToggle: false,
    switchToggle: () => set((state) => ({ showToggle: !state.showToggle })),
}))
export const useInput = create<InputType>()((set) => ({
    inputDiamention: '512x512',
    switchInputDiamention: (s) => set((state) => ({ inputDiamention: s })),
    inputOutputNo: "1",
    switchOutputNo: (s) => set((state) => ({ inputOutputNo: s }))
}))


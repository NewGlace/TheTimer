import { calculateData } from "./calculateData"

export const classicTimer = (count: number = 1000000, timer: number = 10, func: Function = () => {}) => {
    calculateData(() => {
        for(let i = 0; i < count; i++) {
            setInterval(func, timer)
        }
    }, {timer, count, type: "classicTimer"})
} 
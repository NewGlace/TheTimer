import { Timer } from "../class/Timer"
import { calculateData } from "../func/calculateData"

export const newTimer = (count: number = 1000000, timer: number = 10, func: Function = () => {}) => {
    const timerClass = new Timer()
    calculateData(() => {
        for(let i = 0; i < count; i++) {
            timerClass.setInterval(func, timer);
        }
    }, {timer, count, type: "newTimer"})
} 
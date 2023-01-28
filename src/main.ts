import { classicTimer } from "./utils/func/classicTimer";
import { newTimer } from "./utils/func/newTimer";

const count = 1;
const timer = 100
const func = () => {
    for (let i = 0; i < 100; i++) {
        String(Date.now());
        String(Date.now());
    }
}

switch(<Boolean>true) {
    case true: 
        newTimer(count, timer, func)
    break
    case false: 
        classicTimer(count, timer, func)
    break;
}
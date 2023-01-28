import { classicTimer } from "./utils/func/classicTimer";
import { newTimer } from "./utils/func/newTimer";

const count = 100000;
const timer = 1000
switch(<Boolean>false) {
    case true: 
        newTimer(count, timer)
    break
    case false: 
        classicTimer(count, timer)
    break;
}
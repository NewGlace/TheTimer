import { dataTimer } from "../types/timer";

export class Timer {
    private list = new Map<number, dataTimer>();

    constructor(timer = 1) {
        setInterval(() => {
            const dateNow = Date.now();

            for (const [_, data] of this.list) {
                if (data.nowTime <= dateNow) {
                    data.func();
                    if (data.interval) {
                        data.nowTime = dateNow+data.time;
                    } else this.clear(data);
                } 
            }
        }, timer)
    }
    clear(...datas: (number | dataTimer)[]) {
        for (const data of datas) {
            if (typeof(data) == "number") return this.list.delete(data);
            else return this.list.delete(data.id);
        }
    }

    setInterval(func: Function, time = 1000) {
        return this.#setTimer(func, time)
    }
    setTimeout(func: Function, time = 1000) {
        return this.#setTimer(func, time, false)
    }

    #setTimer(func: Function, time: number, interval = true) {
        const data = {
            func: func, 
            nowTime: time+Date.now(), 
            time: time, 
            interval: interval, 
            id: Date.now(),
            date: new Date()
        }
        this.list.set(Date.now(), data);
        return data;
    }
    get timerList() {
        return this.list;
    }
}


import { readdirSync, writeFile } from "fs";

function displayProcess(text: string) {
    return {
        text: `\x1b[31m――――――――――\x1b[35m[\x1b[31m\x1b[1m${text}\x1b[0m\x1b[35m]\x1b[31m――――――――――\x1b[0m\n`+
        `\x1b[32mRss: \x1b[33m${Math.round(process.memoryUsage().rss / 1024 / 1024)}\x1b[0m\n`+
        `\x1b[32mHeapUsed: \x1b[33m${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}\x1b[0m\n`+
        `\x1b[32mHeapTotal: \x1b[33m${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)}\x1b[0m\n`,
        data: {
            rss: Math.round(process.memoryUsage().rss / 1024 / 1024),
            heapUsed: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
            heapTotal: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
        }
    }

    }
export function calculateData(func: Function, {timer, count, type}: {timer: number, count: number, type: "classicTimer"|"newTimer"}) {
    const dateNow = Date.now()

    console.log(displayProcess("Before Data").text)
    
    func();    
    setTimeout(() => {
        const value = displayProcess("After Data");
        const ms = Date.now() - dateNow - 500;
        console.log(value.text+`\x1b[32mMs: \x1b[33m${ms}\x1b[0m\n`);

        const vv = readdirSync("./src/utils/tests/");
        const _l = vv.includes(`${count}.json`) ? require(`../../../src/utils/tests/${count}.json`) : {};
        if (!_l[`${count}/${timer}`]) _l[`${count}/${timer}`] = {};
        if (!_l[`${count}/${timer}`][type]) _l[`${count}/${timer}`][type] = { rss: value.data.rss, heapUsed: value.data.heapUsed, heapTotal: value.data.heapTotal, ms: ms };
        else {
            const v = _l[`${count}/${timer}`][type];
            if (v.rss > value.data.rss) v.rss = value.data.rss;
            if (v.heapUsed > value.data.heapUsed) v.heapUsed = value.data.heapUsed;
            if (v.heapTotal > value.data.heapTotal) v.heapTotal = value.data.heapTotal;
            if (v.ms > ms) v.ms = ms;
        }

        writeFile(`./src/utils/tests/${count}.json`, JSON.stringify(_l, null, 2), "utf8", async (err) => {
            if (err) throw err;
            process.exit(0);
        });
    }, 500)
}
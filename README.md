# TheTimer

Waking up one morning and saying "**Can we improve the `setInterval`/`setTimeout`?**", nobody asked this question? no... um strange.  
*You can see the final class by clicking [here](https://github.com/NewGlace/TheTimer/blob/main/src/utils/class/Timer.ts). (`./src/utils/class/Timer.ts`)*
## Sommary
- [How it works](#how-it-works)
- [Create a Interval/Timeout](#manage-a-intervaltimeout)
- [My Test](#my-test)
   - [My Timer](#si-le-switch-est-sur-true-alors-nous-allons-tester-ma-version-du-timer-srcutilsfuncnewtimerts)
   - [Basic Timer](#si-le-switch-est-sur-false-alors-nous-allons-tester-le-timer-de-base-srcutilsfuncclassictimerts)
   - [Json files](#json-files)

## How it works

- I create a class with a `setInterval` of **1 ms** as constructor  
in this class I add a `Map()` allowing the management of future timers.

   - In the `setInterval` there is a loop that will look if the timer's time has passed, if it has then it executes the function and redefines the time, otherwise it does nothing and waits for the next loop.
   
- When the `<Timer>.setInterval` or `<Timer>.setTimeout` method is used I add this data to the `Map()`, so it can be processed in a timely manner.

## Manage a Interval/Timeout

```ts
const timer = new Timer();

// Create Timer
const interval = timer.setInterval(func, ms);
const timeout = timer.setTimeout(func, ms);

// Clear Timer
timer.clear(interval, timeout);

// View Timer
console.log(timer.timerList);
```

## My Test

Pour voir si mon système était utile, j'ai donc fait une série de test.  
en applant [./src/main.ts](https://github.com/NewGlace/TheTimer/blob/main/src/main.ts) nous allons pouvoir choisir quel timer essayer avec différente conditions.

###### Si le switch est sur true alors nous allons tester ma version du timer. *([./src/utils/func/newTimer.ts](https://github.com/NewGlace/TheTimer/blob/main/src/utils/func/newTimer.ts))*
###### Si le switch est sur false alors nous allons tester le timer de base. *([./src/utils/func/classicTimer.ts](https://github.com/NewGlace/TheTimer/blob/main/src/utils/func/classicTimer.ts))*

Une fois le timer appeler, je vais appeler une autre functions *([./src/utils/func/calculateData.ts](https://github.com/NewGlace/TheTimer/blob/main/src/utils/func/calculateData.ts))*, qui vas regarder le temps de réponse, et la mémoire utilisé pour l'ajouter dans des fichiers json pour ensuite pouvoir les comparés.

### Json files

- **1 timer** *([./src/utils/tests/1.json](https://github.com/NewGlace/TheTimer/blob/main/src/utils/tests/1.json))*  
- **10 timer** *([./src/utils/tests/10.json](https://github.com/NewGlace/TheTimer/blob/main/src/utils/tests/10.json))*  
- **100 timer** *([./src/utils/tests/100.json](https://github.com/NewGlace/TheTimer/blob/main/src/utils/tests/100.json))*  
- **1000 timer** *([./src/utils/tests/1000.json](https://github.com/NewGlace/TheTimer/blob/main/src/utils/tests/1000.json))*  
- **10000 timer** *([./src/utils/tests/10000.json](https://github.com/NewGlace/TheTimer/blob/main/src/utils/tests/10000.json))*  
- **100000 timer** *([./src/utils/tests/100000.json](https://github.com/NewGlace/TheTimer/blob/main/src/utils/tests/100000.json))*  
- **1000000 timer** *([./src/utils/tests/1000000.json](https://github.com/NewGlace/TheTimer/blob/main/src/utils/tests/1000000.json))*  


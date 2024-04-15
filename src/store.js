
const prevDateStr = '2024-03-15';
const curDateStr = '2024-04-15';
const snapshotList = [
    {
        dateStr: '2023-10-15',
        values: [
            {
                counterKey: 'coldWater-kitchen',
                resourceKey: 'coldWater',
                value: 38.1
            },
            {
                counterKey: 'coldWater-bathroom',
                resourceKey: 'coldWater',
                value: 269.6,
            },
            {
                counterKey: 'hotWater-kitchen',
                resourceKey: 'hotWater',
                value: 36.2,
            },
            {
                counterKey: 'hotWater-bathroom',
                resourceKey: 'hotWater',
                value: 41.3,
            },
            {
                counterKey: 'electricity-day',
                resourceKey: 'electricity',
                value: 69.6,
            },
            {
                counterKey: 'electricity-night',
                resourceKey: 'electricity',
                value: 12.4,
            },
        ],
    },
    {
        dateStr: '2023-11-15',
        values: [
            {
                counterKey: 'coldWater-kitchen',
                resourceKey: 'coldWater',
                value: 38.5,
            },
            {
                counterKey: 'coldWater-bathroom',
                resourceKey: 'coldWater',
                value: 272.4,
            },
            {
                counterKey: 'hotWater-kitchen',
                resourceKey: 'hotWater',
                value: 37.2,
            },
            {
                counterKey: 'hotWater-bathroom',
                resourceKey: 'hotWater',
                value: 41.3,
            },
            {
                counterKey: 'electricity-day',
                resourceKey: 'electricity',
                value: 149.9,
            },
            {
                counterKey: 'electricity-night',
                resourceKey: 'electricity',
                value: 22.2,
            },
        ],
    },

    {
        dateStr: '2023-12-15',
        values: [
            {
                counterKey: 'coldWater-kitchen',
                resourceKey: 'coldWater',
                value: 38.8,
            },
            {
                counterKey: 'coldWater-bathroom',
                resourceKey: 'coldWater',
                value: 275.5,
            },
            {
                counterKey: 'hotWater-kitchen',
                resourceKey: 'hotWater',
                value: 38.0,
            },
            {
                counterKey: 'hotWater-bathroom',
                resourceKey: 'hotWater',
                value: 41.3,
            },
            {
                counterKey: 'electricity-day',
                resourceKey: 'electricity',
                value: 231.6,
            },
            {
                counterKey: 'electricity-night',
                resourceKey: 'electricity',
                value: 33.0,
            },
        ],
    },

    {
        dateStr: '2024-01-19',
        values: [
            {
                counterKey: 'coldWater-kitchen',
                resourceKey: 'coldWater',
                value: 39.0,
            },
            {
                counterKey: 'coldWater-bathroom',
                resourceKey: 'coldWater',
                value: 278.7,
            },
            {
                counterKey: 'hotWater-kitchen',
                resourceKey: 'hotWater',
                value: 38.9,
            },
            {
                counterKey: 'hotWater-bathroom',
                resourceKey: 'hotWater',
                value: 41.3,
            },
            {
                counterKey: 'electricity-day',
                resourceKey: 'electricity',
                value: 314.3,
            },
            {
                counterKey: 'electricity-night',
                resourceKey: 'electricity',
                value: 48.1,
            },
        ],
    },
    {
        dateStr: '2024-02-16',
        values: [
            {
                counterKey: 'coldWater-kitchen',
                resourceKey: 'coldWater',
                value: 39.1,
            },
            {
                counterKey: 'coldWater-bathroom',
                resourceKey: 'coldWater',
                value: 279.8,
            },
            {
                counterKey: 'hotWater-kitchen',
                resourceKey: 'hotWater',
                value: 39.1,
            },
            {
                counterKey: 'hotWater-bathroom',
                resourceKey: 'hotWater',
                value: 41.3,
            },
            {
                counterKey: 'electricity-day',
                resourceKey: 'electricity',
                value: 347.3,
            },
            {
                counterKey: 'electricity-night',
                resourceKey: 'electricity',
                value: 56.4,
            },
        ],
        bills: [
            {
                title: 'АО ГВ',
                value: 15.35,
                group: '',
            },
            {
                title: 'АО ТЕ',
                value: 31.07,
                group: '',
            },
            {
                title: 'АО ХВВ',
                value: 39.19,
                group: '',
            },
            {
                title: 'Вивезення побутових відходів',
                value: 43.11,
                group: '',
            },
            {
                title: 'Управління багатоквартирним будинком',
                value: 303.63,
                group: '',
            },
            {
                title: 'Централізоване опалення',
                value: 1089.59,
                group: '',
            },
            {
                title: 'Відшкодування витрат з електроенергії',
                value: 39.15,
                group: '',
            },
        ],
    },
    {
        dateStr: '2024-03-15',
        values: [
            {
                counterKey: 'coldWater-kitchen',
                resourceKey: 'coldWater',
                value: 39.1,
            },
            {
                counterKey: 'coldWater-bathroom',
                resourceKey: 'coldWater',
                value: 280.0,
            },
            {
                counterKey: 'hotWater-kitchen',
                resourceKey: 'hotWater',
                value: 39.1,
            },
            {
                counterKey: 'hotWater-bathroom',
                resourceKey: 'hotWater',
                value: 41.3,
            },
            {
                counterKey: 'electricity-day',
                resourceKey: 'electricity',
                value: 362.9,
            },
            {
                counterKey: 'electricity-night',
                resourceKey: 'electricity',
                value: 62.7,
            },
        ],
        bills: [
            {
                title: 'АО ГВ',
                value: 15.35,
                group: '',
            },
            {
                title: 'АО ТЕ',
                value: 31.07,
                group: '',
            },
            {
                title: 'АО ХВВ',
                value: 39.19,
                group: '',
            },
            {
                title: 'Вивезення побутових відходів',
                value: 43.45,
                group: '',
            },
            {
                title: 'Управління багатоквартирним будинком',
                value: 303.63,
                group: '',
            },
            {
                title: 'Централізоване опалення',
                value: 951.12,
                group: '',
            },
            {
                title: 'Відшкодування витрат з електроенергії',
                value: 39.15,
                group: '',
            },
        ],
    },
    {
        dateStr: '2024-04-15',
        values: [
            {
                counterKey: 'coldWater-kitchen',
                resourceKey: 'coldWater',
                value: 39.1,
            },
            {
                counterKey: 'coldWater-bathroom',
                resourceKey: 'coldWater',
                value: 280.1,
            },
            {
                counterKey: 'hotWater-kitchen',
                resourceKey: 'hotWater',
                value: 39.1,
            },
            {
                counterKey: 'hotWater-bathroom',
                resourceKey: 'hotWater',
                value: 41.3,
            },
            {
                counterKey: 'electricity-day',
                resourceKey: 'electricity',
                value: 376.0,
            },
            {
                counterKey: 'electricity-night',
                resourceKey: 'electricity',
                value: 68.8,
            },
        ],
        bills: [
            {
                title: 'АО ГВ',
                value: 15.35,
                group: '',
            },
            {
                title: 'АО ТЕ',
                value: 31.07,
                group: '',
            },
            {
                title: 'АО ХВВ',
                value: 39.19,
                group: '',
            },
            {
                title: 'Централізоване опалення',
                value: 881.64,
                group: '',
            },
            {
                title: 'Вивезення побутових відходів',
                value: 39.28,
                group: '',
            },
            {
                title: 'Управління багатоквартирним будинком',
                value: 303.63,
                group: '',
            },
            {
                title: 'Відшкодування витрат з електроенергії',
                value: 39.15,
                group: '',
            },
        ],
    },
];

export function getCurrentBills() {
    return currentSnapshot.bills;
}

export const prevSnapshot = (() => {
    // console.log(['date', prevDateStr]);
    let obj = snapshotList.find(item => item.dateStr === prevDateStr);

    obj.map = Object.fromEntries(
        obj.values.map(val => [val.counterKey, val])
    )

    obj.resourceMap = obj.values.reduce((map, item) => {
        if (!map.hasOwnProperty(item.resourceKey)) {
            map[item.resourceKey] = [];
        }
        map[item.resourceKey].push(item);

        return map;
    }, {});

    return obj;
})();

export const currentSnapshot = (() => {
    let obj = snapshotList.find(item => item.dateStr === curDateStr);

    obj.map = Object.fromEntries(
        obj.values.map(val => [val.counterKey, val])
    )

    obj.resourceMap = obj.values.reduce((map, item) => {
        if (!map.hasOwnProperty(item.resourceKey)) {
            map[item.resourceKey] = [];
        }
        map[item.resourceKey].push(item);

        return map;
    }, {});

    return obj;
})();

export function diffResourceNumber(resourceKey) {
    const currentSum = currentSnapshot.resourceMap[resourceKey].reduce((sum, item) => {
        return sum + item.value;
    }, 0);

    const prevSum = prevSnapshot.resourceMap[resourceKey].reduce((sum, item) => {
        return sum + item.value;
    }, 0);

    return currentSum - prevSum;
}

export function prevValueFixed(key) {
    return prevSnapshot.map[key].value.toFixed(1);
}

export function curValueFixed(key) {
    return currentSnapshot.map[key].value.toFixed(1);
}

function round(number, digits = 1) {
    let temp = number * Math.pow(10, digits);
    temp = Math.round(temp);

    return temp / Math.pow(10, digits);
}

export function diff(key) {
    return diffNumber(key).toFixed(1);
}

export function diffNumber(key) {
    return round(currentSnapshot.map[key].value - prevSnapshot.map[key].value);
}

export function diffSum(keys) {
    return diffSumNumber(keys).toFixed(1);
}

export function diffSumNumber(keys) {
    return keys.reduce((sum, key) => {
        return sum + diffNumber(key);
    }, 0);
}


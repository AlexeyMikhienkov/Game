export const colors = ["#8e3dcb", "#f28e37", "#94c94d", "#fc73b0", "#4db8ec"];

export const seed = 20;

export const levels = [
    { // level 1
        size: 1, // числа от 1 до 10
        rows: 2,
        columns: 3,
        minValue: 1,
        maxValue: 10,
        animations: [undefined],
    },
    { // level 2
        size: 1, // числа от 10 до 100
        rows: 2,
        columns: 3,
        minValue: 10,
        maxValue: 100,
        animations: [undefined],
    },
    { // level 3
        size: 1, // числа от 100 до 1000
        rows: 2,
        columns: 3,
        minValue: 100,
        maxValue: 1000,
        animations: ["rotate", "blink", "flick"],
    },
    { // level 4
        size: 2, // числа от 100 до 1000
        rows: 3,
        columns: 4,
        minValue: 100,
        maxValue: 1000,
        animations: ["rotate", "blink", "flick"],
    },
    { // level 5
        size: 2, // числа от 1000 до 10000
        rows: 3,
        columns: 4,
        minValue: 1000,
        maxValue: 10000,
        animations: ["rotate", "blink", "flick"],
    },
    { // level 6
        size: 3,
        rows: 4,
        columns: 4,
        minValue: 1000,
        maxValue: 10000,
        animations: ["rotate", "blink", "flick"],
    },
    { // level 7
        size: 4,
        rows: 5,
        columns: 5,
        minValue: 1000,
        maxValue: 10000,
        animations: ["rotate", "blink", "flick"],
    },
];

//TODO: добавить еще уровни в игру (проверить с 5 уровня до 9)
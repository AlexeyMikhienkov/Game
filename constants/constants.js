export const colors = ["#8e3dcb", "#f28e37", "#94c94d", "#fc73b0", "#4db8ec"];

export const levels = [
    { // level 1
        size: 1,
        rows: 2,
        columns: 3,
        minValue: 1,
        maxValue: 11,
        animations: [undefined],
    },
    { // level 2
        size: 1,
        rows: 2,
        columns: 3,
        minValue: 10,
        maxValue: 101,
        animations: [undefined],
    },
    { // level 3
        size: 1,
        rows: 2,
        columns: 3,
        minValue: 100,
        maxValue: 1001,
        animations: ["rotate", "blink", "flick"],
    },
    { // level 4
        size: 2,
        rows: 3,
        columns: 4,
        minValue: 100,
        maxValue: 1001,
        animations: ["rotate", "blink", "flick"],
    },
    { // level 5
        size: 2,
        rows: 3,
        columns: 4,
        minValue: 100,
        maxValue: 1001,
        animations: ["rotate", "blink", "flick"],
    },
    { // level 6
        size: 3,
        rows: 4,
        columns: 4,
        minValue: 100,
        maxValue: 1001,
        animations: ["rotate", "blink", "flick"],
    },
    { // level 7
        size: 4,
        rows: 4,
        columns: 4,
        minValue: 1000,
        maxValue: 10001,
        animations: ["rotate", "blink", "flick"],
    },
    { // level 8
        size: 4,
        rows: 5,
        columns: 5,
        minValue: 1000,
        maxValue: 10001,
        animations: [undefined],
    },
    { // level 9
        size: 4,
        rows: 5,
        columns: 5,
        minValue: 1000,
        maxValue: 10001,
        animations: [undefined],
    },
];

export const tutorialGrid = [
    [
        {number: 75, color: colors[1], animation: undefined, withFinger: true},
        {number: 1, color: colors[3], animation: undefined},
        {number: 35, color: colors[0], animation: undefined}
    ],
    [
        {number: null, color: colors[2], animation: undefined},
        {number: 885, color: colors[2], animation: undefined},
        {number: 40, color: colors[4], animation: undefined}
    ]
];

export const tutorialValue = 75;

export const continueText = "Нажмите на экран, чтобы продолжить";

export const tutorialData = {
    value: tutorialValue,
    color: colors[4],
    grid: tutorialGrid,
    size: 1
};
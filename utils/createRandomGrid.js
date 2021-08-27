import {colors} from "../constants/constants";
import {rng} from "./rng";

export function createRandomGrid(level) {
    const grid = [];
    const numbers = [];

    const {rows, columns, minValue, maxValue, animations} = level;

/*
    for (let i = 0; i < level.rows; i++) {
        grid.push([]);
        for (let j = 0; j < level.columns; j++) {
            let number = -1;
            while (true) {
                number = rng.nextRange(level.minValue, level.maxValue);
                if (!numbers.includes(number)) {
                    numbers.push(number);
                    break;
                }
            }
            const colorIndex = rng.nextRange(0, colors.length);
            const animationIndex = rng.nextRange(0, level.animations.length);
            grid[i].push({number: number, color: colors[colorIndex], animation: level.animations[animationIndex]});
        }
    }

 */
    for (let i = 0; i < rows; i++) {
        grid.push([]);
        for (let j = 0; j < columns; j++) {
            let number = rng.nextRange(minValue, maxValue);
            while (numbers.includes(number)) {
                number = rng.nextRange(minValue, maxValue);
            }
            numbers.push(number);

            const colorIndex = rng.nextRange(0, colors.length);
            const animationIndex = rng.nextRange(0, animations.length);
            grid[i].push({number: number, color: colors[colorIndex], animation: animations[animationIndex]});
        }
    }

    return grid;
}



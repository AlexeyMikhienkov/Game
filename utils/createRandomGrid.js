import {colors, continueText} from "../constants/constants";
import {rng} from "./rng";

export function createRandomGrid(level) {
    const grid = [];
    const numbers = [];


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

    return grid;
}



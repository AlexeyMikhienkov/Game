import {colors} from "../constants/constants";
import {seed} from "../constants/constants";
import RNG from "./rng";

export function createRandomGrid(level) {
    const grid = [];
    const rng = new RNG(seed);

    for (let i = 0; i < level.rows; i++) {
        grid.push([]);
        for (let j = 0; j < level.columns; j++) {
            const number = rng.nextRange(level.minValue, level.maxValue);
            const colorIndex = rng.nextRange(0, colors.length);
            const animationIndex = rng.nextRange(0, level.animations.length);
            grid[i].push({number: number, color: colors[colorIndex], animation: level.animations[animationIndex]});
        }
    }

    return grid;
}

import Grid from "../grid/grid";
import React, {useState, useEffect} from "react";
import {colors, levels, seed} from "../../constants/constants";
import {description} from "../../constants/copyright";
import {createRandomGrid} from "../../utils/createRandomGrid";
import RNG from "../../utils/rng";
import GameTask from "./gameTask";

export default function Game({className, lvl}) {
    const [data, setData] = useState(generateLevelData(lvl));
    const value = generateTaskValue(data.grid);

    useEffect(() =>
        setData(generateLevelData(lvl)), [lvl]
    );

    return (
        <div className={`game ${className ?? ""}`} style={{backgroundColor: colors[data.color]}}>
            <GameTask value={value} />
            <Grid className={"game__grid"} grid={data.grid} size={data.size} onAction={() => console.log("Click")}/>
        </div>
    )
}

function generateLevelData(lvl) {
    const rng = new RNG(seed);
    const colorIndex = rng.nextRange(0, colors.length);

    return {
        size: levels[lvl].size,
        color: colorIndex,
        grid: createRandomGrid(levels[lvl])
    }
}


function generateTaskValue(grid) {
    const numbers = [];

    grid.forEach((row) => {
        row.forEach((block) => {
            numbers.push(block.number);
        })
    });

    const rng = new RNG(seed);
    const numIndex = rng.nextRange(0, numbers.length);

    return numbers[numIndex];
}


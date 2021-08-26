import Grid from "../grid/grid";
import React, {useState, useEffect} from "react";
import {colors, continueText, levels, seed, tutorialData} from "../../constants/constants";
import {createRandomGrid} from "../../utils/createRandomGrid";
import RNG from "../../utils/rng";
import GameTask from "./gameTask";

export default function Game({className, lvl, isTutorial, onAction}) {

    const [data, setData] = useState(generateLevelData(lvl, isTutorial));

    useEffect(() =>
        setData(generateLevelData(lvl, isTutorial)), [lvl]
    );

    return (
        <div className={`game ${isTutorial ? "game_tutorial" : ""} ${className ?? ""}`} onClick={onAction} style={{backgroundColor: data.color}}>
            <GameTask value={isTutorial ? tutorialData.value : generateTaskValue(data.grid)}/>
            <Grid className={"game__grid"} grid={data.grid} size={data.size} isTutorial={isTutorial} onAction={() => console.log("Click")}/>
            {isTutorial ? <p className={"game__continue"}>{continueText}</p> : ""}
        </div>
    );
}

function generateLevelData(lvl, isTutorial) {
    const rng = new RNG(seed);
    const colorIndex = rng.nextRange(0, colors.length);

    return isTutorial ? tutorialData : {
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
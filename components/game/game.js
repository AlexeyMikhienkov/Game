import Grid from "../grid/grid";
import React, {useState, useEffect} from "react";
import {colors, continueText, levels, tutorialData} from "../../constants/constants";
import {createRandomGrid} from "../../utils/createRandomGrid";
import {rng} from "../../utils/rng";
import GameTask from "./gameTask";

export default function Game({className, lvl, setLevel, setPage, isTutorial, onAction}) {

    const [data, setData] = useState(generateLevelData(lvl, isTutorial));
    const value = isTutorial ? tutorialData.value : generateTaskValue(data.grid);

    useEffect(() =>
        setData(generateLevelData(lvl, isTutorial)), [lvl]
    );

    return (
        <div className={`game ${isTutorial ? "game_tutorial" : ""} ${className ?? ""}`} onClick={onAction} style={{backgroundColor: data.backgroundColor}}>
            <GameTask value={value}/>
            <Grid className={"game__grid"} grid={data.grid} size={data.size} value={value} isTutorial={isTutorial} level={lvl} setLevel={setLevel} setPage={setPage}/>
            {isTutorial ? <p className={"game__continue"}>{continueText}</p> : ""}
        </div>
    );
}

//TODO: проверить, норм ли реализована проверка на неповторяющиеся числа
// как правильно передавать пропы level, setLevel, setPage ?
// менять background-color в зависимости от уровня

export function checkAnswer(blockNumber, value, level, setLevel, setPage) {
    if (blockNumber === value) {
        if (level === 8) {
            setPage("result");
        } else {
            setLevel(Math.min(Math.max(level + 1, 0), 8));
        }
    } else {
        setLevel(Math.min(Math.max(level - 1, 0), 8));
    }
}

function generateLevelData(lvl, isTutorial) {
    return isTutorial ? tutorialData : {
        size: levels[lvl].size,
        grid: createRandomGrid(levels[lvl]),
        backgroundColor: rng.nextRange(0, colors.length)
    }
}

function generateTaskValue(grid) {
    const numbers = [];

    grid.forEach((row) => {
        row.forEach((block) => {
            numbers.push(block.number);
        })
    });

    const numIndex = rng.nextRange(0, numbers.length);

    return numbers[numIndex];
}

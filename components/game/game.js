import Grid from "../grid/grid";
import React, {useState, useEffect} from "react";
import {colors, continueText, levels, tutorialData} from "../../constants/constants";
import {createRandomGrid} from "../../utils/createRandomGrid";
import {rng} from "../../utils/rng";
import GameTask from "./gameTask";
import {result, useResult} from "../../hooks/resultObject";

export default function Game({className, lvl, setLevel, setPage, isTutorial, onAction}) {

    const [data, setData] = useState(generateLevelData(lvl, isTutorial));
    const value = isTutorial ? tutorialData.value : generateTaskValue(data.grid);

    useEffect(() => {
            setData(generateLevelData(lvl, isTutorial));
            console.log(lvl);
    }, [lvl]
    );

    return (
        <div className={`game ${isTutorial ? "game_tutorial" : ""} ${className ?? ""}`} onClick={onAction} style={{backgroundColor: data.color}}>
            <GameTask value={value} color={data.color}/>
            <Grid className={"game__grid"} grid={data.grid} size={data.size} value={value} isTutorial={isTutorial} level={lvl} setLevel={setLevel} setPage={setPage}/>
            {isTutorial ? <p className={"game__continue"}>{continueText}</p> : ""}
        </div>
    );
}

export function checkAnswer(blockNumber, value, level, setLevel, setPage) {
    result.rightAnswers.all += 1;

    if (blockNumber === value) {
        result.totalPoints += level + 1;
        result.rightAnswers.right += 1;
        level === 8 ? setPage("result") : setLevel(Math.min(Math.max(level + 1, 0), 8));
    } else setLevel(Math.min(Math.max(level - 1, 0), 8));

    result.accuracyAnswers = Number((result.rightAnswers.right / result.rightAnswers.all).toFixed(2)) ?? undefined;
    console.log(result);
}

function generateLevelData(lvl, isTutorial) {
    return isTutorial ? tutorialData : {
        size: levels[lvl].size,
        grid: createRandomGrid(levels[lvl]),
        color: rng.nextRange(0, colors.length)
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

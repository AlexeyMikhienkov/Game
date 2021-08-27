import Grid from "../grid/grid";
import React, {useState, useEffect} from "react";
import {colors, continueText, levels, tutorialData} from "../../constants/constants";
import {createRandomGrid} from "../../utils/createRandomGrid";
import {rng} from "../../utils/rng";
import GameTask from "./gameTask";
import {result, useResult} from "../../hooks/resultObject";
import Info from "../info/info";

export default function Game({className, lvl, setLevel, setPage, isTutorial, onAction}) {
    const [data, setData] = useState(generateLevelData(lvl, isTutorial));
    const value = isTutorial ? tutorialData.value : generateTaskValue(data.grid);

    useEffect(() => {
        console.log("a____");
            setData(generateLevelData(lvl, isTutorial));
        }, [lvl]
    );

    return (
        <div className={`game ${isTutorial ? "game_tutorial" : ""} ${className ?? ""}`} onClick={onAction}
             style={{backgroundColor: data.color}}>
            {!isTutorial ? <Info className={"game__info"} level={lvl}/> : ""}
            <GameTask value={value} color={data.color}/>
            <Grid className={"game__grid"} grid={data.grid} size={data.size} value={value} isTutorial={isTutorial}
                  level={lvl} setLevel={setLevel} setPage={setPage}/>
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
}

function generateLevelData(lvl, isTutorial) {
    const data = isTutorial ? tutorialData : {
        size: levels[lvl].size,
        grid: createRandomGrid(levels[lvl]),
        color: colors[rng.nextRange(0, colors.length)]
    };

    console.log(data);

    return data;
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

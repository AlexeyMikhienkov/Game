import Grid from "../grid/grid";
import React, {useEffect, useState} from "react";
import {colors, continueText, levels, tutorialData} from "../../constants/constants";
import {createRandomGrid} from "../../utils/createRandomGrid";
import {rng} from "../../utils/rng";
import GameTask from "./gameTask";
import {useResult} from "../../hooks/resultObject";
import Info from "../info/info";

export default function Game({className, isTutorial, onAction, onChangePage}) {
    const [level, setLevel] = useState(0);
    const [result, setResult] = useResult();
    const [data, setData] = useState(generateLevelData(level, isTutorial));
    const [amount, setAmount] = useState(0);

    const {grid, color, size} = data;

    const value = isTutorial ? tutorialData.value : generateTaskValue(grid);

    useEffect(() => {
        console.log("render");
        console.log(result);
        setData(generateLevelData(level, isTutorial));
    }, [amount]);

    function checkAnswer(blockNumber, value, res) {
        if (blockNumber === value) {
            res.totalPoints = res.totalPoints + level + 1;
            res.all = res.all + 1;
            res.right = res.right + 1;
            level === 8 ? onChangePage("result") : setLevel(Math.min(Math.max(level + 1, 0), 8));
        } else {
            res.all = res.all + 1;
            setLevel(Math.min(Math.max(level - 1, 0), 8));
        }
        return res;
    }

    return (
        <div className={`game ${isTutorial ? "game_tutorial" : ""} ${className ?? ""}`} onClick={onAction}
             style={{backgroundColor: color}}>
            {!isTutorial ? <Info className={"game__info"} level={level}/> : null}
            <GameTask value={value} color={color}/>
            <Grid className={"game__grid"} grid={grid} size={size} value={value} isTutorial={isTutorial}
                  onCheckAnswer={(block, value) => {
                      const {totalPoints, right, all} = checkAnswer(block, value, result);
                      setResult.updateResult(totalPoints, right, all);
                      setAmount(all);
                  }}/>
            {isTutorial ? <p className={"game__continue"}>{continueText}</p> : null}
        </div>
    )
}

function generateLevelData(lvl, isTutorial) {
    return isTutorial ? tutorialData : {
        size: levels[lvl].size,
        grid: createRandomGrid(levels[lvl]),
        color: colors[rng.nextRange(0, colors.length)]
    };
}

function generateTaskValue(grid) {
    const numbers = grid.flat().map(block => block.number);
    const numIndex = rng.nextRange(0, numbers.length);

    return numbers[numIndex];
}

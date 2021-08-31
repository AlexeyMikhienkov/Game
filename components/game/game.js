import Grid from "../grid/grid";
import React, {useEffect, useState} from "react";
import {colors, continueText, fingerParams, levels, tutorialData} from "../../constants/constants";
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
    const [animation, setAnimation] = useState(null);

    const {grid, color, size} = data;
    const rightImgSrc = "/images/right_answer.png";
    const wrongImgSrc = "/images/wrong_answer.png";

    const value = isTutorial ? tutorialData.value : generateTaskValue(grid);

    useEffect(() => {
        setTimeout(() => setAnimation(null), 750);
        setData(generateLevelData(level, isTutorial));
    }, [amount]);

    function checkAnswer(blockNumber, value, res) {
        if (blockNumber === value) {
            setAnimation("right");
            res.totalPoints = res.totalPoints + (level + 1) * res.combo;
            res.all = res.all + 1;
            res.right = res.right + 1;
            res.combo = Math.min(Math.max(res.combo + 1, 1), 5);
            level === 8 ? onChangePage("result") : setLevel(Math.min(Math.max(level + 1, 0), 8));
        } else {
            setAnimation("wrong");
            res.all = res.all + 1;
            console.log("before", res.combo);
            res.combo = Math.min(Math.max(res.combo - 1, 1), 5);
            console.log("after", res.combo);
            setLevel(Math.min(Math.max(level - 1, 0), 8));
        }
        console.log(res);
        return res;
    }

    return (
        <div className={`game ${isTutorial ? "game_tutorial" : ""} ${className ?? ""}`} onClick={onAction}
             style={{backgroundColor: color}}>
            {!isTutorial ? <Info className={"game__info"} level={level} mult={result.combo} time={"01:00"}/> : null}
            <GameTask value={value} color={color}/>
            <Grid className={"game__grid"} grid={grid} size={size} value={value} isTutorial={isTutorial}
                  onCheckAnswer={(block, value) => {
                      const {totalPoints, right, all, combo} = checkAnswer(block, value, result);
                      setResult.updateResult(totalPoints, right, all, combo);
                      setAmount(all);
                  }}/>
            {animation ?
                <img className={"game__image"} src={`${animation === "right" ? rightImgSrc : wrongImgSrc}`}
                     alt={`Ответ ${animation === "right" ? "верный" : "неверный"}`}/>
                : null}

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

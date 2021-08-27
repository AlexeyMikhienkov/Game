import Game from "../game/game";
import React, {useState, useEffect} from "react";
import Main from "../main/main";
import {header} from "../../constants/copyright";
import Tutorial from "../tutorial/tutorial";
import ResultPanel from "../result-panel/resultPanel";
import {getStatisticData} from "../../utils/statisticsHelpers";
import Counter from "../counter/counter";
import {result, clearResult} from "../../hooks/resultObject";
import {time} from "../../constants/constants";

// bug:
// TODO: Нельзя неправильно ответить на 1 уровне!!

// add
// TODO: Реализовать добавление очков в зависимости от бонуса
//  Галочка или крестик в зависимости от результата ответа

// change
// TODO: Переделать все прокинутые сеттеры (логику передать через колбэки)
//  Изменить способ задания статистики (хук вынесется в компонент Game рядом с useEffect)
//  Вынести логику из блока

export default function GameWrapper({className}) {
    /*
    1. main
    2. tutorial
    3. counter
    4. game
    5. result
     */

    const [page, setPage] = useState("main");
    const [level, setLevel] = useState(0);

    return (
        <div className={className ?? ""}>
            {returnPage(page, setPage, level, setLevel, time)}
        </div>
    )
}

function returnPage(page, setPage, level, setLevel, time) {

    switch (page) {
        case "tutorial":
            clearResult();
            return <Game className={"game-wrapper__game"} isTutorial={true} lvl={level}
                         onAction={() => setPage("counter")}/>;
        case "game":
            return (
                    <Game className={"game-wrapper__game"} isTutorial={false} lvl={level} setLevel={setLevel}
                          setPage={setPage}/>
            );
        case "main":
            return <Main content={header["base"]}
                         className={`game-wrapper__main`} onAction={() => {
                setPage("tutorial");
            }}>
                <Tutorial className={"main__tutorial"}/>
            </Main>;
        case "result":
            return <Main content={header["result"]}
                         className={`game-wrapper__main game-wrapper__main_result`}
                         modificator={"result"} onRepeat={() => {
                setLevel(0);
                setPage("main")
            }}>
                <ResultPanel className={"main__result-panel"} statistics={getStatisticData(result)}/>
            </Main>;
        case "counter":
            return <Counter className={"game-wrapper__counter"} start={time} onTimeout={() => setPage("game")}/>;
        default:
            return <div>ЧТО-ТО ПОШЛО НЕ ТАК..............</div>
    }
}

/*
main / result:

    return (
        <div className={className ?? ""}>
            <Main content={header[isResult?"result":"base"]} className={`game-wrapper__main ${isResult ? "game-wrapper__main_result" : ""}`}
                  modificator={isResult && "result"} onAction={() => setResult(result => !result)}>
                {isResult ?
                    <ResultPanel className={"main__result-panel"} statistics={getStatisticData(statistics)}/> :
                    <Tutorial className={"main__tutorial"}/>}
            </Main>
        </div>
    )

tutorial / game:

    let level = 0;
    level = Math.min(Math.max(level, 0), 8);

    return (
        <div className={className ?? ""}>
            <Game className={"game-wrapper__game"} lvl={level} isTutorial={true}/>
        </div>
    )

counter:

    const [time, setTime] = useState(10);
    const [isReset, setIsReset] = useState(false);

    function handleClick() {
        setTime(20);
    }

    function handleResetClick() {
        setIsReset(true);
    }

    return (
        <>
            <button style={{zIndex: 100, background: "red"}} onClick={() => handleClick()}>Кнопка</button>
            <button style={{zIndex: 100, background: "yellow"}} onClick={() => handleResetClick()}>RESET</button>
            <Counter className={"game-wrapper__counter"} start={time} onTimeout={() => console.log("timeout")}
                     isReset={isReset} afterReset={() => setIsReset(false)}/>
        </>
    )
 */



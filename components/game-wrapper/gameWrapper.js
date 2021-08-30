import Game from "../game/game";
import React, {useState} from "react";
import Main from "../main/main";
import {header} from "../../constants/copyright";
import Tutorial from "../tutorial/tutorial";
import ResultPanel from "../result-panel/resultPanel";
import {getStatisticData} from "../../utils/statisticsHelpers";
import Counter from "../counter/counter";
import {clearResult, result} from "../../hooks/resultObject";
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

    function onChangePage(page) {
        return setPage(page);
    }

    return (
        <div className={className ?? ""}>
            {returnPage(page, onChangePage, time)}
        </div>
    )
}

function returnPage(page, onChangePage, time) {

    switch (page) {
        case "tutorial":
            //      clearResult();
            return <Game className={"game-wrapper__game"} isTutorial={true} onAction={() => onChangePage("counter")}/>;
        case "game":
            return (
                <Game className={"game-wrapper__game"} isTutorial={false} onChangePage={onChangePage}/>
            );
        case "main":
            return <Main content={header["base"]}
                         className={`game-wrapper__main`} onAction={() => {
                onChangePage("tutorial");
            }}>
                <Tutorial className={"main__tutorial"}/>
            </Main>;
        case "result":
            return <Main content={header["result"]}
                         className={`game-wrapper__main game-wrapper__main_result`}
                         modificator={"result"} onRepeat={() => {
                onChangePage("main");
                clearResult();
            }}>
                <ResultPanel className={"main__result-panel"} statistics={getStatisticData(result)}/>
            </Main>;
        case "counter":
            return <Counter className={"game-wrapper__counter"} start={time} onTimeout={() => onChangePage("game")}/>;
        default:
            return <div>ЧТО-ТО ПОШЛО НЕ ТАК..............</div>
    }
}


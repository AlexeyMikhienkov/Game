import Game from "../game/game";
import React, {useState, useEffect} from "react";
import Main from "../main/main";
import {header} from "../../constants/copyright";
import Tutorial from "../tutorial/tutorial";
import ResultPanel from "../result-panel/resultPanel";
import {getStatisticData} from "../../utils/statisticsHelpers";
import Counter from "../counter/counter";

const statistics = {
    currentResult: 42,
    rightAnswers: {
        right: 1,
        all: 1
    },
    accuracy: '100%',
    trainer: 29,
    createdNeurons: 1
};

const pages = ["main", "tutorial", "counter", "game", "result"];

export default function GameWrapper({className}) {
    /*
    1. main
    2. tutorial
    3. counter
    4. game
    5. result
     */

    const time = 3;

    const [page, setPage] = useState("main");
    const [level, setLevel] = useState(0);

    useEffect(() => {
   //     setLevel(Math.min(Math.max(level, 0), 8));
    }, [page]);

    return (
        <div className={className ?? ""}>
            {returnPage(page, setPage, level, time)}
        </div>
    )
}

function returnPage(page, setPage, level, time) {
    switch (page) {
        case "tutorial":
            return <Game className={"game-wrapper__game"} isTutorial={true} lvl={level} onAction={() => setPage("counter")}/>;
        case "game":
            return <Game className={"game-wrapper__game"} isTutorial={false} lvl={level}/>;
        case "main":
            return <Main content={header["base"]}
                         className={`game-wrapper__main`} onAction={() => setPage("tutorial")}>
                <Tutorial className={"main__tutorial"}/>
            </Main>;
        case "result":
            return <Main content={header["result"]}
                         className={`game-wrapper__main game-wrapper__main_result`}
                         modificator={"result"}>
                <ResultPanel className={"main__result-panel"} statistics={getStatisticData(statistics)}/>
            </Main>;
        case "counter":
            return <Counter className={"game-wrapper__counter"} start={time} onTimeout={() => setPage("game")}/>;
    }
}

//TODO: куда деть функции counter handleClick и handleResetClick ?

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



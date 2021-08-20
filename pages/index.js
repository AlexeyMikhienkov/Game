import Main from "../components/main/main";
import React, {useState, useEffect} from "react";
import Tutorial from "../components/tutorial/tutorial";
import ResultPanel from "../components/result-panel/resultPanel";
import {getStatisticData} from "../utils/statisticsHelpers";
import {header} from "../constants/copyright";
import Counter from "../components/counter/counter";
import {consumeIterator} from "next/dist/build/babel/loader/util";

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

export default function Home() {
    /*
    const [isResult, setResult] = useState(false);

    return (
        <div>
            <Main content={header[isResult?"result":"base"]} className={`game-wrapper__main ${isResult ? "game-wrapper__main_result" : ""}`}
                  modificator={isResult && "result"} onAction={() => setResult(result => !result)}>
                {isResult ?
                    <ResultPanel className={"main__result-panel"} statistics={getStatisticData(statistics)}/> :
                    <Tutorial className={"main__tutorial"}/>}
            </Main>
        </div>
    )

 */
    const [time, setTime] = useState(10);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        console.log("set false");
        setUpdate(false);
    });

    function handleClick() {
        console.log("click");
        setTime(20);
        setUpdate(true);
    }

    return (
        <>
            <button style={{zIndex: 100, background: "red"}} onClick={() => handleClick()}>Кнопка</button>

            <Counter className={"game-wrapper__counter"} start={time} update={update}
                     onTimeout={() => console.log("timeout")}/>
        </>
    )
}




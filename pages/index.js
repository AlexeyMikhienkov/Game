import Main from "../components/main/main";
import React, {useState, useEffect} from "react";
import Tutorial from "../components/tutorial/tutorial";
import ResultPanel from "../components/result-panel/resultPanel";
import {getStatisticData} from "../utils/statisticsHelpers";
import {header} from "../constants/copyright";
import Counter from "../components/counter/counter";
import {consumeIterator} from "next/dist/build/babel/loader/util";
import Block from "../components/block/block";
import {loadGetInitialProps} from "next/dist/shared/lib/utils";
import Grid from "../components/grid/grid";
import {settings} from "../constants/constants";

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
    /*
    let withFinger = false;
    const blockText = 150;
    const blockColor = "#f28e37";

    // rotate - поворот
    // blink - мигание
    // flick - мерцание
    // undefined - без анимации


    return <Block className={"grid__block"} withFinger={withFinger} onAction={() => console.log("Click")}
                  blockText={blockText} blockColor={blockColor} animation={"flick"}/>

     */

    return <Grid className={"game__grid"} rows={settings.rows} columns={settings.columns} withFinger={false} onAction={() => console.log("Click")}
                 blockText={230} blockColor={"#f28e37"} animation={undefined}/>
}

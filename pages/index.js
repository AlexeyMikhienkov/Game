import Main from "../components/main/main";
import React, {useState} from "react";
import Tutorial from "../components/tutorial/tutorial";
import ResultPanel from "../components/result-panel/resultPanel";
import {getStatisticData} from "../utils/statisticsHelpers";

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
    const [isResult, setResult] = useState(true);

    return (
        <div>
            <Main className={"game-wrapper__main"} modificator={isResult ? "result" : ""} onAction={() => setResult(result => !result)}>
                {isResult ?
                    <ResultPanel className={"main__result-panel"} statistics={getStatisticData(statistics)}/> :
                    <Tutorial className={"main__tutorial"}/>}
            </Main>
        </div>
    )
}
// result === true -> result-panel
// result === false -> tutorial


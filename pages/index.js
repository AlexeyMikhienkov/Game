import Main from "../components/main/main";
import React, {useState} from "react";
import Tutorial from "../components/tutorial/tutorial";
import ResultPanel from "../components/result-panel/resultPanel";

export default function Home() {
    const [isResult, setResult] = useState(false);
    const statistics = ["42", "1 из 1", "100%", "29", "1"];

    return (
        <div>
            <Main modificator={isResult ? "result" : "tutorial"} onAction={() => setResult(result => !result)}>
                {isResult ? <ResultPanel statistics_values={statistics}/> : <Tutorial className={"main__tutorial"}/>}
            </Main>
        </div>
    )
}
// result === true -> result-panel
// result === false -> tutorial


/*
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

 */
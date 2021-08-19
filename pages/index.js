import Main from "../components/main/main";
import React, {useState} from "react";
import Tutorial from "../components/tutorial/tutorial";
import ResultPanel from "../components/result-panel/resultPanel";

export default function Home() {
    const [isResult, setResult] = useState(false);
    return (
        <div>
            <Main modificator={isResult ? "result" : "tutorial"} onAction={() => setResult(result => !result)}>
                {isResult ? <ResultPanel/> : <Tutorial className={"main__tutorial"}/>}
            </Main>
        </div>
    )
}
// result === true -> result-panel
// result === false -> tutorial

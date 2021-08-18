import Main from "../components/main/main";
import React, {useState} from "react";
import Tutorial from "../components/tutorial/tutorial";
import Statistics from "../components/statistics/statistics";

export default function Home() {
    const [isResult, setResult] = useState(false);
    return (
        <div>
            <Main modificator={isResult ? "result" : "tutorial"} onAction={() => setResult(result => !result)}>
                {isResult ? <Statistics/> : <Tutorial className={"main__tutorial"}/>}
            </Main>
        </div>
    )
}
// result === true -> statistics
// result === false -> tutorial
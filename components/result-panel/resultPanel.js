import React from "react";
import ResultItem from "./resultItem";

export default function ResultPanel({className, statistics}) { //className = main__result-panel
    return (
        <div className={`result-panel ${className ?? ""}`}>
            <ul className={"result-panel__items"}>
                <ResultItems values={statistics}/>
            </ul>
        </div>
    )
}

function ResultItems({values}) {
    return values.map(({text, value}, index) => {
        return <ResultItem key={index} description={text} value={value}/>
    })
}


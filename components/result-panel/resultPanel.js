import React from "react";
import {results} from "../../constants/copyright";
import ResultItem from "./resultItem";

export default function ResultPanel({statistics_values}) {
    return (
        <div className={"result-panel"}>
            <ul>
                <ResultItems values={statistics_values}/>
            </ul>
        </div>
    )
}
//Todo: добавить возможность добавления main__res-panel,
// значения статистики передать в props

function ResultItems({values}) {
    return results.map(item => {
        const index = results.indexOf(item);
        return <ResultItem key={item} description={item} value={values[index]}/>
    })
}


import React from "react";
import {results} from "../../constants/copyright";

export default function Statistics() {
    return (
        <div className={"result-panel"}>
            <ul>
                <ResultItems/>
            </ul>
        </div>
    )
}
//Todo: переименовать в result-panel, добавить возмоэность добавления main__res-panel,
// resItem вынести, значения статистики передать в props

function ResultItems() {
    return results.map(item => (
        <ResultItem key={item} description={item}/>
    ))
}

function ResultItem(props) {
    const description = props.description;

    return (
        <li className={"result-panel__item-container"}>
            <p className={"result-panel__description"}>{description}</p>
            <p className={"result-panel__value"}>Значение</p>
        </li>
    )
}
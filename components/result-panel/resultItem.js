import React from "react";

export default function ResultItem(props) {
    const description = props.description;
    const value = props.value;

    return (
        <li className={"result-panel__item-container"}>
            <p className={"result-panel__description"}>{description}</p>
            <p className={"result-panel__value"}>{value}</p>
        </li>
    )
}
import React from "react";

export default function TutorialItem(props) {
    const title = props.title;
    const subtitle = props.subtitle;

    return (
        <li className={"tutorial__item"}>
            <h3 className={"tutorial__item-title"}>{title}</h3>
            <p className={"tutorial__item-subtitle"}>{subtitle}</p>
        </li>
    )
}
import React from "react";
import {tutorial} from "../../constants/copyright";

export default function Tutorial() {
    return (
        <>
            <h3 className={"tutorial__title"}>Тренирует</h3>
            <ul className={"tutorial__items"}>
                <Items />
            </ul>
        </>
    )
}

function Items() {
    return tutorial.items.map(item => {
        return (
            <Item className={"tutorial__item"} key={item.title} title={item.title} subtitle={item.subtitle}/>
        )
    })
}

function Item(props) {
    const title = props.title;
    const subtitle = props.subtitle;

    return (
        <li className={"tutorial__item"}>
            <h3 className={"tutorial__item-title"}>{title}</h3>
            <p className={"tutorial__item-subtitle"}>{subtitle}</p>
        </li>
    )
}

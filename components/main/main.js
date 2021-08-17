import React from "react";
import {tutorial} from "../../constants/copyright"

export default function Main() {
    return (
        <div className={"game-wrapper__main main"}>
            <Header/>
            <div className={"main__tutorial tutorial"}>
                <Tutorial />
            </div>
            <button className={"main__button"}>ДАЛЕЕ</button>
        </div>
    )
}

function Header() {
    return (
        <>
            <div className={"main__header"}>
                <div className={"main__container"}>
                    <h2 className={"main__title"}>Найди число</h2>
                    <p className={"main__subtitle"}>Тренажер на внимание</p>
                </div>
            </div>
        </>
    )
}


function Tutorial() {
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

/*

    return (
        <div className={"tutorial__items"}>
            <Item title>

            <div className={"tutorial__item"}>
                <div className={"tutorial__item-title"}>Произвольное внимание</div>
                <div className={"tutorial__item-subtitle"}>Научитесь концентрировать внимание только на важном</div>
            </div>

            <div className={"tutorial__item"}>
                <div className={"tutorial__item-title"}>Концентрацию и переключение внимания</div>
                <div className={"tutorial__item-subtitle"}>Позволит не упускать из виду важные детали</div>
            </div>

            <div className={"tutorial__item"}>
                <div className={"tutorial__item-title"}>Зрительное восприятие</div>
                <div className={"tutorial__item-subtitle"}>Сможете быстро находить основные мысли в текстах</div>
            </div>
        </div>
    )
}

function Item(props) {

}



 */


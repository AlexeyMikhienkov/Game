import React from "react";
import Tutorial from "../tutorial/tutorial";

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


import React from "react";

export default function Main({className, children, onAction, modificator}) {//TODO: передать game-wrapper__main, добавить модификатор main_result
    /*
    modificator === "" ?
    className = main game-wrapper__main :
    className = main game-wrapper__main main_result game-wrapper__main_result
     */

    return (
        <div className={
            modificator === "" ?
                `main ${className??""}` :
                `main ${className??""} main_${modificator} ${className??""}_${modificator}`}>
            <Header/>
            {children}
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


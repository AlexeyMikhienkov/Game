import React from "react";
import {header, buttonText} from "../../constants/copyright";

export default function Main({className, content, children, onAction, modificator}) {//TODO: передать game-wrapper__main, добавить модификатор main_result
    /*
    modificator === "" ?
    className = main game-wrapper__main :
    className = main game-wrapper__main main_result game-wrapper__main_result
     */

    return (
        <div className={`main ${className ?? ""} ${modificator ? `main_${modificator}` : ""} `}>
            <Header content={content}/>
            {children}
            <div className={"main__button-wrapper"}>
                <button className={"main__button"} onClick={onAction}>{buttonText}</button>
            </div>
        </div>
    )
}

function Header({content: {title: titleTxt, subtitle: subtitleTxt}}) {
    const title = titleTxt ? (<h2 className={"main__title"}>{titleTxt}</h2>) : null;
    const subtitle = subtitleTxt ? (<p className={"main__subtitle"}>{subtitleTxt}</p>) : null;
    return (
        <>
            <div className={"main__header"}>
                <div className={"main__container"}>
                    {title}
                    {subtitle}
                </div>
            </div>
        </>
    );
}

//TODO: Timer props: кол-во времени, вызов колбэка, когда время закончилось
// если проп времени поменялся во время отсчета, считать заново

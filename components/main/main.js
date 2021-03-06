import React from "react";
import {buttonTextResult, buttonTextStart} from "../../constants/copyright";

export default function Main({className, content, children, onAction, modificator, onRepeat}) {

    return (
        <div className={`main ${className ?? ""} ${modificator ? `main_${modificator}` : ""} `}>
            <Header content={content}/>
            {children}
            <div className={"main__button-wrapper"}>
                <button className={"main__button"}
                        onClick={modificator ? onRepeat : onAction}>{modificator ? buttonTextResult : buttonTextStart}</button>
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
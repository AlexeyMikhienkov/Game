import React from "react";

export default function Element({className, title, subtitle}) {
    return (
        <div className={`element ${className ?? ""}`}>
            <p className={"element__title"}>{title}</p>
            <p className={"element__subtitle"}>{subtitle}</p>
        </div>
    )
}
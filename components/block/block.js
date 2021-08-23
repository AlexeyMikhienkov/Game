import React from "react";
import PropTypes from "prop-types";
import Counter from "../counter/counter";
import Image from "next/image";

function Block({className, withFinger, onAction, blockText, blockColor, animation}) {
    const finger = withFinger ? (<div className={"block__finger"}>
        <Image
            src={"/../public/images/finger.svg"}
            alt={"Палец-указатель на блок"}
            width={96}
            height={103}
        />
    </div>) : null;

    return (
        <button className={`block ${className ?? ""} ${animation && animation !== "rotate" ? `block_${animation}` : ""}`} onClick={onAction}
                style={{backgroundColor: blockColor}}>
            <p className={`block__number ${animation === "rotate" ? `block__number_${animation}` : ""}`}>{blockText}</p>
            {finger}
        </button>
    )
}

Counter.propTypes = {
    className: PropTypes.String,
    withFinger: PropTypes.bool,
};

export default Block

//TODO: block <button>, а не <div> +
// колбэк на клик +
// сделать finger некликабельным +
// передать blockText, цвет блока и анимацию в пропсах тестовые значения
// реализовать ховер +
// добавить картинку через img +
// добавить к картинке alt +
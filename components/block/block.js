import React from "react";
import PropTypes from "prop-types";
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
        <button
            className={`block ${className ?? ""} ${animation && animation !== "rotate" ? `block_${animation}` : ""}`}
            onClick={onAction}>
            <p className={`block__number ${animation && animation === "rotate" ? `block__number_${animation}` : ""}`} style={{backgroundColor: blockColor}}>{blockText}</p>
            {finger}
        </button>
    )
}

Block.propTypes = {
    className: PropTypes.String,
    withFinger: PropTypes.bool,
    onAction: PropTypes.func,
    blockText: PropTypes.number,
    blockColor: PropTypes.string,
    blockAnimation: PropTypes.string,
};

export default Block
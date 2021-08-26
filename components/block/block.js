import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function Block({className, withFinger, isTutorial, onAction, blockText, blockColor, animation}) {

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
            className={`block ${className ?? ""} ${animation? `block_${animation}` : ""}`}
            onClick={onAction} style={{backgroundColor: blockColor, opacity: `${!withFinger && isTutorial ? 0.5 : 1}`}}>
            <p className={`block__number`}>{blockText}</p>
            {finger}
        </button>
    )
}

Block.propTypes = {
    className: PropTypes.any,
    withFinger: PropTypes.bool,
    onAction: PropTypes.func,
    blockText: PropTypes.number,
    blockColor: PropTypes.string,
    blockAnimation: PropTypes.string,
};

export default Block
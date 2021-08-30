import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import {fingerParams} from "../../constants/constants";

function Block({className, withFinger, isTutorial, value, blockText, blockColor, animation, onCheckAnswer}) {

    const finger = withFinger ? (<div className={"block__finger"}>
        <Image
            src={"/images/finger.svg"}
            alt={"Палец-указатель на блок"}
            width={fingerParams.width}
            height={fingerParams.height}
        />
    </div>) : null;

    return (
        <button
            className={`block ${className ?? ""} ${animation ? `block_${animation}` : ""}`}
            onClick={() => {
                if (!isTutorial)
                    onCheckAnswer(blockText, value);
            }} style={{backgroundColor: blockColor, opacity: `${!withFinger && isTutorial ? 0.5 : 1}`}}>
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
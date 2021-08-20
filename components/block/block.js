import React from "react";
import {blockText} from "../../constants/copyright";
import PropTypes from "prop-types";
import Counter from "../counter/counter";

function Block({className, withFinger}) {
    const finger = withFinger ? (<div className={"block__finger"} />) : null;

    return (
        <div className={`block ${className}`}>
            <p className={"block__number"}>{blockText}</p>
            {finger}
        </div>
    )
}

Counter.propTypes = {
    className: PropTypes.String,
    withFinger: PropTypes.bool,
};

export default Block
import PropTypes from "prop-types";
import React from "react";
import Block from "../block/block";

function Grid({className, grid, size, onAction}) {
    const field = grid.map((arr, index)=>{
        const columns = arr.map(({number, color, animation, finger, colIndex})=>{
            return (
                <Block className={`grid__block block_size-${size}`} key={colIndex} withFinger={finger}
                       onAction={onAction} blockText={number} blockColor={color} animation={animation} />
            )
        });
        return (
                <div className={"grid__row"} key={index} style={{height: 210 / grid.length}}>
                    {columns}
                </div>
        )
    });

    return (
        <div className={`grid ${className ?? ""}`}>
            {field}
        </div>
    )
}

Grid.PropTypes = {
    className: PropTypes.string,
    grid: PropTypes.array,
    size: PropTypes.number,
    onAction: PropTypes.func
};

export default Grid
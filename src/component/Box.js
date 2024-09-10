import React from "react";
import GrandSonBox from "./GrandSonBox";
import { useSelector } from "react-redux";

const Box = () => {
    const count = useSelector((state) => state.count);
    return (
        <div>
            this is Box {count}
            <GrandSonBox />
        </div>
    );
};

export default Box;

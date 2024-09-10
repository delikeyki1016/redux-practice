import React from "react";
import { useSelector } from "react-redux";

const GrandSonBox = () => {
    const { count, id, password } = useSelector((state) => state);
    return (
        <div>
            this is GrandSonBox {count}
            <br />
            id: {id}
            pass: {password}
        </div>
    );
};

export default GrandSonBox;

// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./component/Box";

function App() {
    // const [count, setCount] = useState(0);
    const count = useSelector((state) => state.count); // reducer의 객체를 가져온다.
    let id = useSelector((state) => state.id);
    let password = useSelector((state) => state.password);
    const dispatch = useDispatch();

    const increase = () => {
        dispatch({ type: "INCREMENT", payload: { num: 5 } }); // type은 액션의 이름, payload는 옵셔널
        // setCount(count + 1);
        // console.log(count);
    };

    const decrease = () => {
        dispatch({ type: "DECREMENT", payload: { num: 2 } });
    };

    const login = () => {
        dispatch({ type: "LOGIN", payload: { id: "noona", password: "1234" } });
    };
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
            <Box />
            <hr />
            <h2>
                {id}
                {password}
            </h2>
            <button onClick={login}>login</button>
        </div>
    );
}

export default App;

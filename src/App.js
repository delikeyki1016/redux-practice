import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
import { useDispatch, useSelector } from "react-redux";

function App() {
    // useDispatch를 이용해서 reducer에게 action을 날리자
    const dispatch = useDispatch();

    // input value를 위한 state
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    // store의 state를 가져오자
    const count = useSelector((state) => state.count);
    const { id: getId, password: getPassword } = useSelector((state) => state); //구조분해를 이용해 선언

    const increase = () => {
        dispatch({ type: "INCREASE", payload: { num: 5 } });
    };

    const decrease = () => {
        dispatch({ type: "DECREASE", payload: { num: 3 } });
    };

    const login = () => {
        dispatch({ type: "LOGIN", payload: { id: id, password: password } });
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>
            <Box />
            <hr />

            {getId === "" && getId === "" ? (
                <>
                    <input
                        type="text"
                        value={id}
                        placeholder="id"
                        onChange={(e) => setId(e.target.value)}
                    />
                    <input
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={login}>login</button>
                </>
            ) : (
                <p>
                    로그인 성공! <br />
                    저장된아이디는 {getId}이고, 비밀번호는
                    {getPassword} 입니다.
                </p>
            )}
        </div>
    );
}

export default App;

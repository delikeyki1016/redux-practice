let initialState = {
    count: 0,
    id: "",
    password: "",
};

// 리듀서함수는 state,action 두개의 매개변수를 가진다.
function reducer(state = initialState, action) {
    // console.log("리듀서콘솔", state, action);
    // if (action.type === "INCREASE") {
    //     return { ...state, count: state.count + 1 };
    // } else if (action.type === "DECREASE") {
    //     return { ...state, count: state.count - 1 };
    // }
    // return { ...state };
    const { type, payload } = action;
    switch (type) {
        case "INCREASE":
            return { ...state, count: state.count + payload.num };
        case "DECREASE":
            return { ...state, count: state.count - payload.num };
        case "LOGIN":
            return { ...state, id: payload.id, password: payload.password };
        default:
            return { ...state };
    }
}

export default reducer;

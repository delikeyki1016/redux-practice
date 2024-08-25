let initialState = {
    count: 0,
    id: "",
    password: "",
};

function reducer(state = initialState, action) {
    console.log("action?", action);
    //if 또는 switch문으로 명세서를 만듦
    // if (action.type === "INCREMENT") {
    //     return { ...state, count: state.count + action.payload.num };
    // }
    // return { ...state }; // if에 속하지 않을 경우의 리턴을 부여
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + action.payload.num };
        case "DECREMENT":
            return { ...state, count: state.count - action.payload.num };
        case "LOGIN":
            return {
                ...state,
                id: action.payload.id,
                password: action.payload.password,
            };
        default:
            return { ...state };
    }
}

export default reducer;

export const initialState = {
    name: "JULME"
};

export const reducer = (state = initialState, action) => {
    const newState = { ...state };
    if (action.type === "update") {
        newState.name = action.payload;
    }
    if (action.type === "restore") {
        newState.name = initialState.name;
    }
    return newState;
}


export const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        update: (name) => dispatch({ type: 'update', payload: name }),
        restore: () => dispatch({ type: 'restore' })
    }
}
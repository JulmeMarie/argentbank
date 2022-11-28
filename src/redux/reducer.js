/**
 * Global state from the start
 */
export const initialState = {
    firstName: null,
    lastName: null,
    token: null
};

export const reducer = (state = initialState, action) => {
    const newState = { ...state };
    if (action.type === "setFirstName") {
        newState.firstName = action.payload;
    }
    if (action.type === "setLastName") {
        newState.lastName = action.payload;
    }
    if (action.type === "setToken") {
        newState.token = action.payload;
    }
    return newState;
}

/**
 * Allows to access the state elements
 * @param {*} state 
 * @returns 
 */
export const mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        token: state.token
    }
}

/**
 * Allows to update state elements throw methods
 * @param {*} dispatch 
 * @returns 
 */
export const mapDispatchToProps = (dispatch) => {
    return {
        setFirstName: (firstName) => dispatch({ type: 'setFirstName', payload: firstName }),
        setLastName: (lastName) => dispatch({ type: 'setLastName', payload: lastName }),
        setToken: (token) => dispatch({ type: 'setToken', payload: token })
    }
}
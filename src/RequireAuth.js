import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from './redux/reducer';

/**
 * This component acts like a guard to protect rootes
 * @param {*} props 
 * @returns 
 */
const RequireAuth = (props) => {
    return props.token ? props.children : <Navigate to="/signin" />;
}

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth);



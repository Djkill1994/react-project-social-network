import React from "react";
import Header, { DispatchPropsType, MapPropsType } from "./Header";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import { AppStateType } from "../../redux/redux-store";

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps,
  {logout})(HeaderContainer);

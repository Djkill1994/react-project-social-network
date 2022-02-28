import { Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
    }
};

type MapsPropsType = {
    isAuth: boolean
}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>){
    const RedirectComponent: React.FC<WCP & MapsPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={ "/login" }/>;
        return <WrappedComponent { ...restProps as unknown as WCP }/>
    }

    let ConnectedAuthRedirectComponent = connect<MapsPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
};

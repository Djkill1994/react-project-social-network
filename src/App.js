import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import {withSuspense} from "./hok/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends Component {
//     catchAllUnhandledErrors = (reason, promise) => {
//         alert("Some error")
//     }

    componentDidMount() {
        this.props.initializeApp();
        // window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    //
    // componentWillUnmount() {
    //     window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    // }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <Navbar/>

                <div className={'app-wrapper-content'}>
                    <Switch>
                        {/*<Route path='/profile/:userId?' render={() => <Redirect to={"/profile"}/>}/>*/}
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/users' render={() => <UsersContainer pageTitle={"Samurai"}/>}/>
                        <Route path='/login' render={() => <Login/>}/>

                        <Route path='*'
                               render={() => <div>Hello People , this my training project!!!))) Samurai SocialNetwork
                                   Typescript-React-React-Redux!!!!
                               </div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
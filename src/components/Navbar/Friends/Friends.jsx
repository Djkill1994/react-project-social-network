import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogData: state.dialogsPage.dialogData
    }
}
const friendsBar = (props)=>{
    return props.dialogData.map(f => <div>{f.avatar} {f.name}</div>)
}
const Friends = connect(mapStateToProps)(friendsBar)

export default Friends;
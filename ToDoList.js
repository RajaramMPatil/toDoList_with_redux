
import React from "react";
import { connect } from "react-redux";
import { removeItems } from "./actions/taskAction";


const Todolist = (props) => {

    return(
        <div>
            <ul>
                <li onClick = {()=>props.removeItems(props.id)}>{props.text}</li>
            </ul>
        </div>
    );
}

const mapDispatchToProps = dipatch => ({
    removeItems:id => dipatch(removeItems(id))
});

export default connect(null , mapDispatchToProps)(Todolist);
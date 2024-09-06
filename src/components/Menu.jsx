import React, {Component} from "react";

import {Redirect} from "react-router-dom";


export default class Menu extends Component {
    render(){
        return(
            <div>
            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>Contact</li>
            </ul>
            </div>
            )
    }
}

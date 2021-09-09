import React, { Component } from 'react';
import {Divider, ProfileImage} from '../../components';
import {Create} from "./components/Create/Create";
import {Join} from "./components/Join/Join"

export class CreateGame extends Component {
    render() {
        return (
            <div className="row">
                <Create />
                <Join />
            </div>
        )
    }
}

export default CreateGame;
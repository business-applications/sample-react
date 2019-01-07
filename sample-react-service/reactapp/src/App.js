import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

import ServerInfo from "./ServerInfo";
import ProcessDefsInfo from "./ProcessDefsInfo";
import ProcessInstancesInfo from "./ProcessInstancesInfo";

class App extends Component {

    render() {
        return (
                <div className="App">
                    <div class="jumbotron jumbotron-fluid" className="ReactTitleStyle">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            <strong><h3>Welcome to your jBPM React Business Application!</h3></strong>
                        </p>
                        <br/>
                    </div>

                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="card-deck">
                                <ServerInfo/>
                                <ProcessDefsInfo/>
                                <ProcessInstancesInfo/>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default App;

import React, {Component} from "react";
import "./App.css";

class ServerInfo extends Component {

    componentDidMount() {
        setInterval(this.getServerData, 20000);
    }

    getServerData = () => {
        fetch('/rest/server',
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    this.setState(data);
                });
    };

    render() {
        const haveData = this.state && this.state.result && this.state.result !== undefined && this.state.result["kie-server-info"];
        return (
                <div class="card mb-4">
                    <div class="view overlay" className="ReactTitleStyle4">
                        <center><strong>Server Info</strong></center>
                    </div>
                    <div class="card-body jbpm-card-body">
                        <dl class="row">
                            <dt class="col-sm-3">Name</dt>
                            {haveData ? (
                                    <dd class="col-sm-9">{this.state.result["kie-server-info"].name}</dd>
                            ) : (
                                    <dd class="col-sm-9"></dd>
                            )}

                            <dt class="col-sm-3">Id</dt>
                            {haveData ? (
                                    <dd class="col-sm-9">{this.state.result["kie-server-info"].id}</dd>
                            ) : (
                                    <dd class="col-sm-9"></dd>
                            )}

                            <dt class="col-sm-3">Version</dt>
                            {haveData ? (
                                    <dd class="col-sm-9">{this.state.result["kie-server-info"].version}</dd>
                            ) : (
                                    <dd class="col-sm-9"></dd>
                            )}

                            <dt class="col-sm-3">Location</dt>
                            {haveData ? (
                                    <dd class="col-sm-9">{this.state.result["kie-server-info"].location}</dd>
                            ) : (
                                    <dd class="col-sm-9"></dd>
                            )}

                            <dt class="col-sm-3">Capabilities</dt>
                            {haveData ? (
                                    <dd class="col-sm-9">
                                        <ul>
                                            {this.state.result["kie-server-info"].capabilities.map(capability => (
                                                    <li>{capability}</li>
                                            ))
                                            }
                                        </ul>
                                    </dd>
                            ) : (
                                    <dd class="col-sm-9"></dd>
                            )}
                        </dl>
                    </div>
                </div>
        );
    }
}

export default ServerInfo;
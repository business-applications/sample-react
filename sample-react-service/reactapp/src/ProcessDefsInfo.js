import React, {Component} from "react";
import "./App.css";

class ProcessDefsInfo extends Component {

    componentDidMount() {
        setInterval(this.getProcessDefsData, 2000);
    }

    getProcessDefsData = () => {
        fetch('/rest/server/containers/sample-react-kjar/processes',
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

    handleStartProcess = (cid, pid) => {
        fetch('/rest/server/containers/' + cid + '/processes/' + pid + '/instances', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    };

    render() {
        const haveData = this.state && this.state.processes;
        return (
                <div class="card mb-4">
                    <div class="view overlay" className="ReactTitleStyle2">
                        <center><strong>Process Definitions</strong></center>
                    </div>
                    <div class="card-body jbpm-card-body">
                        {haveData ? (
                                <table class="table mb-0">
                                    <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.processes.map(processdef => (
                                            <tr>
                                                <td><small>{processdef["process-name"]}</small></td>
                                                <td><button type="button" class="btn btn-primary" onClick={() => this.handleStartProcess(processdef["container-id"],processdef["process-id"])}>Start</button></td>
                                            </tr>
                                    ))
                                    }
                                    </tbody>
                                </table>
                        ) : (
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Version</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                        )}
                    </div>
                </div>
        );
    }
}

export default ProcessDefsInfo;
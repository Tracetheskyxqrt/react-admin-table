import React, {Component} from 'react';
import Table, {rows} from '../../Shared/Table/Table';
import Button from "../../Shared/Button/Button";

export default class LogList extends Component {
    render () {
        return (
            <div className ="log-list">
                <p className="Table-header"><b>Admin log's table</b></p>
                <div>
                    <Button className = "new-button" >New</Button>
                </div>
                <Table rows = {rows}/>
            </div>
        );
    }
}
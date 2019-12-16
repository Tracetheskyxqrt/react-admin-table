import React, {Component, Props} from 'react';
import Table, {rows} from '../../Shared/Table/Table';
import Button from "../../Shared/Button/Button";
import { OrderedMap } from 'immutable';
import {Log} from "../../../models/Log";
import Spiner from "../../Shared/Spiner/Spiner";

interface LogListViewProps extends Props<LogListVew> {
    logs: OrderedMap<string, Log>;
    loading: boolean;
    onCreateClick: () => any;
    onLogClick: (log: Log) => any;
    onUpdateClick: (log: Log) => any;
    onDeleteClick: (id: string) => any;
}

export default class LogListVew extends Component <LogListViewProps> {
    render () {
        const {logs, loading, onCreateClick, onLogClick} = this.props;
        if (loading) {
            return <Spiner />;
        }

        return (
            <div className ="log-list">
                <p className="Table-header"><b>Admin log's table</b></p>
                <div>
                    <Button className = "new-button" onClick={() => onCreateClick()}>Create</Button>
                </div>
                <Table rows = {rows}/>
            </div>
        );
    }
}
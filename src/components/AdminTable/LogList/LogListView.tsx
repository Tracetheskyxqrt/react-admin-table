import React, {Component, Props} from 'react';
import Button from "../../Shared/Button/Button";
import { OrderedMap } from 'immutable';
import {Log} from '../../../models/Log'
import Spiner from '../../Shared/Spiner/Spiner';
import DataTable from '../../../components/Shared/DataTable/DataTable';

interface LogListViewProps extends Props<LogListView> {
    logs: OrderedMap<string, Log>;
    loading: boolean;
    onCreateClick: () => any;
    onLogClick: (log: Log) => any;
    onUpdateClick: (log: Log) => any;
}

export default class LogListView extends Component <LogListViewProps> {
    render () {
        const {logs, loading, onCreateClick, onUpdateClick, onLogClick} = this.props;
        if (loading) {
            return <Spiner />;
        }

        return (
            <div className ="log-list">
                <p className="Table-header"><b>Admin log's table</b></p>
                <div>
                    <Button className = "new-button" onClick={() => onCreateClick()}>Create</Button>
                </div>
                <DataTable
                    data = {logs.valueSeq().toArray().sort((a, b) => Number(a.id) - Number(b.id))}
                    onRowClick={(log: Log) => onLogClick(log)}
                    onUpdateClick={(log: Log) => onUpdateClick(log)}
                ></DataTable>
            </div>
        );
    }
}
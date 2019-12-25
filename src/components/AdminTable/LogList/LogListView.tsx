import React, {Component, Props} from 'react';
import Button from '../../Shared/Button/Button';
import { OrderedMap } from 'immutable';
import {Log} from '../../../models/Log'
import Spiner from '../../Shared/Spiner/Spiner';
import DataTable from '../../../components/Shared/DataTable/DataTable';
import '../../../components/Shared/Button/Button.scss';

interface LogListViewProps extends Props<LogListView> {
    logs: OrderedMap<string, Log>;
    loading: boolean;
    onCreateClick: () => any;
    onUpdateClick: (log: Log) => any;
    onDeleteClick: (id: string) => any;
}

export default class LogListView extends Component <LogListViewProps> {
    render () {
        const {logs, loading, onCreateClick, onUpdateClick, onDeleteClick} = this.props;
        if (loading) {
            return <Spiner />;
        }

        return (
            <div className ="log-list">
                <p className="Table-header"><b>Admin log's table</b></p>
                <div>
                    <Button className = 'new-button' onClick={() => onCreateClick()}>Create</Button>
                </div>
                <DataTable
                    data = {logs.valueSeq().toArray().sort((a, b) => Number(a.id) - Number(b.id))}
                    onRowClick={(log: Log) => onUpdateClick(log)}
                    onDeleteClick={(logId: Log["id"]) => onDeleteClick(logId)}
                ></DataTable>
            </div>
        );
    }
}
import * as React from 'react';
import { Props, Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { OrderedMap } from 'immutable';
import { AppState } from '../../../reducers';
import LogListView from './LogListView';
import { Log } from '../../../models/Log';

import {deleteLogAction, setCurrentLogAction} from '../../../actions/AdminTable/adminTable';

interface RouteProps extends RouteComponentProps<{}> {
    match: any;
    history: any;
}

interface LogListContainerProps extends Props<LogListContainer> {
    logs: OrderedMap<string, Log>;
    loading: boolean;
}

interface LogListContainerDispatch extends Props<LogListContainer> {
    deleteLog: (id: string) => any;
    setCurrentLog: (log: Log | null) => any;
}

function mapProps(state: AppState, props: LogListContainerProps): LogListContainerProps {
    return {
        logs: state.adminTableState.logs,
        loading: state.adminTableState.loading,
    };
}

function mapDispatch(dispatch: Dispatch<any>): LogListContainerDispatch {
    return {
        deleteLog: (id: string) => dispatch(deleteLogAction(id)),
        setCurrentLog: (log: Log | null) => dispatch(setCurrentLogAction(log)),
    };
}

type AllProps = LogListContainerProps & LogListContainerDispatch & RouteProps;

export class LogListContainer extends React.Component<AllProps> {
    componentDidMount() {
        const {setCurrentLog} = this.props;
        setCurrentLog(null);
    }

    onUpdateClick = (log: Log) => {
        const {history, setCurrentLog} = this.props;
        setCurrentLog(log);
        history.push(`/update/${log.id}`);
    }

    onCreateClick = () => {
        const {history} = this.props;
        history.push(`/create`);
    }

    onDeleteClick = (id: string) => {
        const {deleteLog} = this.props;
        deleteLog(id);
    }

    render() {
        document.title = 'Log List';
        const {logs, loading} = this.props;
        return (
            <div className='container'>
                <LogListView
                    logs={logs}
                    loading={loading}
                    onCreateClick={this.onCreateClick}
                    onUpdateClick={this.onUpdateClick}
                    onDeleteClick={this.onDeleteClick}
                />
            </div>
        );
    }
}

export default withRouter(connect(mapProps, mapDispatch)(LogListContainer));

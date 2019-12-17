import * as React from 'react';
import { Props, Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps, match } from 'react-router-dom';
import { AppState } from '../../../reducers';
import LogView from './LogView';
import { Log } from '../../../models/Log';
import { deleteLogAction } from '../../../actions/AdminTable/adminTable';

interface RouteProps extends RouteComponentProps<{}> {
    match: match<{id: string}>;
    history: any;
}

interface LogContainerProps extends Props<LogContainer> {
    log: Log | null;
}

interface LogContainerDispatch extends Props<LogContainer> {
    deleteLog: (id: string) => any;
}

function mapProps(state: AppState, props: LogContainerProps): LogContainerProps {
    return {
        log: state.adminTableState.currentLog,
    };
}

function mapDispatch(dispatch: Dispatch<any>): LogContainerDispatch {
    return {
        deleteLog: (id: string) => dispatch(deleteLogAction(id)),
    };
}

type AllProps = LogContainerProps & LogContainerDispatch & RouteProps;

export class LogContainer extends React.Component<AllProps> {
    onUpdateClick = (id: string) => {
        const {history} = this.props;
        history.push(`/update/${id}`);
    }

    onDeleteClick = (id: string) => {
        const {deleteLog} = this.props;
        deleteLog(id);
    }

    render() {
        document.title = 'Log';
        const {log} = this.props;
        if (!this.props.match.params.id || !log || log.id !== this.props.match.params.id) {
            return <div />;
        }

        return (
            <div className='container'>
                <LogView
                    log={log}
                    onDeleteClick={() => this.onDeleteClick(log.id)}
                    onUpdateClick={() => this.onUpdateClick(log.id)}
                />
            </div>
        );
    }
}

export default withRouter(connect(mapProps, mapDispatch)(LogContainer));

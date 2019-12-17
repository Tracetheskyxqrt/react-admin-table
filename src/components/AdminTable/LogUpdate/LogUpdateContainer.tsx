import * as React from 'react';
import { Props, Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AppState } from '../../../reducers';
import { LogUpdateView } from './LogUpdateView';

import {
    updateLogAction,
    createNewLogAction,
    setCategoryIdAction,
    setCategoryNameAction,
    setRequestIdAction,
    setContentAction,
    setIsMarkedUpAction
} from '../../../actions/AdminTable/adminTable';

import { Log } from '../../../models/Log';

interface RouteProps extends RouteComponentProps<{}> {
    match: any;
    history: any;
}

interface LogCreateContainerProps extends Props<LogCreateContainer> {
    newLog: Log | null;
    log: Log | null;
}

interface LogCreateContainerDispatch extends Props<LogCreateContainer> {
    updateLog: () => any;
    createNewLog: (log: Log) => any;
    setCategoryId: (categoryId: string) => any;
    setCategoryName: (categoryName: string) => any;
    setRequestId: (requestId: string) => any;
    setContent: (content: string) => any;
    setIsMarkedUp: (isMarkedUp: string) => any;
}

function mapProps(state: AppState, props: LogCreateContainerProps): LogCreateContainerProps {
    return {
        newLog: state.adminTableState.newLog,
        log: state.adminTableState.currentLog,
    };
}

function mapDispatch(dispatch: Dispatch<any>): LogCreateContainerDispatch {
    return {
        updateLog: () => dispatch(updateLogAction()),
        createNewLog: () => dispatch(createNewLogAction()),
        setCategoryId: (categoryId: string) => dispatch(setCategoryIdAction(categoryId)),
        setCategoryName: (categoryName: string) => dispatch(setCategoryNameAction(categoryName)),
        setRequestId: (requestId: string) => dispatch(setRequestIdAction(requestId)),
        setContent: (content: string) => dispatch(setContentAction(content)),
        setIsMarkedUp: (isMarkedUp: any) => dispatch(setIsMarkedUpAction(isMarkedUp)), //тут что-то с boolean не так. isMarkedUp - bool
    };
}

type AllProps = LogCreateContainerProps & LogCreateContainerDispatch & RouteProps;

export class LogCreateContainer extends React.Component<AllProps> {
    componentDidMount() {
        const {createNewLog, log} = this.props;
        if (!log) {
            return;
        }
        createNewLog(log);
    }

    onCategoryIdChange = (categoryId: string) => {
        const {setCategoryId} = this.props;
        setCategoryId(categoryId);
    }

    onCategoryNameChange = (categoryName: string) => {
        const {setCategoryName} = this.props;
        setCategoryName(categoryName);
    }

    onRequestIdChange = (requestId: string) => {
        const {setRequestId} = this.props;
        setRequestId(requestId);
    }

    onContentChange = (content: string) => {
        const {setContent} = this.props;
        setContent(content);
    }

    onIsMarkedUpChange = (isMarkedUp: string) => {
        const {setIsMarkedUp} = this.props;
        setIsMarkedUp(isMarkedUp);
    }

    onUpdate = () => {
        const {updateLog, history} = this.props;
        updateLog();
        history.push('/');
    }

    render() {
        document.title = 'Update Log';
        const {newLog} = this.props;
        if (!newLog) {
            return <div />;
        }

        return (
            <div className='container'>
                <LogUpdateView
                    categoryId={newLog.categoryId}
                    categoryName={newLog.categoryName}
                    requestId={newLog.requestId}
                    content={newLog.content}
                    isMarkedUp={newLog.isMarkedUp}
                    onCategoryIdChange={this.onCategoryIdChange}
                    onCategoryNameChange={this.onCategoryNameChange}
                    onRequestIdChange={this.onRequestIdChange}
                    onContentChange={this.onContentChange}
                    onIsMarkedUpChange={this.onIsMarkedUpChange}
                    onUpdate={this.onUpdate}
                />
            </div>
        );
    }
}

export default withRouter(connect(mapProps, mapDispatch)(LogCreateContainer));

///<reference path="../../../reducers/index.ts"/>
import * as React from 'react';
import { Props, Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AppState } from '../../../reducers';
import { LogCreateView } from './LogCreateView';
import { Log } from '../../../models/Log';
import {Category} from '../../../models/Category';

import {
    createLogAction,
    createNewLogAction,
    setCategoriesAction,
    setRequestIdAction,
    setContentAction,
    setIsMarkedUpAction
} from '../../../actions/AdminTable/adminTable';

interface RouteProps extends RouteComponentProps<{}> {
    match: any;
    history: any;
}

interface LogCreateContainerProps extends Props<LogCreateContainer> {
    newLog: Log | null;
}

interface LogCreateContainerDispatch extends Props<LogCreateContainer> {
    createLog: () => any;
    createNewLog: () => any;
    setCategories: (categories: Category[]) => any;
    setRequestId: (requestId: string) => any;
    setContent: (content: string) => any;
    setIsMarkedUp: (isMarkedUp: boolean) => any;
}

function mapProps(state: AppState, props: LogCreateContainerProps): LogCreateContainerProps {
    return {
        newLog: state.adminTableState.newLog,
    };
}

function mapDispatch(dispatch: Dispatch<any>): LogCreateContainerDispatch {
    return {
        createLog: () => dispatch(createLogAction()),
        createNewLog: () => dispatch(createNewLogAction()),
        setCategories: (categories: Category[]) => dispatch(setCategoriesAction(categories)),
        setRequestId: (requestId: string) => dispatch(setRequestIdAction(requestId)),
        setContent: (content: string) => dispatch(setContentAction(content)),
        setIsMarkedUp: (isMarkedUp: any) => dispatch(setIsMarkedUpAction(isMarkedUp)),
    };
}

type AllProps = LogCreateContainerProps & LogCreateContainerDispatch & RouteProps;

export class LogCreateContainer extends React.Component<AllProps> {
    componentDidMount() {
        const {createNewLog} = this.props;
        createNewLog();
    }

    onCategoriesChange = (categories: Category[]) => {
        const {setCategories} = this.props;
        setCategories(categories);
    }

    onRequestIdChange = (requestId: string) => {
        const {setRequestId} = this.props;
        setRequestId(requestId);
    }

    onContentChange = (content: string) => {
        const {setContent} = this.props;
        setContent(content);
    }

    onIsMarkedUpChange = (isMarkedUp: boolean) => {
        const {setIsMarkedUp} = this.props;
        setIsMarkedUp(isMarkedUp);
    }

    onCreate = () => {
        const {createLog, history} = this.props;
        createLog();
        history.push('/');
    }

    render() {
        document.title = 'Create Log';
        const {newLog} = this.props;
        if (!newLog) {
            return <div/>;
        }

        return (
            <div className='container'>
                <LogCreateView
                    categories={newLog.categories}
                    requestId={newLog.id}
                    content={newLog.content}
                    is_marked_up={newLog.is_marked_up}
                    onCategoriesChange={this.onCategoriesChange}
                    onRequestIdChange={this.onRequestIdChange}
                    onContentChange={this.onContentChange}
                    onIsMarkedUpChange={this.onIsMarkedUpChange}
                    onCreate={this.onCreate}
                />
            </div>
        );
    }
}

export default withRouter(connect(mapProps, mapDispatch)(LogCreateContainer));

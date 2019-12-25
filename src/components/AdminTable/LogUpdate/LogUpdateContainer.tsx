import * as React from 'react';
import { Props, Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { AppState } from '../../../reducers';
import { LogUpdateView } from './LogUpdateView';

import {
    updateLogAction,
    createNewLogAction,
    //setCategoryIdAction,
    //setCategoryNameAction,
    setCategoriesAction,
    setRequestIdAction,
    setContentAction,
    setIsMarkedUpAction
} from '../../../actions/AdminTable/adminTable';

import { Log } from '../../../models/Log';
import {Category} from '../../../models/Category';

interface RouteProps extends RouteComponentProps<{}> {
    match: any;
    history: any;
}

interface LogUpdateContainerProps extends Props<LogUpdateContainer> {
    newLog: Log | null;
    log: Log | null;
}

interface LogUpdateContainerDispatch extends Props<LogUpdateContainer> {
    updateLog: () => any;
    createNewLog: (log: Log) => any;
    //setCategoryId: (categoryId: string) => any;
    //setCategoryName: (categoryName: string) => any;
    setCategories: (categories: Category[]) => any;
    setRequestId: (requestId: string) => any;
    setContent: (content: string) => any;
    setIsMarkedUp: (isMarkedUp: boolean) => any;
}

function mapProps(state: AppState, props: LogUpdateContainerProps): LogUpdateContainerProps {
    return {
        newLog: state.adminTableState.newLog,
        log: state.adminTableState.currentLog,
    };
}

function mapDispatch(dispatch: Dispatch<any>): LogUpdateContainerDispatch {
    return {
        updateLog: () => dispatch(updateLogAction()),
        createNewLog: (log: Log) => dispatch(createNewLogAction(log)),
        //setCategoryId: (categoryId: string) => dispatch(setCategoryIdAction(categoryId)),
        //setCategoryName: (categoryName: string) => dispatch(setCategoryNameAction(categoryName)),
        setCategories: (categories: Category[]) => dispatch(setCategoriesAction(categories)),
        setRequestId: (requestId: string) => dispatch(setRequestIdAction(requestId)),
        setContent: (content: string) => dispatch(setContentAction(content)),
        setIsMarkedUp: (isMarkedUp: any) => dispatch(setIsMarkedUpAction(isMarkedUp)), //тут что-то с boolean не так. isMarkedUp - bool
    };
}

type AllProps = LogUpdateContainerProps & LogUpdateContainerDispatch & RouteProps;

export class LogUpdateContainer extends React.Component<AllProps> {
    componentDidMount() {
        const {createNewLog, log} = this.props;
        if (!log) {
            return;
        }
        createNewLog(log);
    }

    /*
    onCategoryIdChange = (categoryId: string) => {
        const {setCategoryId} = this.props;
        setCategoryId(categoryId);
    }

    onCategoryNameChange = (categoryName: string) => {
        const {setCategoryName} = this.props;
        setCategoryName(categoryName);
    }
    */

    onCategoriesChange = (categories: Category[]) => {
        const {setCategories} = this.props;
        setCategories(categories)
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
                    //categoryId={newLog.categories[0].id}
                    //categoryName={newLog.categories[0].name}
                    categories={newLog.categories}
                    requestId={newLog.id}
                    content={newLog.content}
                    isMarkedUp={newLog.isMarkedUp}
                    //onCategoryIdChange={this.onCategoryIdChange}
                    //onCategoryNameChange={this.onCategoryNameChange}
                    onCategoriesChange={this.onCategoriesChange}
                    onRequestIdChange={this.onRequestIdChange}
                    onContentChange={this.onContentChange}
                    onIsMarkedUpChange={this.onIsMarkedUpChange}
                    onUpdate={this.onUpdate}
                />
            </div>
        );
    }
}

export default withRouter(connect(mapProps, mapDispatch)(LogUpdateContainer));

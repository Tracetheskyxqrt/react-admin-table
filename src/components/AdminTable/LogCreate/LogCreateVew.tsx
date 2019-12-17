import * as React from 'react';
import { Props } from 'react';
import Button from '../../Shared/Button/Button';
import FormField from '../../Shared/FormField/FormField';

interface LogCreateViewProps extends Props<LogCreateView> {
    //id: string;
    categoryId: string;
    categoryName: string;
    requestId: string;
    content: string
    isMarkedUp: boolean;

    onCategoryIdChange: (categoryId: string) => any;
    onCategoryNameChange: (categoryName: string) => any;
    onRequestIdChange: (requestId: string) => any;
    onContentChange: (content: string) => any;
    onIsMarkedUpChange: (isMarkedUp: any) => any; //Конфликт в последнем FormField, String to Boolean 'String(e.target.value)'
    onCreate: () => any;
}

export class LogCreateView extends React.Component<LogCreateViewProps> {
    render() {
        const {
            categoryId, categoryName, requestId, content, isMarkedUp,
            onCategoryIdChange, onCategoryNameChange, onRequestIdChange, onContentChange, onIsMarkedUpChange, onCreate
        } = this.props;
        return (
            <div className='log-create-view-container'>
                <Button onClick={onCreate}>Create</Button>
                <div className='log-form'>
                    <FormField label='Category ID'>
                        <input value={categoryId} onChange={(e) => onCategoryIdChange(e.target.value)}/>
                    </FormField>
                    <FormField>
                        <input value={categoryName} onChange={(e) => onCategoryNameChange(e.target.value)}/>
                    </FormField>
                    <FormField>
                        <input value={requestId} onChange={(e) => onRequestIdChange(e.target.value)}/>
                    </FormField>
                    <FormField>
                        <input value={content} onChange={(e) => onContentChange(e.target.value)}/>
                    </FormField>
                    <FormField>
                        <input value={String(isMarkedUp)} onChange={(e) => onIsMarkedUpChange(String(e.target.value))}/>
                    </FormField>
                </div>
            </div>
        );
    }
}

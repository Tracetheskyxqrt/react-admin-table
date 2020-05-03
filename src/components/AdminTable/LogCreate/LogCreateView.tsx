import * as React from 'react';
import { Props } from 'react';
import Button from '../../Shared/Button/Button';
import FormField from '../../Shared/FormField/FormField';
import Select from 'react-select';
import {Category} from '../../../models/Category';

interface LogCreateViewProps extends Props<LogCreateView> {
    requestId: string;
    categories: Category[];
    content: string;
    is_marked_up: boolean;
    onCategoriesChange: (categories: Category[]) => any;
    onRequestIdChange: (requestId: string) => any;
    onContentChange: (content: string) => any;
    onIsMarkedUpChange: (isMarkedUp: boolean) => any;
    onCreate: () => any;
}

export class LogCreateView extends React.Component<LogCreateViewProps> {
    render() {
        const {
            requestId, content, is_marked_up, categories,
            onRequestIdChange, onContentChange, onIsMarkedUpChange, onCreate
        } = this.props;

        var selectedCategories: Category[] = new Array();

        return (
            <div className='log-create-view-container'>
                <Button onClick={onCreate}>Create</Button>
                <div className='log-form'>
                    <FormField label='Request ID:'>
                        <input value={requestId} onChange={(e) => onRequestIdChange(e.target.value)}/>
                    </FormField>
                    { /*
                    <FormField label='Category:'>
                        <Select
                            clearable={false}
                            value={selectedCategories.map(category => ({
                                value: category.id,
                                label: category.name,

                            }))}
                            options={categories.map(category => ({
                                value: category.id,
                                label: category.name,
                            }))}
                            simpleValue={true}
                            multi={true}
                            onChange={v => {
                                onCategoriesChange(selectedCategories);
                            }}
                        />
                    </FormField>
                    */ }
                    <FormField label='Content:'>
                        <textarea value={String(content)} onChange={(e) => onContentChange(e.target.value)}/>
                    </FormField>
                    <FormField label='Is marked up:'>
                        <input type='checkbox' checked={is_marked_up} onChange={(e) => onIsMarkedUpChange(!is_marked_up)}/>
                    </FormField>
                </div>
            </div>
        );
    }
}

import * as React from 'react';
import { Props } from 'react';
import Button from '../../Shared/Button/Button';
import FormField from '../../Shared/FormField/FormField';
import Select from 'react-select';
import {Category} from "../../../models/Category";

interface LogCreateViewProps extends Props<LogCreateView> {
    //categoryId: string;
    //categoryName: string;
    categories: Category[];
    requestId: string;
    content: string;
    isMarkedUp: boolean;

    //onCategoryIdChange: (categoryId: string) => any;
    //onCategoryNameChange: (categoryName: string) => any;
    onCategoriesChange: (categories: Category[]) => any;
    onRequestIdChange: (requestId: string) => any;
    onContentChange: (content: string) => any;
    onIsMarkedUpChange: (isMarkedUp: boolean) => any;
    onCreate: () => any;
}

export class LogCreateView extends React.Component<LogCreateViewProps> {
    render() {
        const {
            requestId, content, isMarkedUp, categories,
            onRequestIdChange, onContentChange, onIsMarkedUpChange, onCreate
        } = this.props;
        return (
            <div className='log-create-view-container'>
                <Button onClick={onCreate}>Create</Button>
                <div className='log-form'>
                    { /* <FormField label='Category:'>
                        <Select
                            clearable={false}
                            value={{
                                value: categoryId,
                                label: categoryId,
                            } as any}
                            options={[1, 2].map(catId => ({
                                value: catId,
                                label: catId,
                            }))}
                            simpleValue={true}
                            onChange={v => onCategoryIdChange((v as any).value)}
                        />
                    </FormField> */ }
                    <FormField label='Request:'>
                        <Select
                            clearable={false}
                            value={{
                                value: requestId,
                                label: requestId,
                            } as any}
                            options={[1, 2].map(reqId => ({
                                value: reqId,
                                label: reqId,
                            }))}
                            simpleValue={true}
                            onChange={v => onRequestIdChange((v as any).value)}
                        />
                    </FormField>
                    <FormField label='Content:'>
                        <textarea value={String(content)} onChange={(e) => onContentChange(e.target.value)}/>
                    </FormField>
                    <FormField label='Is marked up:'>
                        <input type='checkbox' checked={isMarkedUp} onChange={(e) => onIsMarkedUpChange(!isMarkedUp)}/>
                    </FormField>
                </div>
            </div>
        );
    }
}

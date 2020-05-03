import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }),
);

interface TextFieldProps {
    id?: string;
    label?: string;
    value?: string;
}

export default function BasicTextFields({id, label, value}: TextFieldProps) {
    const classes = useStyles();
    const [myValue, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div className='form-field'>
            <div className='field'>
                <form className={'root'} noValidate autoComplete="off">
                    <TextField
                        id={id}
                        label={label}
                        value={myValue}
                        onChange={(e) => setValue(e.target.value)}
                        variant="outlined"/>
                </form>
            </div>
        </div>
    );
}
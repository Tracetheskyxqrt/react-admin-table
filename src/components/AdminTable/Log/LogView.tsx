import * as React from 'react';
import { Props } from 'react';
import { Log } from '../../../models/Log';
import Button from '../../Shared/Button/Button';
import { stopEvent } from '../../../lib/stopEvent';
import {withStyles, createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from "../../Shared/Checkbox/Checkbox";


/*const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.background.default,
            },
        },
    }),
)(TableRow);

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
}); */

interface LogViewProps extends Props<LogView> {
    log?: Log;
    onDeleteClick: () => any;
    onUpdateClick: () => any;
}

export default class LogView extends React.Component<LogViewProps> {


    render() {
        //const classes = useStyles();
        return (
            <Paper className='root'>
                <Table className='table' aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Category ID</TableCell>
                            <TableCell>Category name</TableCell>
                            <TableCell>Request ID</TableCell>
                            <TableCell>Content</TableCell>
                            <TableCell>Marked up</TableCell>
                            <TableCell>&nbsp;</TableCell>
                            <TableCell>&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {((log: Log) => (
                            <TableRow key={log.id}>
                                <TableCell>{log.id}</TableCell>
                                <TableCell component="th" scope="row">
                                    {log.categoryId}
                                </TableCell>
                                <TableCell>{log.categoryName}</TableCell>
                                <TableCell>{log.requestId}</TableCell>
                                <TableCell>{log.content}</TableCell>
                                { /*<input type="checkbox" defaultChecked={row.isMarkedUp}/> */}
                                <Checkbox defaultChecked={log.isMarkedUp}/>
                                <TableCell>
                                    <Button onClick={(e) => {
                                        stopEvent(e);
                                        this.props.onUpdateClick();
                                    }}>Update
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={(e) => {
                                        stopEvent(e);
                                        this.props.onDeleteClick();
                                    }}>Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

//export default withStyles(styles, { withTheme: true })(LogView);

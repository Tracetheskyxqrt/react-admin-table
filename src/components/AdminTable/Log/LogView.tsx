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


const StyledTableCell = withStyles((theme: Theme) =>
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
});

interface LogViewProps {
    log?: Log;
    onDeleteClick: () => any;
    onUpdateClick: () => any;
}

export default function LogView({log, onDeleteClick, onUpdateClick}: LogViewProps) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Category ID</StyledTableCell>
                        <StyledTableCell>Category name</StyledTableCell>
                        <StyledTableCell>Request ID</StyledTableCell>
                        <StyledTableCell>Content</StyledTableCell>
                        <StyledTableCell>Marked up</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                        <StyledTableCell>&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {((log: Log) => (
                        <StyledTableRow key={log.id}>
                            <StyledTableCell>{log.id}</StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {log.categoryId}
                            </StyledTableCell>
                            <StyledTableCell>{log.categoryName}</StyledTableCell>
                            <StyledTableCell>{log.requestId}</StyledTableCell>
                            <StyledTableCell>{log.content}</StyledTableCell>
                            <StyledTableCell><Checkbox defaultChecked={log.isMarkedUp}/></StyledTableCell>
                            <StyledTableCell>
                                <Button onClick={(e) => {
                                    stopEvent(e);
                                    onUpdateClick();
                                }}>Update
                                </Button>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Button onClick={(e) => {
                                    stopEvent(e);
                                    onDeleteClick();
                                }}>Delete
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

//export default withStyles(styles, { withTheme: true })(LogView);

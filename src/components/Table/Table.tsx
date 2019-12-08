import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Log} from "../../models/Log";
import Button from "../Shared/Button/Button";


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

function createData(id: string, categoryId: string, categoryName: string,
                    requestId: string, content: string, isMarkedUp: boolean) {
    return { id, categoryId, categoryName, requestId, content, isMarkedUp };
}

export const rows = [
    createData('1', '213', 'category1', '1', 'content1', true),
    createData('2', '123', 'category2', '2', 'content2',true),
    createData('3', '124', 'category3', '3', 'content3',true),
    createData('4', '345', 'category4', '4', 'content4',true),
    createData('5', '676', 'category5', '5', 'content1',false),
];

interface Props {
    rows: Array <Log>;
}


export default function CustomizedTables({rows}: Props) {
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell>{row.id}</StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {row.categoryId}
                            </StyledTableCell>
                            <StyledTableCell>{row.categoryName}</StyledTableCell>
                            <StyledTableCell>{row.requestId}</StyledTableCell>
                            <StyledTableCell>{row.content}</StyledTableCell>
                            <StyledTableCell>{row.isMarkedUp}</StyledTableCell>
                            <StyledTableCell><Button>Update</Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
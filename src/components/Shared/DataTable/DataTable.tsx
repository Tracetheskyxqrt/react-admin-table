import React, { Component, Props} from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Log} from "../../../models/Log";
import Button from "../Button/Button";
import {stopEvent} from "../../../lib/stopEvent";
import Checkbox from "../Checkbox/Checkbox";

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
});*/

interface DataTableProps {
    data: any[];
    onRowClick?: (row: any) => any;
    onUpdateClick: (log: Log) => any;
}

export default function DataTable({data, onRowClick, onUpdateClick}: DataTableProps) {
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
                    {data.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.categoryId}
                            </TableCell>
                            <TableCell>{row.categoryName}</TableCell>
                            <TableCell>{row.requestId}</TableCell>
                            <TableCell>{row.content}</TableCell>
                            { /*<input type="checkbox" defaultChecked={row.isMarkedUp}/> */}
                            <TableCell><Checkbox defaultChecked={row.isMarkedUp}/></TableCell>
                            <TableCell><Button onClick={(e) => {
                                stopEvent(e);
                                onUpdateClick(row);
                            }}>Update</Button></TableCell>
                            <TableCell><Button>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
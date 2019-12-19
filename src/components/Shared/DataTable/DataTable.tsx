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
import './DataTable.scss';

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

interface DataTableProps {
    data: any[];
    onRowClick?: (row: any) => any;
    onUpdateClick: (log: Log) => any;
    onDeleteClick: (id: string) => any;
}

export default function DataTable({data, onRowClick, onDeleteClick, onUpdateClick}: DataTableProps) {
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
                    {data.map(row => (
                        <StyledTableRow className ='table-row' key={row.id} onClick={() => onRowClick && onRowClick(row)}>
                            <StyledTableCell>{row.id}</StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {row.categoryId}
                            </StyledTableCell>
                            <StyledTableCell>{row.categoryName}</StyledTableCell>
                            <StyledTableCell>{row.requestId}</StyledTableCell>
                            <StyledTableCell>{row.content}</StyledTableCell>
                            <StyledTableCell><Checkbox defaultChecked={row.isMarkedUp}/></StyledTableCell>
                            <StyledTableCell><Button onClick={(e) => {
                                stopEvent(e);
                                onUpdateClick(row);
                            }}>Update</Button></StyledTableCell>
                            <StyledTableCell>< Button onClick={(e) => {
                                stopEvent(e);
                                onDeleteClick(row.id);
                            }}>Delete</Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}
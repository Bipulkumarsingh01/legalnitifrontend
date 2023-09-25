import { Button, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";



const Nicform = () => {
    const createData = (name: string,
        calories: number,
        fat: number,
        carbs: number,
        protein: number,) => {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const [code, setCode] = useState(false);
    const [frm, setFrm] = useState(false);


    return (
        <>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="NIC" onClick={() => setCode(true)} control={<Radio />} label="NIC" />
                <FormControlLabel value="HSN" onClick={() => setCode(true)} control={<Radio />} label="HSN" />
                <FormControlLabel value="SAC" onClick={() => setCode(true)} control={<Radio />} label="SAC" />

            </RadioGroup>
            <TextField id="outlined-basic" label="Product Description" variant="outlined" />
            <Button
                variant="contained"
                color="secondary"
                onClick={() => setFrm(true)}
                sx={{ marginLeft: 8 }}
            >
                Next
            </Button>

            {frm && (<TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Code</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>)}

        </>
    );
}

export default Nicform;
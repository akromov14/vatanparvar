import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Toshkent shahar', 998781503156, 102123, "Jumayev Aslam Xazratovich", "Toshkent sh, Osiyo kochasi,86a"),
    createData('Toshkent viloyati', 998903226029, 102123, "Jumayev Aslam Xazratovich", "Toshkent sh, Osiyo kochasi,86a"),
    createData('Buxoro viloyati', 998652238367, 102123, "Jumayev Aslam Xazratovich", "Toshkent sh, Osiyo kochasi,86a"),
    createData('Samarqand viloyati', 998911971515, 102123, "Jumayev Aslam Xazratovich", "Toshkent sh, Osiyo kochasi,86a"),
    createData('Xorazm viloyati', 998971495022, 102123, "Jumayev Aslam Xazratovich", "Toshkent sh, Osiyo kochasi,86a"),
    createData('Navoiy viloyati', 998781503156, 102123, "Jumayev Aslam Xazratovich", "Toshkent sh, Osiyo kochasi,86a"),
    createData('Surxondaryo viloyati', 998781503156, 102123, "Jumayev Aslam Xazratovich", "Toshkent sh, Osiyo kochasi,86a"),
    createData('Andijon viloyati', 998781503156, 102123, "Jumayev Aslam Xazratovich", "Toshkent sh, Osiyo kochasi,86a"),
    createData('Namangan viloyati', 998781503156, 102123, "Jumayev Aslam Xazratovich", "Toshkent sh, Osiyo kochasi,86a"),
    createData('Fargona viloyati', 998781503156, 102123, "Jumayev Aslam Xazratovich", "Toshkent sh, Osiyo kochasi,86a"),
    createData('Qashqadaryo viloyati', 998781503156, 102123, "Jumayev Aslam Xazratovich", "Toshkent sh, Osiyo kochasi,86a"),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Shahar/Viloyat</TableCell>
                        <TableCell align="right">Telefon nomer</TableCell>
                        <TableCell align="right">Indeks</TableCell>
                        <TableCell align="right">Shahar/Viloyat kengash raisi</TableCell>
                        <TableCell align="right">Manzil</TableCell>
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
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

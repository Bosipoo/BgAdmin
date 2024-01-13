import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TablePagination from '@mui/material/TablePagination'

const rows = Array.from({ length: 24 }, (_, index) => ({
    id: index + 1,
    name: `Record ${index + 1}`,
    email: `Email ${index + 1}`,
    phone: `Phone ${index + 1}`,
    vehicle: `Vehicle name ${index + 1}`,
    rating: `Rating ${index + 1}`,
    status: `Status ${index + 1}`,
  }));

const DriverListTable = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

  return (
    <TableContainer component={Paper} sx={{ borderRadius: '15px', marginTop: '20px', marginBottom: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderBottom: '2px solid #ddd', borderRadius: '15px 15px 0 0' }}>ID</TableCell>
            <TableCell sx={{ borderBottom: '2px solid #ddd', borderRadius: '15px 15px 0 0' }}>Name</TableCell>
            <TableCell sx={{ borderBottom: '2px solid #ddd', borderRadius: '15px 15px 0 0' }}>Email</TableCell>
            <TableCell sx={{ borderBottom: '2px solid #ddd', borderRadius: '15px 15px 0 0' }}>Phone Number</TableCell>
            <TableCell sx={{ borderBottom: '2px solid #ddd', borderRadius: '15px 15px 0 0' }}>Vehicle(s)</TableCell>
            <TableCell sx={{ borderBottom: '2px solid #ddd', borderRadius: '15px 15px 0 0' }}>Rating</TableCell>
            <TableCell sx={{ borderBottom: '2px solid #ddd', borderRadius: '15px 15px 0 0' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.vehicle}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}

export default DriverListTable

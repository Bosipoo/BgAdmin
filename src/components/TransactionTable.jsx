// import { Box, Typography, useTheme } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
// import React from 'react'
// import { mockDataTeam } from '../data/mockData';
// import { tokens } from '../theme';

// const TransactionTable = () => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     const columns = [
//         { field: "id", headerName: "ID" },
//         {
//           field: "driver",
//           headerName: "Driver",
//           flex: 1,
//         },
//         {
//           field: "trip_Info",
//           headerName: "Trip Info",
//           flex: 1,
//         },
//         {
//           field: "trip_Date",
//           headerName: "Trip Date",
//           flex: 1,
//         },
//         {
//           field: "revenue",
//           headerName: "Revenue",
//           flex: 1,
//           type: "number",
//           headerAlign: "left",
//           align: "left",
//         },
//         {
//           field: "deducted",
//           headerName: "Deducted",
//           flex: 1,
//           type: "number",
//           headerAlign: "left",
//           align: "left",
//         },
//         {
//           field: "payout",
//           headerName: "Payout",
//           flex: 1,
//         },
//       ];
//   return (
//     <Box>
//         <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//             "& .MuiDataGrid-root": {
//               border: "none",
//             },
//             "& .MuiDataGrid-cell": {
//               borderBottomColor: "black",
//               backgroundColor: colors.white[100],
//               borderBottomWidth:"1px",
//               fontFamily:"SatoshiBold"
//             },
//             "& .MuiDataGrid-cell:hover": {
//               backgroundColor: colors.grey[100],
//             },
//             "& .name-column--cell": {
//               color: colors.black[900],
//             },
//             "& .MuiDataGrid-columnHeaders": {
//               backgroundColor: "#E0E0E0",
//               borderBottom: "none",
//               borderRadius:"10px",
//               fontFamily:"SatoshiBold",
//               color:"#9E9E9E"

//             },
//             "& .MuiDataGrid-virtualScroller": {
//                 marginTop:1,
//                 borderRadius:"10px"
//               },
//             // "& .MuiDataGrid-footerContainer": {
//             //   borderTop: "none",
//             //   backgroundColor: colors.blueAccent[700],
//             // },
//             // "& .MuiCheckbox-root": {
//             //   color: `${colors.greenAccent[200]} !important`,
//             // },
//           }}>
//         <DataGrid rows={mockDataTeam} columns={columns} />
//     </Box>
//     </Box>
//   )
// }

// export default TransactionTable

import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../theme';

// Simple mock data class
class MockData {
  constructor(id, driver, tripInfo, tripDate, revenue, deducted, payout) {
    this.id = id;
    this.driver = driver;
    this.trip_Info = tripInfo;
    this.trip_Date = tripDate;
    this.revenue = revenue;
    this.deducted = deducted;
    this.payout = payout;
  }
}

const mockDataTeam = [
  new MockData(1, 'Driver 1', 'Trip 1', '2022-01-01', 100, 10, 90),
  new MockData(2, 'Driver 2', 'Trip 2', '2022-01-02', 150, 15, 135),
  new MockData(3, 'Driver 3', 'Trip 3', '2022-01-02', 150, 15, 135),
  new MockData(4, 'Driver 4', 'Trip 6', '2022-01-02', 150, 15, 135),
  new MockData(5, 'Driver 5', 'Trip 2', '2022-01-02', 150, 15, 135),
  new MockData(6, 'Driver 6', 'Trip 7', '2022-01-02', 150, 15, 135),
  new MockData(7, 'Driver 7', 'Trip 2', '2022-01-02', 150, 15, 135),
  new MockData(8, 'Driver 8', 'Trip 12', '2022-01-02', 150, 15, 135),
  new MockData(9, 'Driver 9', 'Trip 2', '2022-01-02', 150, 15, 135),
  new MockData(10, 'Driver 10', 'Trip 2', '2022-01-02', 150, 15, 135),
  new MockData(11, 'Driver 11', 'Trip 2', '2022-01-02', 150, 15, 135),
  new MockData(12, 'Driver 12', 'Trip 2', '2022-01-02', 150, 15, 135),
  new MockData(13, 'Driver 13', 'Trip 2', '2022-01-02', 150, 15, 135),
  new MockData(14, 'Driver 14', 'Trip 2', '2022-01-02', 150, 15, 135),
  // Add more data as needed
];

const TransactionTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, headerClassName: 'header-cell' },
    { field: 'driver', headerName: 'Driver', flex: 1, headerClassName: 'header-cell' },
    { field: 'trip_Info', headerName: 'Trip Info', flex: 1, headerClassName: 'header-cell' },
    { field: 'trip_Date', headerName: 'Trip Date', flex: 1, headerClassName: 'header-cell' },
    {
      field: 'revenue',
      headerName: 'Revenue',
      flex: 1,
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      headerClassName: 'header-cell',
    },
    {
      field: 'deducted',
      headerName: 'Deducted',
      flex: 1,
      type: 'number',
      headerAlign: 'left',
      align: 'left',
      headerClassName: 'header-cell',
    },
    { field: 'payout', headerName: 'Payout', flex: 1, headerClassName: 'header-cell' },
  ];

  return (
    <Box className="mt-3 h-75vh">
      <DataGrid
        rows={mockDataTeam}
        columns={columns}
        className="border-none"
        cellClassName={(params) => {
          return {
            borderBottomColor: 'black',
            backgroundColor: colors.white[100],
            borderBottomWidth: '1px',
            fontFamily: 'SatoshiBold',
          };
        }}
        hover
        headerClassName={{
          backgroundColor: '#E0E0E0',
          borderBottom: 'none',
          borderRadius: '10px',
          fontFamily: 'SatoshiBold',
          color: '#9E9E9E',
          fontSize: '10px', // Adjust font size as needed
        }}
        rowHoverClassName={{ backgroundColor: colors.grey[100] }}
        rowClassName={{ color: colors.black[900] }}
        virtualScrollerClassName={{ marginTop: 1, borderRadius: '10px' }}
      />
    </Box>
  );
};

export default TransactionTable;


// import {
//     React,
//     useState,
//     useEffect,
//     componentDidMount
// } from 'react';
// import {
//     getData,
//     keys
// } from '../services/data';
// import {
//     Paper,
//     Table,
//     TableBody,
//     TableHead,
//     TableCell,
//     TableContainer,
//     TableRow,
//     TablePagination,
// } from '@material-ui/core';
// import axios from 'axios';

// function DataLoading() {
//     const [data, setData] = useState([]);    

//     useEffect(async () => {
//         const data = await getData();
//         setData(data);
//         // setLoading(false);
//         }, []);
//     return (
//         <div>
//         {/* <p>{data}</p> */}
//             <TableContainer component={Paper}>
//                 <Table sx={{minWidth: 650}} aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                             {keys.map(key => (
//                                 <TableCell key={key}>{key}</TableCell>
//                             ))}
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {data.map(row => (
//                             <TableRow key={row.id}>
//                                 {keys.map(key => (
//                                     <TableCell key={key}>{row[key]}</TableCell>
//                                 ))}
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>

        
//         </div>
//     );
// }

// export default DataLoading;

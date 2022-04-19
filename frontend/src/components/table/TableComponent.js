// import { DataGrid } from "@mui/x-data-grid";
// import {} from "@mui/x-data-grid/themeAugmentation";
// import { useState, useEffect, React } from "react";
// import { getData } from "../../services/data";

// /*
// Columns:
// sl_no
// business_code
// business_name
// cust_number
// name_customer
// clear_date
// buisness_year
// doc_id
// posting_date
// document_create_date
// document_create_date.1
// due_in_date
// invoice_currency
// document_type
// posting_id
// area_business
// total_open_amount
// baseline_create_date
// cust_payment_terms
// invoice_id
// isOpen
// predicted
// */
// const columns = [
//   {
//     field: "sl_no",
//     headerName: "Sl No",
//     width: 70,
//   },
//   {
//     field: "business_code",
//     headerName: "Business Code",
//     width: 120,
//   },
//   // {
//   //     field:'business_name', headerName:'Business Name', width:200,
//   // },
//   {
//     field: "cust_number",
//     headerName: "Customer Number",
//     width: 150,
//   },
//   // {
//   //     field: 'name_customer',headerName: 'Customer Name',width: 200,
//   // },
//   {
//     field: "clear_date",
//     headerName: "Clear Date",
//     width: 100,
//   },
//   {
//     field: "buisness_year",
//     headerName: "Business Year",
//     width: 120,
//   },
//   {
//     field: "doc_id",
//     headerName: "Doc Id",
//     width: 100,
//   },
//   {
//     field: "posting_date",
//     headerName: "Posting Date",
//     width: 100,
//   },
//   {
//     field: "document_create_date",
//     headerName: "Document Create Date",
//     width: 170,
//   },
//   // {
//   //     field: 'document_create_date1',headerName: 'Document Create Date1',width: 170,
//   // },
//   {
//     field: "due_in_date",
//     headerName: "Due In Date",
//     width: 100,
//   },
//   {
//     field: "invoice_currency",
//     headerName: "Invoice Currency",
//     width: 130,
//     editable: true,
//   },
//   {
//     field: "document_type",
//     headerName: "Document Type",
//     width: 120,
//   },
//   {
//     field: "posting_id",
//     headerName: "Posting Id",
//     width: 100,
//   },
//   // {
//   //     field: 'area_business',headerName: 'Area Business',width: 120,
//   // },
//   {
//     field: "total_open_amount",
//     headerName: "Total Open Amount",
//     width: 150,
//   },
//   {
//     field: "baseline_create_date",
//     headerName: "Baseline Create Date",
//     width: 150,
//   },
//   {
//     field: "cust_payment_terms",
//     headerName: "Cust Payment Terms",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "invoice_id",
//     headerName: "Invoice Id",
//     width: 100,
//   },
//   // {
//   //     field: 'isOpen',headerName: 'Is Open',width: 100,
//   // },
//   {
//     field: "predicted",
//     headerName: "Predicted",
//     width: 100,
//   },
// ];

// const TableComponent = ({data,loading}) => {
// const [search, setSearch] = useState("");

// //no of rows selected


//   return (
//     <div
//       style={{
//         width: "100%",
//         height: 350,
//         marginTop: "/vh",
//         backgroundColor: "#283D4A",
//       }}
//     >
//       <DataGrid
//         sx={{
//           "& .MuiTablePagination-root": {
//             color: "white",
//           },
//           "& .MuiTablePagination-selectIcon": {
//             color: "white",
//           },
//           "& .MuiButtonBase-root": {
//             color: "white",
//           },
//         }}
//         getRowId={(row) => row.sl_no}
//         rowHeight={30}
//         rows={data}
//         columns={columns}
//         rowsPerPageOptions={[5, 10, 20, 50, 100]}
//         checkboxSelection
//         style={{
//           color: "white",
//           backgroundColor: "#283D4A",
//           borderRadius: "10px",
//           boxShadow: "0px 0px 10px black",
//         }}
//         initialState={{
//           pagination: {
//             pageSize: 10,
//           },
//         }}
//         loading={loading}
//       />
//     </div>
//   );
// };

// export default TableComponent;

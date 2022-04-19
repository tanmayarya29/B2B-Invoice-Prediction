import "./App.css";
// import DataLoading from './components/dataLoading';
// import TableComponent from './components/table/TableComponent';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { DataGrid } from "@mui/x-data-grid";
import {} from "@mui/x-data-grid/themeAugmentation";
import { useState, useEffect, React ,useRef} from "react";
import { getData,search } from "./services/data";
function App() {
  const columns = [
    {
      field: "sl_no",
      headerName: "Sl No",
      width: 70,
    },
    {
      field: "business_code",
      headerName: "Business Code",
      width: 120,
    },
    // {
    //     field:'business_name', headerName:'Business Name', width:200,
    // },
    {
      field: "cust_number",
      headerName: "Customer Number",
      width: 150,
    },
    // {
    //     field: 'name_customer',headerName: 'Customer Name',width: 200,
    // },
    {
      field: "clear_date",
      headerName: "Clear Date",
      width: 100,
    },
    {
      field: "buisness_year",
      headerName: "Business Year",
      width: 120,
    },
    {
      field: "doc_id",
      headerName: "Doc Id",
      width: 100,
    },
    {
      field: "posting_date",
      headerName: "Posting Date",
      width: 100,
    },
    {
      field: "document_create_date",
      headerName: "Document Create Date",
      width: 170,
    },
    // {
    //     field: 'document_create_date1',headerName: 'Document Create Date1',width: 170,
    // },
    {
      field: "due_in_date",
      headerName: "Due In Date",
      width: 100,
    },
    {
      field: "invoice_currency",
      headerName: "Invoice Currency",
      width: 130,
      editable: true,
    },
    {
      field: "document_type",
      headerName: "Document Type",
      width: 120,
    },
    {
      field: "posting_id",
      headerName: "Posting Id",
      width: 100,
    },
    // {
    //     field: 'area_business',headerName: 'Area Business',width: 120,
    // },
    {
      field: "total_open_amount",
      headerName: "Total Open Amount",
      width: 150,
    },
    {
      field: "baseline_create_date",
      headerName: "Baseline Create Date",
      width: 150,
    },
    {
      field: "cust_payment_terms",
      headerName: "Cust Payment Terms",
      width: 150,
      editable: true,
    },
    {
      field: "invoice_id",
      headerName: "Invoice Id",
      width: 100,
    },
    // {
    //     field: 'isOpen',headerName: 'Is Open',width: 100,
    // },
    {
      field: "aging_bucket",
      headerName: "Aging bucket",
      width: 150,
    },
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  //
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [rowCountState, setRowCountState] = useState(count||0);
  
  const handlePageChange = (page) => {
    setPage(page);
  };

  const handlePageSize= (pagesize) => {
    setRowsPerPage(pagesize);
  };
  //
  const [sortModel, setSortModel] = useState([
    {
      field: "sl_no",
      sort: "asc",
    },
  ]);
  const [orderby, setOrderby] = useState("sl_no");
  const [order, setOrder] = useState("ASC");


  useEffect(async () => {
    // console.log("1");
    setCount(undefined);
    const data = await getData(
      rowsPerPage,
      page,
      orderby,
      order,
    );
    setData(data['invoiceDatas']);
    setCount(data['count']);
    setLoading(false);
  }, [rowsPerPage, page, orderby, order]);  

  const handleRefresh = async () => {
    // console.log("2");
    setLoading(true);
    const data = await getData(
      rowsPerPage,
      page,
      orderby,
      order,
    );
    setData(data['invoiceDatas']);
    setCount(data['count']);
    setRowCountState(count);
    setLoading(false);
  };

  useEffect(() => {
    setRowCountState((prevRowCountState) => 
      count !== undefined  ? count : prevRowCountState,
    );
  }, [count, setRowCountState]);

  //search customer number
  const handleSearchCustomerNumber = async (e) => {
    setLoading(true);
    const data = await search(e.target.value);
    setData(data['invoiceDatas']);
    setCount(data['count']);
    setRowCountState(count);
    setLoading(false);
  };


  const handleSort = (newModel) => {
    setSortModel(newModel);
    // console.log(newModel);
    if(newModel.length>0){
    setOrderby(newModel[0].field);
    setOrder(newModel[0].sort);
    }
    setPage(0);
    handleRefresh();
  };

  return (
    <div className="App">
      <Navbar
        selectedRows={data===undefined?[]:data.filter((row) => selectedRows.includes(row.sl_no))}
        setData={setData}
        setLoading={setLoading}
        handleRefresh={handleRefresh}
        handleChange={handleSearchCustomerNumber}
      />
      <div
        style={{
          width: "100%",
          height: 350,
          marginTop: "/vh",
          backgroundColor: "#283D4A",
        }}
      >
        <DataGrid
          sx={{
            "& .MuiTablePagination-root": {
              color: "white",
            },
            "& .MuiTablePagination-selectIcon": {
              color: "white",
            },
            "& .MuiButtonBase-root ": {
              color: "white",
            },
          }}
          getRowId={(row) => row.sl_no}
          rowHeight={30}
          rows={data||[]}
          columns={columns}
          rowsPerPageOptions={[10, 20, 50, 100]}
          paginationMode="server"
          rowCount={rowCountState}
          // onPageSizeChange={handleChangeRowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          pageSize={rowsPerPage}
          onPageSizeChange={handlePageSize}
          pagination
          checkboxSelection
          style={{
            color: "white",
            backgroundColor: "#283D4A",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px black",
          }}
          loading={loading}
          disableSelectionOnClick
          onSelectionModelChange={(rows) => {
            setSelectedRows(rows);
            // console.log(rows, data.filter((row) => rows.includes(row.sl_no)));
          }}
          //
          sortingMode="server"
          sortModel={sortModel}
          onSortModelChange={handleSort}
          ons
        />
      </div>
      <Footer />
    </div>
  );
}
export default App;

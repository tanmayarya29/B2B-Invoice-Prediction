import { React, useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  ButtonGroup,
  TextField,
  Icons,
  Tabs,
  Tab,
  TabContext,
  TabPanel,
  Box,
  value,
  handleChange,
  TabList,
} from "@mui/material";
import "./Navbar.css";
import AnalyticsView from "../AnalyticsView/AnalyticsView";
import AdvancedSearch from "../AdvancedSearch/AdvancedSearch";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Add from "../Add/Add";
import Edit from "../Edit/Edit";
import Delete from "../Delete/Delete";
import { getData,advsearch, predict } from "../../services/data";

const Navbar = ({selectedRows,setLoading,setData,handleRefresh,handleChange}) => {
  //Advance Search modal
  const [openAdvanceSearch, setOpenAdvanceSearch] = useState(false);
  const handleAdvanceSearchOpen = () => {
    setOpenAdvanceSearch(true);
  };
  const handleAdvanceSearchClose = () => {
    setOpenAdvanceSearch(false);
  };
  //Analytics view modal
  const [openAnalyticsView, setOpenAnalyticsView] = useState(false);
  const handleAnalyticsViewOpen = () => {
    setOpenAnalyticsView(true);
  };
  const handleAnalyticsViewClose = () => {
    setOpenAnalyticsView(false);
  };
  const handleAnalyticsView = () => {
    setOpenAnalyticsView(false);
  };

  // add modal
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // edit modal
  const [openEdit, setOpenEdit] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [sl_no, setSl_no] = useState(0);
  const [invoice_currency, setInvoice_currency] = useState("");
  const [cust_payment_terms, setCust_payment_terms] = useState("");
  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  useEffect(() => {
    if (selectedRows.length === 1) {
      setIsDisabled(false);
      setSl_no(selectedRows[0].sl_no);
      setInvoice_currency(selectedRows[0].invoice_currency);
      setCust_payment_terms(selectedRows[0].cust_payment_terms);
    } else {
      setIsDisabled(true);
    }
  }, [selectedRows]);

  // delete modal
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  //predict handler
  const [doc_id, setDoc_id] = useState([]);
  useEffect(() => {
    if (selectedRows.length > 0) {
      setDoc_id(selectedRows.map(item => item.doc_id));
    }
  }, [selectedRows]);
  const handlePredict = async () => {
    setLoading(true);
    if(doc_id.length>0){
    const res = await predict(doc_id);
    handleRefresh();
    setLoading(false);
    }
  };




  return (
    <>
      <Grid
        style={{ backgroundColor: "#2D4250", color: "white" }}
        container
        padding={1}
      >
        <Grid justifyContent="flex-start" item xs={12} md={3}>
          <img src="abc.png" height="40px"></img>
          <Typography style={{ display: "inline" }} variant="h5">
            ABC Products
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="hrc.png" alt="highradius" height="40px" />
        </Grid>
        <Grid item xs={0} lg={3}></Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h6">Invoice List</Typography>
        </Grid>
      </Grid>
      <Grid
        style={{ backgroundColor: "#283D4A", color: "white" }}
        padding={1}
        container
      >
        {/* left button */}
        <Grid item xs={12} lg={5} padding={1}>
          <ButtonGroup
            style={{ margin: 1}}
            variant="outlined"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button 
            className="LeftBtn"
            disabled={selectedRows.length === 0}
            onClick={handlePredict}
            >PREDICT</Button>
            <Button className="LeftBtn" onClick={handleAnalyticsViewOpen}>
              ANALYTICS VIEW
            </Button>
            <Button className="LeftBtn" onClick={handleAdvanceSearchOpen}>
              ADVANCED SERCH
            </Button>
          </ButtonGroup>
          <Button
            onClick={handleRefresh}
            style={{ margin: "2px"}}
            className="LeftBtn"
            variant="outlined"
          >
            <RestartAltIcon />
          </Button>
        </Grid>
        {/* centre button */}
        <Grid item xs={12} lg={2}>
          <TextField
            style={{ marginTop: "4px" }}
            size="small"
            fullWidth
            className="SearchBox"
            id="filled-basic"
            label="Search Customer id"
            variant="filled"
            onChange={handleChange}
          />
        </Grid>
        {/* right button */}
        <Grid item xs={12} lg={5} padding={1}>
          <ButtonGroup
            style={{ margin: 1}}
            fullWidth
            variant="outlined"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button className="LeftBtn" onClick={handleClickOpen}>
              Add
            </Button>
            <Button
              className="LeftBtn"
              onClick={handleClickOpenEdit}
              disabled={isDisabled}
            >
              Edit
            </Button>
            <Button
              className="LeftBtn"
              onClick={handleClickOpenDelete}
              disabled={selectedRows.length === 0}
            >
              Delete
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>

      {/* modals */}
      <AdvancedSearch
        open={openAdvanceSearch}
        handleClose={handleAdvanceSearchClose}
        setData={setData}
      />
      <AnalyticsView
        open={openAnalyticsView}
        handleClose={handleAnalyticsViewClose}
        handleAnalyse={handleAnalyticsView}
      />
      <Add
        open={open}
        handleClose={handleClose}
        handleRefresh={handleRefresh}
        // handleSubmit={handleAdd}
      />
      <Edit
        open={openEdit}
        handleClose={handleCloseEdit}
        handleRefresh={handleRefresh}
        isDisabled={isDisabled}
        sl_no={sl_no}
        invoice_currency={invoice_currency}
        cust_payment_terms={cust_payment_terms}
      />
      <Delete
        open={openDelete}
        handleClose={handleCloseDelete}
        selectedRowsSl_no={selectedRows.map((row) => row.sl_no)}
        handleRefresh={handleRefresh}
      />
    </>
  );
};

export default Navbar;

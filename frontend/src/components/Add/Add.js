import { React, useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import "./Add.css";
import { AddInvoiceData } from "../../services/data";

const Add = (props) => {
  const [invoiceData, setInvoiceData] = useState({
    business_code: "",
    cust_number: "",
    clear_date: new Date().toISOString().split("T")[0],
    buisness_year: "",
    doc_id: "",
    posting_date: new Date().toISOString().split("T")[0],
    document_create_date: new Date().toISOString().split("T")[0],
    due_in_date: new Date().toISOString().split("T")[0],
    invoice_currency: "",
    document_type: "",
    posting_id: "",
    total_open_amount: "",
    baseline_create_date: new Date().toISOString().split("T")[0],
    cust_payment_terms: "",
    invoice_id: "",
  });
  const {
    business_code,
    cust_number,
    clear_date,
    buisness_year,
    doc_id,
    posting_date,
    document_create_date,
    due_in_date,
    invoice_currency,
    document_type,
    posting_id,
    total_open_amount,
    baseline_create_date,
    cust_payment_terms,
    invoice_id,
  } = invoiceData;

  const handleChange = (e) => {
    setInvoiceData({ ...invoiceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // console.log(props.totalRows);
    e.preventDefault();
    if (
      business_code === "" ||
      cust_number === "" ||
      posting_id === "" ||
      total_open_amount === "" ||
      invoice_id === ""||
      buisness_year === ""
      //  ||
      // clear_date === "" ||
      // buisness_year === "" ||
      // doc_id === "" ||
      // posting_date === "" ||
      // document_create_date === "" ||
      // due_in_date === "" ||
      // invoice_currency === "" ||
      // document_type === "" ||
      // posting_id === "" ||
      // total_open_amount === "" ||
      // baseline_create_date === "" ||
      // cust_payment_terms === "" ||
      // invoice_id === ""

    ) {
      alert("Please fill all the required fields");
    } else {
      let response = await AddInvoiceData(invoiceData);
      if (response.data.Status == "Success") {
        setInvoiceData({
          business_code: "",
          cust_number: "",
          clear_date: new Date().toISOString().split("T")[0],
          buisness_year: "",
          doc_id: "",
          posting_date: new Date().toISOString().split("T")[0],
          document_create_date: new Date().toISOString().split("T")[0],
          due_in_date: new Date().toISOString().split("T")[0],
          invoice_currency: "",
          document_type: "",
          posting_id: "",
          total_open_amount: "",
          baseline_create_date: new Date().toISOString().split("T")[0],
          cust_payment_terms: "",
          invoice_id: "",
        });
        props.handleClose();
        props.handleRefresh();
        alert("Data added successfully");
      } else {
        alert("Error in adding data");
      }
    }
  };

  return (
    <>
      <Dialog
        maxWidth="xl"
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
        sx={
          {
            "& .MuiPaper-root": {
              backgroundColor: "#2A3E4C",
              color: "white",
            },
            "& .MuiDialogContentText-root": {
              color: "white",
            },
          }
        }
      >
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the customer details.
          </DialogContentText>
          <Grid container spacing={2}
          sx={{
            "& .MuiTextField-root": {
              backgroundColor: "white",
            },
            "& .MuiFormControl-root": {
              backgroundColor: "white",
            },
            "& .MuiFormControl-root": {
              borderRadius: "10px",
            },
          }}
          >
            <Grid item xs={12} md={3}>
              <TextField
                autoFocus
                margin="dense" variant="filled" 
                id="business_code"
                name="business_code"
                label="Business Code"
                type="text"
                fullWidth
                required
                onChange={handleChange}
                value={business_code}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="cust_number"
                name="cust_number"
                label="Customer Number"
                type="text"
                fullWidth
                required
                onChange={handleChange}
                value={cust_number}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="clear_date"
                name="clear_date"
                label="Clear Date"
                type="date"
                fullWidth
                
                onChange={handleChange}
                value={clear_date}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="buisness_year"
                name="buisness_year"
                label="Business Year"
                type="text"
                fullWidth
                required
                onChange={handleChange}
                value={buisness_year}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="doc_id"
                name="doc_id"
                label="Documnet Id"
                type="text"
                fullWidth
                
                onChange={handleChange}
                value={doc_id}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="posting_date"
                name="posting_date"
                label="Posting Date"
                type="date"
                fullWidth
                
                onChange={handleChange}
                value={posting_date}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="document_create_date"
                name="document_create_date"
                label="Document Create Date"
                type="date"
                fullWidth
                
                onChange={handleChange}
                value={document_create_date}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="due_in_date"
                name="due_in_date"
                label="Due In Date"
                type="date"
                fullWidth
                
                onChange={handleChange}
                value={due_in_date}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="invoice_currency"
                name="invoice_currency"
                label="Invoice Currency"
                type="text"
                fullWidth
                
                onChange={handleChange}
                value={invoice_currency}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="document_type"
                name="document_type"
                label="Document Type"
                type="text"
                fullWidth
                
                onChange={handleChange}
                value={document_type}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="posting_id"
                name="posting_id"
                label="Posting Id"
                type="text"
                fullWidth
                required
                onChange={handleChange}
                value={posting_id}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="total_open_amount"
                name="total_open_amount"
                label="Total Open Amount"
                type="text"
                fullWidth
                required
                onChange={handleChange}
                value={total_open_amount}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="baseline_create_date"
                name="baseline_create_date"
                label="Baseline Create Date"
                type="date"
                fullWidth
                
                onChange={handleChange}
                value={baseline_create_date}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="cust_payment_terms"
                name="cust_payment_terms"
                label="Customer Payment Terms"
                type="text"
                fullWidth
                
                onChange={handleChange}
                value={cust_payment_terms}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                margin="dense" variant="filled" 
                id="invoice_id"
                name="invoice_id"
                label="Invoice ID"
                type="text"
                fullWidth
                required
                onChange={handleChange}
                value={invoice_id}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            onClick={handleSubmit}
            color="primary"
            variant="outlined"
            style={{
              color:"white",
              borderColor:"white",
            }}
          >
            Add
          </Button>
          <Button
            fullWidth
            onClick={props.handleClose}
            color="primary"
            variant="outlined"
            style={{
              color:"white",
              borderColor:"white",
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      {/* <Button onClick={handleClickOpen}>Add Customer</Button>   */}
    </>
  );
};

export default Add;

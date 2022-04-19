import { React, useState } from "react";
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
import {advsearch} from '../../services/data';

const AdvancedSearch = (props) => {
  //docid,invoiceid,custnumber,businessyear
  const [doc_id, setDocId] = useState("");
  const [invoice_id, setInvoiceId] = useState("");
  const [cust_number, setCustNumber] = useState("");
  const [buisness_year, setBuisnessYear ] = useState("");

  const handleSearch = async() => {

    if(doc_id === "" && invoice_id === "" && cust_number === "" && buisness_year === ""){
      alert("Please enter atleast one field");
    }
    else{
    let response = await advsearch(
      doc_id,
      invoice_id,
      cust_number,
      buisness_year
    );
    // console.log(response.invoiceDatas);
      props.setData(response.invoiceDatas);
      setDocId("");
      setInvoiceId("");
      setCustNumber("");
      setBuisnessYear("");
      props.handleClose();
    }
  }

  return (
    <>
      <Dialog
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
        <DialogTitle id="form-dialog-title">Advanced Search</DialogTitle>
        <DialogContent>
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
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                margin="dense" variant="filled" 
                id="doc_id"
                label="Document ID"
                type="text"
                fullWidth
                value={doc_id}
                onChange={(e) => setDocId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense" variant="filled" 
                id="invoice_id"
                label="Invoice ID"
                type="text"
                fullWidth
                value={invoice_id}
                onChange={(e) => setInvoiceId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense" variant="filled" 
                id="cust_number"
                label="Customer Number"
                type="text"
                fullWidth
                value={cust_number}
                onChange={(e) => setCustNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense" variant="filled" 
                id="buisness_year"
                label="Business Year"
                type="text"
                fullWidth
                value={buisness_year}
                onChange={(e) => setBuisnessYear(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            onClick={handleSearch}
            color="primary"
            variant="outlined"
            style={{
              color:"white",
              borderColor:"white",
            }}
          >
            Search
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
    </>
  );
};

export default AdvancedSearch;

import { React, useEffect, useState } from "react";
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
import { UpdateInvoiceData } from "../../services/data";

const Edit = (props) => {
  const [invoice_currency, setInvoice_currency] = useState(props.invoice_currency);
  const [cust_payment_terms, setCust_payment_terms] = useState(props.cust_payment_terms);

  useEffect(() => {
    setInvoice_currency(props.invoice_currency);
    setCust_payment_terms(props.cust_payment_terms);
  }, [props.invoice_currency, props.cust_payment_terms]);

  const handleEdit = async () => {
    let response = await UpdateInvoiceData(
      props.sl_no,
      invoice_currency,
      cust_payment_terms
    );
    console.log(response);
    if (response.data.Status === "Success") {
      alert("Data Updated Successfully");
      setInvoice_currency("");
      setCust_payment_terms("");
      props.handleClose();
      props.handleRefresh();
    } else {
      alert("Error Updating Data");
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
        <DialogTitle id="form-dialog-title">Edit</DialogTitle>
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
                id="invoice_currency"
                label="Invoice Currency"
                type="text"
                fullWidth
                value={invoice_currency}
                onChange={(e) => setInvoice_currency(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                margin="dense" variant="filled" 
                id="cust_payment_terms"
                label="Customer Payment Terms"
                type="text"
                fullWidth
                value={cust_payment_terms}
                onChange={(e) => setCust_payment_terms(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            onClick={handleEdit}
            color="primary"
            variant="outlined"
            style={{
              color:"white",
              borderColor:"white",
            }}
          >
            Edit
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

export default Edit;

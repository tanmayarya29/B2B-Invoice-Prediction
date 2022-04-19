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
import { DeleteInvoiceData } from "../../services/data";

const Delete = (props) => {
  const [selectedRowsSl_no, setSelectedRowsSl_no] = useState(
    props.selectedRowsSl_no
  );

  useEffect(() => {
    setSelectedRowsSl_no(props.selectedRowsSl_no);
  }, [props.selectedRowsSl_no]);

  const handleDelete = async () => {
    let response = await DeleteInvoiceData(selectedRowsSl_no);
    if (response.data.Status === "Success") {
      alert("Data Deleted Successfully");
      props.handleClose();
      props.handleRefresh();
    } else {
      alert("Error Deleting Data");
    }
  };

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
        <DialogTitle id="form-dialog-title">Delete Records?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this record[s]?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
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
          <Button
            fullWidth
            onClick={handleDelete}
            color="primary"
            variant="outlined"
            style={{
              color:"white",
              borderColor:"white",
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Delete;

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
import Graph from "./Graph/Graph";
import { barChart,pieChart } from "../../services/data";

const AnalyticsView = (props) => {
  const [graphOpen, setGraphOpen] = useState(false);

  const [clear_date_start, setClear_date_start] = useState("1990-01-01");
  const [clear_date_end, setClear_date_end] = useState("2022-01-01");
  const [due_date_start, setDue_date_start] = useState("1990-01-01");
  const [due_date_end, setDue_date_end] = useState("2022-01-01");
  const [baseline_create_date_start, setBaseline_create_date_start] = useState("1990-01-01");
  const [baseline_create_date_end, setBaseline_create_date_end] = useState("2022-01-01");
  const [invoice_currency, setInvoice_currency] = useState("USD");

  //bar chart
  const [labels, setLabels] = useState(["jan","feb","mar"]);
  const [noc,setNoc] = useState([1,2,3]);
  const [toa,setToa] = useState([3,2,1]);

  //pie chart
  const [pieChartdata,setPieChartdata] = useState({
    usd:12,
    cad:23,
  });


  const handleGraphOpen = async() => {
    if(clear_date_start==="" || clear_date_end==="" || due_date_start==="" || due_date_end==="" || baseline_create_date_start==="" || baseline_create_date_end==="" || invoice_currency===""){
      alert("Please fill all the fields");
    }
    else{
    let respBar = await barChart(
      clear_date_start,
      clear_date_end,
      due_date_start,
      due_date_end,
      baseline_create_date_start,
      baseline_create_date_end,
      invoice_currency
    );
    setLabels(respBar.data.map((x) => x.business_code));
    setToa(respBar.data.map((x) => x.total_open_amount));
    setNoc(respBar.data.map((x) => x.noc));

    let respPie = await pieChart(
      clear_date_start,
      clear_date_end,
      due_date_start,
      due_date_end,
      baseline_create_date_start,
      baseline_create_date_end
    );
    setPieChartdata({
      usd:respPie.data[0].curr,
      cad:respPie.data[1].curr,
    });
    setGraphOpen(true);
    props.handleClose();
  }
  };
  const handleGraphClose = () => {
    setGraphOpen(false);
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
        <DialogTitle id="form-dialog-title">Analytics View</DialogTitle>
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
              <Typography variant="h6">Clear Date</Typography>
              <TextField
                autoFocus
                margin="dense" variant="filled" 
                id="clear_date_start"
                type="date"
                fullWidth
                value={clear_date_start}
                onChange={(e) => setClear_date_start(e.target.value)}
              />
              <TextField
                margin="dense" variant="filled" 
                id="clear_date_end"
                type="date"
                fullWidth
                value={clear_date_end}
                onChange={(e) => setClear_date_end(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Due Date</Typography>
              <TextField
                margin="dense" variant="filled" 
                id="due_date_start"
                type="date"
                fullWidth
                value={due_date_start}
                onChange={(e) => setDue_date_start(e.target.value)}
              />
              <TextField
                margin="dense" variant="filled" 
                id="due_date_end"
                type="date"
                fullWidth
                value={due_date_end}
                onChange={(e) => setDue_date_end(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Baseline Create Date</Typography>
              <TextField
                margin="dense" variant="filled" 
                id="baseline_create_date_start"
                type="date"
                fullWidth
                value={baseline_create_date_start}
                onChange={(e) => setBaseline_create_date_start(e.target.value)}
              />
              <TextField
                margin="dense" variant="filled" 
                id="baseline_create_date_end"
                type="date"
                fullWidth
                value={baseline_create_date_end}
                onChange={(e) => setBaseline_create_date_end(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Invoice Currency</Typography>
              <TextField
                margin="dense" variant="filled" 
                id="invoice_currency"
                type="text"
                fullWidth
                value={invoice_currency}
                onChange={(e) => setInvoice_currency(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            fullWidth
            onClick={handleGraphOpen}
            color="primary"
            variant="outlined"
            style={{
              color:"white",
              borderColor:"white",
            }}
          >
            Submit
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
      {/* graph dialog */}
      <Graph 
        open={graphOpen}
        handleClose={handleGraphClose}
        labels={labels}
        noc={noc}
        toa={toa}
        pieChart={pieChartdata}
      />
    </>
  );
};

export default AnalyticsView;

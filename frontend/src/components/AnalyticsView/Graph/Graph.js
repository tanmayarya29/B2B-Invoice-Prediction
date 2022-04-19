import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie,Bar } from "react-chartjs-2";
import Grid from "@mui/material/Grid";


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Graph = ({ labels, noc, toa, pieChart, open, handleClose }) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "sticky" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flex: 1 }}>
              Analytics View
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid
            container
            spacing={7}
            paddingLeft={10}
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={9} margin={2}>
            <Bar 
          data={{
            labels: labels,
            datasets: [
                {
                    label: 'No of Customers',   
                    data: noc,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1

                },
                {
                    label: 'Total Open Amount',
                    data: toa,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
            ]
            }}
          />
                </Grid>
            <Grid item xs={5} margin={2}>
            <Pie
            data={{
              labels: ["USD", "CAD"],
              datasets: [
                {
                  data: [pieChart.usd, pieChart.cad],
                  backgroundColor: ["#FF6384", "#36A2EB"],
                },
              ],
            }}
          />
                </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};

export default Graph;

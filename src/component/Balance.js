import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useContext } from "react";
import ExpenseContext from "../ExpenseContext";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

function Balance() {
  const classes = useStyles();
  const { state } = useContext(ExpenseContext);

  function myFunc(total, num) {
    return total + parseInt(num.amount);
  }
  const balance = state.reduce(myFunc, 0);

  const income = state.filter((i) => i.type === "income").reduce(myFunc, 0);
  const expense = state.filter((i) => i.type === "expense").reduce(myFunc, 0);
  return (
    <div>
      <Card className="exp-container">
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            Your Balance
          </Typography>
          <Typography className={classes.title} gutterBottom>
            $ {balance}
          </Typography>
        </CardContent>
      </Card>

      <Card className="exp-container">
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            Total Income
          </Typography>
          <Typography className={classes.title} gutterBottom>
            $ {income}
          </Typography>
        </CardContent>
        <Divider orientation="vertical" flexItem />
        <CardContent>
          <Typography className={classes.title} gutterBottom>
            Total Expense
          </Typography>
          <Typography className={classes.title} gutterBottom>
            $ {expense}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Balance;

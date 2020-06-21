import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useContext, useState } from "react";
import ExpenseContext from "../ExpenseContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  small: {
    fontSize: 8,
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const { dispatch } = useContext(ExpenseContext);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          New Transaction
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            autoFocus
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="amount"
            label="amount"
            type="number"
            id="amount"
            autoComplete="amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <Typography className={classes.small} gutterBottom>
            Use -ve Amount for Expense
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              if (amount != 0) {
                let uniqueId =
                  Math.random().toString(36).substring(2) +
                  Date.now().toString(36);
                dispatch({
                  type: "ADD",
                  payload: {
                    id: uniqueId,
                    type: amount > 0 ? "income" : "expense",
                    amount,
                    desc,
                  },
                });
                setAmount(0);
                setDesc("");
              }
            }}
          >
            Add Transaction
          </Button>
        </form>
      </div>
    </Container>
  );
}

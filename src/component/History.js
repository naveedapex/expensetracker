import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useContext } from "react";
import ExpenseContext from "../ExpenseContext";
function History() {
  const { state, dispatch } = useContext(ExpenseContext);
  return (
    <div>
      <h2>History</h2>
      <List>
        {state.map((record) => (
          <ListItem
            key={record.id}
            className={
              record.type == "income"
                ? "history-item-income"
                : "history-item-expense"
            }
          >
            <ListItemText primary={record.desc} />
            <ListItemText primary={"$" + record.amount} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon
                  onClick={() => {
                    dispatch({ type: "DEL", payload: { id: record.id } });
                  }}
                />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default History;

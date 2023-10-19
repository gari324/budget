
import { useBudget } from "../../store/useBudget";
import { useState } from "react";

export default function AddExpenseForm() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const addExpense = useBudget((state) => state.addExpense);

  const onSubmit = (event) => {
    event.preventDefault();

    addExpense(name, cost);

    setName("");
    setCost(0);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            id="name"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            required
            id="cost"
            className="form-control"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <div className="col-sm d-flex align-items-end">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
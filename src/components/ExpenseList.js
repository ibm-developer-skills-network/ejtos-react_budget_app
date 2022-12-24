import { useDispatch, useSelector } from "react-redux";
import { DeleteExpenseAction } from "../action";
import ExpenseItemComponent from "./ExpenseItem";


const ExpenseListComponent = () => {

    const expenseList = useSelector((state)=>state.ExpenseListReducer);
    const currentCurrencyObject = useSelector((state)=>state.CurrencyReducer.currentCurrency)
    const currentCurrencySymbol = Object.values(currentCurrencyObject)[0]
    const dispatch = useDispatch();

    const handleRemoveExpense = (id) => {
        dispatch(DeleteExpenseAction(id));
    };

    return (
        <div class="expense-list-div">
            <h3>Allocation</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Department</th>
                        <th scope="col">Allocation budget</th>
                        <th scope="col">Increase by 10</th>
                        <th scope="col">Decrease by 10</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {expenseList.map((expense, index) => (
                        <ExpenseItemComponent
                        id={index}
                        department={expense.department}
                        currency={currentCurrencySymbol}
                        allocation={expense.allocation}
                        onRemove={handleRemoveExpense}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseListComponent;
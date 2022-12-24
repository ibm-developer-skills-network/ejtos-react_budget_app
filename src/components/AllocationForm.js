import { useDispatch, useSelector } from "react-redux";
import { AddExpenseAction, SubtractExpenseAction } from "../action";

const AllocationFormComponent = () => {

    const currentCurrencyObject = useSelector((state) => state.CurrencyReducer.currentCurrency);
    const currentCurrencySymbol = Object.values(currentCurrencyObject)[0];
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const department = form.elements.department.value;
        const allocation = parseInt(form.elements.allocation.value, 10);
        const allocationAction = form.elements.allocationAction.value;

        switch (allocationAction) {
            case 'ADD EXPENSE':
                dispatch(AddExpenseAction(department, allocation));
                break;
            case 'SUBTRACT EXPENSE':
                dispatch(SubtractExpenseAction(department, allocation));
                break;
            default:
                alert('Please complete the form correctly.');
                break;
        }
        form.reset();
    };

    return (
        <div class="container mt-4">
            <h3>Change Allocation</h3>
            <form onSubmit={handleSubmit} className="form-inline">
                <div class="row">
                    <div className="col-auto bg-light border p-2 ml-2">
                        <label htmlFor="department">Department</label>
                    </div>
                    <div className="col-auto border p-2">
                        <select name="department" className="form-control">
                            <option value="Marketing">Marketing</option>
                            <option value="Finance">Finance</option>
                            <option value="Sales">Sales</option>
                            <option value="Human Resource">Human Resource</option>
                            <option value="IT">IT</option>
                        </select>
                    </div>
                    <div className="col-auto bg-light border p-2 ml-2">
                        <label htmlFor="allocationAction">Allocation</label>
                    </div>
                    <div className="col-auto border p-2">
                        <select name="allocationAction" className="form-control">
                            <option value="ADD EXPENSE">Add</option>
                            <option value="SUBTRACT EXPENSE">Subtract</option>
                        </select>
                    </div>
                    <label htmlFor="allocation" className="col-auto ml-2">
                        {currentCurrencySymbol}
                    </label>
                    <div className="col-auto border p-2">
                        <input name="allocation" min="0" type="number" class="form-control" />
                    </div>
                    <div className="col-auto border p-2">
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AllocationFormComponent;

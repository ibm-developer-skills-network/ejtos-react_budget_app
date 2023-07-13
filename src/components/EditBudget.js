import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const EditBudget = (props) => {
    const { expenses,budget } = useContext(AppContext);
	const [value, setValue] = useState(props.budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);


    if(value > 20000) {
        alert("The value cannot exceed this value:  £"+value);
        setValue(budget);
        return;
    }

    if (value <= totalExpenses) {
        alert("The value cannot lower than spending value: £"+totalExpenses);
        setValue(budget);
        return;
    }

	return (
		<>
			<input
				required='required'
				type='number'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;

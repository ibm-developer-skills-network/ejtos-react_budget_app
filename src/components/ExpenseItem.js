import { useDispatch } from "react-redux";
import { IncreaseByTenAction, DecreaseByTenAction } from "../action";

// Iimport images for buttons
import plusImage from '../img/plus_green.png';
import minusImage from '../img/minus_red.png';
import deleteImage from '../img/delete_button.png';

// The function of this component is to JUST RENDER the props passed by the parent component, as such, this funct component has 5 arguments.

const ExpenseItemComponent = ({id, department, currency, allocation, onRemove}) => {
    
    const dispatch = useDispatch();

    return (
        <tr>
            <td>{department}</td>
            <td>{currency} {allocation}</td>
            <td><img src={plusImage} alt="" height="30" width="30" onClick={()=>dispatch(IncreaseByTenAction(id))}></img></td>
            <td><img src={minusImage} alt="" height="30" width="30" onClick={()=>dispatch(DecreaseByTenAction(id))}></img></td>
            <td><img src={deleteImage} alt="" onClick={()=>onRemove(id)}></img></td>
        </tr>
    )
}

export default ExpenseItemComponent;

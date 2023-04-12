import { useHistory } from 'react-router-dom'; 
import {useSelector, useDispatch} from  'react-redux';


function StepTwo() {
    const history = useHistory();
    const activityType = useSelector(store => store.activityType);
    const dispatch = useDispatch();


    const handleChange = (event) => {
        const action = { type: 'SET_ACTIVITY_TYPE', payload: event.target.value };
        dispatch(action);
    }

    const addActivity = (event) => {
        history.push('/step-3');
    }

    return (
        <>
            <h3>Step Two</h3>
            <form onSubmit={addActivity}>
                <input value={activityType} onChange={handleChange} type="text" />
                <input type="submit" />  
            </form>

        </>
    );
}

export default StepTwo;
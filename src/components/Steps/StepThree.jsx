import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
function StepThree() {
    const minutes = useSelector(store => store.minutes);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleChange = (event) => {
        const action = { type: 'SET_MINUTES', payload: event.target.value }
        dispatch(action);
    };
    //! Go to the next step
    const nextPage = () => {
        history.push('/step-4');
    };
    //!What will display on the DOM
    return (
        <>
            <h3> Step Three </h3>
            <form onSubmit={nextPage} >
                <input value={minutes} onChange={handleChange} type="number" />
                <input type="submit" />
            </form>
        </>
    )
}// End StepThree
export default StepThree;
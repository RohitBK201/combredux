import { useDispatch, useSelector } from "react-redux"
import { addcount } from "../REDUX/counter/action";
import { store } from "../REDUX/store"

export const Counter = () =>{

    const count = useSelector((store)=>store.counter);
    const dispatch = useDispatch();

    const handleadd =() => {

        dispatch(addcount(1))

    }

    return(
        <div>
            <h1>Counter : {count}  </h1>
            <button onClick={handleadd}>add</button>
        </div>
        
    )

}
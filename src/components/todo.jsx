import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "../REDUX/todo/action";

export const Todo = () => {

    const [text,setText] = useState("");

    const todo = useSelector(store => store.todo)
    const dispach = useDispatch();


    const handleadd =() =>{

            dispach(addtodo(
                {
                    title : text,
                    status :false,
                }
            ))

    }

return(

    <div>
        <input onChange={(e)=>{setText(e.target.value)}} type="text" />
        <button onClick={handleadd}>add</button>

        {todo.map((e)=>{
            <div key={e.title}>
                {e.title}
                </div>
        })}
    </div>

);


}
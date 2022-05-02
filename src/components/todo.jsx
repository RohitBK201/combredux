import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../REDUX/store";
import { todored } from "../REDUX/todo/reducer";

export const Todo = () => {

   const todo = useSelector((store) => store.todo);


   const dispatch = useDispatch();

   const [txt,setTxt] = useState("");

   const handleadd = () =>{


    dispatch(todored({
        title : txt,
        status : false,
    }))


   }

   console.log(todo)
   return(
       <div>
            <input onChange={(e)=>{setTxt(e.target.value)}} type="text" />
            <button onClick={handleadd}>add</button>
            {todo.map((t)=>(
                <div key={Date.now()}>{t.title}</div>
            ))}
       </div>
   );

}
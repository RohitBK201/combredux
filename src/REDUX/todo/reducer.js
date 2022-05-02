import {store} from "../store"
import { ADD_TODO } from "./action"

const init = {

    todo :[],

}

export const todored = (store=init,{type,payload}) =>{

    switch(type)
    {
        case ADD_TODO: return {...store,todo : [...store.todo,payload] }
        default : return store
    }
 
}
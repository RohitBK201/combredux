import { ADD_COUNT } from "./action";
import { store } from "../store";

const init = {

    counter : 0,

}

export const cntreducer = (store=init,{type,payload}) =>{


    switch(type)
    {
        case ADD_COUNT:return{...store,counter : store.counter + payload}

        default : return store
    }



}
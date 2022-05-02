import { legacy_createStore as createStore,combineReducers} from "redux";
import { cntreducer } from "./counter/reducer";
import { todored } from "./todo/reducer";

const rootReducer = combineReducers({

    counter : cntreducer,
    todo : todored,

})


export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
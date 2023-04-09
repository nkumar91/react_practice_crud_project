import { useReducer } from "react"
const init = {
    counter:0,
    counter2:100,
    form:{
        name:"ankit"
    }
}
function reducer(state,action){
    if(action.type=="0"){
        return {
            ...state,counter:state.counter+1,form:action.form
        }
    }
    else if(action.type  == "100"){
        return {
                ...state,counter2:state.counter2+1
        }
    }
    else
       return { ...state}
    

}

export default function UseReducer(){
    const [state,dispatch] = useReducer(reducer,init)
    const formData = {
        name:"mukesh",
        email:"m@g.com"
    }
    return(
        <>
        <h1>Hello</h1>

        <h1>Counter {state.counter}</h1>
        <h1>Counter {state.counter2}</h1>
        <p>{state.form.name}</p>

        <button onClick={()=>dispatch({type:"0",form:formData})}>
            Increment Start With 0
        </button>
        <button onClick={()=>dispatch({type:"100"})}>
            Increment Start With 100
        </button>
        </>
    )
}
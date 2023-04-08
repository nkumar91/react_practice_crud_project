import { useRef } from "react"

export default function UseRef(){

    const myRef = useRef(null)
    const clickMe = ()=>{
            console.log(myRef.current.value)
            myRef.current.focus()
    }
    return(
        <>
        
        <input type="text" ref={myRef}></input>
        <button onClick={clickMe}>Use Ref Hooks</button>
        </>
    )
}
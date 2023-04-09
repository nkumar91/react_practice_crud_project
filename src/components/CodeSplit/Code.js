//import { sum } from "../../utils/Utils"
import React,{ useState } from "react"
import { Suspense } from "react"
import { useEffect } from "react"
const My = React.lazy(()=>import('./My'))

export default function Code() {
    const [s,setS] = useState(0)
    useEffect(()=>{
        import('../../utils/Utils').then(value=>setS(value.sum(10,20)))
    },[])
    return (
        <>
            <h1>Hello {s}</h1>
           <Suspense fallback={<p>Loading.............</p>}>
            <My />
           </Suspense>
          
        </>
    )
}
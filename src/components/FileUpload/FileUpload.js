import { useState } from "react"
import { uploadImage } from "../../api/Api"

export default function FileUpload(){
    const [form,setForm] = useState()
    const handleSubmit = async (event)=>{
        event.preventDefault()
        console.log(form)

        var bhejoNaAkkash = new FormData()

        // bhejoNaAkkash.append("productName",form.productName)
        // bhejoNaAkkash.append("image",form.image)

      // var f =  [["productName","akash"],["image",File]]  // Map
      //   Object.fromEntries(f)
      console.log(Object.entries(form));
        for(let [key,value] of Object.entries(form)){
          bhejoNaAkkash.append(key,value)
        }

      //   var myForm = new FormData()
      //   Object.keys(form).forEach(ele=>{
      //           myForm.append(ele,form[ele]) 
      //   })
       const res =   await uploadImage(bhejoNaAkkash)
      console.log(res)
      if(res.status === "success"){
        console.log(res.message)
      }
      else{
        console.log(res.message)
      }

        

    }

    const handleChange = async (event)=>{
        
        if(event.target.name === "image"){
          setForm({...form,[event.target.name]:event.target.files[0]})
        }
        else{
          setForm({...form,[event.target.name]:event.target.value})
        }

    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="productName" onChange={handleChange}></input>
            <input type="file" name="image" onChange={handleChange}></input>
            <input type="submit" value="Upload Karo Na"></input>
        </form>
        </>
    )
}
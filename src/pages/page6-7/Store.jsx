import {create} from 'zustand'





let api='https://6821ee2fb342dce8004c65ef.mockapi.io/dataUsers'
export let useTodoStore=create((set)=>({
    users:[],
    get:async()=>{
        try {
            let res=await fetch(api)
            let data=await res.json()
            set(()=>({users:data}))
        } catch (error) {
            console.error(error);
            
        }
    },
      Delete:async(id)=>{
        try {
          await fetch(`${api}/${id}`,{method:"DELETE"}) 
          set((state)=>({users:state.users.filter((e)=>e.id!=id)})) 
        } catch (error) {
            console.error(error);
            
        }
    },
    addUser:async(newUser)=>{
        try {
          await fetch(api,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(newUser)})  
        } catch (error) {
            console.error(error);
            
        }
    },
    Edit:async(idx,updateUser)=>{
        try {
           await fetch(`${api}/${idx}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(updateUser)}) 
           
        } catch (error) {
          console.error(error);
            
        }
    },

}))


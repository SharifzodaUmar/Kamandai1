import React, { useEffect, useState } from 'react'
import s1 from '../suratUmar/s1.png'
import s2 from '../suratUmar/s2.png'
import s3 from '../suratUmar/s3.png'
import s4 from '../suratUmar/s4.png'
import s5 from '../suratUmar/s5.png'
import s6 from '../suratUmar/s6.png'
import social from '../suratUmar/social.png'

import {useTodoStore} from '../Store'


const Blog2 = () => {

let [inpName,setInpName]=useState('')
let [inpImage,setInpImage]=useState('')


let [editName,setEditName]=useState('')
let [editImage,setEditImage]=useState('')
let [idx,setIdx]=useState(null)




   let {users,get,Delete,addUser,Edit,ChangeStatus}=useTodoStore()
  useEffect(()=>{
get()
  },[])

  function addNewUser() {
 let newUser={
  name: inpName,
  image: inpImage,
}

    addUser(newUser)
    setInpName('')
    setInpImage('')
  }

function openEdit(e) {
  setEditImage(e.image)
  setEditName(e.name)
  setIdx(e.id)
}


function save() {
  let updateUser={
    
    name:editName,
    image:editImage,
    id:idx
  }
  Edit(idx,updateUser)
  
  setEditName('')
  setEditImage('')
}





  return (
    <div>
      

      <section className='w-full flex items-center gap-[20px] sm:gap-0  my-[30px] justify-between flex-col sm:flex-row sm:h-[318px]'>
<article className='sm:w-[902px] p-[10px] sm:p-0 h-[196px] bg-[#1A1A1A] rounded-2xl sm:h-[316px] flex items-center justify-center'>
<p className='sm:text-[48px] text-[24px] font-[600]'>Mastering the Art <span className=' text-black rounded-[50%] text-[20px] py-[5px] px-[10px] bg-[#CE7D63]'> →</span> <span className='text-[20px] text-[#CE7D63]'> 
Start a Project</span> <br />
of Minimalistic Design
</p>
</article>



<article className='bg-[#1A1A1A] sm:w-[442px] p-[10px] h-[306px] flex flex-col items-center justify-around rounded-2xl sm:h-[318px]'>
<div  className='bg-[#1F1F1F] sm:w-[422px] w-[338px] h-[64px] sm:h-[67px] rounded-2xl flex items-center justify-around'>
<p className='text-[#B3B3B2]'>Author</p>
<p className='text-[18px] font-[500]'>Sophia Roberts</p>
</div>
<div  className='bg-[#1F1F1F] sm:w-[422px] w-[338px] h-[64px] sm:h-[67px] rounded-2xl flex items-center justify-around'>
<p className='text-[#B3B3B2]'>Published Date</p>
<p className='text-[18px] font-[500]'>25th October 2023</p>
</div>
<div  className='bg-[#1F1F1F] sm:w-[422px] w-[338px] h-[64px] sm:h-[67px] rounded-2xl flex items-center justify-around'>
<p className='text-[#B3B3B2]'>Category</p>
<p className='text-[18px] font-[500]'>Design</p>
</div>
<div  className='bg-[#1F1F1F] sm:w-[422px] w-[338px] h-[64px] sm:h-[67px] rounded-2xl flex items-center justify-around'>
<p className='text-[#B3B3B2]'>Read Time</p>
<p className='text-[18px] font-[500]'>5 minutes</p>
</div>
</article>

      </section>
<img src={s5} alt="" />




<section className='w-full sm:h-[1430px] sm:flex-row flex-col sm:gap-0 gap-[20px] py-[30px]  my-[30px] flex items-start justify-around'>
  <img src={social} className='sm:block hidden' alt="" />

<article className='sm:w-[843px] rounded-xl bg-[#1A1A1A] flex flex-col items-start justify-between p-[20px] sm:h-[1400px]'>
<p className='text-[24px] font-[500]'>The Essence of Minimalism in Design</p>
<p className='text-[#B3B3B2]'>In the realm of design, the essence of minimalism lies in the deliberate choice to distill complexity and convey a powerful message through simplicity. It's an art form that celebrates the beauty of space, emphasizing the significance of each carefully chosen element. A minimalist design isn't about deprivation; rather, it's a conscious decision to focus on the core, allowing the audience to engage with a visual narrative that is both refined and impactful. <br /><br />

As we explore the essence of minimalistic design, we uncover the subtle nuances that contribute to its allure. The use of negative space, a hallmark of minimalism, creates breathing room within the composition, allowing the viewer's gaze to rest and appreciate the inherent beauty of the design. The simplicity in form and color becomes a canvas for expression, where every line and shade tells a story. By embracing minimalism, designers have the opportunity to communicate more with less, fostering a connection that transcends visual aesthetics.<br /><br />

At its core, minimalism in design challenges conventional notions, encouraging a shift from excess to essence. It invites both creators and consumers to engage in a thoughtful dialogue with the visual elements, promoting a sense of mindfulness and intentionality. The essence of minimalistic design, therefore, lies not just in its visual appeal but in the profound impact it has on the way we perceive and interact with the world of design.</p>
<p className='text-[24px] font-[500]'>Minimalism Beyond Aesthetics</p>

<p className='text-[#B3B3B2]'>Beyond its visually captivating exterior, minimalism is a design philosophy that permeates every aspect of the creative process, extending its influence far beyond the surface. This philosophy becomes a lens through which designers view their craft, shaping not just what is seen but how it is experienced. The minimalist approach transcends mere aesthetics; it becomes a mindset that emphasizes clarity, functionality, and a deeper connection with the audience. <br /><br />

Minimalism, as a philosophy, challenges the notion that complexity is synonymous with sophistication. It prompts designers to question the necessity of each element, encouraging a meticulous evaluation of form and function. This shift in perspective extends to the user experience, where the removal of unnecessary clutter allows for a seamless and intuitive interaction. Beyond creating visually pleasing designs, the minimalist philosophy becomes a guiding force for designing experiences that are inherently user-centric. <br /><br />
</p>
<p className='text-[24px] font-[500]'>Practical Tips for Mastering Minimalistic Design</p>
<p className='text-[#B3B3B2]'>The journey to mastering minimalistic design involves a practical exploration of principles and techniques that breathe life into the philosophy. It begins with an understanding of the psychology of color in minimalism, where the strategic use of a limited color palette contributes to the overall impact of the design. The intentional choice of typography plays a pivotal role, guiding the viewer through the visual narrative with clarity and purpose. <br /><br />

Navigating the terrain of minimalistic design also involves a keen awareness of the power of negative space. Far from being empty, this space becomes a deliberate pause, allowing the audience to absorb and appreciate the essential elements of the composition. Striking the right balance between simplicity and sophistication is an art in itself, requiring a discerning eye and a commitment to the core principles of minimalism. <br /><br />

Practical tips extend beyond the theoretical, delving into the day-to-day decisions that shape a minimalist design. From the selection of imagery to the judicious use of graphic elements, each choice contributes to the overall impact. Mastery in minimalistic design is not merely about adherence to a set of rules; it's about developing an intuition that guides the creative process, ensuring that every design decision serves a purpose and contributes to the cohesive whole.</p>
</article>


<article className='sm:w-[325px] w-[357px] h-[260px] p-[20px] bg-[#1A1A1A] flex flex-col items-center justify-around rounded-xl sm:h-[275px]'>
<div className='flex w-full items-center  gap-[15px]'>
<img src={s6} alt="" />
<div>
  <p className='text-[18px] font-[500]' >Wade Warren</p>
  <p className='text-[#81807E]'>Art Director</p>
</div>
</div>
<p className='text-[#B3B3B2]'>Crafting visual narratives that captivate and inspire, weaving creativity into every chapter of the design journey.</p>

<div className='bg-[#1F1F1F] w-[305px] h-[52px] rounded-xl flex items-center justify-around'>
<p>🕊️</p>
<p className='text-[#CCCCCC]'>@wadewarren</p>
<p className='text-2xl'>↗</p>
</div>

</article>

</section>






<button className='border p-[5px] rounded-xl' onClick={addNewUser}>Add User</button> <br /><br />
<input className='border p-[5px] rounded-xl' value={inpName} onChange={(e)=>setInpName(e.target.value)} type="text" placeholder='Name...' /> <br /><br />
<input className='border rounded-xl p-[5px]' value={inpImage} onChange={(e)=>setInpImage(e.target.value)} type="text" placeholder='Image...' /> <br /><br />

<input className='border p-[5px] rounded-xl' value={editName} onChange={(e)=>setEditName(e.target.value)} type="text" placeholder='edit Name...' /> <br /><br />
<input className='border rounded-xl p-[5px]' value={editImage} onChange={(e)=>setEditImage(e.target.value)} type="text" placeholder='edit Image...' /> <br /><br />
<button onClick={save} className='border p-[5px] rounded-xl bg-amber-500'>Update</button>
    <section className='w-full sm:h-[565px] flex-col sm:flex-row h-[1431px] flex items-center justify-between my-[20px] '>

{users.map((e)=>{
  return (
    <article key={e.id} className='sm:w-[430px] flex flex-col items-start justify-between sm:h-[565px] bg-[#1A1A1A] rounded-2xl p-[20px] '>
      <img src={e.image} className='sm:w-[408px] w-[310px] h-[187px] sm:h-[243px] rounded-2xl' alt="" />
      <p className='text-[20px] font-[500]'>{e.name}</p>
<p className='text-[#B3B3B2]'>Mobile devices dominate digital interactions, making mobile user experience crucial for conversion rates. Explore mobile design best practices...</p>
<div className='flex items-center gap-[20px]'>
   <button className='border p-[5px] rounded-xl' onClick={()=>Delete(e.id)}>Delete</button>
            <button className='border p-[5px] rounded-xl' onClick={()=>openEdit(e)}>Edit</button>
</div>

    </article>
  )
})}
    



    </section>




    </div>
  )
}

export default Blog2
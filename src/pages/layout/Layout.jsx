import React, { useState } from 'react'

import {Link, Outlet} from 'react-router'

import i1 from '/i1.png'
import i2 from '/i2.png'
import i3 from '/i3.png'
import i4 from '/i4.png'
import lines from '/lines.png'
import p from '/p.png'
import tr from '/tr.png'
import s1 from '/s1.svg'
import s2 from '/s2.svg'
import s3 from '/s3.svg'
import s4 from '/s4.svg'
import { Drawer } from "antd";
const Layout = () => {
    
  let [open,setOpen]=useState(false)
  function onClose() {
    setOpen(false)
  }
  return (
    <div className='max-w-[1388px] p-[20px] m-auto bg-[#0F0F0F] text-white'>





        <header className='w-full h-[] sm:h-[89px] rounded-2xl flex items-center justify-around border border-[#1C1C21] bg-[#1A1A1A]'>
         <p className='text-4xl font-bold'>NexGen</p>
                <Drawer
  title="Pages"
  closable={true}
  onClose={onClose}
  open={open}
  placement="left"
>
  <p className="text-[28px] font-extrabold">Pages:</p>
  <ul className="flex flex-col text-[24px] font-bold gap-[10px]">

    
<Link to={'/'}> 
<p onClick={() => setOpen(false)} className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Home</p>
   </Link>
<Link to={'service'}> 
<p onClick={() => setOpen(false)} className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Service</p>
   </Link>  
<Link to={'about'}> 
<p onClick={() => setOpen(false)} className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>About</p>
   </Link>  
<Link to={'project'}> 
<p onClick={() => setOpen(false)} className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Project</p>
   </Link>  
<Link to={'career'}> 
<p onClick={() => setOpen(false)} className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Сareer</p>
   </Link>  
<Link to={'contact'}> 
<p onClick={() => setOpen(false)} className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Сontact</p>
   </Link>  
<Link to={'blog1'}> 
<p onClick={() => setOpen(false)} className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Blog1</p>
   </Link>  
<Link to={'blog2'}> 
<p onClick={() => setOpen(false)} className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Blog2</p>
   </Link>
  </ul>
</Drawer>
            <ul className='sm:flex hidden items-center gap-[30px]'>

<Link to={'/'}> 
<p className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Home</p>
   </Link>
<Link to={'service'}> 
<p className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Service</p>
   </Link>  
<Link to={'about'}> 
<p className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>About</p>
   </Link>  
<Link to={'project'}> 
<p className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Project</p>
   </Link>  
<Link to={'career'}> 
<p className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Сareer</p>
   </Link>  
<Link to={'contact'}> 
<p className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Сontact</p>
   </Link>  
<Link to={'blog1'}> 
<p className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Blog1</p>
   </Link>  
<Link to={'blog2'}> 
<p className='font-[500] p-[10px] bg-[#0F0F0F] rounded-xl'>Blog2</p>
   </Link>  
   
   
   </ul>
   <img
  className="sm:hidden border border-blue-500 rounded-2xl p-[3px]"
  onClick={() => setOpen(true)}
  src={lines}
  alt="menu"
/>

        </header>
        <main>
            <Outlet/>
        </main>

<footer className='mt-[50px]'>  
        <div className='w-full border-2 h-[1066px] rounded-3xl border-[#1F1F1F] sm:h-[523px] my-[10px] flex-col flex items-center justify-around'>
<article className='sm:w-[1340px] h-[50px] justify-center sm:h-[136px] bg-[#1A1A1A] sm:flex-row flex-col flex items-center sm:justify-between px-[60px] sm:px-[100px] rounded-xl'>
<p className='sm:text-[38px] text-[28px] font-[600]'>Testimonials</p><p className='text-[#B3B3B2] font-[500] sm:block hidden'><span className='p-[10px] bg-[#1A1A1A] rounded-[50%] border border-[#262626]'>↗</span> ALL Testimonials</p>

</article>


<section className='w-full gap-[10px] items-center justify-around h-[900px] px-[10px] sm:h-[357px] grid sm:grid-cols-4 sm:grid-rows-1 '>
<article className='sm:h-[357px] h-[290px] bg-[#1A1A1A] rounded-xl flex flex-col  items-center justify-between'>
   <div className='p-[20px] flex flex-col gap-[30px] items-center justify-around'>  
<p className='text-[22px] font-[500]'>NexGen turned our business around!</p>
<p className='text-[#B3B3B2]'>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p></div>
<div className='flex items-center justify-around w-full sm:h-[91px] h-[87px] rounded-br-2xl rounded-bl-2xl bg-[#1F1F1F]'>
<img src={p} alt="" />
<div>
   <p className='text-[18px] font-[500]'>Sarah Thompson</p>
   <p className='text-[#81807E]'>CEO of BlueBloom</p>
</div>
<p className='rounded-[50%] text-2xl border border-[#333333] px-[5px]'>→</p>
</div>
</article>
<article className='sm:h-[357px] h-[290px] bg-[#1A1A1A] rounded-xl flex flex-col  items-center justify-between'>
   <div className='p-[20px] flex flex-col gap-[30px] items-center justify-around'>  
<p className='text-[22px] font-[500]'>NexGen turned our business around!</p>
<p className='text-[#B3B3B2]'>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p></div>
<div className='flex items-center justify-around w-full sm:h-[91px] h-[87px] rounded-br-2xl rounded-bl-2xl bg-[#1F1F1F]'>
<img src={p} alt="" />
<div>
   <p className='text-[18px] font-[500]'>Sarah Thompson</p>
   <p className='text-[#81807E]'>CEO of BlueBloom</p>
</div>
<p className='rounded-[50%] text-2xl border border-[#333333] px-[5px]'>→</p>
</div>
</article>
<article className='sm:h-[357px] h-[290px] bg-[#1A1A1A] rounded-xl flex flex-col  items-center justify-between'>
   <div className='p-[20px] flex flex-col gap-[30px] items-center justify-around'>  
<p className='text-[22px] font-[500]'>NexGen turned our business around!</p>
<p className='text-[#B3B3B2]'>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p></div>
<div className='flex items-center justify-around w-full sm:h-[91px] h-[87px] rounded-br-2xl rounded-bl-2xl bg-[#1F1F1F]'>
<img src={p} alt="" />
<div>
   <p className='text-[18px] font-[500]'>Sarah Thompson</p>
   <p className='text-[#81807E]'>CEO of BlueBloom</p>
</div>
<p className='rounded-[50%] text-2xl border border-[#333333] px-[5px]'>→</p>
</div>
</article>
<article className='sm:h-[357px] h-[290px] bg-[#1A1A1A] rounded-xl hidden sm:flex flex-col  items-center justify-between'>
   <div className='p-[20px] flex flex-col gap-[30px] items-center justify-around'>  
<p className='text-[22px] font-[500]'>NexGen turned our business around!</p>
<p className='text-[#B3B3B2]'>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p></div>
<div className='flex items-center justify-around w-full sm:h-[91px] h-[87px] rounded-br-2xl rounded-bl-2xl bg-[#1F1F1F]'>
<img src={p} alt="" />
<div>
   <p className='text-[18px] font-[500]'>Sarah Thompson</p>
   <p className='text-[#81807E]'>CEO of BlueBloom</p>
</div>
<p className='rounded-[50%] text-2xl border border-[#333333] px-[5px]'>→</p>
</div>
</article>
</section>

        </div>
        <img className='sm:block hidden m-auto my-[50px]  ' src={s2} alt="" />
        <img className='sm:hidden m-auto my-[50px]' src={s1} alt="" />



<section className='w-full rounded-2xl sm:flex-row flex-col flex items-center p-[30px] gap-[50px] sm:h-[233px] bg-[#CE7D63] text-black'>
<div>
   <p className='sm:text-[42px] font-[500]'>Ready to Transform Your Digital Presence?</p>
   <p className='text-[#262626]'>Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
</div>
<p className='bg-[#0F0F0F] w-[172px] h-[50px] flex items-center justify-center rounded-2xl text-white'>Get in Touch ↗</p>
</section>


<div className='w-full h-[70px] bg-[#1A1A1A] px-[10px] rounded-2xl my-[30px] flex items-center justify-between  text-[20px] text-[#676665]'>

   <p className='m-auto sm:m-0'>Follow Us on Social Media •</p>
   <p className='sm:block hidden'>Follow Us on Social Media •</p>
   <p className='sm:block hidden'>Follow Us on Social Media •</p>
   <p className='sm:block hidden'>Follow Us on Social Media •</p>
   <p className='sm:block hidden'>Follow Us on Social Media •</p>

</div>

        <img className='sm:block hidden m-auto my-[50px]  ' src={s4} alt="" />
        <img className='sm:hidden m-auto my-[50px]' src={s3} alt="" />



        
        
        </footer>
    </div>
  )
}

export default Layout
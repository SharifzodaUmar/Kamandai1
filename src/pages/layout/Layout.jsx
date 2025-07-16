import React from 'react'
import {Link, Outlet} from 'react-router'
const Layout = () => {
  return (
    <div>
        <header>
            <ul className='flex items-center gap-[30px]'>

<Link to={'/'}> 
<p>Home</p>
   </Link>
<Link to={'service'}> 
<p>Service</p>
   </Link>  
<Link to={'about'}> 
<p>About</p>
   </Link>  
<Link to={'project'}> 
<p>Project</p>
   </Link>  
<Link to={'career'}> 
<p>Сareer</p>
   </Link>  
<Link to={'contact'}> 
<p>Сontact</p>
   </Link>  
<Link to={'blog1'}> 
<p>Blog1</p>
   </Link>  
<Link to={'blog2'}> 
<p>Blog2</p>
   </Link>  
   
   
   </ul>
        </header>
        <main>
            <Outlet/>
        </main>

        <footer>

        </footer>
    </div>
  )
}

export default Layout
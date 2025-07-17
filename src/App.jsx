import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./pages/layout/Layout";
import Home from './pages/page1-2/home/Home'
import Service from './pages/page1-2/service/Service'
import About from './pages/page3-4/about/About'
import Project from './pages/page3-4/project/Project'
import Career from './pages/page5-8/career/Career'
import Contact from './pages/page5-8/contact/Contact'
import Blog1 from './pages/page6-7/blog1/Blog1'
import Blog2 from './pages/page6-7/blog2/Blog2'
function App() {
  return (
    <>
      <div>

<Routes>
<Route path="/" element={<Layout/>}>

<Route index element={<Home/>}/>
<Route path="service" element={<Service/>}/>
<Route path="about" element={<About/>}/>
<Route path="project" element={<Project/>}/>
<Route path="career" element={<Career/>}/>
<Route path="contact" element={<Contact/>} />
<Route path="blog1" element={<Blog1/>}/>
<Route path="blog2" element={<Blog2/>}/>


</Route>

</Routes>





      </div>
    </>
  );
}

export default App;

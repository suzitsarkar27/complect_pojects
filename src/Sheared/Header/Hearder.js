import React from "react";
import { Link } from "react-router-dom";

const Hearder = ({children}) => {
  const menubar=[
     <li className="rounded-lg"><Link to={'/home'} >Home</Link></li>,
     <li className="rounded-lg"><Link to={'/about'} >About</Link></li>,
     <li className="rounded-lg"><Link to={'/service'}>Service</Link></li>,
     <li className="rounded-lg"><Link to={'/contact'} >Contact</Link></li>,
     <li className="rounded-lg"> <Link to={'/login'} >Login</Link></li>,

  ];
  return (
<div class="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
   
    <div class="w-full navbar bg-base-300">
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 

      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          {menubar}
        </ul>
      </div>
    </div>
    {children}
  </div> 

  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      {menubar}
    </ul>
  </div>
</div>
  );
};

export default Hearder;

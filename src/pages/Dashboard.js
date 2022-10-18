import React, { useContext,useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from "../components/home/Navbar";
import Sidebar from "../components/home/Sidebar";
import { UserContext } from '../context/UserContext'


const Dashboard = () => {

  const {auth,isAuth} =useContext(UserContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!isAuth()){navigate('/login')}
  },[])  
  
  if (auth) {
    return (
      <>
      <div className="min-h-screen">
        <Sidebar />
        <Navbar />
        <main className="lg:pl-[390px] pt-[89px] bg-[#F3EFCC] h-full z-30">
          <Outlet/>
        </main>
      </div>
      </>
    )
  }
  
  
  
  
  
}

export default Dashboard
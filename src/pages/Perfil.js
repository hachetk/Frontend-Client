import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
const Perfil = () => {
  
  const {user,setUser,setAuth} =useContext(UserContext)
  const [input, setInput] =useState(user)

  const navigate = useNavigate()
  
  const handleInput = (e) => {
    setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
        await axios.patch(`https://www.tuinvernadero.xyz/api/usuarios/${user.id_usuario}`,input).then((response) =>{
            setUser(response.data.data[0])
            window.localStorage.setItem('loggedUser',JSON.stringify(response.data.data[0]))
        })
        navigate('/dashboard/perfil')
    } catch (e) {
        console.log(e)
    }
  }
  const handleDelete = async(e) => {
    e.preventDefault()
    try {
        await axios.delete(`https://www.tuinvernadero.xyz/api/usuarios/${user.id_usuario}`).then((response) =>{
          handleLogout()
        })
        navigate('/dashboard/perfil')
    } catch (e) {
        console.log(e)
    }
  }
  const handleLogout = () =>{
    setAuth(false)
    window.localStorage.removeItem('loggedUser')
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  }

  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2'> 
    <div className=' px-5 py-2'>
      <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
        <h6 class="text-black font-bold mt-3 mb-6 uppercase text-xl text-center">Datos</h6>
          <form onSubmit={handleSubmit}>
            <div class="flex flex-wrap pb-5">
              <div class="w-full lg:w-6/12 px-4 pb-5">
                <div>
                  <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Rut</label>
                  <input onChange={(e)=>{handleInput(e)}} name="rut" type="text" placeholder={user.rut}  class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4 pb-5">
                <div>
                  <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Nombre</label>
                  <input onChange={(e)=>{handleInput(e)}} name="nombre" type="text" placeholder={user.nombre}  class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4 pb-5">
                <div>
                  <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Apellido</label>
                  <input onChange={(e)=>{handleInput(e)}} name="apellido" type="text" placeholder={user.apellido}  class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4 pb-5">
                <div>
                  <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Email</label>
                  <input onChange={(e)=>{handleInput(e)}} name="email" type="text" placeholder={user.email}  class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center pb-5 gap-10 '>
              <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full lg:w-3/12' onSubmit={''}>Actualizar</button>
              <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full lg:w-3/12' onSubmit={''}>Cancelar</button>
            </div>
          </form>
        </div>
    </div>


    <div className=' px-5 py-2 '>
      <div className='bg-white rounded-xl shadow-lg p-5 '>
      <h6 class="text-black font-bold mt-3 mb-6 uppercase text-xl text-center">Perfil</h6>
      <div class="flex flex-wrap pb-5">
          <div className='flex items-center justify-center gap-9 '>
            <img
              className="w-60 h-60 object-cover rounded-full ring-4 ring-white"
              src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
              alt=""
            />
            <div>
              <div><h1 className='font-bold pl-5 text-3xl'>{user.nombre} {user.apellido}</h1></div> 
              <div><span className='font-semibold text-xl pl-5'>{user.rut}</span></div> 
              <div><span className='font-semibold text-xl pl-5'>{user.email}</span></div> 
            </div>
            <form onSubmit={handleDelete}>
              <button className='bg-red-500 hover:bg-red-600 rounded-lg p-3 text-white font-bold'>Eliminar</button>
            </form>
          </div>
      </div>

      </div>
    </div>

    <div className=' px-5 py-2'>
      <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
        <h6 class="text-black font-bold mt-3 mb-6 uppercase text-xl text-center">Contraseña</h6>
          <form onSubmit={handleSubmit}>
            <div class="flex flex-wrap pb-5">
              <div class="w-full lg:w-6/12 px-4 pb-5">
                <div>
                  <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Contraseña Actual</label>
                  <input onChange={(e)=>{handleInput(e)}} name="password" type="password"   class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4 pb-5">
                <div>
                  <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Nueva Contraseña</label>
                  <input onChange={(e)=>{handleInput(e)}} name="newPassword" type="password"   class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" />
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center pb-5 gap-10 '>
              <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full lg:w-3/12' onSubmit={''}>Actualizar</button>
              <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full lg:w-3/12' onSubmit={''}>Cancelar</button>
            </div>
          </form>
      </div>
    </div>


    </div>
    </>
  )
}

export default Perfil
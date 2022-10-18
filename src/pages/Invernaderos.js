import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Invernaderos = () => {
  const token = document.cookie.split('; ').find((row) => row.startsWith('token='))?.split('=')[1];
  const [usuario , setUsuario]= useState([])
  
  useEffect(()=>{
    axios.get('https://tuinvernadero.xyz/api/usuarios', {
      headers: {
        'Authorization': token
      }
    }).then((response)=>{
      setUsuario(response.data)

    })
    
  },[])

  const usuarios = usuario.map((data,index)=>{
    return(
          <tr key={index}>
              <td className="px-4 py-3" >{data.id_usuario}</td>
              <td className="px-4 py-3">{data.id_rol}</td>
              <td className="px-4 py-3">{data.rut}</td>
              <td className="px-4 py-3 text-lg text-gray-900">{data.nombre} {data.apellido}</td>
              <td className="w-10 text-center">
              <input name="plan" type="radio"/>
              </td>
          </tr>
    )
  })
  console.log(usuario)
  return (
    <div className='px-5 '>
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Usuarios</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Usuarios  </p>
            </div>
            <div className="lg:w-3/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">ID</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Rol</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Rut</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Nombre</th>
                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">aaa</th>
                </tr>
                </thead>
                <tbody>
                  {usuarios}
                </tbody>
            </table>
            </div>
        </div>
    </section>
</div>
  )
}

export default Invernaderos
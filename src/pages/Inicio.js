
import { RiSoundcloudLine } from "react-icons/ri";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const Inicio = () => {

    
    const data = [
      {
        name: 'Miercoles',
        uv: 4000,
        ppm: 2400,
        amt: 2400,
      },
      {
        name: 'Jueves',
        uv: 3000,
        ppm: 1398,
        amt: 2210,
      },
      {
        name: 'Viernes',
        uv: 80,
        ppm: 120,
        amt: 2290,
      },
      {
        name: 'Sabado',
        uv: 2780,
        ppm: 3908,
        amt: 2000,
      },
      {
        name: 'Domingo',
        uv: 1890,
        ppm: 4800,
        amt: 2181,
      },
      {
        name: 'Lunes',
        uv: 2390,
        ppm: 3800,
        amt: 2500,
      },
      {
        name: 'Martes',
        uv: 3490,
        ppm: 4300,
        amt: 2100,
      },
    ];

  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">

    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
          <p class="leading-relaxed">Downloads</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">1.3K</h2>
          <p class="leading-relaxed">Users</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">74</h2>
          <p class="leading-relaxed">Files</p>
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
          <p class="leading-relaxed">Places</p>
        </div>
      </div>
    </div>
  </div>
</section>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-5 w-full px-20 py-5'>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>24</span>
                <RiSoundcloudLine className='h-24 w-24 text-[#406343]'/>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Nivel de Co2</h1>
                <h1 className=' text-gray-600 font-bold text-rm text-center'>Co2 del ambiente</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>17</span>
                <RiSoundcloudLine className='h-24 w-24 text-[#406343]'/>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Temperatura</h1>
                <h1 className=' text-gray-600 font-bold text-rm'>Temperatura del ambiente</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>83%</span>
                <RiSoundcloudLine className='h-24 w-24 text-[#406343]'/>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Humedad</h1>
                <h1 className=' text-gray-600 font-bold text-rm'>Humedad del ambiente</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>24</span>
                <RiSoundcloudLine className='h-24 w-24 text-[#406343]'/>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Temperatura</h1>
                <h1 className=' text-gray-600 font-bold text-rm'>Temperatura del agua</h1>
            </div>
        </div>
    </div>
    <div className=" grid grid-cols-1 rounded-xl shadow-lg">
        <div className='bg-white pt-5 rounded-lg mx-20 grid grid-cols-2 items-center justify-center'>
            <h1 className="text-4xl font-bold text-[#406343] text-center flex items-center justify-center pl-5 pb-5 col-span-2"> Resumen Diario</h1>
            <LineChart width={600}height={500}data={data}margin={{top: 5,right: 30,left: 20,bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ppm" stroke="#8884d8" activeDot={{ r: 8 }}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            <LineChart width={600}height={500}data={data}margin={{top: 5,right: 30,left: 20,bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ppm" stroke="#8884d8" activeDot={{ r: 8 }}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </div>
    </div>
    </>
  )
}

export default Inicio
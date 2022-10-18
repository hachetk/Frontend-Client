import React from 'react'
import ListTable from '../components/Cultivo/ListTable'
const Cultivos = () => {
  return (
    <div className='bg-white'>
      <div class="p-8 rounded border border-gray-200">
        <h1 class="font-medium text-3xl">Añadir cultivo</h1>
        <p class="text-gray-600 mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolorem vel cupiditate laudantium dicta.</p>
        <form>
          <div class="mt-8 grid lg:grid-cols-2 gap-4">
            
            <div>
              <label for="name" class="text-sm text-gray-700 block mb-1 font-medium">Nombre</label>
              <div className="relative max-w-xs py-1 px-3 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option>Project manager</option>
                </select>
              </div>
            </div>



            
            <div>
              <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Email Adress</label>
              <input type="text" name="email" id="email" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" />
            </div>
            <div>
              <label for="name" class="text-sm text-gray-700 block mb-1 font-medium">Temperatura ambiente maxima</label>
              <input type="text" name="name" id="name" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" />
            </div>
            <div>
              <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Temperatura ambiente minima</label>
              <input type="text" name="email" id="email" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" />
            </div>
            <div>
              <label for="name" class="text-sm text-gray-700 block mb-1 font-medium">Humedad ambiente maxima</label>
              <input type="text" name="name" id="name" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" />
            </div>
            <div>
              <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Humedad ambiente minima</label>
              <input type="text" name="email" id="email" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" />
            </div>
            <div>
              <label for="name" class="text-sm text-gray-700 block mb-1 font-medium">Temperatura del agua maxima</label>
              <input type="text" name="name" id="name" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" />
            </div>
            <div>
              <label for="email" class="text-sm text-gray-700 block mb-1 font-medium">Temperatura del agua minima</label>
              <input type="text" name="email" id="email" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" />
            </div>
            <div>
              <label for="job" class="text-sm text-gray-700 block mb-1 font-medium">Nivel PPM maximo</label>
              <input type="text" name="job" id="job" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="(ex. developer)" />
            </div>
            <div>
              <label for="job" class="text-sm text-gray-700 block mb-1 font-medium">Nivel PPM minimo</label>
              <input type="text" name="job" id="job" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="(ex. developer)" />
            </div>
            <div>
              <label for="brithday" class="text-sm text-gray-700 block mb-1 font-medium">Birthday</label>
              <input type="text" name="brithday" id="brithday" class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="(01/01/1993)" />
            </div>
          </div>
          <div class="space-x-4 mt-8">
            <button type="submit" class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Save</button>
            <button class="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>
          </div>
        </form>
      </div>
      <section>
        <ListTable/>
      </section>
    </div>

  )
}

export default Cultivos
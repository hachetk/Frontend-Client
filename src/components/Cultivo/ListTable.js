import React from 'react'

const ListTable = () => {
  return (
    <div className='px-5 bg-red-400 '>
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Cultivos</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Cultivos</p>
                </div>
                <div class="lg:w-3/3 w-full mx-auto overflow-auto">
                <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">ID</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Nombre</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Estado</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Creación</th>
                        <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="px-4 py-3">Start</td>
                        <td class="px-4 py-3">5 Mb/s</td>
                        <td class="px-4 py-3">15 GB</td>
                        <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                        <td class="w-10 text-center">
                        <input name="plan" type="radio"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ListTable
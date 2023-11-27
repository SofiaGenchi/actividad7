export default function Contacto() {
  return (
    
  <div className="p-20">
    <div id="form" class="w-full max-w-[400px] bg-white rounded-lg shadow-md p-6 m-auto">
  <h2 class="text-2xl font-bold text-gray-800 mb-4">Formulario de Contacto</h2>

  <form class="flex flex-col">
    <input type="text" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Nombre" />
    <input type="email" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email" />
    <input type="number" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Numero de telefono" />
    <textarea name="message" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Mensaje"></textarea>

    <button type="submit" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Enviar</button>
    </form>
    </div>
  </div>

  )
}

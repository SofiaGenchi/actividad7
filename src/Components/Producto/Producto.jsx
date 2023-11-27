import { useState } from "react";
import productosData from "./productos.json";

export default function Producto() {
  const productos = productosData.productos;

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 col-span-4 m-10 gap-20">
        {productos.map((producto) => {
          const [comprado, setComprado] = useState(false);
          const comprar = () => {
            setComprado(!comprado);
          };

          return (
            <div class="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
              <div class="h-48 bg-gray-700 rounded-xl"></div>
              <div class="flex flex-col gap-4">
                <div class="flex flex-row justify-between">
                  <div class="flex flex-col">
                    <span class="text-xl font-bold">{producto.nombre}</span>
                    <p>{producto.descripcion}</p>
                    <p class="text-xs text-gray-700">SKU: {producto.SKU}</p>
                    <p class="text-xs text-gray-700">
                      Cantidad disponible: {producto.cantidad}
                    </p>
                  </div>
                  <span class="font-bold  text-red-600">
                    ${producto.precio}
                  </span>
                </div>
                <button
                  onClick={comprar}
                  class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md"
                >
                  {comprado ? "Gracias por su compra" : "Comprar"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

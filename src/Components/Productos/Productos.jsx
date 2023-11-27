import Producto from "../Producto/Producto";


export default function Productos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center m-12">
        <Producto />
    </div>
  )
}

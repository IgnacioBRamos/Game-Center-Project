import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (

    <div className="navbar  flex flex-row justify-between">

      <Link to={"/"}>
        <img src="/control-de-juego.png" className="p-1 rounded mx-2 logo size-48" alt="" />
        <p className="text-xl">Gaming Center</p>
      </Link>


      <ul>
        <li> 
          <a href="/" >Productos</a>
          <ul className="dropdown">
            <li><Link to={"/category/monitor"}>Monitores</Link></li>
            <li><Link to={"/category/mouse"}>Mouse</Link></li>
            <li><Link to={"/category/teclado"}>Teclado</Link></li>
            <li><Link to={"/category/auriculares"}>Auriculares</Link></li>
          </ul>
        </li>
      </ul>

      <CartWidget/>
    </div>
  )
}

export default Navbar
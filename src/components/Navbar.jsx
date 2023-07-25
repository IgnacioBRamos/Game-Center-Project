import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (

    <div className="navbar bg-base-content flex flex-row justify-between">

      <Link to={"/"}>
        <img src="/control-de-juego.png" className="bg-white p-1 rounded mx-2" alt="" />
        Gamin Center
      </Link>


      <ul>
        <li><Link to={"/category/monitor"}>Monitores</Link></li>
        <li>
          <a href="#">Perifericos</a>
          <ul className="dropdown">
            <li><Link to={"/category/mouse"}>Mouse</Link></li>
            <li><Link to={"/category/teclado"}>Teclado</Link></li>
            <li><Link to={"/category/auriculares"}>Auriculares</Link></li>
          </ul>
        </li>
      </ul>

      <CartWidget />
    </div>
  )
}

export default Navbar
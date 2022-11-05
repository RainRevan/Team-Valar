import { Route, Link, Routes } from "react-router-dom";
function CentralMenu() {
    return (
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 text-dark">
            <li><Link to={"/"}><a href="'./components/nosotros'" className="nav-link px-2 text-secondary">Nosotros</a></Link></li>
            <li><a href="./nosotros.jsx" className="nav-link px-2 text-white">Adopta</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Dudas</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Tienda</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Contacto</a></li>
        </ul>
    )
}
export default CentralMenu;
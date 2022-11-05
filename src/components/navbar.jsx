import CentralMenu from "./centralmenu";
function Navbar(props) {
    return (
        <div className="text-dark">
            <header className="p-3 text-bg-dark bg-primary">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                        </a>
                        <CentralMenu />
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Buscar..." aria-label="Search" />
                        </form>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2">Login</button>
                            <button type="button" className="btn btn-warning">Registrarme</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Navbar;

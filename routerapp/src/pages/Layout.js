import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./Footer";




const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg bg-black" style={{ height: "100px" }}>
                <div className="container-fluid">

                    {/* Add space after logo */}
                    <Link className="navbar-brand me-5 fw-bold" to="/" style={{ fontSize: "28px", fontWeight: "bold",color:"white" }}>Juice Corner 🥤</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Pull menu slightly left by reducing ms-auto to ms-3 */}
                        <ul className="navbar-nav ms-auto fw-bold fs-5" >

                            {/* Add space between each nav menu using mx-3 */}
                            <li className="nav-item mx-3">
                                <Link className="nav-link " to="/" style={{color:"white"}}>Home</Link>
                            </li>

                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/contact" style={{color:"white"}}>Contact</Link>
                            </li>

                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/blogs" style={{color:"white"}}>Blogs</Link>
                            </li>


                             <li className="nav-item mx-3">
                                <Link className="nav-link" to="/users" style={{color:"white"}}>Users</Link>  {/* NEW LINK */}
                            </li>

                            

                            <li className="nav-item mx-3">
                                <Link className="nav-link" to="/nopage" style={{color:"white"}}>NoPage</Link>
                            </li>

                             <li className="nav-item mx-3">
                                <Link className="nav-link" to="/login" style={{color:"white"}}>Login</Link>
                            </li>
                             <li className="nav-item">
                                 <Link className="nav-link" to="/register"style={{color:"white"}}>Register</Link>
                            </li>


                            

                        </ul>
                    </div>

                </div>
            </nav>

            <Outlet />

              <Footer />
        </>
    );
}
export default Layout;

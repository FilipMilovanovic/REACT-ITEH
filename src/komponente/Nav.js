import {Link} from 'react-router-dom'

function Nav(){
    return (
        <div className="div_nav">
            <nav className="navbar navbar-light bg-light">
            <Link to={"/"} className="navbar-brand" id="poc-nav">Početna</Link>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
             </form>
            </nav>
        </div>
    )
}

export default Nav;
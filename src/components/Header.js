import { useState } from 'react';
import Nav from './Nav';
import NavSort from './NavSort';
import { Link } from 'react-router-dom';
function Header() {

    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }

    return (
        <header className={navOpen ? 'show' : undefined}>
            <div className='ham-title'>
                <h1 className="filmtown"><Link to="/">Film Town</Link></h1>
            
                <button className="btn-main-nav" 
                        onMouseDown={(e) => { e.preventDefault(); }}
                        onClick={showHideNav}>
                    <span className="hamburger-icon">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </span>
                    <span className="sr-only">Menu</span>
                </button>
            </div>    
            <Nav handleShowHideNav={showHideNav} />
            <div className='navSortParent'>
                <div className='navSort'>
                    <NavSort />
                </div>
            </div>
            <div className='hLine'></div>
        </header>
    );
};

export default Header

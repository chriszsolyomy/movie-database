import { getYear } from '../utilities/Date';

function Footer() {
    return (
        <footer>
            <div className='hLine'></div>
            <div className='hLine hLine2'></div>
            <p><span>&copy; {getYear()} Chris Zsolyomy</span> <span>Lily Zavaglia</span> <span>Lucille Chesshire</span></p>
        </footer>
    )
}

export default Footer;

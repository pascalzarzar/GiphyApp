import logo from './Assets/logo-desktop.svg'
import darkLogo from './Assets/logo-modo-noct.svg'
import './Header.css'


const Header = (props) => {

    return(
        <header className='Header'>
            <div className='Header-container'>
                <img className='Header-logo' src={props.darkState ? darkLogo : logo } alt="Gifos logo" />
                <button className={props.darkState ? 'btn Header-dark' : 'btn Header-light'} onClick={ props.handleLightChange }>
                    {props.darkState ? 'Modo Light' : 'Modo Dark'}
                </button>
            </div>
        </header>
    );
}

export default Header;
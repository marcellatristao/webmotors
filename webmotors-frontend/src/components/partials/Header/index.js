import React from 'react';
import { HeaderArea } from './styled';
import { Link } from 'react-router-dom';

import webmotorslogo from '../Header/webmotorslogo.png';

const Header = () => {
    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={webmotorslogo} alt="Aqui jaz a logo do webmotors" />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="">Comprar</Link>
                        </li>
                        <li>
                            <Link to="">Vender</Link>
                        </li>
                        <li>
                            <Link to="">Serviços</Link>
                        </li>
                        <li>
                            <Link to="">Ajuda</Link>
                        </li>
                        <li>
                            <Link to="" className="button">Login</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </HeaderArea>
    );
}
export default Header;
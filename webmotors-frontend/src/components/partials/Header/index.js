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
                        <img src={webmotorslogo} alt="Aqui jaz a logo do webmotors"/>
                    </Link>
                </div>
            </div>
        </HeaderArea>
    );
}
export default Header;
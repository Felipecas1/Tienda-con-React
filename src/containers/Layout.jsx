import React, { Children } from 'react';
//cuando le ponemos el children estamos diciendole que en este componente van a recibir diferentes componentes de forma ordenada, encapsulamiento.
const Layout = ({children}) => {
    return (
        <div className="Layout">
            {children}
        </div>
    );
}

export default Layout;
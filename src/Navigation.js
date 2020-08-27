import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';

const links = [
    {
        links: [
            {
                name: 'Dashboard Individual',
                url: '/',
                key: 'key1',
                iconProps: {
                    iconName: 'ViewDashboard',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        }
                    }
                }
            },
            {
                name: 'Configuración',
                url: '/',
                key: 'key3',
                iconProps: {
                    iconName: 'Settings',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        }
                    }
                }
            },
            {
                name: 'Cerrar Sesión',
                url: '/',
                key: 'key4',
                iconProps: {
                    iconName: 'SignOut',
                    styles: {
                        root: {
                            fontSize: 20,
                            color: '#106ebe',
                        }
                    }
                }
            }
        ]
    }
]

const navigationStyles = {
    root: {
        height: '100vh',
        boxSizing: 'border-box',
        overflowY: 'auto',
        paddingTop: '10vh',
    }
}

const Navigation = () => {
    initializeIcons();
    return (
        <Nav
            groups={links}
            selectedKey='key1'
            styles={navigationStyles}
        />
    )
}

export default Navigation;
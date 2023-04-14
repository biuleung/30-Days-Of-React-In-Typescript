import { ComponentType } from 'react';

export function WithButton<T>(
    Component: ComponentType<T>,
    name: string = 'default'
) {
    const colors: { name: string; backgroundColor: string; color: string }[] = [
        {
            name: 'default',
            backgroundColor: '#e7e7e7',
            color: '#000000',
        },
        {
            name: 'confirm',
            backgroundColor: '#61dbfb',
            color: '#ffffff',
        },
        {
            name: 'success',
            backgroundColor: '#4CAF50',
            color: '#ffffff',
        },
        {
            name: 'danger',
            backgroundColor: '#f44336',
            color: '#ffffff',
        },
    ];

    const color = colors.find((color) => color.name === name);

    const buttonStyles = {
        backgroundColor: color?.backgroundColor,
        padding: '10px 45px',
        border: 'none',
        borderRadius: 3,
        margin: 3,
        cursor: 'pointer',
        fontSize: '1.25rem',
        color: color?.color,
    };

    return (hocProps: T) => {
        return (
            <Component {...(hocProps as T)} style={buttonStyles} name={name} />
        );
    };
}

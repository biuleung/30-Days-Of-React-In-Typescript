import { ComponentType } from 'react';

function WithInput<T>(Component: ComponentType<T>, name: string = 'default') {
    return (hocProps: T) => {
        return <Component {...(hocProps as T)} type={name} />;
    };
}

export default WithInput;

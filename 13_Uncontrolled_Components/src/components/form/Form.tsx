import React, { ChangeEvent, FormEvent, useRef } from 'react';

function Form() {
    const firstName = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('useRef: ', firstName.current?.value);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log('onChange: ', e.currentTarget.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>First name: </span>
                    <input type="text" placeholder="name" ref={firstName} />
                </div>
                <div>
                    <span>Last name: </span>
                    <input
                        type="text"
                        placeholder="name"
                        onChange={handleChange}
                    />
                </div>
            </form>
        </div>
    );
}

export default Form;

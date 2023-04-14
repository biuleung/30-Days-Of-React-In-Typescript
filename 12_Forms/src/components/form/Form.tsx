import { FormEventHandler, useEffect, useState } from 'react';
import validator from 'validator';

type FormProps = {
    name: string;
    email: string;
    skills: string[];
};

function Form({
    handleSubmit,
}: {
    handleSubmit: FormEventHandler<HTMLFormElement>;
}) {
    console.log('Forml rendered');
    const [formData, setFormData] = useState<FormProps>({
        name: '',
        email: '',
        skills: [],
    });

    const [nameErrors, setNameErrors] = useState<string[]>([]);
    const [emailErrors, setEmailErrors] = useState<string[]>([]);

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;

        switch (e.currentTarget.className) {
            case 'skill':
                if (e.currentTarget.checked) {
                    setFormData((prevState) => {
                        return {
                            ...prevState,
                            skills: prevState.skills.concat(value),
                        };
                    });
                } else {
                    setFormData((prevState) => {
                        return {
                            ...prevState,
                            skills: prevState.skills.filter(
                                (skill) => skill !== value
                            ),
                        };
                    });
                }

                break;

            default:
                setFormData((prevState) => {
                    return {
                        ...prevState,
                        [name]: value,
                    };
                });
                break;
        }
    };

    const validate = () => {
        const errors: { name: string[]; email: string[]; skills: string[] } = {
            name: [],
            email: [],
            skills: [],
        };

        const containsNumbers = (str: string) => {
            return /[0-9]/.test(str);
        };

        if (formData.name.length < 2 || formData.name.length > 15) {
            errors.name.push('Name must be between 2 and 15');
        }

        if (containsNumbers(formData.name)) {
            errors.name.push('Name cannot conatains "Numbers"');
        }

        if (!validator.isEmail(formData.email)) {
            errors.email.push('Invalid email');
        }

        return errors;
    };

    useEffect(() => {
        console.log('formData: ', formData);
        const { name, email } = validate();

        setNameErrors(() => {
            return name;
        });
        setEmailErrors(() => {
            return email;
        });
    }, [formData]);

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="d-flex mb-2">
                <div className="me-2">
                    <span>Name: </span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                        placeholder="Name"
                    />
                </div>
                <div className="text-danger">{nameErrors.join(', ')}</div>
            </div>
            <div className="d-flex mb-2">
                <span>Email: </span>
                <div className="me-2">
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        placeholder="Email"
                    />
                </div>
                <div className="text-danger">{emailErrors.join(', ')}</div>
            </div>
            <div className="skills">
                <span>Skill: </span>
                <div className="ps-3">
                    <label>
                        <input
                            className="skill"
                            type="checkbox"
                            value="c#"
                            onChange={onChange}
                        />
                        C#
                    </label>
                    <label>
                        <input
                            className="skill"
                            type="checkbox"
                            value="f"
                            onChange={onChange}
                        />
                        F
                    </label>
                    <label>
                        <input
                            className="skill"
                            type="checkbox"
                            value="java"
                            onChange={onChange}
                        />
                        Java
                    </label>
                </div>
            </div>
        </form>
    );
}

export default Form;

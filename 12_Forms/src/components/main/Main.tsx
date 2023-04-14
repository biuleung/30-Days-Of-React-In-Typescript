import Form from '../form/Form';

function Main() {
    const handleSubmit = (e: React.FormEvent<any>) => {
        e.preventDefault();
        console.log('onSubmitForm: ', e.currentTarget.elements.name);
    };
    return (
        <div className="main">
            <Form handleSubmit={handleSubmit} />
        </div>
    );
}

export default Main;

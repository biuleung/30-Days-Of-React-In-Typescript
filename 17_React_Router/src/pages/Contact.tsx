import { useLoaderData } from 'react-router-dom';
import { redirect } from 'react-router-dom';

function Contact() {
    const contact = useLoaderData() as { name: string; age: number };

    return (
        <>
            <h4>Contact</h4>
            <p>Name: {contact.name}</p>
            <p>Age: {contact.age}</p>
        </>
    );
}

export default Contact;

export async function loader({ params }: { params: { id: string } }) {
    const getContact = (): Promise<{ name: string; age: number } | boolean> =>
        new Promise((resolve) =>
            setTimeout(() => {
                switch (params.id) {
                    case '1':
                        resolve({
                            name: 'Tom',
                            age: 20,
                        });
                        break;
                    case '2':
                        resolve({
                            name: 'Peter',
                            age: 22,
                        });
                        break;
                    default:
                        resolve(false);
                        break;
                }
            }, 400)
        );

    const contact = await getContact();
    if (contact === false) {
        return redirect('../');
    }
    return contact;
}

import { Link, Outlet, useLoaderData } from 'react-router-dom';

function Contacts() {
    const { contacts } = useLoaderData() as {
        contacts: { id: string; name: string }[];
    };

    return (
        <>
            <h3>Contacts</h3>
            {contacts?.length ? (
                <ul>
                    {contacts.map((contact) => (
                        <Link key={contact.id} to={`contact/${contact.id}`}>
                            <li key={contact.id}>{contact.name}</li>
                        </Link>
                    ))}
                </ul>
            ) : (
                <p>No contact</p>
            )}
            <div className='ps-5 mt-3'>
                <Outlet />
            </div>
        </>
    );
}
export default Contacts;

export async function loader() {
    const getContacts = () => {
        return new Promise((resolve) =>
            setTimeout(() => {
                resolve([
                    { id: '1', name: 'Tom' },
                    { id: '2', name: 'Peter' },
                    { id: '3', name: 'Sam' },
                ]);
            }, 800)
        );
    };

    const contacts = await getContacts();

    return { contacts };
}

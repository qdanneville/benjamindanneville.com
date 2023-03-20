export default function ServiceList({ services }) {

    console.log('services', services);

    return (
        <>
            {
                services.map(service => <p>{service.title}</p>)
            }
        </>
    )
}

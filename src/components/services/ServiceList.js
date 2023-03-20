export default function ServiceList({ services }) {

    console.log('services', services);

    return (
        <>
            {
                services.map((service, index) => <p key={index}>{service.title}</p>)
            }
        </>
    )
}

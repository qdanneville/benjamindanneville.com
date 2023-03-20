import ServiceItem from "./ServiceItem";

export default function ServiceList({ services }) {

    console.log('services', services);

    return (
        <ul className="flex items-center justify-center mt-20 w-full">
            {
                services.map((service, index) => <ServiceItem item={service} key={`${service.title}-${index}`}></ServiceItem>)
            }
        </ul>
    )
}

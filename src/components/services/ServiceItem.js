export default function ServiceItem({ item }) {

    return (
        <li className="mx-4">
            <p className="text-white underline">{item.title ?? ''}</p>
        </li>
    )
}

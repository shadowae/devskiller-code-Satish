export const A = (props) => {
    return (
        <a
            href={`${props.values.href}`}
            // href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
        >
            {props.values.label}
        </a>
    )
}

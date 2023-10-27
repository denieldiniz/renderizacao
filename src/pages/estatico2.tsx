export function getStaticProps() {
    return {
        props: {
            numero: Math.random(),
        },
    }
}

export default function estatico2(props: any) {
    return (
        <div>
            <div>estatico2</div>

            <div>{props.numero}</div>
        </div>
    )
}

export function getStaticProps() {
    return {
        revalidate: 7,
        props: {
            numero: Math.random(),
        },
    }
}

export default function estatico4(props: any) {
    return (
        <div>
            <div>Estatico #04</div>

            <div>{props.numero}</div>
        </div>
    )
}

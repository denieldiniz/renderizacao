export function getStaticProps() {
    return {
        revalidate: 7,
        props: {
            numero: Math.random(),
        },
    }
}

export default function estatico3(props: any) {
    return (
        <div>
            <div>Estatico #03</div>

            <div>{props.numero}</div>
        </div>
    )
}

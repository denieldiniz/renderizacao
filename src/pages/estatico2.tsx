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
            <div>Estatico #02</div>

            <div>{props.numero}</div>
        </div>
    )
}

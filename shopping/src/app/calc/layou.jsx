export default function Calc({children}) {
    return (
        <>
            { children }
        </>
    )
}

export const staticParamsMetadata = async () => {
    return ({
        title: 'calc'
    })
}
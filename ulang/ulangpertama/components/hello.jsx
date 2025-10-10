export const Hello = function(){
    const nama = "Nugie kurniawan"
    const bahasa = ["javascript","python","php"]
    return (
        <>
            <div>{nama}</div>
            <div>{bahasa.map(el=><div>{el}</div>)}</div>
        </>
    )
}
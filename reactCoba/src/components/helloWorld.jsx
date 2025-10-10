export const Hello = ()=>{
    const nama = "Nugie kurniawan"
    const bahasa = ["Javascript","python","php"]
    return <>
        <h1>Hello dunia world {nama}</h1>
        <h2>{bahasa.map(el=>{
            return <>
            <span>{el}</span> 
            <br/>
            </>
        })}</h2>
    </>
}
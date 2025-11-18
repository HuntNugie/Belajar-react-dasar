export const Coba = ({name,titles})=>{
    return (<>
        <div>{name}</div>
        {titles.map(title=>(<div>{title}</div>))}
        </>)
}
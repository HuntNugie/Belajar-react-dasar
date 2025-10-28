export const fetchData = async(url)=>{
    try {
    const baseUrl = import.meta.env.VITE_API_URL
    const response = await fetch(`${baseUrl}/${url}`)
    const data = response.json()
    return data 
    } catch (error) {
    console.log(error)    
    }
}
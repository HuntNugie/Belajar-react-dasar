export const formatTanggal = (created_at)=>{
    const date = new Date(created_at)
    return date.toLocaleDateString("id-ID",{
        day:"numeric",
        month:"long",
        year:"numeric"
    })
}
import Blog from "../models/Blog.js"
export const index = async(req,res)=>{
    const data = await Blog.findMany({
        include:{
            author:true,
            categories:true
        }
    })
    return res.status(200).json(data);
}
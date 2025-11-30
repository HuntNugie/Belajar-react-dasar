import Blog from "../models/Blog.js";

// untuk mengambil semua data blog
export const index = async (req, res) => {
    try {
        const data = await Blog.findMany({
            include: {
                author: true,
                categories: true,
            },
        });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json(error);
    }
};

// untuk mengambil beberapa data blog berdasarkan query parameter
export const show = async(req,res)=>{
    try {
        const limit = parseInt(req.query.limit);
        if(limit){
            const data = await Blog.findMany({
                take:limit,
                include:{
                    author:true,
                    categories:true
                }
            });
            return res.status(200).json(data)
        }else{
            throw ({message:"format penggunaan salah"})
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

// untuk search
// export const search = async(req,res)=>{
//     try {
//         const whatSearch = req.query.s;
//         const data = await Blog.findMany({
//             where:{
//                 OR:[{title:{contains}}]
//             }
//         })
//     } catch (error) {
        
//     }
// }


// untuk tambah data 
export const store = async(req,res)=>{
    try {
        const {author,title,category_id,body} = req.body;
        const tambah = await Blog.create({
            data:{
                author:{
                    create:{
                        nama:author
                    }
                },
                judul:title,
                categories:{
                    connect:{id:Number(category_id)}
                },
                body
            },
            include:{
                author:true,
                categories:true
            }
        });
        res.status(200).json(tambah);
    } catch (error) {
        res.status(404).json({message:"gagal"})
    }
}
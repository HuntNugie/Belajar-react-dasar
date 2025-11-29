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

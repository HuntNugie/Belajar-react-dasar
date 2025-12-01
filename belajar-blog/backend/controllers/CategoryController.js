import Category from "../models/Category.js";

export const index = async (req, res) => {
    try {
        const data = await Category.findMany();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(404).json({message: "gagal tidak ada data category"});
    }
};

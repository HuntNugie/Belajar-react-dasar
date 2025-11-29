import Blog from "../models/Blog.js";
import Category from "../models/Category.js";
import User from "../models/User.js";

async function main() {
    const user = await User.create({
        data: {
            nama: "Nugie kurniawan",
        },
    });

    const category = await Category.create({
        data: {
            nama_category: "backend developer",
            slug: "backend-developer",
        },
    });

    const blog = await Blog.create({
        data: {
            judul: "seorang yang memulai dari 0",
            body: "lorem ipsum dolor sit amet ",
            author: {
                connect: {id: 1},
            },
            categories: {
                connect: {id: 1},
            },
        },
    });

    return {user,category,blog}
}

main()
.then((res) => {
    console.log(`berhasil menambahkan data`);
    console.log(res);
})
.catch(() => {
    console.log("gagal menambahkan data");
})
.finally(() => {
    console.log("selesai seed ke database");
});

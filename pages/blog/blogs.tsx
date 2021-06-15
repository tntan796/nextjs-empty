import BlogModel from "../../models/blog.model";
import { getBlogsApi } from "../api/mock.service";
import '../../styles/blogs.module.css';
import Image from 'next/image'
function Blogs(props: any) {
    const blogs: BlogModel[] = props.blogs;

    return (
        <>
            <h3>Blog</h3>
            <ul className="blogWrapper">
                {blogs && blogs.map(blog => (
                    <div key={blog.id}>
                        <li>{blog.id} - {blog.title}</li>
                        <p>{process.env.DB_HOST}</p>
                        <Image
                            src="/Ash_Pikachu.png"
                            alt="Picture of the author"
                            width={300}
                            height={300}
                        />
                    </div>
                ))}
            </ul>
        </>
    );
}

export async function getStaticProps() {
    const blogs = await getBlogsApi().toPromise();
    return {
        props: {
            blogs
        }
    }
}

export default Blogs;
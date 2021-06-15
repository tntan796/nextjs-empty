import { lastValueFrom } from "rxjs";
import { GetStaticProps, InferGetStaticPropsType} from 'next'
import BlogModel from "../../models/blog.model";
import { getBlogDetailApi, getBlogsApi } from "../api/mock.service";

function Blog({ blog }: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log('Blog:', blog);
    
    return (
        <>
        Id: {blog?.id} - Title: {blog?.title}
        </>
    );
}

export async function getStaticPaths() {
    const blogs: BlogModel[] = await lastValueFrom(getBlogsApi());
    console.log('Heheh hột me');
    
    const paths = blogs.map((blog) => ({
      params: { id: blog.id.toString() },
    }))
    return { paths : [{params: {id: '1'}}], fallback: 'blocking' }
}


export const getStaticProps: GetStaticProps = async (context) => {
    const {params}: any = context;
    console.log('Params:', params);
    
    const blog = await lastValueFrom(getBlogDetailApi(params.id));
    return {
        props: {
            blog
        }, revalidate: 10
    }
}

// export async function getStaticProps(props: any) {
//     const {params} = props;
//     console.log('goi');
//     const blog = await lastValueFrom(getBlogDetailApi(params.id));
//     return {props: {blog}}
// }

export default Blog;
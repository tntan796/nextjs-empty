import { Observable, of } from "rxjs"
import BlogModel from "../../models/blog.model";

const mockBlogs: BlogModel[] = [
    {
        id: 1,
        title: 'Blog 1'
    },
    {
        id: 2,
        title: 'Blog 2'
    },
    {
        id: 3,
        title: 'Blog 3'
    }
];

export const getBlogsApi = () : Observable<BlogModel[]> => {
    return of(mockBlogs);
}

export const getBlogDetailApi = (id: number) => {
    const blog = mockBlogs.find(blog => blog.id == id);

    return of(
       blog
    );
}
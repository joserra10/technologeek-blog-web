export interface Blog {
    id: number;
    title: string;
    summary: string;
    content: string;
    image: string;
}

export interface Blogs {
    blogs: Blog[];
}

export interface Embedded {
    _embedded: Blogs;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog, Embedded } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  private REST_API_SERVER = 'http://localhost:9097/blog';

  blogs: Blog[];

  getAllBlogs(): Blog[] {
    const myBlogs: Blog[] = [];
    this.httpClient.get(this.REST_API_SERVER).subscribe((data: Embedded) => {
        console.log(data._embedded.blogs);
        data._embedded.blogs.forEach(element => {
          myBlogs.push({
            id: element.id,
            title: element.title,
            content: element.content,
            image: element.image,
            summary: element.summary
          });
        });
    });
    this.blogs = myBlogs;
    return this.blogs;
  }

  getBlog(id: number): Blog {
    const idNumber: number = +id;
    return this.blogs.find(item => idNumber === item.id);
  }

}

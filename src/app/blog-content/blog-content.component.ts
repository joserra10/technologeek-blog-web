import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private blogService: BlogService) { }

  blog: Blog;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.blog = this.blogService.getBlog(id) as Blog;
      console.log(this.blog);
    });
  }

}

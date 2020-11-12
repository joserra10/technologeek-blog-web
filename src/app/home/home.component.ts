import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  principalImage = 'assets/images/initial_image.png';

  blogs: Blog[];

  ngOnInit(): void {
    this.blogs = this.blogService.getAllBlogs();
  }

}

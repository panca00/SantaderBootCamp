import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component({
    selector:'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit
{    
    courses: Course[]=[];

    ngOnInit(): void {
        this.courses = [
        {
            id:1,
            name:'Angular:Forms',
            imageUrl:'/assets/images/forms.png',
            price:99.9,
            code:'XPS-8796',
            duration:120,
            rating:3,
            realeseDate:"December,2"
        },
        {
            id:2,
            name:'Angular:HTTPS',
            imageUrl:'/assets/images/http.png',
            price:43.9,
            code:'LKL-1094',
            duration:80,
            rating:4,
            realeseDate:"December,4"
        },
        ]
    }

  


  
}
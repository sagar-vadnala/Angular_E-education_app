import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.course
    console.log(this.course)
  }
  course= [
    {'id':1,'name':'learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/angular.jpg'},
    {'id':2,'name':'learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/typescript.jpg'},
    {'id':3,'name':'learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/nodejs.jpg'},
    {'id':4,'name':'learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/reactjs.jpg'},
    
  ]
 
}

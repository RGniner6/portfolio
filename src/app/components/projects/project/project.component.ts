import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../Projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() isLeft: boolean;

  constructor() {}

  ngOnInit(): void {
    console.log('isLeft is :', this.isLeft);
  }

}

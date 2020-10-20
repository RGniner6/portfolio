import { Component, OnInit } from '@angular/core';
import {Project, projects} from './Projects';

@Component({
  selector: 'app-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  constructor() {
    this.projects = projects;
  }

  ngOnInit(): void {
  }

}

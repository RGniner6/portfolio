import { Component, OnInit } from '@angular/core';
import {Project, projects} from './Projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor() {
    this.projects = projects;
  }

  ngOnInit(): void {
  }

}

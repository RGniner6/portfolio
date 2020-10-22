import { Injectable } from '@angular/core';
import {Project, projects} from '../components/project-list/Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[];
  constructor() {
    this.projects = projects;
  }

  getProject(id: number) {
    return projects.find( project => project.id === id);
  }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Project, projects} from './Projects';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @ViewChild('projectRef', {static: true}) projectElement: ElementRef;
  projects: Project[];
  constructor(private navigationService: NavigationService) {
    this.projects = projects;
  }

  ngOnInit(): void {
    this.navigationService.addLink('projects', this.projectElement);
  }

}

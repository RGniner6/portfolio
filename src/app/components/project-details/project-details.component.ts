import {Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Project} from '../project-list/Projects';
import {ProjectService} from '../../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;
  @ViewChild('cardFs', { static: true }) private cardFs: ElementRef;
  @ViewChild('titleFs', { static: true }) private titleFs: ElementRef;
  @ViewChild('buttonsFs') private buttonsFs: ElementRef;
  @ViewChild('cardToggleFs') private cardToggleFs: ElementRef;
  @ViewChild('gitFs') private gitFs: ElementRef;
  @ViewChild('liveFs') private liveFs: ElementRef;
  @ViewChild('builtWithFs', { static: true }) private builtWithFs: ElementRef;
  @ViewChildren('techListFs') private techListFs: QueryList<ElementRef>;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router,
              private navigation: NavigationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.project = this.projectService.getProject(Number(params.get('projectId')));
      if (!this.project) {
        this.router.navigate(['/']);
      }
    });
  }

  navigateTo(path: string) {
    this.navigation.scrollto(path);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Role } from '../_Classes/role';
import { DaterangeComponent } from '../daterange/daterange.component';
import { Project } from '../_Classes/project';
import { Router } from '@angular/router';

const initialprojects = 4;
const projectincrement = 10;

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {
  @Input() role: Role;
  projectiterations = [];
  maxprojects = initialprojects;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateProjectIterations(initialprojects);
  }

  updateProjectIterations(max){
    this.projectiterations = Array(Math.min(max, this.role && this.role.projects ? this.role.projects.length : 0)).fill(0).map((x, i) => i);
  }

  loadMoreProjects(){
    const newcount = this.projectiterations.length + projectincrement;
    this.updateProjectIterations(newcount);
  }

  selectProject(project: Project){
    this.router.navigate(
      [],
      {
        queryParams: { project: project.name, role: this.role.company },
        queryParamsHandling: 'merge',
        replaceUrl: true
      }
    );
  }
}

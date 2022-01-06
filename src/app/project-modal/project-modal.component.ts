import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Project } from '../_Classes/project';
import { PROFILE } from '../data';
import { ActivatedRoute } from '@angular/router';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';
import { DaterangeComponent } from '../daterange/daterange.component';
import { SkillListComponent } from '../skill-list/skill-list.component';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {
  project: Project;

  constructor(public activeModal: NgbActiveModal, private activeRoute: ActivatedRoute) {
    activeRoute.queryParams.subscribe(p => this.paramsChanged(p));
  }

  ngOnInit(): void {
  }

  private paramsChanged(params){
    let project = null;
    let projects = null;

    if (params.role && PROFILE.roles){
      for (const obj of PROFILE.roles){
        if (params.role === obj.company && obj.projects){
          projects = obj.projects.slice();
          break;
        }
      }
    }
    else if (PROFILE.projects){
      projects = PROFILE.projects.slice();
    }

    if (params.project && projects){
      for (const obj of projects){
        if (params.project === obj.name){
          project = obj;
          break;
        }
      }
    }

    this.project = project;
  }

}

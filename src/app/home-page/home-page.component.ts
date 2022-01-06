import { Component, OnInit } from '@angular/core';
import { GroupComponent } from '../group/group.component';
import { HeaderGroupComponent} from '../header-group/header-group.component';
import { FooterComponent } from '../footer/footer.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { ProjectItemComponent } from '../project-item/project-item.component';
import { TimelineItemComponent } from '../timeline-item/timeline-item.component';
import { QualificationComponent } from '../qualification/qualification.component';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { PROFILE } from '../data';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../_Classes/project';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Qualification } from '../_Classes/qualification';
import { QualificationModalComponent } from '../qualification-modal/qualification-modal.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  profile = PROFILE;
  firstname = 'white';
  lastname = 'white';
  projectsColour = 'white';
  projectsColourNext = 'white';
  rolesColour = 'white';
  rolesColourNext = 'white';
  qualificationsColour = 'white';
  qualificationsColourNext = 'white';
  skillsColour = 'white';
  skillsColourNext = 'white';
  aboutColour = 'white';

  constructor(private router: Router, private modalService: NgbModal, route: ActivatedRoute) {
    route.queryParams.subscribe(p => this.paramsChanged(p));

    this.firstname = this.profile.name.substr(0, this.profile.name.indexOf(' '));
    this.lastname = this.profile.name.substr(this.profile.name.indexOf(' '));

    this.setColors();
  }

  ngOnInit(): void {
  }

  private paramsChanged(params){
    if (params.project){
      this.openProjectModal();
    }
    if (params.qualification){
      this.openQualificationModal();
    }
  }

  private closeModal(){
    this.router.navigate(
      [],
      {
        queryParams: { project: null, qualification: null, role: null, skill: null },
        queryParamsHandling: 'merge',
        replaceUrl: true
      }
    );
  }

  selectProject(project: Project){
    this.router.navigate(
      [],
      {
        queryParams: { project: project.name },
        queryParamsHandling: 'merge',
        replaceUrl: true
      }
    );
  }

  selectQualification(qualification: Qualification){
    this.router.navigate(
      [],
      {
        queryParams: { qualification: qualification.name },
        queryParamsHandling: 'merge',
        replaceUrl: true
      }
    );
  }

  private openProjectModal() {
    this.modalService.open(ProjectModalComponent, { size: 'xl', centered: true }).result.then((result) => {
      this.closeModal();
    }, (reason) => {
      this.closeModal();
    });
  }

  private openQualificationModal() {
    this.modalService.open(QualificationModalComponent, { centered: true }).result.then((result) => {
      this.closeModal();
    }, (reason) => {
      this.closeModal();
    });
  }

  private setColors(){
    let seq = 0;
    const colorsequence = [
      'white',
      'tertiary'
    ];
    if (this.profile.projects && this.profile.projects.length > 0){
      this.projectsColour = colorsequence[seq % colorsequence.length];
      seq++;
      this.projectsColourNext = colorsequence[seq % colorsequence.length];
    }
    if (this.profile.roles && this.profile.roles.length > 0){
      this.rolesColour = colorsequence[seq % colorsequence.length];
      seq++;
      this.rolesColourNext = colorsequence[seq % colorsequence.length];
    }
    if (this.profile.qualifications && this.profile.qualifications.length > 0){
      this.qualificationsColour = colorsequence[seq % colorsequence.length];
      seq++;
      this.qualificationsColourNext = colorsequence[seq % colorsequence.length];
    }
    if (this.profile.skills && this.profile.skills.length > 0){
      this.skillsColour = colorsequence[seq % colorsequence.length];
      seq++;
      this.skillsColourNext = colorsequence[seq % colorsequence.length];
    }
    this.aboutColour = colorsequence[seq % colorsequence.length];
  }
}

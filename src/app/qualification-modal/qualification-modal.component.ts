import { Component, OnInit } from '@angular/core';
import { Qualification } from '../_Classes/qualification';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { PROFILE } from '../data';

@Component({
  selector: 'app-qualification-modal',
  templateUrl: './qualification-modal.component.html',
  styleUrls: ['./qualification-modal.component.scss']
})
export class QualificationModalComponent implements OnInit {
  qualification: Qualification;

  constructor(public activeModal: NgbActiveModal, private activeRoute: ActivatedRoute) {
    activeRoute.queryParams.subscribe(p => this.paramsChanged(p));
  }

  ngOnInit(): void {
  }

  private paramsChanged(params){
    let qualification = null;
    let qualifications = null;

    if (PROFILE.qualifications){
      qualifications = PROFILE.qualifications.slice();
    }

    if (params.qualification && qualifications){
      for (const obj of qualifications){
        if (params.qualification === obj.name){
          qualification = obj;
          break;
        }
      }
    }

    this.qualification = qualification;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Qualification } from '../_Classes/qualification';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {
  @Input() qualification: Qualification;

  constructor() { }

  ngOnInit(): void {
  }

}

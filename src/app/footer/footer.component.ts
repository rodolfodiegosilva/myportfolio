import { Component, OnInit } from '@angular/core';
import { PROFILE } from '../data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  profile = PROFILE;
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}

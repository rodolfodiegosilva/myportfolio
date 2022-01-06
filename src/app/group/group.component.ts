import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() mark: string;
  @Input() color: string;
  @Input() nextcolor: string;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../_Classes/skill';
import { SkillItemComponent } from '../skill-item/skill-item.component';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  @Input() skills: Skill[];
  @Input() showprojects: boolean;
  skillgroups = [];

  constructor() { }

  ngOnInit(): void {
    const skillgroups = [];
    if (this.skills){
      const skills = this.skills.slice();
      if (this.showprojects){
        // Uncomment below to sort skills by level
        // skills.sort((a,b) => (a.level > b.level) ? -1 : ((b.level > a.level) ? 1 : 0));
      }

      for (const skill of skills){
        let groupindex = -1;
        for (let i2 = 0; i2 < skillgroups.length; i2++){
          if (skillgroups[i2].name === skill.group){
            groupindex = i2;
            break;
          }
        }
        if (groupindex > -1){
          skillgroups[groupindex].skills.push(skill);
        }
        else{
          skillgroups.push({
            name: skill.group,
            skills: [ skill ]
          });
        }
      }
    }
    this.skillgroups = skillgroups;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../_Classes/skill';
import { PROFILE } from '../data';
import { Project } from '../_Classes/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {
  @Input() skill: Skill;
  @Input() showprojects: boolean;
  projects: Project[] = [];
  barcolour: string;
  skilllevel: string;
  level = 0;
  expanded  = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setBarColour();
    this.setSkillLevel();

    if (this.showprojects && this.skill){
      if (PROFILE){
        if (PROFILE.projects){
          this.addProjects(PROFILE.projects);
        }
        if (PROFILE.roles){
          for (const role of PROFILE.roles){
            if (role.projects){
              this.addProjects(role.projects);
            }
          }
        }
      }
    }

    // setTimeout(this.setLevel.bind(this), 1);
    this.setLevel();
  }

  setLevel(){
    this.level = this.skill ? this.skill.level : 0;
  }

  addProjects(projects){
    for (const project of projects){
      if (project.skills){
        for (const skill of project.skills){
          if (skill.name === this.skill.name){
            this.projects.push(project);
          }
        }
      }
    }
  }

  setBarColour(){
    let pct = this.skill ? this.skill.level : 0;
    if (pct == null){ pct = 0; }
    pct = pct / 100;

    const percentColors = [
        { pct: 0, color: { r: 211, g: 49, b: 21 } },
        { pct: 0.5, color: { r: 252, g: 196, b: 0 } },
        { pct: 1.0, color: { r: 104, g: 188, b: 0 } },
      ];

    let i = 0;
    for (i = 1; i < percentColors.length - 1; i++) {
        if (pct < percentColors[i].pct) {
            break;
        }
    }
    const lower = percentColors[i - 1];
    const upper = percentColors[i];
    const range = upper.pct - lower.pct;
    const rangePct = (pct - lower.pct) / range;
    const pctLower = 1 - rangePct;
    const pctUpper = rangePct;
    const color = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    this.barcolour = 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
  }


  setSkillLevel(){
    let text = '';
    if (this.skill && this.skill.level){
      if (this.skill.level > 80){
        text = 'Excellent';
      }
      else if (this.skill.level > 60){
        text = 'Good';
      }
      else if (this.skill.level > 40){
        text = 'Competent';
      }
      else if (this.skill.level > 20){
        text = 'Learning';
      }
      else{
        text = 'Basic';
      }
    }
    this.skilllevel = text;
  }

  expand(){
    this.expanded = !this.expanded;
  }

  selectProject(project: Project){
    this.router.navigate(
      [],
      {
        queryParams: { project: project.name, role: project.role },
        queryParamsHandling: 'merge',
        replaceUrl: true
      }
    );
  }
}

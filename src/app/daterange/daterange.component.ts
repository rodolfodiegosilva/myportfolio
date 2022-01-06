import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daterange',
  templateUrl: './daterange.component.html',
  styleUrls: []
})
export class DaterangeComponent implements OnInit {
  @Input() startdate: Date;
  @Input() enddate: Date;
  @Input() current: boolean;
  @Input() showtimespan: boolean;
  @Input() format: string;
  duration: string;
  thisformat: string;

  constructor() { }

  ngOnInit(): void {
    if (this.format){
      this.thisformat = this.format;
    }
    else{
      this.thisformat = 'MMMM yyyy';
    }

    if (this.startdate){
      const start = this.startdate;
      let end = this.enddate;
      if (this.current){
        end = new Date();
      }
      const totalmonths = (end.getMonth() - start.getMonth()) +
        (12 * (end.getFullYear() - start.getFullYear()));

      let years = Math.floor(totalmonths / 12);
      let months = totalmonths - (years * 12) + 1;
      if (months === 12){
        months = 0;
        years = years + 1;
      }

      let duration = '';
      if (years > 0){
        if (years === 1){
          duration += years + ' year';
        }
        else{
          duration += years + ' years';
        }
      }
      if (months > 0){
        if (duration){
          duration += ', ';
        }
        if (months === 1){
          duration += months + ' month';
        }
        else{
          duration += months + ' months';
        }
      }
      this.duration = duration;
    }
  }

}

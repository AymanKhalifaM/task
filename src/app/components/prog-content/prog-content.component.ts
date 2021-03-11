import { Component, Input, OnInit } from '@angular/core';
import { ProgsService } from 'src/app/progs.service';

@Component({
  selector: 'app-prog-content',
  templateUrl: './prog-content.component.html',
  styleUrls: ['./prog-content.component.css']
})
export class ProgContentComponent implements OnInit {
  programs = [];
  @Input() learn: string;
  @Input() city: string;
  cityName: string;
  studyType: string;
  constructor(private progs: ProgsService) { }

  ngOnInit() {
    this.progs.getAllProgs().subscribe(progs => {
      console.log(progs[2].data);
      this.programs.push(...progs[2].data)
      console.log(this.programs);
    })
  }
  onSubmit(form) {
    this.cityName = form.cityName;
    this.studyType = form.mba;
    console.log(this.studyType);

  }

}

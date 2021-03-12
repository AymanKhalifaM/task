import { logging } from 'protractor';
import { Component, Input, OnInit } from '@angular/core';
import { ProgsService } from 'src/app/progs.service';

@Component({
  selector: 'app-prog-content',
  templateUrl: './prog-content.component.html',
  styleUrls: ['./prog-content.component.css']
})
export class ProgContentComponent implements OnInit {
  cities = [{ name: "Paris" }, { name: "Brest" }, { name: "Nantes" }, { name: "Barcelona" }, { name: "Berlin" }, { name: "Bordeaux" }, { name: "Marseille" }, { name: "Caen" }, { name: "Rouen" }, { name: "La Rochelle" }, { name: "Montpellier" }];

  levels = ["Bachelor","Master","BMA","BHD"]
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
    console.log(this.cities);
  }
  onSubmit(form) {
    this.cityName = form.cityName;
    this.studyType = form.mba;
    console.log(this.studyType);

  }

}

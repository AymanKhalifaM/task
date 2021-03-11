import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  learn;
  city;
  constructor() {

   }

  ngOnInit() {
    const select = document.querySelectorAll('select');
    var instances = M.FormSelect.init(select, {});
  }

  onSubmit(form) {
    // console.log(form);
    this.learn = form.learn;
    this.city = form.city;
  }

}

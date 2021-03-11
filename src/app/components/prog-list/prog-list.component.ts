import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prog-list',
  templateUrl: './prog-list.component.html',
  styleUrls: ['./prog-list.component.css']
})
export class ProgListComponent implements OnInit {
  @Input() learn: string;
  @Input() city: string;
  @Input() programs: [];
  constructor() { }

  ngOnInit() {
  }

}

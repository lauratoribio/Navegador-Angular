import { Component, OnInit } from '@angular/core';
export interface ImgModel {
  src: string
  alt: string
}
@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit {
  img:ImgModel = {
    src: "",
    alt: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { SearcherService } from './searcher.service';
import { UserInterface } from './../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  public userList: UserInterface[]

  constructor(private SearcherService: SearcherService) { }

  ngOnInit(): void {
    this.getUserList()
  }

  private getUserList(): void {
    this.SearcherService.getUsers().subscribe((list: UserInterface[]) => {
      this.userList = list
    })
  }

}

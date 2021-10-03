import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {UserInfo} from "../model/user-info";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userInfo$: UserInfo;
  public active: string = 'user';
  public dataToShow: string = 'user';
  public icons: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getIcons();
    this.getUser();
  }

  getIcons() {
    this.icons = this.userService.getIcons();
  }

  getUser(): void {
    this.userService.getUser().subscribe( (user: any) => {
        this.userInfo$ = user.results[0];
    })
  }

  getInfo(data: string) {
    this.active = data;
    this.dataToShow = data;
  }

}

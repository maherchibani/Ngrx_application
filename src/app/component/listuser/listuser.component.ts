import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor( 
    public userServiceService:UserServiceService
  ) { }

  ngOnInit() {
    this.userServiceService.getEmployees().subscribe((res: any) => {
      console.log(res)
 
    })  }

}

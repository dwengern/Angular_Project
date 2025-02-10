import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roleList: IRole [] = [];

  http = inject(HttpClient);

ngOnInit(): void {
  this.getAllRoles();
}

getAllRoles() {
  this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: APIResponseModel) => {
    this.roleList = res.data;
  })
}

  //string, number, boolean, date, object, array, null, undefined
  // firstName: string = "Nicholas"; //always follow this way
  // angularVersion: string = "Version 19";

  // version: number = 19;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = "checkbox";
  // selectedState: string = '';

  // showWelcomeAlert () {
  //   alert("Welcome to Angular 19 Tutorial")
  // }

  // showMessage (message: string) {
  //   alert(message)
  // }
}


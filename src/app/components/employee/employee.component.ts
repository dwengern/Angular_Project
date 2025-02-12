import { Component, inject, OnInit, signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel} from '../../model/interface/role';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { CommonModule } from '@angular/common';
import { Employee } from '../../model/class/Employee';

@Component({
  selector: 'app-employee',
  imports: [ReactiveFormsModule, AlertComponent, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  tableName = signal("Employee List");

  clientSrv = inject(ClientService);

  employeeObj: Employee = new Employee();
  employeeList: Employee[] = [];

  ngOnInit(): void {
    this.getAllEmployee();
  }

  onSaveEmployee(data: string) {
    this.clientSrv.addEmployee(this.employeeObj).subscribe((res: APIResponseModel)=>{
      if(res.result){
        alert("Employee created successfully");
        this.getAllEmployee();
        this.employeeObj = new Employee();
      } else {
        alert(res.message);
      }
    })
  }

  getAllEmployee() {
      this.clientSrv.getAllEmployees().subscribe((res: APIResponseModel)=>{
        this.employeeList = res.data;
      })
    }
}

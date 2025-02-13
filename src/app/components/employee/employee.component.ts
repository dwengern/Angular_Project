import { Component, inject, OnInit, signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel} from '../../model/interface/role';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { CommonModule } from '@angular/common';
import { Employee } from '../../model/class/Employee';
import { MyButtonComponent } from '../../reusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-employee',
  imports: [FormsModule, ReactiveFormsModule, AlertComponent, CommonModule, MyButtonComponent],
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

  /*onSaveEmployee(data: string) {
    this.clientSrv.addEmployee(this.employeeObj).subscribe((res: APIResponseModel)=>{
      if(res.result){
        alert("Employee created successfully");
        this.getAllEmployee();
        this.employeeObj = new Employee();
      } else {
        alert(res.message);
      }
    })
  }*/

    onSaveEmployee(data: string) {
      console.log("Employee Object Before API Call:", this.employeeObj);

      this.clientSrv.addEmployee(this.employeeObj).subscribe({
        next: (res: APIResponseModel) => {
          if (res.result) {
            console.log("Employee created successfully");
            this.getAllEmployee();
            this.employeeObj = new Employee();
          } else {
            console.error("Error:", res.message);
          }
        },
        error: (err) => {
          console.error("API Error:", err);
          if (err.error) {
            console.error("Error Details:", err.error); // This may contain validation messages
          }
        }
      });
    }


  getAllEmployee() {
      this.clientSrv.getAllEmployees().subscribe((res: APIResponseModel)=>{
        this.employeeList = res.data;
      })
    }

    onEdit(data: Employee){
      this.employeeObj = data;
    }
}

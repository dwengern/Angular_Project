import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';
import { MyButtonComponent } from '../../reusableComponents/my-button/my-button.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe, AlertComponent, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  currentDate: Date = new Date();

  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientService = inject(ClientService);

  userList$ :Observable<any> = new Observable<any>;

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUsers();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel)=>{
      this.clientList = res.data;
    })
  }

  onSaveClient(data: string) {
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("Client created success");
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert(res.message);
      }
    })
  }

  onDelete(id: number) {

    const isDelete = confirm("Are you sure you want to delete this client?");

    if(isDelete){
      this.clientService.deleteClientById(id).subscribe((res:APIResponseModel)=>{
        if(res.result){
          alert("Client deleted success");
          this.loadClient();
        } else {
          alert(res.message);
        }
      })
    }
  }

  onEdit(data: Client){
    this.clientObj = data;
  }
}


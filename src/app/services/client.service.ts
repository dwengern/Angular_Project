import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Client } from '../model/class/Client';
import { APIResponseModel } from '../model/interface/role';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllUsers () {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getAllClients ():Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLI)
  }

  getAllEmployees ():Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMP)
  }

  getAllClientProject ():Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_PROJECT)
  }

  addUpdate (obj:Client):Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClient", obj)
  }

  deleteClientById (id: number):Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(environment.API_URL + "DeleteClientByClientId?clientId=" + id)
  }

  addClientProjectUpdate (obj:Client):Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(environment.API_URL + "AddUpdateClientProject", obj)
  }
}

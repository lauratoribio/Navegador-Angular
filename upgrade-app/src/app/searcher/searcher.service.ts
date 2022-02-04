import { UserAPIResponseInterface, UserAPIInterface, UserInterface } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearcherService {
  public baseUrl: string

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://reqres.in/api'
   }

   getUsers(): Observable<UserInterface[]> {
   return this.http.get<UserAPIResponseInterface>(`${this.baseUrl}/users`)
   .pipe(map((response: UserAPIResponseInterface) => {
     const list: UserInterface[] = response.data.map((item: UserAPIInterface) => {
       const user: UserInterface = {
         id: item.id,
         first_name: item.first_name,
         last_name: item.last_name,
         email: item.email,
         avatar: item.avatar
       }
       return user
     })
     return list
   })) 
   }

}

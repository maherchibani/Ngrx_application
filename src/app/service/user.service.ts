import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient,  ) { }

getEmployees(){
      return this.http.get('http://dummy.restapiexample.com/api/v1/employees').pipe(map(res => {
      return res;
  }));
  }
 
Delelte(code){
  return this.http.delete('https://prod-nutgen.appspot.com/clinics/'+code).pipe(map(res => {
  return res;
}));
}
  AddClinic(clinic){
    return this.http.post('https://prod-nutgen.appspot.com/clinics', clinic).pipe(map(res => {
    return res;
}));
}
UpdateClinic(code,paylode){
  return this.http.put('https://prod-nutgen.appspot.com/clinics/'+code ,paylode).pipe(map(res => {
  return res;
}));
}
 
}
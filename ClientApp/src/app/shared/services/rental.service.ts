import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from 'src/app/models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
baseUrl:string="http://localhost:3000/rental";
rent:Rental;
constructor(private http:HttpClient) { }

getAllRents():Observable<Rental[]>{
  return this.http.get<Rental[]>(this.baseUrl);
 }

addRent(rent:Rental): Observable<Rental>{
  return this.http.post<Rental>(this.baseUrl,rent);
}
deleteRent(id:number,rent:Rental){                                                  
  return this.http.put(this.baseUrl+"/"+id,rent);
}
getRentActives():Observable<Rental[]>{
  return this.http.get<Rental[]>(this.baseUrl+"?isActive=true");
 }
getRentPassives():Observable<Rental[]>{
  return this.http.get<Rental[]>(this.baseUrl+"?isActive=false");
 }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';

@Injectable({
  providedIn: 'root'
})

//car
export class CarsService {
baseUrl:string="http://localhost:3000/cars";
constructor(private http:HttpClient) {}
 //cars
 getcars():Observable<Car[]>{
  return this.http.get<Car[]>(this.baseUrl);
 }
//cars/1
 getCarDetail(id:number):Observable<Car>{

  return this.http.get<Car>(this.baseUrl+"/"+id);
}
 updateCar(id:number,car:Car){
  return this.http.put(this.baseUrl+"/"+id,car);
}

 addCar(car:Car): Observable<Car>{
  return this.http.post<Car>(this.baseUrl,car);
}
 deleteCar(id:number,car:Car){                                                  
  return this.http.put(this.baseUrl+"/"+id,car);
}

getCarActives():Observable<Car[]>{
  return this.http.get<Car[]>(this.baseUrl+"?isSafeDeleted=true");
 }

}


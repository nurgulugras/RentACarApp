import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseUrl:string="http://localhost:3000/members";

constructor(private http:HttpClient) { }
//members
getmembers():Observable<Member[]>{
  return this.http.get<Member[]>(this.baseUrl);
}
//members/1
getMemberDetail(id:number):Observable<Member>{
  return this.http.get<Member>(this.baseUrl+"/"+id);
}
updateMember(id:number,member:Member){
  return this.http.put(this.baseUrl+"/"+id,member);
}
addMember(member:Member):Observable<Member>{
  return this.http.post<Member>(this.baseUrl,member);
}
deleteMember(id:number,car:Member){                                                  
  return this.http.put(this.baseUrl+"/"+id,car);
}

getMemberActives():Observable<Member[]>{
  return this.http.get<Member[]>(this.baseUrl+"?isSafeDeleted=true");
 }
}


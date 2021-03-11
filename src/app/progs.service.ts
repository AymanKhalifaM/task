import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgsService {

  constructor(private http: HttpClient) {
    
  }
  
  getAllProgs() {
    return this.http.get("../assets/json/progs.json");
  }
  
}

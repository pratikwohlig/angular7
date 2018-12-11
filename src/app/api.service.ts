import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
  constructor(private http: HttpClient) { }
  login(formData) {
    return this.http.post('https://exponentiadata.co.in:8099/api/Chatbotuser/loginuser',formData)
  }
}

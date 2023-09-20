import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrencyConversionService {
  private apiUrl = 'http://localhost:3000/conversion'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Example POST request
  convertCurrency(data: any) {
    console.log('trying post');
    console.log(data);
    return this.http.post(`${this.apiUrl}`, data);
  }
}

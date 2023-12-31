import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './env.environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currencies: any; // Sample list of currencies
  dropdown1: string = 'USD'; // Default value for dropdown1
  dropdown2: string = 'EUR'; // Default value for dropdown2
  amount: number = 1; // Default value for amount

  rate_data: any; // Declare rate_data property

  conversionResponse: any; // Initialize conversionResponse property

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    this.http.get<any>(environment.ratesUrl).subscribe((response) => {
      // Update conversionResponse with the server response
      this.rate_data = response.hello;
      this.currencies = Object.keys(this.rate_data);
    });
  }
  // Function to post conversion data to the server
  postConversionData() {
    const postData = {
      amount: this.amount,
      baseCurrency: this.dropdown1,
      convertedCurrency: this.dropdown2,
    };

    this.http.post<any>(environment.serverUrl, postData).subscribe(
      (response) => {
        // Update conversionResponse with the server response
        this.conversionResponse = response;
      },
      (error) => {
        // Handle error if the POST request fails
        console.error('Error:', error);
      }
    );
  }
}

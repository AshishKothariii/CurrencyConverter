import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule

import { AppComponent } from './app.component';
import { CurrencyConversionService } from './currency-conversion.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule
    MatFormFieldModule, // Add MatFormFieldModule
    MatInputModule, // Add MatInputModule
    MatSelectModule, // Add MatSelectModule
    MatButtonModule, // Add MatButtonModule
  ],
  providers: [CurrencyConversionService],
  bootstrap: [AppComponent],
})
export class AppModule {}

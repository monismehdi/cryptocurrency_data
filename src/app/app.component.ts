import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BitCoinApiService } from './bit-coin-api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cryptocurrency Market';
  cValue: any[];
  count: Number= 1;

  constructor(private bitCoinApiService: BitCoinApiService){

  }

  ngOnInit() {
    this.bitCoinApiService.fetchCoinValues().subscribe(cValue => 
      {
        this.cValue = cValue,
        console.log(this.cValue);
      }, 
      error => console.log('Error fetching Values of Cryptocurrency'))
      console.log('values');
  }


}

import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class BitCoinApiService {
  bUrl: string;

  constructor(private http: Http) { 
    this.bUrl='https://api.coinmarketcap.com/v1';
  }

  fetchCoinValues(): Observable<any>{
    return this.http.get(this.bUrl + "/ticker/").map(response => response.json());
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import Stock from '../shared/models/stock-model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://santander-spring-crud.herokuapp.com/bootcamp/'

  stockPipe:Stock = new Stock();

  constructor(private http: HttpClient,private router:Router) { }

  async getStocks(): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

  postStock(newStock:Stock){
    return this.http.post<Stock>(`${this.baseUrl}/stock`,{...newStock, date:(new Date(newStock.date)).toLocaleDateString()})
  }

  putStock(editStock:Stock){
    return this.http.put<Stock>(`${this.baseUrl}/stock`,{...editStock, date:(new Date(editStock.date)).toLocaleDateString()})
  }


}

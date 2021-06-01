import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://santander-spring-crud.herokuapp.com/bootcamp/'

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }

  postStock(newStock:Stock){
    return this.http.post<Stock>(`${this.baseUrl}/stock`,{...newStock, date:(new Date(newStock.date)).toLocaleDateString()})
  }


}

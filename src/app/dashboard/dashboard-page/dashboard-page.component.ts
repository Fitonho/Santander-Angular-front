import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  stocks: Stock[] = []

  constructor(
    private dashboardService: DashboardService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.fetchStocks();
  }

  async fetchStocks(): Promise<void>{
    this.stocks = await this.dashboardService.getStocks();
    console.log(this.stocks);

  }

  editStock(stock:Stock){
    this.dashboardService.stockPipe = stock;
    this.router.navigate(['add']);
  }
}

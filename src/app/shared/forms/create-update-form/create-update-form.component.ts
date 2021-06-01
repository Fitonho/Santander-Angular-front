import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import Stock from '../../models/stock-model';

@Component({
  selector: 'app-create-update-form',
  templateUrl: './create-update-form.component.html',
  styleUrls: ['./create-update-form.component.css'],
})
export class CreateUpdateFormComponent implements OnInit {

  formStock = new Stock();
  loading = false;
  error = false;

  constructor(
    private dashboardService: DashboardService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    if(this.dashboardService.stockPipe.id != null){
      this.formStock = this.dashboardService.stockPipe;
      let aux = this.formStock.date.split('/');
      this.formStock.date = (new Date(aux[1]+'/'+aux[0]+'/'+aux[2])).toISOString().substring(0,10);
      this.dashboardService.stockPipe = new Stock();
    }
    console.log(this.router.url);

  }

  onCreateStock(){
        this.loading = true;
        this.error = false;
        this.createOrUpdate()
        .subscribe(
          stock =>{
            this.loading = false;
            console.log(stock);
            this.router.navigate(['']);
          },
          error => {
            this.loading = false;
            this.error = true;
            console.log(error);
          }
        )

  }

  createOrUpdate(){
    if(this.formStock.id == null){
      return this.dashboardService.postStock(this.formStock)
    }
    else {
      return this.dashboardService.putStock(this.formStock)
    }
  }
}

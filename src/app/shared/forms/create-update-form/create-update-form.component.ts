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
    private router:Router
  ) {}

  ngOnInit(): void {}

  onCreateStock(){
        this.loading = true;
        this.error = false;
        this.dashboardService.postStock(this.formStock)
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
}

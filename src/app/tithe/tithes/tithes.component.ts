import { Component, OnInit } from '@angular/core';
import { TitheService } from './../tithe.service';
import { Observable } from 'rxjs';
import { Tithe } from './../tithe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tithes',
  templateUrl: './tithes.component.html',
  styleUrls: ['./tithes.component.css']
})
export class TithesComponent implements OnInit {

  titherId: string;
  tithes$: Observable<Tithe>;

  constructor(private activateRoute: ActivatedRoute,
    private titheService: TitheService ) { }

  ngOnInit() {
    this.titherId = this.activateRoute.snapshot.params.titherId;
    this.tithes$ = this.titheService.getTithesByTitherId(this.titherId);
    this.getTithes();
    //this.tither$.subscribe(() => { }, err => {
    //  console.log(err);
  }

  getTithes() {
    this.tithes$ = this.titheService.getTithesByTitherId(this.titherId);
    this.tithes$.subscribe(() => { }, err => {
      console.log(err);
    });
  }
}

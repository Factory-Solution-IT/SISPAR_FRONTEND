import { Component, OnInit } from '@angular/core';
import { TitheService } from './tithe.service';
import { Observable } from 'rxjs';
import { Tithe } from './tithe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tithe',
  templateUrl: './tithe.component.html',
  styleUrls: ['./tithe.component.css']
})
export class TitheComponent implements OnInit {

  titherId: string;
  tithes$: Observable<Tithe[]>;

  constructor(private titheService: TitheService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.titherId = this.activateRoute.snapshot.params.titherId;
    this.getTithes();
    //this.tither$ = this.titherService.getTitherById(this.titherId);
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

import { Component, OnInit } from '@angular/core';
import { TitheService } from './tithe.service';
import { Observable } from 'rxjs';
import { Tithe } from './tithe';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tithe',
  templateUrl: './tithe.component.html',
  styleUrls: ['./tithe.component.css']
})
export class TitheComponent implements OnInit {

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

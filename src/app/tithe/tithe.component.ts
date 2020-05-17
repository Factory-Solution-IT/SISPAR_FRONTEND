import { Component, OnInit } from '@angular/core';
import { TitheService } from './tithe.service';
import { Observable } from 'rxjs';
import { Tithe } from './tithe';

@Component({
  selector: 'app-tithe',
  templateUrl: './tithe.component.html',
  styleUrls: ['./tithe.component.css']
})
export class TitheComponent implements OnInit {

  tithes$: Observable<Tithe[]>;

  constructor(private titheService: TitheService) { }

  ngOnInit() {
    this.getTithes();
  }

  getTithes() {
    this.tithes$ = this.titheService.getAllTithes();
    this.tithes$.subscribe(() => { }, err => {
      console.log(err);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { TitherService } from '../tither.service';
import { Tither } from '../tither';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tithers',
  templateUrl: './tithers.component.html',
  styleUrls: ['./tithers.component.css']
})
export class TithersComponent implements OnInit {

  tithers$: Observable<Tither[]>;// Tither[] = [];

  constructor(private titherSerice: TitherService) { }

  ngOnInit() {
    this.getTithers();
  }

  getTithers() {
    this.tithers$ = this.titherSerice.getAllTithers();
    this.tithers$.subscribe(() => { }, err => {
      console.log(err);
      // this.router.navigate(['not-found']);
    });
  }
}

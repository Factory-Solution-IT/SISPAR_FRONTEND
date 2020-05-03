import { Component, OnInit } from '@angular/core';
import { TitherService } from './tither.service';
import { Tither } from '../tither';

@Component({
  selector: 'app-tithers',
  templateUrl: './tithers.component.html',
  styleUrls: ['./tithers.component.css']
})
export class TithersComponent implements OnInit {

  tithers: Tither[] = [];

  constructor(private titherSerice: TitherService ) { }

  ngOnInit() {

    this.titherSerice.getAllTithers().subscribe(data => { 
      console.log(data);
      
      this.tithers = data; 
    });
  }

}

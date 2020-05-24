import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitherService } from '../tithers/tither.service';
import { Tither } from '../tithers/tither';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-tither',
  templateUrl: './edit-tither.component.html',
  styleUrls: ['./edit-tither.component.css']
})
export class EditTitherComponent implements OnInit {

  titherId: string;
  tither$: Observable<Tither>;

  constructor(private activateRoute: ActivatedRoute,
    private titherService: TitherService,
    private router: Router) { }

  ngOnInit() {
    this.titherId = this.activateRoute.snapshot.params.titherId;
    this.tither$ = this.titherService.getTitherById(this.titherId);
    this.tither$.subscribe(() => { }, err => {
      console.log(err);
      // this.router.navigate(['not-found']);
    });
  }

}

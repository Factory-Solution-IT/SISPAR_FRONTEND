import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitherService } from '../tithers/tither.service';
import { Tither } from '../tithers/tither';

@Component({
  selector: 'app-delete-tither',
  templateUrl: './delete-tither.component.html',
  styleUrls: ['./delete-tither.component.css']
})
export class DeleteTitherComponent implements OnInit {

  titherId: string;
  tither: Tither;

  constructor(private activateRoute: ActivatedRoute, private titherService: TitherService, private router: Router) { }

  ngOnInit() {
    this.titherId = this.activateRoute.snapshot.params.titherId;

    this.titherService.getTitherById(this.titherId).subscribe(data => {
      this.tither = data;
    });
  }

  deleteTither() {
    this.titherService.deleteTither(this.titherId).subscribe(() => {

      this.router.navigate(['/tithers']);
    });
  }

}

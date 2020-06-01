import { TitheService } from './../tithe.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tithe } from '../tithe';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-tithe',
  templateUrl: './delete-tithe.component.html',
  styleUrls: ['./delete-tithe.component.css']
})
export class DeleteTitheComponent implements OnInit {

  titheId: string;
  titherId: string;
  tithe$: Observable<Tithe>;

  constructor(private activateRoute: ActivatedRoute,
    private titheService: TitheService,
    private router: Router) { }

  ngOnInit() {
    this.titheId = this.activateRoute.snapshot.params.titheId;
    this.tithe$ = this.titheService.getTitheById(this.titheId);
    this.tithe$.subscribe(data => {
      console.log(data); 
      this.titherId = data.titherId;
    }, err => {
      console.log(err);
    });
  }

  deleteTithe() {
    this.titheService.deleteTithe(this.titheId).subscribe(() => {
      this.router.navigate(['/tithes', this.titherId]);
    });
  }

}

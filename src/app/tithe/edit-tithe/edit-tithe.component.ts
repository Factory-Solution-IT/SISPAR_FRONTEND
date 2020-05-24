import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitheService } from '../tithe.service';
import { Tithe } from '../tithe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-tithe',
  templateUrl: './edit-tithe.component.html',
  styleUrls: ['./edit-tithe.component.css']
})
export class EditTitheComponent implements OnInit {

  titherId: string;
  tithe$: Observable<Tithe>;
  //titheId: string;
  //tithe$: Observable<Tithe>;

  constructor(private activateRoute: ActivatedRoute,
    private titheService: TitheService,
    private router: Router) { }

  ngOnInit() {
    this.titherId = this.activateRoute.snapshot.params.titherId;
    //this.titheId = this.activateRoute.snapshot.params.titheId;
    //this.tithe$ = this.titheService.getTithesById(this.titheId);
    this.tithe$ = this.titheService.getTithesByTitherId(this.titherId);
    this.tithe$.subscribe(() => { }, err => {
      console.log(err);
    });

  }

}

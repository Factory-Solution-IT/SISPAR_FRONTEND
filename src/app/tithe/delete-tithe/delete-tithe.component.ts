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
  tithe$: Observable<Tithe>;

  constructor(private activateRoute: ActivatedRoute,
    private titheService: TitheService,
    private router: Router) { }

  ngOnInit() {
  }

}

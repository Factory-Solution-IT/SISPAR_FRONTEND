import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TitheService } from '../tithe.service';

@Component({
  selector: 'app-edit-tithe',
  templateUrl: './edit-tithe.component.html',
  styleUrls: ['./edit-tithe.component.css']
})
export class EditTitheComponent implements OnInit {

  thiterId: string;

  constructor(private activateRoute: ActivatedRoute,
    private titheService: TitheService,
    private router: Router) { }

  ngOnInit() {
  }

}

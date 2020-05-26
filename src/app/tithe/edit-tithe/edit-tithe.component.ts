import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitheService } from '../tithe.service';
import { Tithe } from '../tithe';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-edit-tithe',
  templateUrl: './edit-tithe.component.html',
  styleUrls: ['./edit-tithe.component.css']
})
export class EditTitheComponent implements OnInit {

  titherId: string;
  tithe$: Observable<Tithe>;
  editTitheform: FormGroup;
  //titheId: string;
  //tithe$: Observable<Tithe>;

  constructor(private activateRoute: ActivatedRoute,
    private titheService: TitheService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editTitheform = this.formBuilder.group({
      valueContribution: ['', [Validators.required]],
      dateContribution: ['', [Validators.required]]
    });

    this.titherId = this.activateRoute.snapshot.params.titherId;
    //this.titheId = this.activateRoute.snapshot.params.titheId;
    //this.tithe$ = this.titheService.getTithesById(this.titheId);
    this.tithe$ = this.titheService.getTithesByTitherId(this.titherId);

    this.tithe$.subscribe(data => {
      this.fillForm(data);
    }, err => {
      console.log(err);
    });
  }

  fillForm(tithe: Tithe) {
    this.editTitheform.controls['valueContribution'].setValue(tithe.valueContribution);
    this.editTitheform.controls['dateContribution'].setValue(tithe.dateContribution);
  }

  editTithe() {
    const data = this.editTitheform.getRawValue();

    const tithe: Tithe = {
      id: data.id,
      titherId: data.titherId,
      valueContribution: data.valueContribution,
      dateContribution: data.dateContribution
    };

    this.titheService.editTithe(tithe).subscribe(data => {
      console.log(data);
      this.router.navigate(['/tithes']);
    }, err => {
        console.log(err);
    });
  }
}

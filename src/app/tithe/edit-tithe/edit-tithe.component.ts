import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitheService } from '../tithe.service';
import { Tithe } from '../tithe';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-tithe',
  templateUrl: './edit-tithe.component.html',
  styleUrls: ['./edit-tithe.component.css']
})
export class EditTitheComponent implements OnInit {

  titheId: string;
  titherId: string;
  tithe$: Observable<Tithe>;
  editTitheform: FormGroup;
  //titheId: string;
  //tithe$: Observable<Tithe>;

  constructor(private activateRoute: ActivatedRoute,
    private titheService: TitheService,
    private router: Router,
    private formBuilder: FormBuilder,
    private datepipe: DatePipe) { }

  ngOnInit() {
    this.titheId = this.activateRoute.snapshot.params.titheId;

    this.editTitheform = this.formBuilder.group({
      valueContribution: ['', [Validators.required]],
      dateContribution: ['', [Validators.required]]
    });

    this.tithe$ = this.titheService.getTitheById(this.titheId);

    this.tithe$.subscribe(data => {
      console.log(data);
      this.titherId = data.titherId;
      this.fillForm(data);
    }, err => {
      console.log(err);
    });
  }

  fillForm(tithe: Tithe) {
    this.editTitheform.controls['valueContribution'].setValue(tithe.valueContribution);
    this.editTitheform.controls['dateContribution'].setValue(this.datepipe.transform(tithe.dateContribution, 'yyyy-MM-dd') );
  }

  editTithe() {
    const data = this.editTitheform.getRawValue();

    const tithe: Tithe = {
      id: this.titheId,
      titherId: this.titherId,
      valueContribution: parseFloat(data.valueContribution),
      dateContribution: data.dateContribution
    };

    this.titheService.editTithe(tithe).subscribe(data => {
      this.router.navigate(['/tithe', this.titherId]);
    }, err => {
        console.log(err);
    });
  }
}

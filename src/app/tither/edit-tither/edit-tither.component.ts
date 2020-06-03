import { EditTitheComponent } from './../../tithe/edit-tithe/edit-tithe.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitherService } from '../tither.service';
import { Tither } from '../tither';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-edit-tither',
  templateUrl: './edit-tither.component.html',
  styleUrls: ['./edit-tither.component.css']
})
export class EditTitherComponent implements OnInit {

  titherId: string;
  tither$: Observable<Tither>;
  editTitherform: FormGroup;

  constructor(private activateRoute: ActivatedRoute,
    private titherService: TitherService,
    private router: Router,
    private formBuilder: FormBuilder,
    private datepipe: DatePipe) { }

  ngOnInit() {
    this.editTitherform = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      addressNumber: ['', [Validators.required]],
      addressComplement: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      CPF: ['', [Validators.required]],
      telephone: ['', []],
      cellphone: ['', []],
      matiralStatus: [0, []],
      marriegeDate: ['', []],
      nameSpouse: ['', []],
      dateBirthSpouse: ['', []]
    });

    this.titherId = this.activateRoute.snapshot.params.titherId;
    this.tither$ = this.titherService.getTitherById(this.titherId);
    this.tither$.subscribe(data => {
      this.fillForm(data);
      // console.log(data);
    }, err => {
      console.log(err);
      // this.router.navigate(['not-found']);
    });
  }

  fillForm(tither: Tither) {
    this.editTitherform.controls['name'].setValue(tither.name);
    this.editTitherform.controls['address'].setValue(tither.address);
    this.editTitherform.controls['addressNumber'].setValue(tither.addressNumber);
    this.editTitherform.controls['addressComplement'].setValue(tither.addressComplement);
    this.editTitherform.controls['zipCode'].setValue(tither.zipCode);
    this.editTitherform.controls['neighborhood'].setValue(tither.neighborhood);
    this.editTitherform.controls['city'].setValue(tither.city);
    this.editTitherform.controls['state'].setValue(tither.state);
    this.editTitherform.controls['birthDate'].setValue(this.datepipe.transform(tither.birthDate, 'yyyy-MM-dd'));
    this.editTitherform.controls['CPF'].setValue(tither.cpf);
    this.editTitherform.controls['telephone'].setValue(tither.telephone);
    this.editTitherform.controls['cellphone'].setValue(tither.cellphone);
    this.editTitherform.controls['matiralStatus'].setValue(tither.matiralStatus);
    this.editTitherform.controls['marriegeDate'].setValue(this.datepipe.transform(tither.marriegeDate, 'yyyy-MM-dd'));
    this.editTitherform.controls['nameSpouse'].setValue(tither.nameSpouse);
    this.editTitherform.controls['dateBirthSpouse'].setValue(this.datepipe.transform(tither.dateBirthSpouse, 'yyyy-MM-dd'));
  }

  editTither() {
    const data = this.editTitherform.getRawValue();
    const tither: Tither = {
      id: this.titherId,
      name: data.name,
      address: data.address,
      addressNumber: data.addressNumber,
      addressComplement: data.addressComplement,
      zipCode: data.zipCode,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      birthDate: data.birthDate,
      cpf: data.CPF,
      telephone: data.telephone,
      cellphone: data.cellphone,
      matiralStatus: parseInt(data.matiralStatus),
      marriegeDate: data.marriegeDate != "" ? data.marriegeDate : null,
      nameSpouse: data.nameSpouse != "" ? data.nameSpouse : null,
      dateBirthSpouse: data.dateBirthSpouse != "" ? data.dateBirthSpouse : null
    };

    // console.log(tither);
    this.titherService.editTither(tither).subscribe(data => {
      this.router.navigate(['/tithers']);
    }, err => {
      console.log(err);
    });
  }

}

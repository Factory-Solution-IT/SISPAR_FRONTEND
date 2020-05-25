import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitherService } from '../tithers/tither.service';
import { Tither } from '../tithers/tither';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editTitherform = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      CPF: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
      cellphone: ['', [Validators.required]],
      matiralStatus: [0, [Validators.required]],
      marriegeDate: ['', [Validators.required]],
      nameSpouse: ['', [Validators.required]],
      dateBirthSpouse: ['', [Validators.required]]
    });

    this.titherId = this.activateRoute.snapshot.params.titherId;
    this.tither$ = this.titherService.getTitherById(this.titherId);
    this.tither$.subscribe(data => { 
      this.editTitherform.controls['name'].setValue(data.name);
      this.editTitherform.controls['address'].setValue(data.address);
      this.editTitherform.controls['birthDate'].setValue(data.birthDate);
      this.editTitherform.controls['CPF'].setValue(data.cpf);
      this.editTitherform.controls['telephone'].setValue(data.telephone);
      this.editTitherform.controls['cellphone'].setValue(data.cellphone);
      this.editTitherform.controls['matiralStatus'].setValue(data.matiralStatus);
      this.editTitherform.controls['marriegeDate'].setValue(data.marriegeDate);
      this.editTitherform.controls['nameSpouse'].setValue(data.nameSpouse);
      this.editTitherform.controls['dateBirthSpouse'].setValue(data.dateBirthSpouse);
      // console.log(data);
    }, err => {
      console.log(err);
      // this.router.navigate(['not-found']);
    });
  }

  editTither(){
    const data = this.editTitherform.getRawValue();
    // console.log(data);
    const tither : Tither =  {
      id: this.titherId,
      name: data.name,
      address: data.address,
      birthDate: data.birthDate,
      cpf: data.CPF,
      telephone: data.telephone,
      cellphone: data.cellphone,
      matiralStatus: parseInt(data.matiralStatus),
      marriegeDate: data.marriegeDate,
      nameSpouse: data.nameSpouse,
      dateBirthSpouse: data.birthDate
    };

    // console.log(tither);
    this.titherService.editTither(tither).subscribe(data => {
      // console.log(data);
      this.router.navigate(['/tithers']);
    }, err => {
      console.log(err);
      // this.router.navigate(['not-found']);
    });
  }

}

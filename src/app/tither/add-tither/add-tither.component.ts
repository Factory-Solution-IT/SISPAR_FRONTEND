import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tither } from '../tither';
import { TitherService } from '../tither.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tither',
  templateUrl: './add-tither.component.html',
  styleUrls: ['./add-tither.component.css']
})
export class AddTitherComponent implements OnInit {

  addTitherform: FormGroup;

  constructor(private formBuilder: FormBuilder, private titherService: TitherService, private router: Router) { }

  ngOnInit() {
    this.addTitherform = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      addressNumber: [0,[]],
      addressComplement:['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      neighborhood: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state:['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      CPF: ['', [Validators.required]],
      telephone: ['', []],
      cellphone: ['', []],
      matiralStatus: [0, []],
      marriegeDate: ['', []],
      nameSpouse: ['', []],
      dateBirthSpouse: ['', []]
    });
  }

  addTither(){
    const data = this.addTitherform.getRawValue();

    const tither : Tither =  {
      id: "",
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
    this.titherService.postTither(tither).subscribe(data => {
      console.log(data);
      this.router.navigate(['/tithers']);
    }, err => {
      console.log(err.error.errors);
      err.error.errors.forEach(element => {
        console.log(element.Message);
      });
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Validations } from '../validations';
@Component({
  selector: 'app-tither',
  templateUrl: './tither.component.html',
  styleUrls: ['./tither.component.css']
})

export class TitherComponent implements OnInit {

  dataSaved = false;
  titherForm: any;
  // allTithers: Observable<Tither[]>;
  titherIdUpdate = null;
  message = null;

  constructor(private formbuilder: FormBuilder/*, private titherService: TitherService*/) {}

  ngOnInit() {
    this.titherForm = this.formbuilder.group({
      NameTither: ['',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])
    ],
      AddressTither: ['',
      Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
       ])
    ],
      //NameTither: ['', [Validators.required]],
      //AddressTither: ['', [Validators.required]],
      BirthDateTither: ['', [Validators.required]],
      CpfDocument: ['', [Validators.required]],
      TelephoneTither: ['', [Validators.required]],
      CellphoneTither: ['', [Validators.required]],
      MatiralStatus: ['', [Validators.required]],
      MarriageDateTither: ['', [Validators.required]],
      //SpouseDateTither: ['', [Validators.required]],
      SpouseDateTither: ['',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])
    ],
      BirthDateSpouseTither: ['', [Validators.required]]
    });
    this.loadAllTithers();
  }

  loadAllTithers() {
    //this.allTithers = this.titherService.getAllTithers();
  }

  onFormSubmit() {
    this.dataSaved = false;
    const tither = this.titherForm.value;
    this.CreateTither(/*tither*/);
    this.titherForm.reset();
  }

  CreateTither(/*tither: Tither*/) {
    // if (this.titherIdUpdate == null) {
    //   this.titherService.createTither(tither).subscribe(() =>
    //   {
    //     this.dataSaved = true;
    //     this.message = 'Registro salvo com sucesso';
    //     this.loadAllTithers();
    //     this.titherIdUpdate = null;
    //     this.titherForm.reset();
    //   });
    // } else {
    //   tither.idTither = this.titherIdUpdate;
    //   this.titherService.updateTither(this.titherIdUpdate,tither).subscribe(() => {
    //     this.dataSaved = true;
    //     this.message = 'Registro atualizado com sucesso';
    //     this.loadAllTithers();
    //     this.titherIdUpdate = null;
    //     this.titherForm.reset();
    //   });
    // }
  }

  loadAlunoToEdit(idTither: number) {
    // this.titherService.getTitherById(idTither).subscribe(tither => {
    //   this.message = null;
    //   this.dataSaved = false;
    //   this.titherIdUpdate = tither.idTither;
    //   this.titherForm.controls['NameTither'].setValue(tither.nameTither);
    //   this.titherForm.controls['AddressTither'].setValue(tither.addressTither);
    //   this.titherForm.controls['BirthDateTither'].setValue(tither.birthDateTither);
    //   this.titherForm.controls['CpfDocument'].setValue(tither.cpfDocument);
    //   this.titherForm.controls['TelephoneTither'].setValue(tither.telephoneTither);
    //   this.titherForm.controls['CellphoneTither'].setValue(tither.cellphoneTither);
    //   this.titherForm.controls['MatiralStatus'].setValue(tither.matiralStatus);
    //   this.titherForm.controls['MarriageDateTither'].setValue(tither.marriageDateTither);
    //   this.titherForm.controls['SpouseNameTither'].setValue(tither.spouseNameTither);
    //   this.titherForm.controls['BirthDateSpouseTither'].setValue(tither.birthDateTither);
    // });
  }

  deleteTither(idTither: number) {
    //if (confirm('Deseja Realmente deletar este Dizimista ?')) {
      // this.titherService.deleteTitherById(idTither).subscribe(() => {
      //   this.dataSaved = true;
      //   this.message = 'Registro deletado com sucesso';
      //   this.loadAllTithers();
      //   this.titherIdUpdate = null;
      //   this.titherForm.reset();
      // });
    //}
  }

  resetForm() {
    this.titherForm.reset();
    this.message = null;
    this.dataSaved = false;
  }
}

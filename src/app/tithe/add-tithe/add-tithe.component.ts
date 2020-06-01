import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TitheService } from '../tithe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Tithe } from '../tithe';

@Component({
  selector: 'app-add-tithe',
  templateUrl: './add-tithe.component.html',
  styleUrls: ['./add-tithe.component.css']
})
export class AddTitheComponent implements OnInit {

  addTitheform: FormGroup;
  titherId: string;

  constructor(private formBuilder: FormBuilder,
    private titheService: TitheService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.titherId = this.activateRoute.snapshot.params.titherId;
    this.addTitheform = this.formBuilder.group({
      valueContribution: [0, [Validators.required]],
      dateContribution: ['', [Validators.required]]
    });
  }

  addTithe(){
    const data = this.addTitheform.getRawValue();


     const tithe : Tithe = {
       id: "",
       valueContribution: parseFloat(data.valueContribution),
       dateContribution: data.dateContribution,
       titherId: this.titherId
     };


     console.log(tithe);

     this.titheService.postTithe(tithe).subscribe(data => {
       console.log(data);
       this.router.navigate(['/tithes', this.titherId]);
     }, err => {
       console.log(err);
     });
  }

}

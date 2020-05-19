import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TitheService } from '../tithe.service';
import { Router } from '@angular/router';
import { Tithe } from '../tithe';

@Component({
  selector: 'app-add-tithe',
  templateUrl: './add-tithe.component.html',
  styleUrls: ['./add-tithe.component.css']
})
export class AddTitheComponent implements OnInit {

  addTitheform: FormGroup;

  constructor(private formBuilder: FormBuilder, private titheService: TitheService, private router: Router) { }

  ngOnInit() {
    this.addTitheform = this.formBuilder.group({
      contributionValue: ['', [Validators.required]],
      contributionDate: ['', [Validators.required]]
    });
  }

  addTithe(){
    const data = this.addTitheform.getRawValue();

    const tithe : Tithe = {
      id: "",
      contributionValue: data.contributionValue,
      contributionDate: data.contributionDate
    };

    this.titheService.postTithe(tithe).subscribe(data => {
      console.log(data);
      this.router.navigate(['/tithe']);
    })
  }

}

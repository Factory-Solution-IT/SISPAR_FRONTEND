import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-tither',
  templateUrl: './add-tither.component.html',
  styleUrls: ['./add-tither.component.css']
})
export class AddTitherComponent implements OnInit {
  public form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

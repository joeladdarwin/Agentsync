import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-agentregister',
  templateUrl: './agentregister.component.html',
  styleUrls: ['./agentregister.component.css']
})
export class AgentregisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;
  skills = new FormControl();
  skillsList: string[] = ['Photography', 'Video Tour', '360 Tour', 'Single Property Website', 'Floor Plans(B&W)', 'Floor Plans(Color)','Floor Plans(Color+Furniture)', 'Double Sided Flyer','Brochure(8 Page)','Brochure(4 Page)'];
  constructor(private _formBuilder: FormBuilder) { }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  }



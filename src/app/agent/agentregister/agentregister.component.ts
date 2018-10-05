import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { WindowService } from '../../shared/window.service';
import * as firebase from 'firebase';
export class PhoneNumber {
  country: string;
  area: string;
  prefix: string;
  line: string;

  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.area + this.prefix + this.line
    return `+${num}`
  }

}
@Component({
  selector: 'app-agentregister',
  templateUrl: './agentregister.component.html',
  styleUrls: ['./agentregister.component.css'],
  providers:[WindowService]
})
export class AgentregisterComponent implements OnInit {
  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;

  user: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;
  // skills = new FormControl();
  skillsList: string[] = ['Photography', 'Video Tour', '360 Tour', 'Single Property Website', 'Floor Plans(B&W)', 'Floor Plans(Color)', 'Floor Plans(Color+Furniture)', 'Double Sided Flyer', 'Brochure(8 Page)', 'Brochure(4 Page)'];
  constructor(private _formBuilder: FormBuilder, private win: WindowService) { }
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  sendLoginCode() {

    // const appVerifier = this.windowRef.recaptchaVerifier;

    // const num = this.phoneNumber.e164;

    // firebase.auth()
    //   .signInWithPhoneNumber(num, appVerifier)
    //   .then(result => {

    //     this.windowRef.confirmationResult = result;

    //   })
    //   .catch(error => console.log(error));

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then(result => {

        this.user = result.user;

      })
      .catch(error => console.log(error, "Incorrect code entered?"));
  }
  get pemail() {
    return this.firstFormGroup.get('pemail');
  } 


  ngOnInit() {
    // this.windowRef = this.win.windowRef
    // this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    // this.windowRef.recaptchaVerifier.render()
    this.firstFormGroup = this._formBuilder.group({
      fullName: ['', Validators.required],
      phcountry: ['', Validators.required],
      pharea: ['', Validators.required],
      phprefix: ['', Validators.required],
      phline: ['', Validators.required],
      pemail: ['', Validators.compose([ Validators.email, Validators.required])],                
      skills: ['', Validators.required],
      dob: ['', Validators.required],
      gender: new FormControl('male'),
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  }


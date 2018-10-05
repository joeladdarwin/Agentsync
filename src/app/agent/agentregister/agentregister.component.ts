import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { WindowService } from '../../shared/window.service';
import { User } from '../../shared/user';
import { Agent } from '../../shared/agent';
import { ClientService } from '../../shared/client.service';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
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
  error: { name: string, message: string } = { name: '', message: '' };
  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;

  user: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;
  // skills = new FormControl();
  skillsList: string[] = ['Photography', 'Video Tour', '360 Tour', 'Single Property Website', 'Floor Plans(B&W)', 'Floor Plans(Color)', 'Floor Plans(Color+Furniture)', 'Double Sided Flyer', 'Brochure(8 Page)', 'Brochure(4 Page)'];
  constructor(private _formBuilder: FormBuilder, private win: WindowService,private cli:ClientService,private auth:AuthService,private router:Router) { }
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
//cdccdff
  // agent(agentForm:Agent){
  //   this.cli.agent(agentForm).catch(_error=>{
  //    this.error=_error;
  //    return this.error
      
  //   })
  // }
  // resetForm(agentForm?:NgForm){
  //   if(agentForm!=null){
  //     agentForm.reset();
  //   }

  // }

  agent(agentForm:Agent)
  {
    console.log("wrwetwetwe");
    this.cli.register(agentForm).catch(_error=>{
     this.error = _error;
    
      return this.error
   })
   
  }
  resetForm(agentForm?: NgForm) {
    if (agentForm != null)
      agentForm.reset();
  }
 





  //asdasdasdsa
  ngOnInit() {
    // this.windowRef = this.win.windowRef
    // this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    // this.windowRef.recaptchaVerifier.render()
    // this.resetForm();

    this.resetForm();
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


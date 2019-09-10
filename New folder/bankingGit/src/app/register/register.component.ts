import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
// import { FormControl } from '@angular/forms';
import { AuthService } from  '../auth.service';
import { Router } from  '@angular/router';

import {MustMatch} from '../_helpers/must-match.validator'

import { AlertService } from '../_services/alert.service';
import {  UserService } from '../_services/user.service';

import { first } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;
  loading = false;
  phone = "^((\\+91-?)|0)?[0-9]{10}$"; 
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      state: ['', Validators.required],
      phoneNumber : ['', Validators.pattern(this.phone)],
      aadhaarNumber: ['', Validators.required],
      
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
 
    
   
  }
  registerUser(user)
  {
    this.authService.registerUser(this.registerForm)
    .subscribe(
      res=>{        console.log(res)

        localStorage.setItem('token',res.token)
     this.router.navigate(['/login'])

      },
     
        err=>console.log(err)
    )
    }






    

    get  phoneNumber() {
      return this.registerForm.get('phoneNumber');
   }  
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.registerUser(this.registerForm.value);


      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
      var data = this.registerForm.value;
      const formData = new FormData();
      console.log(data);


      



      this.router.navigate(['/website']);
      // this.loading = true;
      //   this.userService.register(this.registerForm.value)
      //       .pipe(first())
      //       .subscribe(
      //           data => {
      //               this.alertService.success('Registration successful', true);
      //               // console.log(value);
      //               this.router.navigate(['/website']);
                    
      //           },
      //           error => {
      //               this.alertService.error(error);
      //               this.loading = false;
      //           });
      


}
  
}


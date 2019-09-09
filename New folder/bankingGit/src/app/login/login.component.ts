import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { Users } from  '../users';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
     private router: Router,
     private formBuilder: FormBuilder) 
     {}   

  ngOnInit() {
   
     this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
  }
  get f() { return this.loginForm.controls; }
  loginUser(user)
  {
   this.authService.loginUser(user)
   .subscribe(
    res=>{
      console.log(res)
      localStorage.setItem('token',res.token)
      
      console.log(res)

    },
     err=>console.log(err)
   )
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loginUser(this.loginForm.value)
    this.router.navigate(['/user'])
     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
     var data = this.loginForm.value;
    
     console.log(data);
    // this.router.navigate(['/register']);
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

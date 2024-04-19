import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl,NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  signupForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private authService : AuthService, private router : Router){}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(.{6,12})')]],
      number: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      address: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.registerUser(this.signupForm.value)
        .subscribe(
          response=> {
            console.log(response); // Handle success response
            this.router.navigate(['/login']);
            
          },
          error => {
            console.error(error); // Handle error response
          }
        );
    }
  }

}

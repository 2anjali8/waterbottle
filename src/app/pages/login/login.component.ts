import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router : Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
    
      this.authService.login(this.loginForm.value)
        .subscribe(
          response => {
            // Handle successful login response
            console.log('Login successful:', response);
            this.router.navigate(['/home']);
          },
          error => {
            // Handle login error response
            console.error('Login error:', error);
          }
        );
    }
  }
}



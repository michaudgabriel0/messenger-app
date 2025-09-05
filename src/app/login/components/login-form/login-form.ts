import { Component, Input, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserCredentials } from '../../models/user-credentials';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class LoginFormComponent {
  loginForm!: FormGroup;
  login = output<UserCredentials>();
  @Input() errorMessage: string | null = null;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')!.value as string;
      const password = this.loginForm.get('password')!.value as string;
      const credentials: UserCredentials = { username, password };

      this.login.emit(credentials);
    }
  }
}

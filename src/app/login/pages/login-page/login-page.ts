import { Component, inject } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form';
import { UserCredentials } from '../../models/user-credentials';
import { AuthenticationService } from '../../services/authentication';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css'],
  standalone: true,
  imports: [LoginFormComponent],
})
export class LoginPageComponent {
  router: Router = inject(Router);
  errorMessage: string | null = null;

  constructor(private authenticationService: AuthenticationService) {}

  async onLogin(userCredentials: UserCredentials) {
    try {
      await this.authenticationService.login(userCredentials);
      this.router.navigate(['/home']);
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error: unknown) {
    if (error instanceof HttpErrorResponse) {
      if (error.status === 403) {
        this.errorMessage = 'Invalid Password';
      } else {
        this.errorMessage = 'Connection problem';
      }
    } else {
      this.errorMessage = 'Unknown error';
    }
  }
}
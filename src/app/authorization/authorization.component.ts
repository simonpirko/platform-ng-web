import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.pattern('^(?=.*\\d).{4,8}$')]);
  hidePasswordInForm: boolean;

  constructor() {
    this.hidePasswordInForm = true;
  }

  ngOnInit() {
  }

  getErrorEmailMessage(): string {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getErrorPasswordMessage(): string {
    return this.password.hasError('required') ? 'You must enter a value' :
      this.password.hasError('pattern') ? 'Not a valid password' : '';
  }

  valid(): string {
    if (this.email.hasError('required') && this.password.hasError('required')) {
      return 'Bad';
    }
  }
}

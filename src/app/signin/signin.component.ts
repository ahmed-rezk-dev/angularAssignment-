import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  get emailIsInvalidAndTouched() {
    return this.f.email.errors && this.f.email.touched;
  }

  get passwordIsInvalidAndTouched() {
    return this.f.password.errors && this.f.password.touched;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log('this.registerForm', this.f);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4)
    );
  }
}

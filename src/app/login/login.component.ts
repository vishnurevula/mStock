import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth-service.service';
import { first } from 'rxjs/operators';

import { NavBarHomeService } from '../Services/nav-service.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    registerForm!: FormGroup;
    loading = false;
    submitted = false;
    error = '';

    constructor(private formBuilder: FormBuilder,
        private authService: AuthService,
        public nav: NavBarHomeService
    ) { 

    }
    OnClick(){
        this.nav.showLogout();
        this.nav.showCompPerf();
        this.nav.showWatchList();
    }

    ngOnInit() {
        this.nav.hideLogin();
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading! = true;
        this.authService.validate(this.registerForm.value.email, this.registerForm.value.password)
            .pipe(first())
            .subscribe(
                data => {
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });

        console.log("Above navigate method"+ this.authService.isAuthenticated());
        console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value.email) + JSON.stringify(this.registerForm.value.password))
    }
}

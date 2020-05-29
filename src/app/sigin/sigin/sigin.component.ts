import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  fromUrl: string;
  loginForm: FormGroup;
  // @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    //    private platformDetectorService: PlatformDetectorService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activateRoute.queryParams.subscribe(params => this.fromUrl = params['fromUrl']);
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    // this.platformDetectorService.isPlatformBrowser && 
    //                 this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () =>
          // this.fromUrl
          //   ? this.router.navigateByUrl(this.fromUrl)
          //   : this.router.navigate(['user', userName]) // navigateByUrl('user/' + userName),
          this.router.navigate(['/home'])
        ,
        err => {
          console.log(err);
          this.loginForm.reset();
          // this.platformDetectorService.isPlatformBrowser && 
          //         this.userNameInput.nativeElement.focus();
          alert('Invalid user name or password');
        }
      );
  }
}

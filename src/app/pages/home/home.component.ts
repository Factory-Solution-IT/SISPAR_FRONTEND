import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/User';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$: Observable<User>;
  userName: string;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.user$ = this.userService.getUser();
    this.userName = this.userService.getUserName();
    // console.log(this.userName);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}

export class NgbdNavBasic {
  active = 1;
}

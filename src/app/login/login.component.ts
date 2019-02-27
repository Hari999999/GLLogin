import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  userName: string;
  userPassword: string;
  loginNSM: boolean;
  loginRSM: boolean;
  isShow: boolean;
  isNsm: boolean;

  constructor(private router: Router ) {
   }

  ngOnInit() {
    this.loginNSM = true;
  }

  setUserType(userType: string) {
     if (userType === "NSM")
   {
      this.isNsm = true;
      console.log(this.isNsm);
    }
    else
    {
      this.isNsm = false;
      console.log(this.isNsm);
    }
  }

  onSubmit() {
    if (this.isNsm)
    {
      console.log(this.userName);
      console.log(this.userPassword);
      if (this.userName === 'NsmUser' && this.userPassword === 'hari') {
        // redirect to NSM screen
        this.router.navigateByUrl('/nsm');
      }
    } else{
      if (this.userName === 'RsmUser' && this.userPassword === 'hari')
      {
        // console.log(this.userName);
        // console.log(this.userPassword);
        // redirect to RSM screen
        this.router.navigateByUrl('/rsm');
      }
    }
  }
}

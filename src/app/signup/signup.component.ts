import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  route: ActivatedRoute;
  router: Router;

  constructor(route: ActivatedRoute, router: Router) 
  {
    this.route = route;
    this.router = router;
   }

  ngOnInit(): void {
  }

}

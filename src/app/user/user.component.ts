import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

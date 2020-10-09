import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  userName: any;

  constructor(private router:Router,private Activateroute:ActivatedRoute) {
  
   }

  ngOnInit(): void {
  }

}

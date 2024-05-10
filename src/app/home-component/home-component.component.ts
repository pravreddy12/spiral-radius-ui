import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  // constructor(private router: Router) {

  // }

  // navigateToAbout(){
  //   // this.router.r
  // }

}

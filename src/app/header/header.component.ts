import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DevforumComponent } from '../devforum/devforum.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet,AboutComponent, DevforumComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

import { Component,Input } from '@angular/core';
import { RouterLink, RouterModule ,Router, IsActiveMatchOptions} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export default class NavbarComponent {

  @Input() routerLinkActiveOptions: IsActiveMatchOptions | { exact: boolean; } | undefined;


  toogleDark() {
    document.body.classList.toggle('dark');
  }



}

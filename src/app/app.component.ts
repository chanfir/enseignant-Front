import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { AuthenticationService } from './services/authentication.service';
import { Utilisateur } from './Models/Utilisateur';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>',
  providers: [IconSetService],
})
export class AppComponent implements OnInit {
  currentUtilisateur: Utilisateur;
  helper = new JwtHelperService();
  constructor(
    private router: Router,
    public iconSet: IconSetService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUtilisateur.subscribe(x => this.currentUtilisateur = x);
    // iconSet singleton
    iconSet.icons = { ...freeSet };
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

  ngOnInit() {
    console.log(this.authenticationService.isAdmin());
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}

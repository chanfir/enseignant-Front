import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment'; 

import { Utilisateur } from '../Models/Utilisateur';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUtilisateurSubject: BehaviorSubject<Utilisateur>;
    public currentUtilisateur: Observable<Utilisateur>;
  helper = new JwtHelperService();
    constructor(private http: HttpClient) {
        this.currentUtilisateurSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('currentUtilisateur')));
        this.currentUtilisateur = this.currentUtilisateurSubject.asObservable();
    }

    public get currentUtilisateurValue(): Utilisateur {
        return this.currentUtilisateurSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/login`, { email, password })
            .pipe(map(Utilisateur => {
                // store Utilisateur details and jwt token in local storage to keep Utilisateur logged in between page refreshes
                localStorage.setItem('currentUtilisateur', JSON.stringify(Utilisateur));
                this.currentUtilisateurSubject.next(Utilisateur);
                const decodedToken = this.helper.decodeToken(Utilisateur);
                const expirationDate = this.helper.decodeToken(Utilisateur).roles;
                console.log(expirationDate);
                return Utilisateur;
            }));
    }

    logout() {
        // remove Utilisateur from local storage to log Utilisateur out
        localStorage.removeItem('currentUtilisateur');
        this.currentUtilisateurSubject.next(null);
    }

    roles(){
      const token = localStorage.getItem('currentUtilisateur');
    
      const decodedToken = this.helper.decodeToken(token);
      const role = this.helper.decodeToken(token).roles[0].authority;
      console.log(role);
      return role ;
    }
    isAdmin () {
      let res = false ; 
      if (this.roles() === "admin") {
          res = true ;
      } 
      return res ;
    }
    isEnseignant () {
      let res = false ; 
      if (this.roles() === "Enseignant") {
          res = true ;
      } 
      return res ;
    }
    
}
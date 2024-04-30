import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { User } from '../model/questionaire';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User | null>;

  constructor(private router: Router, private userService: UserService) {
    const userLocalStorageString = localStorage.getItem('currentUser');
    this.userSubject = new BehaviorSubject(
      userLocalStorageString ? JSON.parse(userLocalStorageString) : null
    );
  }

  public get currentUser() {
    return this.userSubject.value;
  }

  login(username: string) {
    return this.userService.findUserByEmail(username).pipe(
      map((user) => {
        user.token = 'dum token';
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}

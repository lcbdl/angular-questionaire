import { Injectable } from '@angular/core';
import { User } from '../model/questionaire';
import { Observable, of, throwError } from 'rxjs';

const mock_users: User[] = [
  {
    id: 1,
    firstName: 'Elizabet',
    lastName: 'Skerme',
    email: 'eskerme0@email.com',
  },
  {
    id: 2,
    firstName: 'Vanessa',
    lastName: 'Jadczak',
    email: 'vjadczak1@email.com',
  },
  {
    id: 3,
    firstName: 'Dorie',
    lastName: 'Janson',
    email: 'djanson2@email.com',
  },
  {
    id: 4,
    firstName: 'Catrina',
    lastName: 'Le Maitre',
    email: 'clemaitre3@email.com',
  },
  {
    id: 5,
    firstName: 'Marj',
    lastName: 'Heffernan',
    email: 'mheffernan4@email.com',
  },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  findUserByEmail(email: string): Observable<User> {
    const user = mock_users.find((user) => user.email === email);
    if (user) {
      return of<User>(user!);
    } else {
      return throwError(() => new Error('User not found'));
    }
  }

  findUserById(userId: number) {
    const user = mock_users.find((user) => user.id === userId);
    if (user) {
      return of<User>(user!);
    } else {
      return throwError(() => new Error('User not found'));
    }
  }

  findAllUsers() {
    return of(mock_users ?? []);
  }
}

import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { of } from 'rxjs';

describe('AuthenticationService', () => {
  let authService: AuthenticationService;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserService', ['findUserByEmail']);
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        { provider: UserService, useValue: spy },
      ],
    });
    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    authService = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('login', (done: DoneFn) => {
    spyOn(userServiceSpy, 'findUserByEmail').and.returnValue(
      of({
        id: 1,
        email: 'test@mail.com',
        token: 'dum token',
      })
    );
    authService.login('test@mail.com').subscribe((user) => {
      expect(user).not.toBeNull();
      done();
    });
  });
});

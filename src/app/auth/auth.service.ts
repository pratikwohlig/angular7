import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { JwtHelperService   } from '@auth0/angular-jwt';
const helper = new JwtHelperService();
@Injectable()
export class AuthService {
    
//   constructor(public jwtHelper: JwtModule ) {}

  // ...
  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    // Check whether the token is expired and return
    // true or false
    return !helper.isTokenExpired(token);
  }

}

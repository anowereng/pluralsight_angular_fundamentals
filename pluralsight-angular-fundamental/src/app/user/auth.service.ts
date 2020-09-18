import { Injectable } from '@angular/core';
import { IUser } from './IUser';
@Injectable()
export class AuthService {
    currentUser:IUser
    loginUser(userName:string, UserPasseord:string){

        this.currentUser = {
            id:1,
            userName: "anower",
            lastName: 'Papa',
            firstName: 'anower',
            userPassword:'anower'
        }

    }
    isAuthenticated(){
        return !!!this.currentUser;
    }
}
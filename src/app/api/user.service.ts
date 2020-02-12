import { User } from './../model/user.module';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersInfo = 'users';
  queryInfo = 'users/user';
  userInformation: User;
  email$: BehaviorSubject<User['email']>;

  constructor(private firestore: AngularFirestore) { }

  createUser(userList) {
    console.log('inside the user creation object');
    if (userList) {

      return this.firestore.collection(this.usersInfo).add(userList);
    }
  }

  getUsers() {
    return this.firestore.collection(this.usersInfo).snapshotChanges();
  }

  findByEmail(email: string) {
    return this.firestore.collection<User>(this.usersInfo, ref => ref.where('user.email', '==', email)).valueChanges();
  }

  findByLogin(email, password) {

    return this.firestore.collection<User>(this.usersInfo,
      ref => ref.where('user.email', '==', email).where('user.password', '==', password)).valueChanges();

  }


  updatePolicy(userList) {
    delete userList.id;
    this.firestore.doc(this.usersInfo + '/' + userList.id).update(userList);
  }

  deletePolicy(userId: string) {
    this.firestore.doc(this.usersInfo + '/' + userId).delete();
  }


}

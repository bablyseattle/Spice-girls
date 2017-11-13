import { Injectable } from '@angular/core';
import {Member} from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {

    members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

   addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMembers(){
    return this.members;
  }

  getMemberById(memberId: number){
    return this.database.object('/members/' + memberId);
  }

  updateMember(localUpdatedMember){
    var MemberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    MemberEntryInFirebase.update({name: localUpdatedMember.name,
                                favCusine: localUpdatedMember.favCusine,
                                about: localUpdatedMember.about});
  }

  deleteMember(localMemberToDelete){
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }

}

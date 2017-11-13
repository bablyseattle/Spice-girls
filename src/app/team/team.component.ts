import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model'
import { Router } from '@angular/router';
import { MemberService} from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [MemberService]
})
export class TeamComponent implements OnInit {

  constructor(private router: Router, private memberService: MemberService) { }

  members: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  showDetails(clickedMember){
  	// this.router.navigate(['members', clickedMember.id])
  }

}

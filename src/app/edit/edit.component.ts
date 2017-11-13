import { Component,Input, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	@Input() selectedMember;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingMember(MemberToUpdate){
    this.memberService.updateMember(MemberToUpdate);
  }

beginDeletingMember(MemberToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.memberService.deleteMember(MemberToDelete);
    }
  }
}

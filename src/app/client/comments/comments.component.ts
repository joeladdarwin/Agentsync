import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/client.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: any;
  commentForm: NgForm;

  constructor(private cli: ClientService) { }


  ngOnInit() {

    this.cli.bscomment.subscribe(comment => { this.comment = comment });
  }
  updateComments(commentForm: NgForm) {

    var comment = commentForm.controls['comment'].value;
    this.cli.setcomment(comment);

  }
}


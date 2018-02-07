import {Component, Input, OnInit} from '@angular/core';
import {OnClickEvent, OnHoverRatingChangeEvent, OnRatingChangeEven} from 'angular-star-rating';
import {Router} from '@angular/router';
import {FormCvComponent} from '../form-cv/form-cv.component';

@Component({
  selector: 'app-form-bdd',
  templateUrl: './form-bdd.component.html',
  styleUrls: ['./form-bdd.component.css']
})
export class FormBddComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }


  onClickResultSQL: OnClickEvent;
  onClickResultJSON: OnClickEvent;
  onClickResultXSL: OnClickEvent;
  onClickResultXML: OnClickEvent;

  onClickSQL = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultSQL = $event;
  }

  onClickJSON = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultJSON = $event;
  }
  onClickXSL = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultXSL = $event;
  }
  onClickXML = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultXML = $event;
  }


  sendFormBDD() {
    this.router.navigate(['/valid']);
  }

}

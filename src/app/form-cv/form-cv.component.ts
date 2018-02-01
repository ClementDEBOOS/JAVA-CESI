import {Component, OnInit} from '@angular/core';
import {
  OnClickEvent,
  OnHoverRatingChangeEvent,
  OnRatingChangeEven
} from 'angular-star-rating';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClickResult: OnClickEvent;
  onClickResultJAVA: OnClickEvent;
  onHoverRatingChangeResult: OnHoverRatingChangeEvent;
  onRatingChangeResult: OnRatingChangeEven;

  onClick = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResult = $event;
  }

  onClickJAVA = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultJAVA = $event;
  }

  onRatingChange = ($event: OnRatingChangeEven) => {
    console.log('onRatingUpdated $event: ', $event);
    this.onRatingChangeResult = $event;
  }

  onHoverRatingChange = ($event: OnHoverRatingChangeEvent) => {
    console.log('onHoverRatingChange $event: ', $event);
    this.onHoverRatingChangeResult = $event;
  }


  sendForm() {
    this.router.navigate(['/valid']);
  }
}

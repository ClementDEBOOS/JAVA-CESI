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
  onClickResultJEE: OnClickEvent;
  onClickResultPhyton: OnClickEvent;
  onClickResultPHP: OnClickEvent;
  onClickResultDotnet: OnClickEvent;
  onClickResultC: OnClickEvent;
  onClickResultHTML: OnClickEvent;
  onClickResultCSS: OnClickEvent;
  onClickResultRuby: OnClickEvent;
  onClickResultCobol: OnClickEvent;
  onClickResultScala: OnClickEvent;
  onClickResultArduino: OnClickEvent;
  onClickResultJavascipt: OnClickEvent;
  onClickResultAngularJS: OnClickEvent;
  onClickResultAngular: OnClickEvent;
  onClickResultIonic: OnClickEvent;
  onClickResulIonic2: OnClickEvent;
  onClickResultPowershell: OnClickEvent;


  onClick = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResult = $event;
  }

  onClickJAVA = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultJAVA = $event;
  }
  onClickJEE = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultJEE = $event;
  }
  onClickPython = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultPhyton = $event;
  }
  onClickPHP = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultPHP = $event;
  }
  onClickDotnet = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultDotnet = $event;
  }
  onClickC = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultC = $event;
  }
  onClickHTML = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultHTML = $event;
  }
  onClickCSS = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultCSS = $event;
  }
  onClickRuby = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultRuby = $event;
  }
  onClickCobol = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultCobol = $event;
  }
  onClickScala = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultScala = $event;
  }
  onClickArduino = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultArduino = $event;
  }
  onClickJavascript = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultJavascipt = $event;
  }
  onClickAngularJS = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultAngularJS = $event;
  }
  onClickAngular = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultAngular = $event;
  }
  onClickIonic = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultIonic = $event;
  }
  onClickIonic2 = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResulIonic2 = $event;
  }
  onClickPowershell = ($event: OnClickEvent) => {
    console.log('onClick $event: ', $event);
    this.onClickResultPowershell = $event;
  }




  sendForm() {
    this.router.navigate(['/formBdd']);
    console.log('xdtcfyguvhbinjo,o;l:xrdtcfgvjikjn;lmùxdfgkj;lm' + this.onClickJAVA);
  }
}

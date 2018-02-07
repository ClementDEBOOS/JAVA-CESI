import {Component, Input, OnInit} from '@angular/core';
import {FormCvComponent} from '../form-cv/form-cv.component';

@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent implements OnInit {
  @Input() formCV: FormCvComponent;
  constructor() { }

  ngOnInit() {
    console.log('cvgjknlm;ùm' + this.formCV.onClickResultJAVA);
  }

}

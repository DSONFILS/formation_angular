import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appFormValidation]'
})
export class FormValidationDirective implements OnInit {
  @Input() appFormValidation: FormControl;
 @HostBinding('style.display') style: any;
 constructor() {}
​
 ngOnInit() {
  this.style = 'none';
  this.appFormValidation.valueChanges.subscribe(val => {
   if (this.appFormValidation.touched && this.appFormValidation.invalid) {
    this.style = 'block';
   } else {
    this.style = 'none';
   }
  });
 }
}

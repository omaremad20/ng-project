import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChild("labelName") labelName!: ElementRef;
  @ViewChild("labelAge") labelAge!: ElementRef;
  @ViewChild("labelEmail") labelEmail!: ElementRef;
  @ViewChild("labelPassword") labelPassword!: ElementRef;
  showLabelName(event: any): void {
    let inputValue = (event.target as HTMLInputElement).value;
    let labelElementName = this.labelName.nativeElement;
    if (event) {
      labelElementName.classList.remove('hide');
      labelElementName.classList.add('show');
    }
    if (inputValue === "") {
      labelElementName.classList.add('hide');
      labelElementName.classList.remove('show');
    }
  }
  showLabelAge(event: any): void {
    let inputValue = (event.target as HTMLInputElement).value;
    let labelElementAge = this.labelAge.nativeElement;
    if (event) {
      labelElementAge.classList.remove('hide');
      labelElementAge.classList.add('show');
    }
    if (inputValue === "") {
      labelElementAge.classList.add('hide');
      labelElementAge.classList.remove('show');
    }
  }
  showLabelEmail(event: any): void {
    let inputValue = (event.target as HTMLInputElement).value;
    let labelElementEmail = this.labelEmail.nativeElement;
    if (event) {
      labelElementEmail.classList.remove('hide');
      labelElementEmail.classList.add('show');
    }
    if (inputValue === "") {
      labelElementEmail.classList.add('hide');
      labelElementEmail.classList.remove('show');
    }
  }
  showLabelPassword(event: any): void {
    let inputValue = (event.target as HTMLInputElement).value;
    let labelElementPassword = this.labelPassword.nativeElement;
    if (event) {
      labelElementPassword.classList.remove('hide');
      labelElementPassword.classList.add('show');
    }
    if (inputValue === "") {
      labelElementPassword.classList.add('hide');
      labelElementPassword.classList.remove('show');
    }
  }
}

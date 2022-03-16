import { getLocaleEraNames } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Typing';
  randomText: string =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, deleniti.';
  inputText: string = '';

  onChangeInput(text: string) {
    this.inputText = text;
  }
  compare(letterRandom:string , letterEnter:string):string{
   if(!letterEnter){
     return 'pending';
   }
   return letterEnter === letterRandom ? 'correct' : 'incorrect';
  }
}

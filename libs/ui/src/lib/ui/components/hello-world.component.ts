import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'snx-hello-world',
  template: `<h1>Hello World</h1>
    <button (click)="sayHello()">Say hi! ✋</button>`,
})
export class HelloWorldComponent {
  sayHello() {
    alert('Hi World!');
  }
}

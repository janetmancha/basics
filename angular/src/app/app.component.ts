import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a = '1';
  b = '4';

  suma() {
    alert(parseInt(this.a, 0) + parseInt(this.b, 0));
  }
}

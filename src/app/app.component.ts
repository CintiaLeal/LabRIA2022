import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab';
  public isLogged: Boolean = false;

  changeUser(isLogged: boolean) {
    this.isLogged = isLogged
  }

  logout() {
    localStorage.removeItem("token")
    this.changeUser(false);
  }
}

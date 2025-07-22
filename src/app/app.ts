import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeComponent } from './joke-component/joke-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JokeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-data-service-example');
}

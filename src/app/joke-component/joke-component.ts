import { Component } from '@angular/core';
import { JokeService } from '../joke-service';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-joke-component',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './joke-component.html',
  styleUrl: './joke-component.scss'
})
export class JokeComponent {
  myJoke: string = "";

  constructor(public jokeService: JokeService) {

  }

  updateJoke() {
    console.log(this.myJoke);
    this.jokeService.setJoke(this.myJoke);
  }
}

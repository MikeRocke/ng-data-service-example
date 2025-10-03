import { Component } from '@angular/core';
import { JokeService } from '../joke-service';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-joke-component',
  imports: [AsyncPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './joke-component.html',
  styleUrl: './joke-component.scss'
})
export class JokeComponent {

  jokeForm: FormGroup = new FormGroup({
    joke: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  constructor(public jokeService: JokeService) {

  }

  updateJoke() {
    let jokeData : JokeData = <JokeData> this.jokeForm.getRawValue();
    this.jokeService.setJoke(jokeData.joke);
  }
}

export interface JokeData {
  joke: string
}

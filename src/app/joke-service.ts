import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
    private _joke:BehaviorSubject<string> = new BehaviorSubject("knock knock");
    private joke$:Observable<string> = this._joke.asObservable();

    setJoke(joke: string) {
        this._joke.next(joke);
    }

    getJoke():Observable<string> {
        return this.joke$;
    }
}

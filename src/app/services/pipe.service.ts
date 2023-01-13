import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class PipeService {
    public onFilter = new BehaviorSubject<string>("");

    public SendMessage(message: string) {
        this.onFilter.next(message);
    }
}

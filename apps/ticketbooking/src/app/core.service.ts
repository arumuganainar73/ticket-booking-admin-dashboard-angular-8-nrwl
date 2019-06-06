import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CoreService {

    constructor() { }
    private subject = new BehaviorSubject<any>('');
    private listernLoginStatus = new BehaviorSubject<any>('');

    sendMessage(data) {
        this.subject.next(data);
    }
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
    setLoginStatus(data) {
        this.listernLoginStatus.next(data);
    }
    getLoginStatus(): Observable<any> {
        return this.listernLoginStatus.asObservable();
    }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myDataInterface } from "./datainterface";

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ApicallsService {
    private userdataurl: string = "https://www.api.komplab.com/images/";

    constructor(private http: HttpClient) { }
    

    getdatafromurl(): Observable<myDataInterface[]> {
        return this.http.get<myDataInterface[]>(this.userdataurl);
    }
}

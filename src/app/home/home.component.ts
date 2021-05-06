import { Component, OnInit } from '@angular/core';
import { LessonsService } from "../lessons.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [LessonsService]
})
export class HomeComponent implements OnInit {

    receivedarrays: { lessonlink: string, lessondesc: string }[] = []

    constructor(private mylessonse: LessonsService) {
        this.receivedarrays = mylessonse.getinfo();
    }

    ngOnInit(): void {
    }

}

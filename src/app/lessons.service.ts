import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LessonsService {
    private arrayLessons: { lessonlink: string, lessondesc: string }[] = [
        { "lessonlink": "tut1", "lessondesc": "Introduction to Angular" },
        { "lessonlink": "tut2", "lessondesc": "Introduction to Components" },
        { "lessonlink": "tut3", "lessondesc": "Services and dependency injections" },
        { "lessonlink": "tut4", "lessondesc": "Angular Forms" },
    ];

    getinfo(): { lessonlink: string, lessondesc: string }[] {
        return this.arrayLessons;
    }

    constructor() { }
}

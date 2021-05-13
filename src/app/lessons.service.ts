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
        { "lessonlink": "tut5", "lessondesc": "Angular Attributes and Styling" },
        { "lessonlink": "tut6", "lessondesc": "Built in Directives" },
        { "lessonlink": "tut7", "lessondesc": "Sharing data: @Input() and @Output() " },
    ];

    private listousers: { username: string, usremail: string, usrpass: string }[] = [
        { "username": "Kevin", "usremail": "kevin@gmail", "usrpass": "kevpass" },
    ];

    getinfo(): { lessonlink: string, lessondesc: string }[] {
        return this.arrayLessons;
    }
    getuserinfo(): { username: string, usremail: string, usrpass: string }[] {
        return this.listousers;
    }
    addinfo(myparaam: any) {
        let myobj: any = { "username": "tut5", "usremail": "Temporary Routee", "usrpass": "Introduction" };
        myobj.username = myparaam.usrnameimp ;
        myobj.usremail = myparaam.usremailimp ;
        myobj.usrpass = myparaam.usrpassimp ;
        this.listousers.push(myobj);
    }

    constructor() { }
}

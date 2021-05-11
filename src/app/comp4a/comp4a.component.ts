import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonsService } from "../lessons.service";


@Component({
    selector: 'app-comp4a',
    templateUrl: './comp4a.component.html',
    styleUrls: ['./comp4a.component.css'],
    providers: [LessonsService]

})
export class Comp4aComponent implements OnInit {
    receivedarrays: { username: string, usremail: string, usrpass: string }[] = [] ;
    myformsubmitted:boolean = false ;

    constructor(private myaddproo: LessonsService, private router: Router) {
       this.receivedarrays = myaddproo.getuserinfo();
    }

    ngOnInit(): void {
    }

    submit_fu(myformdata: any) {
        console.log("form submitted", myformdata.form.value)
        interface FormInterface {
            usrnameimp: number,
            usremailimp: string, 
            usrpassimp: string
        }
        let mydata: FormInterface = myformdata.form.value ;
        this.myaddproo.addinfo(mydata);
        myformdata.reset();
        this.myformsubmitted = true ;
        // this.router.navigate(['./tut4']);
    }

}

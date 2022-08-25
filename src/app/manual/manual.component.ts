import { Component } from '@angular/core'


@Component({
    selector: 'app-manual',
    templateUrl: './manual.component.html',
    styleUrls: ['./manual.component.css']
})
export class ManualComponent {
    isFalse: boolean = false;
    isBlue: boolean = false;

    users: Array<any> = [
        { name: "Albert", age: 26 },
        { name: "Ben", age: 30 },
        { name: "Den", age: 35 },
        { name: "Eistein", age: 45 }
    ]
}
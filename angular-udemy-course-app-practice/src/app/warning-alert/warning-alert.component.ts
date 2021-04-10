import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `<p>I am in Warning</p>`,
    styles: [`
        p {
            padding: 20px;
            background: mistyrose;
            border: 1px solid red;
        }
    `]
})
export class WarningAlertComponent {}
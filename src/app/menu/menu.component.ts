import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    public title!: string;
    public routes: Route[] = [];

    constructor(private popover: PopoverController, private router: Router) { }

    ngOnInit() {
        this.router.config.forEach(value => {
            // Si la route est une redirection on ne l'affiche pas dans le menu
            if (!value.redirectTo){
                // On réécrit le path pour enlever les - et mettre en majuscules (plus joli à l'affichage)
                // value.path = value.path.replace('-', ' ').toUpperCase();
                this.routes.push(value);
            }
        },
        this);
    }

    closePopover(): void {
        this.popover.dismiss();
    }
}

import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
    selector: 'app-header[header]',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    @Input() header!: string;

    constructor(private popover: PopoverController) { }

    ngOnInit() { }

    openMenu(myevent: MouseEvent): void {
        this.popover.create(
            {
                component: MenuComponent,
                showBackdrop: true,
                cssClass: 'my-menu-class',
                event: myevent,
                componentProps: {
                    title: 'Pages disponibles'
                }
            }
        ).then(
            (popoverElement: HTMLIonPopoverElement) => {
                popoverElement.present();
                popoverElement.onDidDismiss();
            });
    }

}

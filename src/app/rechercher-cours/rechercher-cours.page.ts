import { CoursService } from './../services/cours.service';
import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/cours.model';

@Component({
    selector: 'app-rechercher-cours',
    templateUrl: './rechercher-cours.page.html',
    styleUrls: ['./rechercher-cours.page.scss'],
})
export class RechercherCoursPage implements OnInit {

    public searchResult: Cours[] = [];

    public regexp = new RegExp('');

    constructor(private coursService: CoursService) { }

    ngOnInit() {
    }

    public search($event: any): void {
        // On retourne aucun cours si la valeur de recherche est blank
        if (!$event.detail.value || $event.detail.value.trim() === '') {
            this.searchResult = [];
            this.regexp = null;
            return;
        }

        this.regexp = new RegExp($event.detail.value, 'gi');
        this.searchResult = this.coursService.search(this.regexp);
    }

}

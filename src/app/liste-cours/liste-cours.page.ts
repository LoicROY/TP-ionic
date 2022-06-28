import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/cours.model';
import { CoursService } from '../services/cours.service';

@Component({
    selector: 'app-liste-cours',
    templateUrl: './liste-cours.page.html',
    styleUrls: ['./liste-cours.page.scss'],
})
export class ListeCoursPage implements OnInit {

    public mesCours: Cours[];

    constructor(private coursService: CoursService) {
        this.coursService.$listeCours.subscribe(listeCours => this.mesCours = listeCours);
    }

    ngOnInit() {
    }

    public deleteCours(index: number): void {
        this.coursService.deleteCours(index).subscribe(() => console.log('delete success'));
    }

    public sortCours(param: string): void {
        this.coursService.sortCours(param);
    }

}

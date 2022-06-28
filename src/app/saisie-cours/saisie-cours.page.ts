import { CoursService } from '../services/cours.service';
import { Component, OnInit } from '@angular/core';
import { Cours } from '../models/cours.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-saisie-cours',
    templateUrl: './saisie-cours.page.html',
    styleUrls: ['./saisie-cours.page.scss'],
})
export class SaisieCoursPage implements OnInit {

    public cours: Cours = {
        nom: '',
        nbrEtudiant: 0,
        professeur: ''
    };

    public erreur: string;

    constructor(private coursService: CoursService, private router: Router) { }

    ngOnInit() {
    }

    public addCours(): void {
        if (this.checkRG()) {
            this.erreur = null;
            this.coursService.addCours(this.cours).subscribe(() => {
                console.log('post success');
                this.router.navigateByUrl('liste-cours');
            });
        } else {
            this.erreur = 'Toutes les valeurs sont obligatoires.';
        }
    }

    private checkRG(): boolean {
        return !!this.cours.nom && this.cours.nom !== '' &&
        !!this.cours.professeur && this.cours.professeur !== '' &&
        !!this.cours.nbrEtudiant && this.cours.nbrEtudiant > 0;
    }

}

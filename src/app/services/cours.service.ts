import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cours } from '../models/cours.model';


@Injectable({
    providedIn: 'root'
})
export class CoursService {

    public $listeCours: BehaviorSubject<Cours[]> = new BehaviorSubject([]);
    private listeCours: Cours[] = [];

    constructor(private readonly http: HttpService<Cours>) {
        this.http.getAll().subscribe(data => {
            this.listeCours = data;
            this.$listeCours.next(this.listeCours);
        });
    }

    public addCours(cours: Cours): Observable<Cours> {
        return this.http.post(cours).pipe(
            tap(c => {
                this.listeCours.push(c);
                this.$listeCours.next(this.listeCours);
            })
        );
    }

    public deleteCours(index: number): Observable<Cours> {
        const coursToDelete = this.listeCours[index];

        return this.http.delete(coursToDelete.id).pipe(
            tap(() => {
                this.listeCours.splice(index, 1);
                this.$listeCours.next(this.listeCours);
            })
        );
    }

    public sortCours(param: string): void {
        this.listeCours.sort((a, b) => {
            if (a[param] < b[param]) {
                return -1;
            }
            if (a[param] > b[param]) {
                return 1;
            }
            return 0;
        });
        this.$listeCours.next(this.listeCours);
    }

    public search(pregexp: RegExp): Cours[] {
        return this.listeCours.filter(cours => {
            let match = false;
            if (pregexp.test(cours.nom)){
                match = true;
            }
            if (pregexp.test(cours.professeur)){
                match = true;
            }
            return match;
        });
    }
}

import { TestBed } from '@angular/core/testing';
import { Cours } from '../models/cours.model';
import { HttpService } from './http.service';



describe('HttpService', () => {
  let service: HttpService<Cours>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TippingService {
  private apiUrl = 'https://your-backend-api.com/tips'; /** tipping processor***/

  constructor(private http: HttpClient) {}

  submitTip(authorId: string, amount: number, tipperId: string): Observable<any> {
    const newTip = { authorId, amount, tipperId, date: new Date() };
    return this.http.post(this.apiUrl, newTip);
  }

  getTipsForAuthor(authorId: string): Observable<Tip[]> {
    return this.http.get<Tip[]>(`${this.apiUrl}?authorId=${authorId}`);
  }

  getTotalTipsForAuthor(authorId: string): Observable<number> {
    return this.getTipsForAuthor(authorId).pipe(
      map((tips) => tips.reduce((total, tip) => total + tip.amount, 0))
    );
  }
}

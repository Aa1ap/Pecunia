import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { loan } from 'app/loan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private httpClient: HttpClient) { }

  registerLoan(form: FormGroup): Observable<loan> {
    return this.httpClient.post<loan>("http://localhost:8090/registerLoan/"+JSON.parse(sessionStorage.getItem("loggedinCustomer")).email, form.value);
  }


}

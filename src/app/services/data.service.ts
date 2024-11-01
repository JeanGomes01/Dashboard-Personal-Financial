import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private transactions: Transaction[] = [
    {
      date: '2024-10-01',
      description: 'Salário',
      category: 'Receita',
      amount: 5000,
    },
    {
      date: '2024-10-02',
      description: 'Supermercado',
      category: 'Alimentação',
      amount: -200,
    },
    {
      date: '2024-10-05',
      description: 'Conta de Luz',
      category: 'Utilidades',
      amount: -100,
    },
    {
      date: '2024-10-10',
      description: 'Cinema',
      category: 'Lazer',
      amount: -50,
    },
  ];

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactions);
  }
}

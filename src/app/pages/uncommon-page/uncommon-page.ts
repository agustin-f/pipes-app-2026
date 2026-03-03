import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Agustin',
  gender: 'male',
  age: 39,
  address: 'Ottawa, Canada',
};

const client2 = {
  name: 'Maria',
  gender: 'female',
  age: 45,
  address: 'New York, USA',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe],
  templateUrl: './uncommon-page.html',
  styleUrl: './uncommon-page.css',
})
export default class UncommonPage {
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  clientsMap = signal({
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  });

  clients = signal(['Maria', 'Juan', 'Pedro', 'Fernando', 'Andrea', 'Carlos', 'Natalia']);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }
}

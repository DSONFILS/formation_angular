import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.modele';

export const fakeCollection: Client[] = [
  new Client({
    id: '1',
    name: 'Beltharion Norrack',
    email: 'beltharion.norrack@dragon.com'
  }),
  new Client({
    id: '2',
    name: 'Elxindra Norrack',
    email: 'elxindra.norrack@dragon.com'
  }),
  new Client({
    id: '3',
    name: 'Zoriath Sang-d\'argent',
    email: 'zoriath.sangdargent@dragon.com'
  }),
  new Client({
    id: '4',
    name: 'Kara Ombre-de-la-nuit',
    email: 'kara.ombre@dragon.com'
  })
];

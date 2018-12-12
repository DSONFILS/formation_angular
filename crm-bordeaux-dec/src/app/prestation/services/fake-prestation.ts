import { Prestation } from 'src/app/shared/models/prestation.model';

export const fakeCollection: Prestation[] = [
  new Prestation({
    id: '1',
    typePresta: 'Formation',
    client: 'Wizard of the coast',
    nbJours: 30,
    tjmHT: 700
  }),
  new Prestation({
    id: '2',
    typePresta: 'Formation',
    client: 'Yu-gi-oh',
    nbJours: 20,
    tjmHT: 700
  })
];

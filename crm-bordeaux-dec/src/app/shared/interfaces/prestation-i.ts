export interface PrestationI {
  id: string;
  typePresta: string;
  client: string;
  tjmHT: number;
  nbJours: number;
  tauxTva: number;
  totalHT(): number;
  totalTTC(): number;
}

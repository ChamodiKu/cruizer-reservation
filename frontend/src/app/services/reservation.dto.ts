export interface Reservation {
  _id?: string;
  vehicle: string;
  requested: string;
  services: string[];
  status?: string;
  created?: string;
  createdBy?: string;
  accept?: boolean;
}

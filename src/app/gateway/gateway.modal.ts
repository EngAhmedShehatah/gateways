import {Device} from './device.modal';

export interface Gateway {
  _id: string;
  serialNumber: number;
  name: string;
  ipv4: string;
  devices: Device[];
}

export interface Service {
  id: number;
  name: string;
  icon: string;
  restroomInterval: number;
  kitchenInterval: number;
  otherInterval: number;
  bedroomInterval: number;
  backyardInterval: number;
  roomInterval: number;
  serviceFee: number;
  totalInterval: number;
  restroomValue: number;
  kitchenValue: number;
  minValue: number;
  otherValue: number;
  bedroomValue: number;
  backyardValue: number;
  roomValue: number;
}

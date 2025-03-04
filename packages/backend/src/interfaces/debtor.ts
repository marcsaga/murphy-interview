import { PastInteraction } from "./interaction";

// Extended Debtor interface including past interactions
export interface Debtor {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  amountOwed: number;
  pastInteractions: PastInteraction[];
}

export interface TransactionUser {
  first_name: string;
  last_name: string;
  profile_photo: string | null;
}

export interface Transaction {
  id: number;
  user: TransactionUser;
  title: string;
  description: string;
  amount: string;
  is_credit: boolean;
  date_created: string;
  date_updated: string;
  payment_status: string;
  recipient_email: string | null;
  sender_email: string | null;
  recipient_username: string | null;
  sender_username: string | null;
  charge: string;
  transaction_title: string | null;
  transaction_type: string | null;
  delivery_type: string | null;
  estimated_delivery_days: string | null;
  attachment: string | null;
  status: string;
  role: string | null;
  dispute: string | null;
  type: string;
  currency: string | null;
  reference: string | null;
  payer_account_name: string | null;
  payer_account_bank: string | null;
  payer_account_number: string | null;
  buyer: string | null;
  seller: string | null;
}

interface EscrowUser {
  first_name: string | null;
  last_name: string | null;
  profile_photo: string | null;
}

export interface EscrowTransaction {
  transaction_id: string;
  recipient_username: string;
  sender_username: string;
  buyer: EscrowUser;
  seller: EscrowUser;
  amount: string;
  status: string;
  created_at: string;
}

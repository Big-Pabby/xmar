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
export interface EscrowFee {
  id: number;
  level_one: string;
  level_two: string;
  level_three: string;
  created_at: string;
  updated_at: string;
}

export interface UpdateEscrowFeeParams {
  level: string;
  percentage: number;
}

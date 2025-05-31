export interface DisputeMetric {
  total_disputes: number;
  pending_disputes: number;
  settled_disputes: number;
  cancelled_disputes: number;
}

export interface DisputeUser {
  first_name: string | null;
  last_name: string | null;
  profile_photo: string | null;
}

export interface Dispute {
  id: number;
  user: DisputeUser;
  transaction_id: string;
  email: string;
  user_name: string | null;
  status: string;
  amount: string;
  charge: string;
  transaction_title: string;
  transaction_type: string;
  details: string;
  attachment: string[];
  issue: string;
  created_at: string;
  updated_at: string;
}

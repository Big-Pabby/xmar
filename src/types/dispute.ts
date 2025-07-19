export interface DisputeMetric {
  total_disputes: number;
  pending_disputes: number;
  settled_disputes: number;
  cancelled_disputes: number;
}

export interface Dispute {
  id: number;
  transaction_id: string;
  disputer_email: string;
  recipient_email: string | null;
  disputer_user_name: string;
  recipient_user_name: string | null;
  disputer_details: string;
  recipient_details: string | null;
  disputer_attachment: string[];
  recipient_attachment: string[];
  disputer_issue: string;
  recipient_issue: string;
  escrow_status: string;
  dispute_status: string;
  amount: string;
  charge: string;
  transaction_title: string;
  transaction_type: string;
  created_at: string;
  updated_at: string;
  last_dispute_updater: string | null;
  disputer: number;
  recipient: number | null;
}

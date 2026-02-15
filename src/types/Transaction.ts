// export interface Transaction {
//   _id: string;
//   description: string;
//   amount: number;
//   type: "income" | "expense";
//   category: string;
//   date: string; // ISO format (YYYY-MM-DD)
// }

export interface Transaction {
  _id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  transactionDate: string; // ISO format (YYYY-MM-DD or full timestamp)
  createdAt?: string;      // optional, ISO timestamp
  updatedAt?: string;      // optional, ISO timestamp
}


export interface TransactionResponse {
  status: "SUCCESS" | "ERROR" | "FAIL";
  data: {
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
    transactions: Transaction[];
  }
}

export interface CreateTransaction {
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  transactionDate: string; // ISO format (YYYY-MM-DD or full timestamp)
  // createdAt?: string;      // optional, ISO timestamp
  // updatedAt?: string;      // optional, ISO timestamp
}

export interface UpdateTransaction {
  description?: string;
  amount?: number;
  type?: "income" | "expense";
  category?: string;
  transactionDate?: string; // ISO format (YYYY-MM-DD or full timestamp)
}

export type StatsPayload = {
  typeStats: { type: string; totalAmount: number }[];
  categoryStats: { category: string; totalAmount: number }[];
  monthlyStats: { year: number; month: number; totalAmount: number }[];
};
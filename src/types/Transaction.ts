export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string; // ISO format (YYYY-MM-DD)
}

export interface CreateTransaction {
  description: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  date: string; // ISO format (YYYY-MM-DD)
}

export interface UpdateTransaction {
  description?: string;
  amount?: number;
  type?: "income" | "expense";
  category?: string;
  date?: string; // ISO format (YYYY-MM-DD)
}
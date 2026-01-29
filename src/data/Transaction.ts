import type { Transaction } from "../types/Transaction";

export const transactions: Transaction[] = [
  {
    id: "t1",
    description: "Grocery shopping at Carrefour",
    amount: 850,
    type: "expense",
    category: "Food",
    date: "2026-01-15"
  },
  {
    id: "t2",
    description: "Salary payment",
    amount: 12000,
    type: "income",
    category: "Salary",
    date: "2026-01-01"
  },
  {
    id: "t3",
    description: "Netflix subscription",
    amount: 250,
    type: "expense",
    category: "Entertainment",
    date: "2026-01-10"
  },
  {
    id: "t4",
    description: "Freelance project payout",
    amount: 3000,
    type: "income",
    category: "Freelance",
    date: "2026-01-18"
  },
  {
    id: "t5",
    description: "Dinner at restaurant",
    amount: 400,
    type: "expense",
    category: "Food",
    date: "2026-01-20"
  },
  {
    id: "t6",
    description: "Electricity bill",
    amount: 600,
    type: "expense",
    category: "Utilities",
    date: "2026-01-12"
  },
  {
    id: "t7",
    description: "Sold old laptop",
    amount: 2500,
    type: "income",
    category: "Sale",
    date: "2026-01-14"
  }
];

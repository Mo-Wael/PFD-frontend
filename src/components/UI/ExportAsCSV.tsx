import Papa from "papaparse";
import type { Transaction } from "../../types/Transaction";

export const exportTransactionsCSV = (transactions: Transaction[]) => {

  const csv = Papa.unparse(
    transactions.map(t => ({
      Description: t.description,
      Category: t.category,
      Date: new Date(t.transactionDate).toLocaleDateString(),
      Type: t.type,
      Amount: t.amount
    })),
    {
      quotes: true
    }
  );

  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8;" });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "transactions.csv";
  link.click();

  URL.revokeObjectURL(url);
};
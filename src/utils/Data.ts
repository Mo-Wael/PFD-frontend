export const normalizeMonth = (m: number, y: number) =>
    new Date(y, m - 1).toLocaleDateString(undefined, {
        month: "short",
        year: "numeric"
    });

export const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("ar-EG", {
        style: "currency",
        currency: "EGP"
    }).format(amount);

export const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric"
    });

import { CalendarDays } from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useTransactionByDate } from "../hooks/useTransaction";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  // const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { data, isLoading, isError } = useTransactionByDate(selectedDate);
  // console.log("transactionDate", data);

  // safer date formatting
  const formattedDate =
    selectedDate.toLocaleDateString(undefined, {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const dayTransactions = data?.data?.transactions ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="max-h-screen bg-gray-50 p-4">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-7xl mx-auto w-full">
        {/* Calendar Card */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 md:p-6 h-fit w-full lg:w-auto lg:min-w-95">
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays className="w-5 h-5" />
            <p className="text-lg md:text-xl font-semibold">Select Date</p>
          </div>

          <Calendar
            onChange={(date) => setSelectedDate(date as Date)}
            value={selectedDate}
            className="w-full custom-calendar"
            calendarType="islamic"
            locale="en-US"
          />
        </div>

        {/* Transactions Card */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 md:p-6 flex flex-col w-full">
          <p className="text-lg md:text-xl font-semibold mb-4">
            Transactions — {formattedDate}
          </p>

          {dayTransactions?.length === 0 ? (
            <div className="flex flex-col flex-1 justify-center items-center text-gray-500 text-center gap-2">
              <CalendarDays className="w-8 h-8 opacity-60" />
              <p className="text-sm md:text-base">No transactions for this day</p>
            </div>
          ) : (
            <div className="space-y-3 overflow-y-auto">
              {dayTransactions?.map((t) => (
                <div
                  key={t._id}
                  className="border border-gray-200 rounded-lg p-3 flex justify-between hover:border-gray-300 transition-colors"
                >
                  <span className="text-sm md:text-base">{t.description}</span>
                  <span className="text-sm md:text-base ">{t.type}</span>
                  <span className="text-sm md:text-base">{t.category}</span>
                  <span className="font-semibold text-sm md:text-base">
                    ${t.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;

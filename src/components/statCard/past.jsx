import React from "react";
import { PastWeek, PastMonth } from "@/lib/find";
import numeral from "numeral";

export const Past = async () => {
  const pastWeek = await PastWeek.getExpense();
  const pastMonth = await PastMonth.getExpense();
  return (
    <div className="stats stats-vertical shadow col-span-1 row-span-2 row-start-2 min-w-full">
      <div className="stat transition-transform transform hover:-translate-y-1">
        <div className="stat-title">Last 7 days</div>
        <div className="stat-value text-blue-400">
          ₱{numeral(pastWeek?.total_expenses).format("0.00a")}
        </div>
      </div>

      <div className="stat transition-transform transform hover:-translate-y-1">
        <div className="stat-title">Last 30 days</div>
        <div className="stat-value text-purple-400">
          ₱{numeral(pastMonth?.total_expenses).format("0.00a")}
        </div>
      </div>
    </div>
  );
};

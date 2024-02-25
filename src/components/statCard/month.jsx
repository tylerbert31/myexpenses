import React from "react";
import { ThisMonth } from "@/lib/find";
import numeral from "numeral";
import { format } from "date-fns";

const Month = async () => {
  const thisMonth = await ThisMonth.getExpense();
  return (
    <div className="stats stats-vertical col-span-1 shadow row-start-2 row-span-3 min-w-full">
      <div className="stat transition-transform transform hover:-translate-y-1">
        <div className="stat-title">This Month</div>
        <div className="stat-value text-yellow-400">
          ₱{numeral(thisMonth?.total_expenses).format("0.00a")}
        </div>
        <div className="stat-desc">{format(new Date(), "MMMM")}</div>
      </div>

      <div className="stat transition-transform transform hover:-translate-y-1">
        <div className="stat-title">Year</div>
        <div className="stat-value text-secondary">
          {format(new Date(), "yyyy")}
        </div>
      </div>

      <div className="stat ">
        <div className="stat-title">Drank Alcohol</div>
        <div className="stat-value">
          <label className="swap swap-flip">
            <input type="checkbox" />

            <div className="swap-on">Chariz</div>
            <div className="swap-off">Never</div>
          </label>
        </div>
        <div className="stat-desc">Since 2001</div>
      </div>
    </div>
  );
};

export default Month;

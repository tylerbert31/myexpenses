import React from "react";
import { AllExpenses } from "@/lib/find";

const Table = async () => {
  const purchases = await AllExpenses.getExpenseList();
  return (
    <div className="stats shadow row-start-5 col-span-2 min-w-full">
      <div className="stat">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Purchased</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {purchases?.map((purchase, index) => (
                <tr key={purchase.id}>
                  <td className="truncate text-gray-500">
                    {purchase.description}
                  </td>
                  <td className=" font-bold">₱ {purchase.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;

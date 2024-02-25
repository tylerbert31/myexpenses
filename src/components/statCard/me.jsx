import React from "react";

const Me = () => {
  return (
    <div className="stats min-w-full shadow row-start-4 col-span-1 col-start-1">
      <div className="stat transition-transform transform hover:-translate-y-1">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src="https://avatars.githubusercontent.com/u/101559620?v=4" />
            </div>
          </div>
        </div>
        <div className="stat-value">22%</div>
        <div className="stat-title">Tyler Bert</div>
      </div>
    </div>
  );
};

export default Me;

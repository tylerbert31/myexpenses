import PocketBase from "pocketbase";
const pb = new PocketBase(process.env.NEXT_PUBLIC_DB_HOST);

export class Model {
  constructor(collection_name) {
    this.collection = collection_name;
  }

  async getExpense() {
    pb.autoCancellation(false);
    const res = await pb
      .collection(this.collection)
      .getList(1, 1, { cache: "no-store" });
    const data = res.items[0];
    return data;
  }
}

class Expenses extends Model {
  async getExpenseList() {
    const res = await pb.collection(this.collection).getList(1, 10, {
      cache: "no-store",
      sort: "-created",
    });
    const data = res.items;
    return data;
  }
}

const Today = new Model("expense_today");
const ThisWeek = new Model("expense_week");
const ThisMonth = new Model("expense_month");
const PastWeek = new Model("expense_past_7d");
const PastMonth = new Model("expense_past_30d");
const AllExpenses = new Expenses("expenses");

export { Today, ThisWeek, ThisMonth, PastWeek, PastMonth, AllExpenses };

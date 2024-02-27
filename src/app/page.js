import Latest from "@/components/statCard/card";
import Me from "@/components/statCard/me";
import Month from "@/components/statCard/month";
import { Past } from "@/components/statCard/past";
import Table from "@/components/statCard/table";
import { unstable_noStore as noStore } from "next/cache";
export default async function Home() {
  noStore();
  return (
    <div className="m-0 p-0 bg-slate-100 flex justify-center">
      <div
        id="wrapper"
        className="min-h-svh min-w-[400px] scale-90 md:scale-100 sm:scale-95 grid place-items-center grid-cols-2 max-w-[590px] gap-5 m-4"
      >
        <Latest />
        <Past />
        <Month />
        <Me />
        <Table />
      </div>
    </div>
  );
}

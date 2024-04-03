"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/custom/data-table";

const data: Sales[] = [
  {
    id: "1",
    product: "Tuntufye Mwakibinga",
    quantity: 3,
    amount: 18.5,
    status: "2024-03-29",
  },
  {
    id: "2",
    product: "Mwakifumbwa Michael",
    quantity: 3,
    amount: 19.9,
    status: "2024-03-29",
  },
  {
    id: "3",
    product: "Nshiminye Johnson",
    quantity: 3,
    amount: 18.5,
    status: "2024-03-29",
  },
  {
    id: "4",
    product: "Imana Smith",
    quantity: 3,
    amount: 19.9,
    status: "2024-03-29",
  },
  {
    id: "5",
    product: "Sarah Finna",
    quantity: 3,
    amount: 18.5,
    status: "2024-03-29",
  },
  {
    id: "6",
    product: "Mikaeli Smis",
    quantity: 3,
    amount: 19.9,
    status: "2024-03-29",
  },
  {
    id: "7",
    product: "Sarai Lot",
    quantity: 3,
    amount: 18.5,
    status: "2024-03-29",
  },
  {
    id: "8",
    product: "Gabu Smith",
    quantity: 3,
    amount: 19.9,
    status: "2024-03-29",
  },
  {
    id: "9",
    product: "Abram Johnson",
    quantity: 3,
    amount: 18.5,
    status: "2024-03-29",
  },
  {
    id: "10",
    product: "Moses Smith",
    quantity: 3,
    amount: 19.9,
    status: "2024-03-29",
  },
];

export type Sales = {
  id: string;
  product: string;
  amount: number;
  quantity: number;
  status: string;
};

export const columns: ColumnDef<Sales>[] = [
  {
    accessorKey: "product",
    header: "Name",
  },
  {
    accessorKey: "amount",
    header: "BMI",
  },
  {
    accessorKey: "quantity",
    header: "Age",
  },
  {
    accessorKey: "status",
    header: "Last Visit",
  },
];

export function RecentSales() {
  return (
    <div className="w-full">
      <DataTable data={data} columns={columns}></DataTable>
    </div>
  );
}

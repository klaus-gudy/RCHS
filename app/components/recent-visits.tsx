"use client"

// import * as React from "react"
// import {
//   ColumnDef
// } from "@tanstack/react-table"

// import { DataTable } from "@/components/ui/custom/data-table"

// const data: Sales[] = [
//   {
//     id: "1",
//     product:"Laptop Dell",
//     quantity:2,
//     amount: 55000,    
//     status: "success",
//   },
//   {
//     id: "2",
//     product:"PlayStation",
//     quantity:5,
//     amount: 35000,    
//     status: "processing",
//   },  
//   {
//     id: "3",
//     product:"Mobile Samsung Galaxy S23",
//     quantity:2,
//     amount: 75000,    
//     status: "success",
//   },  
//   {
//     id: "4",
//     product:"Gaming PC",
//     quantity:2,
//     amount: 155000,    
//     status: "success",
//   },  
//   {
//     id: "5",
//     product:"Mac",
//     quantity:2,
//     amount: 55000,    
//     status: "failed",
//   },  
//   {
//     id: "6",
//     product:"Smart Watch",
//     quantity:4,
//     amount: 55000,    
//     status: "success",
//   },
//   {
//     id: "7",
//     product:"XBox",
//     quantity:5,
//     amount: 45000,    
//     status: "processing",
//   },  
//   {
//     id: "8",
//     product:"IPad",
//     quantity:2,
//     amount: 55000,    
//     status: "success",
//   },  
//   {
//     id: "9",
//     product:"Ear Buds",
//     quantity:2,
//     amount: 10000,    
//     status: "success",
//   },  
//   {
//     id: "10",
//     product:"SSD",
//     quantity:2,
//     amount: 15000,    
//     status: "failed",
//   }
// ]

// export type Sales = {
//   id: string
//   product:string
//   amount: number
//   quantity:number,
//   status: "pending" | "processing" | "success" | "failed"

// }

// export const columns: ColumnDef<Sales>[] = [
//   {
//     accessorKey:"product",
//     header:"Product"
//   },
//   {
//     accessorKey:"amount",
//     header:"Amount"
//   },
//   {
//     accessorKey:"quantity",
//     header:"Quantity"
//   },
//   {
//     accessorKey:"status",
//     header:"Status"
//   },
// ]

// export function RecentSales() {
//   return (
//     <div className="w-full">
//       <DataTable data={data} columns={columns} ></DataTable>
//     </div>
//   )
// }

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "@/components/ui/custom/data-table"

// Define the type for child attendance data specific to RCHS
export type ChildAttendance = {
  id: string
  name: string
  age: number
  gender: string
  weight: number
  height: number
  lastVisit: string
}

// Sample child attendance data (replace with real data)
const childAttendanceData: ChildAttendance[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    age: 3,
    gender: "Female",
    weight: 15,
    height: 90,
    lastVisit: "2024-03-29",
  },
  {
    id: "2",
    name: "Michael Smith",
    age: 4,
    gender: "Male",
    weight: 18,
    height: 95,
    lastVisit: "2024-03-30",
  },
  {
    id: "1",
    name: "Tuntufye Mwakibinga",
    age: 3,
    gender: "Female",
    weight: 15,
    height: 90,
    lastVisit: "2024-03-29",
  },
  {
    id: "2",
    name: "Mwakifumbwa Michael",
    age: 4,
    gender: "Male",
    weight: 18,
    height: 95,
    lastVisit: "2024-03-30",
  },
  {
    id: "1",
    name: "Nshiminye Johnson",
    age: 3,
    gender: "Female",
    weight: 15,
    height: 90,
    lastVisit: "2024-03-29",
  },
  {
    id: "2",
    name: "Imana Smith",
    age: 4,
    gender: "Male",
    weight: 18,
    height: 95,
    lastVisit: "2024-03-30",
  },
  {
    id: "1",
    name: "Sarah Finna",
    age: 3,
    gender: "Female",
    weight: 15,
    height: 90,
    lastVisit: "2024-03-29",
  },
  {
    id: "2",
    name: "Mikaeli Smis",
    age: 4,
    gender: "Male",
    weight: 18,
    height: 95,
    lastVisit: "2024-03-30",
  },
  {
    id: "1",
    name: "Sarai Lot",
    age: 3,
    gender: "Female",
    weight: 15,
    height: 90,
    lastVisit: "2024-03-29",
  },
  {
    id: "2",
    name: "Gabu Smith",
    age: 4,
    gender: "Male",
    weight: 18,
    height: 95,
    lastVisit: "2024-03-30",
  },
  {
    id: "1",
    name: "Abram Johnson",
    age: 3,
    gender: "Female",
    weight: 15,
    height: 90,
    lastVisit: "2024-03-29",
  },
  {
    id: "2",
    name: "Moses Smith",
    age: 4,
    gender: "Male",
    weight: 18,
    height: 95,
    lastVisit: "2024-03-30",
  },

]

// Define columns for child attendance data table
export const columns: ColumnDef<ChildAttendance>[] = [
  {
    accessorKey: "name",
    header: "Name"
  },
  {
    accessorKey: "age",
    header: "Age"
  },
  {
    accessorKey: "gender",
    header: "Gender"
  },
  {
    accessorKey: "weight",
    header: "Weight (kg)"
  },
  {
    accessorKey: "height",
    header: "Height (cm)"
  },
  {
    accessorKey: "lastVisit",
    header: "Last Visit Date"
  },
]

export function RecentChildAttendance() {
  return (
    <div className="w-full">
      <DataTable data={childAttendanceData} columns={columns}></DataTable>
    </div>
  )
}

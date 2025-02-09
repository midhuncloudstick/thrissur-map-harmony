
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Sample data - replace with actual data
const panchayats = [
  { id: 1, name: "Adat", block: "Puzhakkal", population: 24521 },
  { id: 2, name: "Avanur", block: "Ollukkara", population: 19876 },
  { id: 3, name: "Kadavallur", block: "Chalakudy", population: 22345 },
  { id: 4, name: "Mattathur", block: "Thrissur", population: 18654 },
  { id: 5, name: "Mullurkkara", block: "Mukundapuram", population: 21432 },
];

const PanchayatTable = () => {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Block</TableHead>
            <TableHead className="text-right">Population</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {panchayats.map((panchayat) => (
            <TableRow key={panchayat.id}>
              <TableCell className="font-medium">{panchayat.name}</TableCell>
              <TableCell>{panchayat.block}</TableCell>
              <TableCell className="text-right">{panchayat.population.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PanchayatTable;

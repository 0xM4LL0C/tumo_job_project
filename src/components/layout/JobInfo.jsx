"use client";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function JobInfo({
  company_name,
  job_title,
  job_short_info,
  experiance_level,
  salary_range,
  job_deadline,
  about_company,
  job_description,
  responsibilities,
  qualifications,
  skils,
}) {
  return (
    <div>
      <section>
        <p className="font-bold text-[16px]">{company_name}</p>
        <p className="font-bold text-[24px]">{job_title}</p>
        <p className="font-thin text-[14px]">{job_short_info}</p>
      </section>

      <hr />
      <br />

      <section>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-[16px]">
                Experience Level
              </TableHead>
              <TableHead className="font-bold text-[16px]">
                Salary Range (AMD)
              </TableHead>
              <TableHead className="font-bold text-[16px]">
                Job Deadline
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-[16px] font-normal">
                {experiance_level}
              </TableCell>
              <TableCell className="text-[16px] font-normal">
                {salary_range[0]} - {salary_range[1]}
              </TableCell>
              <TableCell className="text-[16px] font-normal">
                {job_deadline}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <br />

      <section>
        <p className="font-bold text-[16px]">About Company</p>
        <p className="text-[16px] font-normal text-wrap">{about_company}</p>
      </section>

      <br />

      <section>
        <p className="font-bold text-[16px]">Job Description</p>
        <p className="text-[16px] font-normal">{job_description}</p>
      </section>

      <br />

      <section>
        <p className="font-bold text-[16px]">Responsibilities</p>
        <ul>
          {responsibilities.map((i) => (
            <li
              key={i}
              className="text-[16px] font-normal list-disc list-inside"
            >
              {i}
            </li>
          ))}
        </ul>
      </section>
      <br />

      <section>
        <p className="font-bold text-[16px]">Qualifications</p>
        <ul>
          {qualifications.map((i) => (
            <li
              key={i}
              className="text-[16px] font-normal list-disc list-inside"
            >
              {i}
            </li>
          ))}
        </ul>
      </section>

      <br />

      <section>
        <p className="font-bold text-[16px]">Skills</p>
        <div className="flex flex-row gap-2 p-4">
          {skils.map((i) => (
            <Badge key={i}>{i}</Badge>
          ))}
        </div>
      </section>
    </div>
  );
}

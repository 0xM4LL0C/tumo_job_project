"use client";

import { createRoot } from "react-dom/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import JobInfo from "@/components/layout/JobInfo";
import { JOBS } from "@/data/jobs";

function handleCardClick(job) {
  const job_info = document.getElementById("job_info");
  if (!job_info) return;

  const element = <JobInfo {...job} />;

  if (!job_info._reactRoot) {
    job_info._reactRoot = createRoot(job_info);
  }

  job_info._reactRoot.render(element);
}

export default function Job() {
  return (
    <div className="p-6 flex flex-row mx-[20px] gap-8 justify-center-safe">
      <div className="h-fit max-w-[423px] grid grid-cols-1 gap-[12px] rounded-[8px]">
        {JOBS.map((job, index) => (
          <Card
            key={index}
            onClick={() => handleCardClick(job)}
            className="p-6 border-1 border-solid border-[#5F5F5F] cursor-pointer shadow-lg/30 shadow-[#3341551A]/50"
          >
            <CardHeader>
              <CardTitle className="font-bold text-[18px]">
                {job.company_name}
              </CardTitle>
              <CardDescription className="font-normal text-[16px]">
                {job.company_site}
              </CardDescription>
            </CardHeader>
            <hr />
            <CardContent>
              <p className="font-bold text-[16px]">{job.job_title}</p>
              <p className="font-thin text-[14px]">{job.job_short_info}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div id="job_info" className="rounded-[8px] w-[755px]" />
    </div>
  );
}

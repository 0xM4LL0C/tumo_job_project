"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";


export default function Job() {

  const [selectedJob, setSelectedJob] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data);
        setSelectedJob(data[0]); // Select first job by default
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if(loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="px-6 py-4">
      <div className="mb-4 p-2">
        <Input className="rounded-xl" placeholder="Find your perfect job" />
      </div>
      <div className="flex items-center justify-center gap-2 mb-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Positions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="backend">Backend</SelectItem>
            <SelectItem value="frontend">Frontend</SelectItem>
            <SelectItem value="fullstack">Full stack</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Company" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="acme">Acme</SelectItem>
            <SelectItem value="github">Github</SelectItem>
            <SelectItem value="telegram">Telegram</SelectItem>
            <SelectItem value="google">Google</SelectItem>
            <SelectItem value="microsoft">Microsoft</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Experience Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="intern">Intern</SelectItem>
            <SelectItem value="junior">Junior</SelectItem>
            <SelectItem value="middle">Middle</SelectItem>
            <SelectItem value="senior">Senior</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="remote">Remote</SelectItem>
            <SelectItem value="onsite">On-site</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Contract Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-time">Full-Time</SelectItem>
            <SelectItem value="part-time">Part-Time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-full mx-auto gap-6">
        <div className="w-[423px] overflow-auto flex-shrink-0">
          <div className="flex flex-col gap-3">
            {jobs.map((job) => (
              <Card
                key={job.id}
                className={`cursor-pointer border border-muted hover:border-primary transition ${selectedJob.id === job.id ? "border-primary" : ""
                  }`}
                onClick={() => setSelectedJob(job)}
              >
                <CardHeader>
                  <CardTitle>{job.position}</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent className="p-4 flex flex-col gap-1"></CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <Card className="p-0">
            <CardHeader className="flex flex-row items-center justify-between p-6 pb-2">
              <div>
                <CardTitle>{selectedJob.company}</CardTitle>
                <CardTitle className="text-xl mt-2">
                  {selectedJob.position}
                </CardTitle>
                <div className="text-sm text-muted-foreground mt-1">
                  {selectedJob.jobType} | {selectedJob.location}
                </div>
              </div>
              <Button>Apply Now</Button>
            </CardHeader>
            <CardContent className="p-6 pt-2">
              <div className="flex gap-8 mb-4">
                <div>
                  <div className="text-xs text-muted-foreground">
                    Experience Level
                  </div>
                  <div className="font-medium">{selectedJob.experienceLevel}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Salary Range (AMD)
                  </div>
                  <div className="font-medium">{selectedJob.salaryMin} - {selectedJob.salaryMax}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Job Deadline
                  </div>
                  <div className="font-medium">{selectedJob.endDate}</div>
                </div>
              </div>
              <div className="mb-4">
                <div className="font-semibold mb-1">About Company</div>
                <div className="text-sm text-muted-foreground">
                  {selectedJob.about}
                </div>
              </div>
              <div className="mb-4">
                <div className="font-semibold mb-1">Job Description</div>
                <div 
                  className="text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: selectedJob.jobDescription }}
                />
              </div>
              <div className="mb-4">
                <div className="font-semibold mb-1">Responsibilities</div>
                <div 
                  className="text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: selectedJob.responsibilities }}
                />
              </div>
              <div className="mb-4">
                <div className="font-semibold mb-1">Qualifications</div>
                <div 
                  className="text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: selectedJob.qualifications }}
                />
              </div>
              <div>
                <div className="font-semibold mb-1">Skills</div>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((skill, i) => (
                    <Badge key={i} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
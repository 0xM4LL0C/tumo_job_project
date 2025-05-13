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
import { useState } from "react";

const jobs = [
  {
    id: 1,
    company: "Acme",
    title: "Senior Backend Developer",
    type: "Full time",
    location: "Onsite | Yerevan, Armenia",
    experience: "5+ years",
    salary: "1,500,000 - 2,500,000 AMD",
    deadline: "30 May, 2024",
    about:
      "Acme is a product and software development company delivering end-to-end services ...",
    description: "We are looking for a Senior Backend Developer ...",
    responsibilities: [
      "Lead and deliver smart contracts for DeFi Protocols.",
      "Work with product owners to define key strategies, including front-end and UX testing, to ensure a comprehensive solution.",
      "Participate in code reviews and contribute compliance with best practices and security standards.",
      "Mentor and lead other engineers.",
    ],
    qualifications: [
      "Passion for Blockchain technologies.",
      "Proven experience (5+ years) Backend Developer, with a strong portfolio of deployed smart contracts.",
      "Familiarity with Ethereum standards (ERC20, ERC4626, etc.) and decentralized application patterns.",
    ],
    skills: [
      "Design Architecture",
      "API",
      "Communication",
      "SOLID",
      "Golang",
      "ORM",
      "Project Management",
    ],
    tags: ["Oracle", "Yerevan", "Armenia"],
    posted: "2h",
  },
  {
    id: 2,
    company: "Acme",
    title: "Frontend Developer",
    type: "Hybrid",
    location: "Yerevan, Armenia",
    experience: "3+ years",
    salary: "1,200,000 - 2,000,000 AMD",
    deadline: "25 May, 2024",
    about:
      "Acme is a product and software development company delivering end-to-end services ...",
    description: "We are looking for a Frontend Developer ...",
    responsibilities: [
      "Develop and maintain user-facing features using React",
      "Build reusable components and libraries for future use",
      "Optimize applications for maximum speed and scalability",
      "Collaborate with backend developers to integrate APIs",
    ],
    qualifications: [
      "Strong experience with React and modern JavaScript",
      "Understanding of state management solutions",
      "Experience with responsive design and CSS frameworks",
    ],
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "CSS",
      "HTML",
      "Git",
      "REST APIs",
    ],
    tags: ["React", "Yerevan", "Armenia"],
    posted: "5h",
  },
  {
    id: 3,
    company: "Acme",
    title: "Senior Blockchain Developer",
    type: "Hybrid",
    location: "Remote, Armenia",
    experience: "4+ years",
    salary: "2,000,000 - 3,000,000 AMD",
    deadline: "28 May, 2024",
    about:
      "Acme is a product and software development company delivering end-to-end services ...",
    description: "We are looking for a Senior Blockchain Developer ...",
    responsibilities: [
      "Design and implement smart contracts",
      "Develop and maintain blockchain applications",
      "Work on DeFi protocols and solutions",
      "Lead technical discussions and architecture decisions",
    ],
    qualifications: [
      "Strong experience with blockchain development",
      "Knowledge of Solidity and smart contract development",
      "Understanding of DeFi protocols and mechanisms",
    ],
    skills: [
      "Blockchain",
      "Solidity",
      "Smart Contracts",
      "DeFi",
      "Ethereum",
      "Web3",
      "Cryptography",
    ],
    tags: ["Blockchain", "Remote", "Armenia"],
    posted: "12h",
  },
  {
    id: 4,
    company: "Acme",
    title: "Senior Backend Developer",
    type: "Onsite",
    location: "Yerevan, Armenia",
    experience: "5+ years",
    salary: "1,800,000 - 2,800,000 AMD",
    deadline: "1 June, 2024",
    about:
      "Acme is a product and software development company delivering end-to-end services ...",
    description: "We are looking for a Senior Backend Developer ...",
    responsibilities: [
      "Design and implement scalable backend services",
      "Optimize database performance and queries",
      "Implement security best practices",
      "Mentor junior developers",
    ],
    qualifications: [
      "Strong experience with backend technologies",
      "Knowledge of database design and optimization",
      "Experience with microservices architecture",
    ],
    skills: [
      "Backend Development",
      "Database Design",
      "API Development",
      "System Architecture",
      "Performance Optimization",
      "Security",
      "Team Leadership",
    ],
    tags: ["Oracle", "Yerevan", "Armenia"],
    posted: "20h",
  },
];

export default function Job() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
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
                  <CardTitle>{job.company}</CardTitle>
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
                  {selectedJob.title}
                </CardTitle>
                <div className="text-sm text-muted-foreground mt-1">
                  {selectedJob.type} | {selectedJob.location}
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
                  <div className="font-medium">{selectedJob.experience}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Salary Range (AMD)
                  </div>
                  <div className="font-medium">{selectedJob.salary}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">
                    Job Deadline
                  </div>
                  <div className="font-medium">{selectedJob.deadline}</div>
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
                <div className="text-sm text-muted-foreground">
                  {selectedJob.description}
                </div>
              </div>
              <div className="mb-4">
                <div className="font-semibold mb-1">Responsibilities</div>
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  {selectedJob.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <div className="font-semibold mb-1">Qualifications</div>
                <ul className="list-disc pl-5 text-sm text-muted-foreground">
                  {selectedJob.qualifications.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
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
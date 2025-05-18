"use client";

import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(
    () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
    {
        ssr: false,
    }
);


export default function Create() {
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState("");

    const [start_date, setStartDate] = useState(null);
    const [end_date, setEndDate] = useState(null);

    const NEXT_PUBLIC_TINYMCE_API_KEY = process.env.NEXT_PUBLIC_TINYMCE_API_KEY;

    // Add this function to handle adding skills
    const handleAddSkill = (e) => {
        if (e.key === "Enter" && newSkill.trim()) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill("");
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter((skill) => skill !== skillToRemove));
    };


    return (
        <div className="flex p-4 flex-col gap-4 justify-center items-center mt-9">
            <Card className="p-8 max-w-3xl w-full">
                <div className="flex justify-between">
                    <CardTitle className=" font-bold text-xl">New position</CardTitle>

                    <div className="flex justify-between gap-4">
                        <Button className="py-[12px] px-[20px] rounded-[8px] border border-solid border-black text-black bg-white hover:bg-black hover:text-white">Cancel</Button>
                        <Button className="py-[12px] px-[20px] rounded-[8px] bg-purple-600 hover:bg-purple-700">Create Draft</Button>
                        <Button className="py-[12px] px-[20px] rounded-[8px] bg-indigo-600 hover:bg-indigo-700">Post Job</Button>
                    </div>
                </div>
            </Card>

            <Card className="max-w-3xl w-full px-6 py-8 flex gap-4.5">
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Position *</p>

                    <Input
                        className="rounded-xl py-3 px-4 text-base h-12"
                        placeholder="Senior Backend Developer"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Experience Level *</p>
                    <Select>
                        <SelectTrigger className="rounded-xl w-full py-3 px-4 text-base !h-12">
                            <SelectValue placeholder="Contract Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="intern">Intern</SelectItem>
                            <SelectItem value="junior">Junior</SelectItem>
                            <SelectItem value="mid">Mid-Level</SelectItem>
                            <SelectItem value="senior">Senior</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Location *</p>
                    <Input
                        className="rounded-xl py-3 px-4 text-base h-12"
                        placeholder="Enter location"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Contact Type *</p>
                    <Select>
                        <SelectTrigger className="rounded-xl w-full py-3 px-4 text-base !h-12">
                            <SelectValue placeholder="Contract Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="full-time">Full-Time</SelectItem>
                            <SelectItem value="part-time">Part-Time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Job Type *</p>
                    <Select>
                        <SelectTrigger className="rounded-xl w-full py-3 px-4 text-base !h-12">
                            <SelectValue placeholder="Contract Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="remote">Remote</SelectItem>
                            <SelectItem value="onSite">On-Site</SelectItem>
                            <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Job Description *</p>
                    <Editor
                        apiKey={NEXT_PUBLIC_TINYMCE_API_KEY}
                        initialValue=""
                        init={{
                            height: 400,
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste code help wordcount",
                            ],
                            toolbar:
                                "undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help",
                        }}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Responsibilities *</p>
                    <Editor
                        apiKey={NEXT_PUBLIC_TINYMCE_API_KEY}
                        initialValue=""
                        init={{
                            height: 400,
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste code help wordcount",
                            ],
                            toolbar:
                                "undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help",
                        }}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Qualifications *</p>
                    <Editor
                        apiKey={NEXT_PUBLIC_TINYMCE_API_KEY}
                        initialValue=""
                        init={{
                            height: 400,
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste code help wordcount",
                            ],
                            toolbar:
                                "undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help",
                        }}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Salary Range (AMD)</p>
                    <div className="flex flex-row gap-2">

                        <Input
                            className="rounded-xl py-3 px-4 text-base h-12"
                            placeholder="Min"
                        />
                        <Input
                            className="rounded-xl py-3 px-4 text-base h-12"
                            placeholder="Max"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Skills</p>
                    <div>
                        <Input
                            className="rounded-xl py-3 px-4 text-base h-12"
                            placeholder="Type a skill and press Enter"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            onKeyDown={handleAddSkill}
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant="secondary"
                                    className="h-8 px-3 py-1 bg-black text-white text-sm flex items-center gap-1"
                                >
                                    {skill}
                                    <button
                                        onClick={() => handleRemoveSkill(skill)}
                                        className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    >
                                        <X className="h-3 w-3" />
                                        <span className="sr-only">Remove {skill}</span>
                                    </button>
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Job Post Dates *</p>
                    <div className="flex flex-row gap-3">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        " justify-start text-left font-normal rounded-xl py-3 px-4 text-base h-12",
                                        !start_date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {start_date ? format(start_date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className=" p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={start_date}
                                    onSelect={setStartDate}
                                    disabled={(start_date) =>
                                        start_date < new Date() || start_date > new Date("2025-12-31")
                                    }
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        " justify-start text-left font-normal rounded-xl py-3 px-4 text-base h-12",
                                        !end_date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {end_date ? format(end_date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className=" p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={end_date}
                                    onSelect={setEndDate}
                                    disabled={(end_date) =>
                                        end_date < new Date() || end_date > new Date("2025-12-31")
                                    }
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </Card>
        </div>
    );
}

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
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

const Editor = dynamic(
    () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
    {
        ssr: false,
    },
);

const NEXT_PUBLIC_TINYMCE_API_KEY = process.env.NEXT_PUBLIC_TINYMCE_API_KEY;
export default function Create() {
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState("");
    const [start_date, setStartDate] = useState(null);
    const [end_date, setEndDate] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        control,
    } = useForm({
        defaultValues: {
            position: "",
            experienceLevel: "",
            location: "",
            contractType: "",
            jobType: "",
            jobDescription: "",
            responsibilities: "",
            qualifications: "",
            salaryMin: "",
            salaryMax: "",
            skills: [],
            jobPostDates: {
                start: null,
                end: null,
            },
        },
        mode: "onChange",
    });

    const handleAddSkill = (e) => {
        if (e.key === "Enter" && newSkill.trim()) {
            console.log(newSkill.trim());
            const updatedSkills = [...skills, newSkill.trim()];
            setSkills(updatedSkills);
            setValue("skills", updatedSkills);
            setNewSkill("");
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        const updatedSkills = skills.filter((skill) => skill !== skillToRemove);
        setSkills(updatedSkills);
        setValue("skills", updatedSkills);
    };

  
    const onSubmit = async (data) => {
        try {
          const response = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (!response.ok) {
            throw new Error('Failed to create job');
          }
    
          const result = await response.json();
          // Redirect to jobs page after successful creation
          window.location.href = '/job';
        } catch (error) {
          console.error('Error creating job:', error);
          // Handle error (show error message to user)
        }
      };
    return (
        <div className="flex p-4 flex-col gap-4 justify-center items-center mt-9">
            <Card className="p-8 max-w-3xl w-full">
                <div className="flex justify-between">
                    <CardTitle className=" font-bold text-xl">
                        New position
                    </CardTitle>

                    <div className="flex justify-between gap-4">
                        <Button className="py-[12px] px-[20px] rounded-[8px] border border-solid border-black text-black bg-white hover:bg-black hover:text-white">
                            <Link href="/job">Cancel</Link>
                        </Button>
                        <Button className="py-[12px] px-[20px] rounded-[8px] bg-purple-600 hover:bg-purple-700">
                            <Link href="/job">Create Draft</Link>
                        </Button>
                        <Button className="py-[12px] px-[20px] rounded-[8px] bg-indigo-600 hover:bg-indigo-700">
                            <Link href="/job">Post Job</Link>
                        </Button>
                    </div>
                </div>
            </Card>

            <Card className="max-w-3xl w-full px-6 py-8 flex gap-4.5">
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Position *</p>
                    <Input
                        {...register("position", {
                            required: "Position is required",
                        })}
                        className={cn(
                            "rounded-xl py-3 px-4 text-base h-12",
                            errors.position && "border-red-500 border-2",
                        )}
                        placeholder="Senior Backend Developer"
                    />
                    {errors.position && (
                        <span className="text-red-500 text-sm">
                            {errors.position.message}
                        </span>
                    )}
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Experience Level *</p>
                    <Controller
                        name="experienceLevel"
                        control={control}
                        rules={{ required: "Experience level is required" }}
                        render={({ field }) => (
                            <Select
                                onValueChange={(value) => {
                                    field.onChange(value);
                                    setValue("experienceLevel", value, {
                                        shouldValidate: true,
                                    });
                                }}
                            >
                                <SelectTrigger
                                    className={cn(
                                        "rounded-xl w-full py-3 px-4 text-base !h-12",
                                        errors.experienceLevel &&
                                            "border-red-500 border-2",
                                    )}
                                >
                                    <SelectValue placeholder="Select Experience Level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="intern">
                                        Intern
                                    </SelectItem>
                                    <SelectItem value="junior">
                                        Junior
                                    </SelectItem>
                                    <SelectItem value="mid">
                                        Mid-Level
                                    </SelectItem>
                                    <SelectItem value="senior">
                                        Senior
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.experienceLevel && (
                        <span className="text-red-500 text-sm">
                            {errors.experienceLevel.message}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Location *</p>
                    <Input
                        {...register("location", {
                            required: "Location is required",
                        })}
                        className={cn(
                            "rounded-xl py-3 px-4 text-base h-12",
                            errors.location && "border-red-500 border-2",
                        )}
                        placeholder="Enter location"
                    />
                    {errors.location && (
                        <span className="text-red-500 text-sm">
                            {errors.location.message}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Contact Type *</p>
                    <Controller
                        name="contractType"
                        control={control}
                        rules={{ required: "Contract type is required" }}
                        render={({ field }) => (
                            <Select>
                                <SelectTrigger
                                    className={cn(
                                        "rounded-xl w-full py-3 px-4 text-base !h-12",
                                        errors.contractType &&
                                            "border-red-500 border-2",
                                    )}
                                >
                                    <SelectValue placeholder="Contract Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="full-time">
                                        Full-Time
                                    </SelectItem>
                                    <SelectItem value="part-time">
                                        Part-Time
                                    </SelectItem>
                                    <SelectItem value="contract">
                                        Contract
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />

                    {errors.contractType && (
                        <span className="text-red-500 text-sm">
                            {errors.contractType.message}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Job Type *</p>
                    <Controller
                        name="jobType"
                        control={control}
                        rules={{ required: "Job Type is required" }}
                        render={({ field }) => (
                            <Select>
                                <SelectTrigger
                                    className={cn(
                                        "rounded-xl w-full py-3 px-4 text-base !h-12",
                                        errors.experienceLevel &&
                                            "border-red-500 border-2",
                                    )}
                                >
                                    <SelectValue placeholder="Contract Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="remote">
                                        Remote
                                    </SelectItem>
                                    <SelectItem value="onSite">
                                        On-Site
                                    </SelectItem>
                                    <SelectItem value="hybrid">
                                        Hybrid
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Job Description *</p>
                    <Controller
                        name="jobDescription"
                        control={control}
                        rules={{ required: "Job description is required" }}
                        render={({ field }) => (
                            <Editor
                                apiKey={NEXT_PUBLIC_TINYMCE_API_KEY}
                                initialValue=""
                                onEditorChange={(content) => {
                                    field.onChange(content);
                                    setValue("jobDescription", content, {
                                        shouldValidate: true,
                                    });
                                }}
                                className={cn(
                                    "rounded-xl py-3 px-4 text-base h-12",
                                    errors.jobDescription &&
                                        "border-red-500 border-2",
                                )}
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
                        )}
                    />
                    {errors.jobDescription && (
                        <span className="text-red-500 text-sm">
                            {errors.jobDescription.message}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Qualifications *</p>
                    <Controller
                        name="qualifications"
                        control={control}
                        rules={{ required: "Qualifications is required" }}
                        render={({ field }) => (
                            <Editor
                                apiKey={NEXT_PUBLIC_TINYMCE_API_KEY}
                                initialValue=""
                                onEditorChange={(content) => {
                                    field.onChange(content);
                                    setValue("qualifications", content, {
                                        shouldValidate: true,
                                    });
                                }}
                                className={cn(
                                    "rounded-xl py-3 px-4 text-base h-12",
                                    errors.qualifications &&
                                        "border-red-500 border-2",
                                )}
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
                        )}
                    />
                    {errors.qualifications && (
                        <span className="text-red-500 text-sm">
                            {errors.qualifications.message}
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Salary Range(AMD)</p>
                    <div className="flex flex-row gap-3">
                        <Controller
                            name="salaryMin"
                            control={control}
                            rules={{
                                validate: (value) => {
                                    const max = watch("salaryMax");
                                    if (max && value > max) {
                                        return "Min salary cannot be greater than max salary";
                                    }
                                    return true;
                                },
                            }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    className={cn(
                                        "rounded-xl py-3 px-4 text-base h-12",
                                        errors.salaryMin &&
                                            "border-red-500 border-2",
                                    )}
                                    type="number"
                                    min="0"
                                    placeholder="Enter min salary"
                                />
                            )}
                        />
                        <Controller
                            name="salaryMax"
                            control={control}
                            rules={{
                                validate: (value) => {
                                    const min = watch("salaryMin");
                                    if (min && value < min) {
                                        return "Max salary cannot be less than min salary";
                                    }
                                    return true;
                                },
                            }}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    className={cn(
                                        "rounded-xl py-3 px-4 text-base h-12",
                                        errors.salaryMax &&
                                            "border-red-500 border-2",
                                    )}
                                    type="number"
                                    min="0"
                                    placeholder="Enter max salary"
                                />
                            )}
                        />
                    </div>
                    {(errors.salaryMin || errors.salaryMax) && (
                        <span className="text-red-500 text-sm">
                            {errors.salaryMin?.message ||
                                errors.salaryMax?.message}
                        </span>
                    )}
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
                                        <span className="sr-only">
                                            Remove {skill}
                                        </span>
                                    </button>
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold">Job Post Dates *</p>
                    <div className="flex flex-row gap-3">
                        <Controller
                            name="jobPostDates.start"
                            control={control}
                            rules={{ required: "Start date is required" }}
                            render={({ field }) => (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "justify-start text-left font-normal rounded-xl py-3 px-4 text-base h-12",
                                                !start_date &&
                                                    "text-muted-foreground",
                                                errors.jobPostDates?.start &&
                                                    "border-red-500 border-2",
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {start_date ? (
                                                format(start_date, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="p-0"
                                        align="start"
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={start_date}
                                            onSelect={(newDate) => {
                                                setStartDate(newDate);
                                                field.onChange(newDate);
                                                setValue(
                                                    "jobPostDates.start",
                                                    newDate,
                                                    {
                                                        shouldValidate: true,
                                                    },
                                                );
                                            }}
                                            disabled={(start_date) =>
                                                start_date < new Date() ||
                                                start_date >
                                                    new Date("2025-12-31")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            )}
                        />

                        <Controller
                            name="jobPostDates.end"
                            control={control}
                            rules={{ required: "End date is required" }}
                            render={({ field }) => (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "justify-start text-left font-normal rounded-xl py-3 px-4 text-base h-12",
                                                !end_date &&
                                                    "text-muted-foreground",
                                                errors.jobPostDates?.end &&
                                                    "border-red-500 border-2",
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {end_date ? (
                                                format(end_date, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="p-0"
                                        align="start"
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={end_date}
                                            onSelect={(newDate) => {
                                                setEndDate(newDate);
                                                field.onChange(newDate);
                                                setValue(
                                                    "jobPostDates.end",
                                                    newDate,
                                                    {
                                                        shouldValidate: true,
                                                    },
                                                );
                                            }}
                                            disabled={(date) =>
                                                date < new Date() ||
                                                date > new Date("2025-12-31")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            )}
                        />
                    </div>
                    <div>
                        {errors.jobPostDates?.start && (
                            <span className="text-red-500 text-sm">
                                {errors.jobPostDates.start.message}
                            </span>
                        )}
                        {(errors.jobPostDates?.start ||
                            errors.jobPostDates?.end) && <br />}
                        {errors.jobPostDates?.end && (
                            <span className="text-red-500 text-sm">
                                {errors.jobPostDates.end.message}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <Button className="py-[12px] px-[20px] rounded-[8px] border border-solid border-black text-black bg-white hover:bg-black hover:text-white">
                        <Link href="/job">Cancel</Link>
                    </Button>
                    <Button className="py-[12px] px-[20px] rounded-[8px] bg-purple-600 hover:bg-purple-700">
                        <Link href="/job">Create Draft</Link>
                    </Button>
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        className="py-[12px] px-[20px] rounded-[8px] bg-indigo-600 hover:bg-indigo-700"
                    >
                        Post Job
                    </Button>
                </div>
            </Card>
        </div>
    );
}

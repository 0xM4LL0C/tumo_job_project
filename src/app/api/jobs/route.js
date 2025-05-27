import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET /api/jobs - Get all jobs
export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const job = await prisma.job.create({
      data: {
        position: body.position,
        experienceLevel: body.experienceLevel,
        location: body.location,
        contractType: body.contractType,
        jobType: body.jobType,
        jobDescription: body.jobDescription,
        responsibilities: body.responsibilities,
        qualifications: body.qualifications,
        salaryMin: body.salaryMin ? parseInt(body.salaryMin) : null,
        salaryMax: body.salaryMax ? parseInt(body.salaryMax) : null,
        skills: body.skills,
        startDate: new Date(body.jobPostDates.start),
        endDate: new Date(body.jobPostDates.end),
      },
    });

    return NextResponse.json(job);
  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json(
      { error: 'Failed to create job' },
      { status: 500 }
    );
  }
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import JobInfo from "@/components/layout/JobInfo";

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.";

export default function Job() {
  return (
    <div className="p-6 flex flex-row mx-[20px] gap-8 justify-center-safe">
      <div className="max-w-[423px] grid grid-cols-1 gap-[12px] rounded-[8px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card
            key={index}
            className="p-6 border-1 border-solid border-[#5F5F5F] shadow-lg/30 shadow-[#3341551A]/50"
          >
            <CardHeader>
              <CardTitle className="font-bold text-[18px]">Acme</CardTitle>
              <CardDescription className="font-normal text-[16px]">
                www.acme.co
              </CardDescription>
            </CardHeader>

            <hr />

            <CardContent>
              <div>
                <p className="font-bold text-[16px]">
                  Senior Backend Developer
                </p>
                <p className="font-thin text-[14px]">
                  Full time | Onesite | Yerevan, Armenia
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-[8px] w-[755px]">
        <JobInfo
          company_name={"Acme"}
          job_title={"Senior Backend Developer"}
          job_short_info={"Full time | Onesite | Yerevan, Armenia"}
          experiance_level={"senior"}
          salary_range={[1_500_000, 2_500_00]}
          job_deadline={"30 Nov 2024"}
          about_company={LOREM_IPSUM}
          job_description={LOREM_IPSUM}
          responsibilities={["abc", "def"]}
          qualifications={["abc", "def"]}
          skils={["abc", "def", "ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"]}
        />
      </div>
    </div>
  );
}

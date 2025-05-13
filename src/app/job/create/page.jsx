import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea"


export default function Create() {
    return (
        <>
            <div className="px-6 py-4">
                <Card className="p-8">
                    <div className="flex justify-between">
                        <CardTitle className=" font-bold text-xl">New position</CardTitle>

                        <div className="flex justify-between gap-4">
                            <Button className="py-[12px] px-[20px] rounded-[8px] border border-solid border-black text-black bg-white hover:bg-black hover:text-white">Cancel</Button>
                            <Button className="py-[12px] px-[20px] rounded-[8px] bg-purple-600 hover:bg-purple-700">Create Draft</Button>
                            <Button className="py-[12px] px-[20px] rounded-[8px] bg-indigo-600 hover:bg-indigo-700">Post Job</Button>
                        </div>
                    </div>
                </Card>
            </div>

            <br />

            
        </>
    );
}
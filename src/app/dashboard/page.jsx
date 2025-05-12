import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Dashboard() {
    return (
        <div className="max-w-[423px] p-6">
            <Card className="p-6">
                <CardHeader>
                    <CardTitle className="font-bold">Acme</CardTitle>
                    <CardDescription className="font-normal">www.acme.co</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
}
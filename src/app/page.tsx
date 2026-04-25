import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-10">
      {/* 1. Pass the 'size' prop directly to the main Card */}
      <Card size="default">
        <CardHeader>
          {/* 2. Pass values as children inside the sub-components */}
          <CardTitle>Project Alpha, beta and gamma</CardTitle>
          <CardDescription>Created on April 2026</CardDescription>
        </CardHeader>

        <CardContent>
          <p>This is where your main body text or data goes. Cause this is made by Taj Uddin</p>
        </CardContent>

        <CardFooter>
          <button className="text-blue-500">View Details</button>
        </CardFooter>
      </Card>
    </div>
  );
}

import connectDB from "@/lib/db";

export default async function Home() {
  await connectDB();

  return <div className="text-blue-600">PainSignal</div>;
}

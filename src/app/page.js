import Card from "@/components/Card";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="md:flex bg-gradient min-h-screen">
      <Dashboard/>
      <Card/>
    </div>

  );
}

import Image from "next/image";
import Paragraph from "./components/ui/Paragraph";

export default function Home() {
  return (
    <main className="bg-red-500 h-screen w-screen">
      <Paragraph size={"sm"} />
    </main>
  );
}

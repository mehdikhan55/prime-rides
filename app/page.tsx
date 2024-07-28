import { Hero, MainContent } from "@/components";


export default async function Home({searchParams}:any) {

  
  return (
    <main className="overflow-hidden">
      <Hero/>
      <MainContent searchParams={searchParams} />
      </main>
  );
}

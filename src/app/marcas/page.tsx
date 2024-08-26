import { Brands } from "@/components/brands";
import { Header } from "@/components/header";

export default function OurBrandsPage() {
  return (
    <>
      <main className="hidden min-h-screen flex-col items-center bg-black font-neue lg:flex">
        <Header isOnBrandsPage={true} />
        <Brands />
      </main>
    </>
  );
}

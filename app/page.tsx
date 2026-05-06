import { ProfileHeader } from "@/components/profile-header";
import { ContentGrid } from "@/components/content-grid";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <ProfileHeader />
      <ContentGrid />
      <Footer />
    </main>
  );
}

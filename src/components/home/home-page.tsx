import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import TrustedBrands from "@/components/home/trusted-brands";
import CourseLibrary from "@/components/home/course-library";
import LearningPaths from "@/components/home/learning-paths";
import GrowthSection from "@/components/home/growth-section";
import CreatorCta from "@/components/home/creator-cta";
import CommunitySection from "@/components/home/community-section";
import Footer from "@/components/home/footer";

export default function HomePage() {
  return <div className="site-shell"><Header /><Hero /><TrustedBrands /><CourseLibrary /><LearningPaths /><GrowthSection /><CreatorCta /><CommunitySection /><Footer /></div>;
}

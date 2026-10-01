import TestimonialCard from "@/components/shared/testimonial-card";

export default function CommunitySection() {
  return (
    <section className="community-section" aria-labelledby="community-title">
      <div className="community-heading">
        <h2 id="community-title">Discover What Our<br />Community Is Saying</h2>
        <p>At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
      </div>
      <div className="testimonial-grid">
        <TestimonialCard name="Sarah M." role="Enthusiastic Learner">&quot;ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.&quot;</TestimonialCard>
        <TestimonialCard name="James L." role="Lifelong Learner">&quot;I&apos;ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.&quot;</TestimonialCard>
        <TestimonialCard name="Alex B." role="Inspired Creator">&quot;As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It&apos;s fulfilling to see my courses making a positive impact on learners globally.&quot;</TestimonialCard>
      </div>
    </section>
  );
}

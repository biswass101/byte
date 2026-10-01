import Image from "next/image";
import InfoCard from "@/components/shared/info-card";

export default function Hero() {
  return (
    <main className="hero" id="top">
      <Image className="hero-shape hero-shape-left" src="/left_spiral.png" alt="" width={267} height={387} priority />
      <Image className="hero-shape hero-spiral-left-white" src="/left_spiral_whilte.png" alt="" width={177} height={176} priority />
      <Image className="hero-shape hero-shape-right" src="/cylinder_right.png" alt="" width={213} height={372} priority />
      <Image className="hero-shape hero-donut" src="/donut_left.png" alt="" width={344} height={343} priority />
      <div className="hero-donut-small" aria-hidden="true" />
      <Image className="hero-shape hero-cone" src="/green_cone.png" alt="" width={190} height={189} priority />
      <Image className="hero-shape hero-spiral-right" src="/spiral_right.png" alt="" width={317} height={332} priority />

      <div className="hero-copy">
        <h1>Get Access to Hundreds<br />Courses Available</h1>
        <p>Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
      </div>

      <form className="course-search" role="search">
        <label className="search-field">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4 4" />
          </svg>
          <input aria-label="Search courses" placeholder="Course, topic, creator" />
        </label>
        <button type="submit">Search</button>
      </form>

      <div className="hero-stage">
        <div className="lime-arc" aria-hidden="true" />
        <Image className="hero-person" src="/laptop_guy_Image@2x.png" alt="Student learning with a laptop" width={722} height={515} priority />

        <InfoCard className="course-card">
          <strong>UI/UX Design</strong>
          <span>200 Courses &nbsp;&bull;&nbsp; 1000+ Students</span>
        </InfoCard>

        <InfoCard className="progress-card">
          <div className="progress-accent" />
          <div className="progress-inner">
            <strong>Learning Progress</strong>
            <b>55%</b>
            <span className="progress-track"><span /></span>
          </div>
        </InfoCard>

        <InfoCard className="students-card">
          <strong>Happy Students</strong>
          <span>4.5 (240) <em>&#9733;</em></span>
          <div className="student-row">
            <Image className="student-avatar" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="student-avatar" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="student-avatar" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="student-avatar" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="student-avatar" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="student-avatar" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="student-avatar" src="/people-1.png" alt="" width={43} height={43} />
            <b>2K+</b>
          </div>
        </InfoCard>
      </div>
    </main>
  );
}

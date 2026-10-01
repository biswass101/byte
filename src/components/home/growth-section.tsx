import Image from "next/image";

function GrowthTopVisual() {
  return (
    <div className="growth-visual growth-visual-top">
      <div className="growth-course-card">
        <div className="growth-course-img-wrap">
          <Image src="/card/Frame.png" alt="Figma course preview" width={341} height={196} />
          <span className="growth-img-badge">17 Lessons</span>
          <span className="growth-img-badge growth-img-badge-right">2 hours 16 mins</span>
        </div>
        <strong>Learn Figma from Basic</strong>
        <span>by purepearl studio</span>
        <div className="growth-card-meta">
          <span className="growth-level-badge">
            <svg className="signal-icon" viewBox="0 0 16 16" aria-hidden="true">
              <rect x="1" y="11" width="3" height="4" rx="0.5" />
              <rect x="5.5" y="8" width="3" height="7" rx="0.5" />
              <rect x="10" y="4" width="3" height="11" rx="0.5" />
            </svg>
            Beginner
          </span>
          <div className="growth-mini-avatars">
            <Image className="growth-mini-img" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="growth-mini-img" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="growth-mini-img" src="/people-1.png" alt="" width={43} height={43} />
          </div>
        </div>
        <b>$25<small>/lifetime</small></b>
      </div>
      <Image className="growth-person growth-person-top" src="/laptop_guy_image.png" alt="Student learning on a laptop" width={722} height={515} />
      <Image className="growth-squiggle growth-squiggle-top" src="/green-spiral.png" alt="" width={317} height={332} />
      <div className="growth-progress-card">
        <span>Learning Progress</span>
        <strong>55%</strong>
        <i><b /></i>
      </div>
    </div>
  );
}

function GrowthBottomVisual() {
  return (
    <div className="growth-visual growth-visual-bottom">
      <div className="revenue-card">
        <span>Total Revenue</span>
        <small>July 1-28</small>
        <strong>$120.29</strong>
        <i><b /></i>
      </div>
      <div className="revenue-card revenue-card-secondary">
        <span>Year to Date</span>
        <small>2025</small>
        <strong>$1,200.38</strong>
        <em>+12%</em>
      </div>
      <Image className="growth-person growth-person-bottom" src="/Girl_with_tab.png" alt="Creator managing courses on a tablet" width={605} height={720} />
      <Image className="growth-squiggle growth-squiggle-bottom" src="/green-spiral.png" alt="" width={317} height={332} />
      <div className="growth-students-card">
        <span>Happy Students</span>
        <strong className="growth-student-name">Md.Sabbir Hosen</strong>
        <div>
          <Image className="growth-student-img" src="/people-1.png" alt="" width={43} height={43} />
          <Image className="growth-student-img" src="/people-1.png" alt="" width={43} height={43} />
          <Image className="growth-student-img" src="/people-1.png" alt="" width={43} height={43} />
          <Image className="growth-student-img" src="/people-1.png" alt="" width={43} height={43} />
          <b>2K+</b>
        </div>
      </div>
    </div>
  );
}

export default function GrowthSection() {
  return (
    <section className="growth-section" aria-label="Grow with ByteSpace">
      <div className="growth-row growth-row-top">
        <div className="growth-copy">
          <h2>Your Path to Professional<br />Growth Starts Here!</h2>
          <p>Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.</p>
          <div className="growth-stats">
            <span><strong>12K</strong>Students</span>
            <span><strong>70+</strong>Courses</span>
            <span><strong>16</strong>Creators</span>
          </div>
        </div>
        <GrowthTopVisual />
      </div>
      <div className="growth-row growth-row-bottom">
        <GrowthBottomVisual />
        <div className="growth-copy growth-copy-bottom">
          <h2>Create &amp; Manage<br />Courses Easily.</h2>
          <p>ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.</p>
          <ul>
            <li>Share Your Expertise</li>
            <li>Monetize Your Passion</li>
            <li>Flexibility and Autonomy</li>
            <li>Build a Community</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

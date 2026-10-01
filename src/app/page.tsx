import Image from "next/image";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ByteSpace home">
          <Image
            src="/logo.png"
            alt=""
            width={29}
            height={32}
            priority
          />
          <span>ByteSpace</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a className="nav-link is-active" href="#home">
            Home
          </a>
          <a className="nav-link" href="#courses">
            Courses
          </a>
          <a className="nav-link" href="#creators">
            Creators
          </a>
        </nav>

        <div className="account-nav">
          <a className="nav-link" href="/login">
            Sign In
          </a>
          <a className="nav-link" href="/signup">
            Join Us
          </a>
          <a className="bag-link" href="#bag" aria-label="Shopping bag">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.5 8.5h11l1 12h-13l1-12Z" />
              <path d="M9 9V6a3 3 0 0 1 6 0v3" />
            </svg>
          </a>
        </div>
      </header>

      <main className="hero" id="top">
        <Image
          className="hero-shape hero-shape-left"
          src="/left_spiral.png"
          alt=""
          width={267}
          height={387}
          priority
        />
        <Image
          className="hero-shape hero-shape-right"
          src="/cylinder_right.png"
          alt=""
          width={213}
          height={372}
          priority
        />
        <Image
          className="hero-shape hero-donut"
          src="/donut_left.png"
          alt=""
          width={344}
          height={343}
          priority
        />
        <Image
          className="hero-shape hero-cone"
          src="/Cone.png"
          alt=""
          width={190}
          height={189}
          priority
        />
        <Image
          className="hero-shape hero-spiral-right"
          src="/spiral_right.png"
          alt=""
          width={317}
          height={332}
          priority
        />

        <div className="hero-copy">
          <h1>
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p>
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
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
          <Image
            className="hero-person"
            src="/laptop_guy_Image@2x.png"
            alt="Student learning with a laptop"
            width={722}
            height={515}
            priority
          />

          <article className="hero-card course-card">
            <strong>UI/UX Design</strong>
            <span>200 Courses &nbsp;|&nbsp; 1000+ Students</span>
          </article>
          <article className="hero-card progress-card">
            <strong>Learning Progress</strong>
            <b>55%</b>
            <span className="progress-track"><span /></span>
          </article>
          <article className="hero-card students-card">
            <strong>Happy Students</strong>
            <span>4.5 (240) <em>★</em></span>
            <div className="student-row">
              <span>AM</span><span>JS</span><span>RK</span><span>PL</span><span>NB</span><b>2K+</b>
            </div>
          </article>
        </div>
      </main>

      <section className="logo-strip" aria-label="Trusted by leading brands">
        <div className="logo-list">
          <div className="partner-logo">
            <span className="partner-mark mark-wave" aria-hidden="true">≋</span>
            <span>Logoipsum</span>
          </div>
          <div className="partner-logo">
            <Image
              className="partner-mark-image"
              src="/ball/gaming_btn_ball.png"
              alt=""
              width={40}
              height={40}
            />
            <span>Logoipsum</span>
          </div>
          <div className="partner-logo">
            <Image
              className="partner-mark-image"
              src="/ball/spark-ball.png"
              alt=""
              width={40}
              height={40}
            />
            <span>Logoipsum</span>
          </div>
          <div className="partner-logo">
            <Image
              className="partner-mark-image"
              src="/ball/ball-1.png"
              alt=""
              width={40}
              height={40}
            />
            <span>Logoipsum</span>
          </div>
          <div className="partner-logo">
            <Image
              className="partner-mark-image"
              src="/ball/marbel_ball.png"
              alt=""
              width={41}
              height={41}
            />
            <span>Logoipsum</span>
          </div>
        </div>
      </section>

      <section className="course-library" id="courses">
        <div className="library-heading">
          <h2>
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p>
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different
            <br className="desktop-break" />
            fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        <div className="category-list" aria-label="Course categories">
          <button className="category-chip is-selected" type="button">Featured</button>
          <button className="category-chip" type="button">Music</button>
          <button className="category-chip" type="button">Drawing &amp; Painting</button>
          <button className="category-chip" type="button">Marketing</button>
          <button className="category-chip" type="button">Animation</button>
          <button className="category-chip" type="button">Social Media</button>
          <button className="category-chip" type="button">UI/UX Design</button>
          <button className="category-chip" type="button">Creative Marketing</button>
          <button className="category-chip" type="button">Digital Illustration</button>
          <button className="category-chip" type="button">Film &amp; Video</button>
          <button className="category-chip" type="button">Crafts</button>
          <button className="category-chip" type="button">Freelance &amp; Entrepreneurship</button>
          <button className="category-chip" type="button">Graphic Design</button>
          <button className="category-chip" type="button">Photography</button>
          <button className="category-chip" type="button">Productivity</button>
          <button className="category-chip" type="button">Web Development</button>
          <button className="category-chip" type="button">Data Science</button>
          <button className="category-chip" type="button">Cooking</button>
          <button className="category-chip category-more" type="button">+ More</button>
        </div>

        <div className="course-grid">
          <CourseCard
            image="/card/Frame.png"
            alt="Student planning a Figma design at a creative workspace"
            title="Learn Figma from Basic"
            author="puprepat studio"
          />
          <CourseCard
            image="/card/Frame (1).png"
            alt="Digital design icons displayed on a soft gray background"
            title="Build Digital Asset"
            author="puprepat studio"
          />
          <CourseCard
            image="/card/Frame (2).png"
            alt="Big data dashboard with blue charts and analytics"
            title="the Power of Big Data"
            author="puprepat studio"
          />
          <CourseCard
            image="/card/Frame (3).png"
            alt="Productivity workspace with a monitor displaying Do More"
            title="Balancing Productivity an..."
            author="puprepat studio"
          />
          <CourseCard
            image="/card/Frame (4).png"
            alt="Green line chart showing financial market movement"
            title="Mastering Money Manago..."
            author="puprepat studio"
          />
          <CourseCard
            image="/card/Frame (5).png"
            alt="Startup team collaborating around a wall of sticky notes"
            title="From Idea to Startup Succ..."
            author="puprepat studio"
          />
        </div>
      </section>

      <section className="learning-paths" aria-labelledby="learning-paths-title">
        <div className="paths-heading">
          <h2 id="learning-paths-title">Explore Diverse Learning Paths at Bytespace</h2>
          <p>
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various
            <br className="desktop-break" />
            fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>
        <div className="path-grid">
          <LearningPath icon="design" label="Design" />
          <LearningPath icon="development" label="Development" />
          <LearningPath icon="software" label="IT & Software" />
          <LearningPath icon="business" label="Business" />
          <LearningPath icon="marketing" label="Marketing" />
          <LearningPath icon="photography" label="Photography" />
        </div>
      </section>

      <section className="growth-section" aria-label="Grow with ByteSpace">
        <div className="growth-row growth-row-top">
          <div className="growth-copy">
            <h2>Your Path to Professional<br />Growth Starts Here!</h2>
            <p>
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey.
              Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely,
              we have the resources you need.
            </p>
            <div className="growth-stats">
              <span><strong>12K</strong>Students</span>
              <span><strong>70+</strong>Courses</span>
              <span><strong>16</strong>Creators</span>
            </div>
          </div>
          <div className="growth-visual growth-visual-top">
            <div className="growth-course-card">
              <Image src="/card/Frame.png" alt="Figma course preview" width={341} height={196} />
              <strong>Learn Figma from Basic</strong>
              <span>by puprepat studio</span>
              <b>$25<small>/lifetime</small></b>
            </div>
            <Image className="growth-person growth-person-top" src="/laptop_guy_image.png" alt="Student learning on a laptop" width={722} height={515} />
            <Image className="growth-squiggle growth-squiggle-top" src="/spiral_right.png" alt="" width={317} height={332} />
            <div className="growth-progress-card"><span>Learning Progress</span><strong>55%</strong><i><b /></i></div>
          </div>
        </div>

        <div className="growth-row growth-row-bottom">
          <div className="growth-visual growth-visual-bottom">
            <div className="revenue-card"><span>Total Revenue</span><small>July 12, 2025</small><strong>$120.29</strong><i><b /></i></div>
            <div className="revenue-card revenue-card-secondary"><span>Year to Date</span><small>2025</small><strong>$1,200.38</strong><em>+12%</em></div>
            <Image className="growth-person growth-person-bottom" src="/Girl_with_tab.png" alt="Creator managing courses on a tablet" width={605} height={720} />
            <Image className="growth-squiggle growth-squiggle-bottom" src="/spiral_right.png" alt="" width={317} height={332} />
            <div className="growth-students-card"><span>Happy Students</span><small>4.5 (240) <b>★</b></small><div><i>AM</i><i>JS</i><i>RK</i><i>PL</i><strong>2K+</strong></div></div>
          </div>
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

      <section className="creator-cta" id="creators" aria-labelledby="creator-cta-title">
        <Image className="creator-deco creator-deco-left" src="/left_spiral.png" alt="" width={267} height={387} />
        <Image className="creator-deco creator-deco-white" src="/left_spiral_whilte.png" alt="" width={177} height={176} />
        <Image className="creator-deco creator-deco-cone" src="/Cone.png" alt="" width={190} height={189} />
        <Image className="creator-deco creator-deco-cylinder" src="/cylinder_right.png" alt="" width={213} height={372} />
        <Image className="creator-deco creator-deco-donut" src="/donut_left.png" alt="" width={344} height={343} />
        <div className="creator-cta-content">
          <h2 id="creator-cta-title">Unlock Your Potential as a<br />Creator with ByteSpace</h2>
          <p>
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a
            <br className="desktop-break" />
            part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your
            <br className="desktop-break" />
            expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <a className="creator-cta-button" href="/signup">Join as Creator</a>
        </div>
      </section>

      <section className="community-section" aria-labelledby="community-title">
        <div className="community-heading">
          <h2 id="community-title">Discover What Our<br />Community Is Saying</h2>
          <p>
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who
            have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect
            the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="testimonial-grid">
          <Testimonial initials="SA" name="Sarah M." role="Enthusiastic Learner" avatarClass="avatar-sarah">
            &quot;ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.&quot;
          </Testimonial>
          <Testimonial initials="JL" name="James L." role="Lifelong Learner" avatarClass="avatar-james">
            &quot;I&apos;ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.&quot;
          </Testimonial>
          <Testimonial initials="AB" name="Alex B." role="Inspired Creator" avatarClass="avatar-alex">
            &quot;As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It&apos;s fulfilling to see my courses making a positive impact on learners globally.&quot;
          </Testimonial>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-newsletter">
            <a className="footer-brand" href="#top" aria-label="ByteSpace home">
              <Image src="/logo.png" alt="" width={29} height={32} />
              <span>ByteSpace</span>
            </a>
            <p>Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <form className="newsletter-form">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Enter your email" required />
              <button type="submit">Search</button>
            </form>
            <small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small>
          </div>
          <div className="footer-links">
            <div>
              <a href="#courses">Featured Courses</a>
              <a href="#categories">Featured Categories</a>
              <a href="#business">Business</a>
              <a href="#it">IT</a>
              <a href="#design">Design</a>
            </div>
            <div>
              <a href="#development">Development</a>
              <a href="#marketing">Marketing</a>
              <a href="#photography">Photography</a>
              <a href="#finance">Finance</a>
              <a href="#sport">Sport</a>
            </div>
            <div>
              <a href="#creators">Become a Creator</a>
              <a href="#affiliate">Affiliate Program</a>
              <a href="#contact">Contact</a>
              <a href="#help">Help</a>
              <a href="#about">About</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2023 ByteSpace. All rights reserved.</span>
          <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookies Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Testimonial({ initials, name, role, avatarClass, children }: { initials: string; name: string; role: string; avatarClass: string; children: React.ReactNode }) {
  return (
    <article className="testimonial-card">
      <span className={`testimonial-avatar ${avatarClass}`} aria-hidden="true">{initials}</span>
      <h3>{name}</h3>
      <p className="testimonial-role">{role}</p>
      <p className="testimonial-quote">{children}</p>
    </article>
  );
}

function LearningPath({ icon, label }: { icon: string; label: string }) {
  return (
    <a className="learning-path" href={`#${label.toLowerCase().replaceAll(" ", "-")}`}>
      <span className={`path-icon path-icon-${icon}`} aria-hidden="true">
        <svg viewBox="0 0 24 24">
          {icon === "design" && <><path d="m8 16 8-8" /><path d="m13 6 5 5" /><path d="m6 18 2-5 3 3-5 2Z" /><path d="m15 4 2-2 3 3-2 2" /></>}
          {icon === "development" && <><path d="m9 8-3 4 3 4" /><path d="m15 8 3 4-3 4" /><path d="m13 6-2 12" /></>}
          {icon === "software" && <><rect x="4" y="5" width="16" height="12" rx="1" /><path d="M8 20h8M12 17v3" /></>}
          {icon === "business" && <><rect x="5" y="8" width="14" height="11" rx="1" /><path d="M9 8V5h6v3M8 12h8M8 15h8" /></>}
          {icon === "marketing" && <><path d="m5 14 5-5 3 3 5-6" /><path d="M5 18h14" /><path d="M7 12v2M10 10v4M13 12v2M16 9v5" /></>}
          {icon === "photography" && <><rect x="4" y="7" width="16" height="12" rx="2" /><path d="m8 7 1.5-3h5L16 7" /><circle cx="12" cy="13" r="3" /><path d="M17 10h.01" /></>}
        </svg>
      </span>
      <span>{label}</span>
    </a>
  );
}

function CourseCard({ image, alt, title, author }: { image: string; alt: string; title: string; author: string }) {
  return (
    <article className="course-card-item">
      <div className="course-image-wrap">
        <Image className="course-image" src={image} alt={alt} width={341} height={196} />
      </div>
      <div className="course-card-content">
        <div className="course-title-row">
          <h3>{title}</h3>
          <span className="course-rating">4.5 <b>★</b></span>
        </div>
        <p className="course-author">by <a href="#creators">{author}</a></p>
        <div className="course-meta-row">
          <span className="level-badge"><i aria-hidden="true">▥</i> Beginner</span>
          <div className="mini-avatars" aria-label="Course students">
            <span>AM</span><span>JS</span><span>RK</span><span>PL</span><b>2K+</b>
          </div>
        </div>
        <p className="course-price"><strong>$25</strong><span>/lifetime</span></p>
      </div>
    </article>
  );
}

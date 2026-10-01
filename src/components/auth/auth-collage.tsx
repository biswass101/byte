import Image from "next/image";

export default function AuthCollage() {
  return (
    <div className="auth-collage" aria-hidden="true">
      <div className="auth-course-card auth-course-card-back">
        <div className="auth-card-img-wrap">
          <Image src="/card/Frame (1).png" alt="" width={341} height={196} />
          <span className="auth-card-badge">17 Lessons</span>
        </div>
        <strong>Build Digi...</strong>
        <span>by purepearl stud...</span>
        <div className="auth-card-meta">
          <span className="auth-level-badge">
            <svg className="signal-icon" viewBox="0 0 16 16" aria-hidden="true">
              <rect x="1" y="11" width="3" height="4" rx="0.5" />
              <rect x="5.5" y="8" width="3" height="7" rx="0.5" />
              <rect x="10" y="4" width="3" height="11" rx="0.5" />
            </svg>
            Beginner
          </span>
          <div className="auth-mini-avatars">
            <Image className="auth-mini-img" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="auth-mini-img" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="auth-mini-img" src="/people-1.png" alt="" width={43} height={43} />
            <b>26+</b>
          </div>
        </div>
        <b>$25<small>/lifetime</small></b>
      </div>

      <div className="auth-course-card auth-course-card-front">
        <div className="auth-card-img-wrap">
          <Image src="/card/Frame (2).png" alt="" width={341} height={196} />
          <span className="auth-card-badge">17 Lessons</span>
          <span className="auth-card-badge auth-card-badge-right">2 hours 16 mins</span>
          <span className="auth-card-badge auth-card-badge-comment">59 Comments</span>
        </div>
        <strong>the Power of Big Data</strong>
        <span className="auth-card-author-row">by purepearl studio <em className="auth-card-rating">4.5 <b>★</b></em></span>
        <div className="auth-card-meta">
          <span className="auth-level-badge">
            <svg className="signal-icon" viewBox="0 0 16 16" aria-hidden="true">
              <rect x="1" y="11" width="3" height="4" rx="0.5" />
              <rect x="5.5" y="8" width="3" height="7" rx="0.5" />
              <rect x="10" y="4" width="3" height="11" rx="0.5" />
            </svg>
            Beginner
          </span>
          <div className="auth-mini-avatars">
            <Image className="auth-mini-img" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="auth-mini-img" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="auth-mini-img" src="/people-1.png" alt="" width={43} height={43} />
            <b>26+</b>
          </div>
        </div>
        <b>$25<small>/lifetime</small></b>
      </div>

      <Image className="auth-deco auth-deco-donut" src="/donut_left.png" alt="" width={344} height={343} />
      <Image className="auth-deco auth-deco-spiral" src="/left_spiral_whilte.png" alt="" width={177} height={176} />

      <div className="auth-nahid-group">
        <span className="auth-nahid-label">Nahid</span>
        <Image className="auth-deco-cone" src="/green_cone.png" alt="" width={190} height={189} />
      </div>

      <div className="auth-students-card">
        <span>Happy Students</span>
        <small>4.5 (240) <b>★</b></small>
        <div>
          <Image className="auth-student-img" src="/people-1.png" alt="" width={43} height={43} />
          <Image className="auth-student-img" src="/people-1.png" alt="" width={43} height={43} />
          <Image className="auth-student-img" src="/people-1.png" alt="" width={43} height={43} />
          <Image className="auth-student-img" src="/people-1.png" alt="" width={43} height={43} />
          <strong>2K+</strong>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function CourseCard({ image, alt, title, author }: { image: string; alt: string; title: string; author: string }) {
  return (
    <article className="course-card-item">
      <div className="course-image-wrap">
        <Image className="course-image" src={image} alt={alt} width={341} height={196} />
      </div>
      <div className="course-card-content">
        <div className="course-title-row">
          <h3>{title}</h3>
          <span className="course-rating">4.5 <b>&#9733;</b></span>
        </div>
        <p className="course-author">by <a href="#creators">{author}</a></p>
        <div className="course-meta-row">
          <span className="level-badge">
            <svg className="signal-icon" viewBox="0 0 16 16" aria-hidden="true">
              <rect x="1" y="11" width="3" height="4" rx="0.5" />
              <rect x="5.5" y="8" width="3" height="7" rx="0.5" />
              <rect x="10" y="4" width="3" height="11" rx="0.5" />
            </svg>
            Beginner
          </span>
          <div className="mini-avatars" aria-label="Course students">
            <Image className="mini-avatar-img" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="mini-avatar-img" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="mini-avatar-img" src="/people-1.png" alt="" width={43} height={43} />
            <Image className="mini-avatar-img" src="/people-1.png" alt="" width={43} height={43} />
            <b>2K+</b>
          </div>
        </div>
        <p className="course-price"><strong>$25</strong><span>/lifetime</span></p>
      </div>
    </article>
  );
}

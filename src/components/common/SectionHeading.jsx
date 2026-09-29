export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  return (
    <div
      className={`section-heading section-heading--${align} ${className}`.trim()}
    >
      {eyebrow && (
        <span className="section-heading__eyebrow">
          {eyebrow}
        </span>
      )}

      {title && (
        <h2 className="section-heading__title">
          {title}
        </h2>
      )}

      {description && (
        <p className="section-heading__description">
          {description}
        </p>
      )}
    </div>
  );
}
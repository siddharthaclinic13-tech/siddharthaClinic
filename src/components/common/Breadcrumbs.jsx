import { Link } from "react-router-dom";

export default function Breadcrumbs({ items = [] }) {
  if (!items.length) {
    return null;
  }

  return (
    <nav
      className="breadcrumbs"
      aria-label="Breadcrumb"
    >
      <ol className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/">Home</Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="breadcrumbs__item"
            >
              <span
                className="breadcrumbs__separator"
                aria-hidden="true"
              >
                /
              </span>

              {isLast || !item.path ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link to={item.path}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
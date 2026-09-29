import { quotes } from "../../data/quotes";

export default function QuoteScroller() {
  if (!quotes.length) {
    return null;
  }

  return (
    <div className="quote-scroller" aria-label="Clinic messages">
      <div className="quote-scroller__track">
        {[...quotes, ...quotes].map((quote, index) => (
          <span
            className="quote-scroller__item"
            key={`${quote}-${index}`}
          >
            <span aria-hidden="true">✦</span>
            {quote}
          </span>
        ))}
      </div>
    </div>
  );
}
export function LayoutHeader({ title, meta, id }) {
  return (
    <div className="header-01">
      <span className="header-01-title">{title}</span>
      <span className="header-01-meta">{meta}</span>
      <span className="header-01-id">{id}</span>
    </div>
  );
}
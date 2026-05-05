import { Link } from "react-router";

export function Panel({ title, method, goto, onClick, children }) {
  return (
    <div className="reg-panel-01">
      <div className="panel-01-header">
        <span className="panel-01-header-title">{title}</span>
        <span className="panel-01-header-method">{method}</span>
      </div>
      <div className="panel-01-body">
        {children}
      </div>

      <div className="panel-01-footer">
        <Link to={goto}>
          <button className="btn back-btn">&larr; Back()</button>
        </Link>
        <button className="btn submit-btn" onClick={onClick}>SUBMIT() &rarr;</button>
      </div>
    </div>
  );
}
import { createPortal } from 'react-dom';
import '../../../../styles/components/Errors/errorDefault.css'

export function WarningDefault({ title, description, firstBtn, secondBtn, onYes, onNo }) {
  return createPortal(

    <div className="modal">
      <div className="error-dialog warn">
        <div className="error-dialog-titlebar warn">
          <span className="error-dialog-titlebar-text">{title}</span>
          <span className="error-dialog-titlebar-x" onClick={onNo}>✕</span>
        </div>
        <div className="error-dialog-body">
          <span className="error-dialog-icon">ℹ</span>
          <span className="error-dialog-text">{description}</span>
        </div>
        <div className="error-dialog-btns">
          <button className="btn back-btn" style={{ fontSize: '11px', padding: '5px 12px' }} onClick={onYes}>{firstBtn}</button>
          <button className="btn back-btn" style={{ fontSize: '11px', padding: '5px 12px' }} onClick={onNo}>{secondBtn}</button>
        </div>
      </div>
    </div>,
  document.body);
}
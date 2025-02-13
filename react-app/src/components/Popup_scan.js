import React from "react";
import "./Popup.css"; // Import styles

const PopupScan = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Do not render when closed

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default PopupScan;

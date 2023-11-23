const TabButton = ({ label, isActive, onClick }) => (
  <div className={`tab-button ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
  </div>
);

export default TabButton;

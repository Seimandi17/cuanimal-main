import { useState } from 'react';

const FilterSection = ({ 
  icon, 
  title, 
  isActive, 
  hasSelectedValues, 
  onToggle, 
  children, 
  selectedContent 
}) => {
  const [expanded, setExpanded] = useState(isActive);

  return (
    <div className="mb-3">
      {/* Botón de cabecera */}
      <button 
        onClick={() => {
          onToggle();
          setExpanded(!expanded);
        }}
        className={`btn w-100 d-flex justify-content-between align-items-center text-start fw-semibold 
          ${hasSelectedValues ? 'border-start border-4 border-warning' : ''}
          ${expanded ? 'bg-light' : 'bg-white'}`}
      >
        <div className="d-flex align-items-center gap-2">
          <span className={`${hasSelectedValues ? 'text-warning' : 'text-primary'}`}>
            {icon}
          </span>
          <span className={`${hasSelectedValues ? 'text-dark' : 'text-primary'}`}>
            {title}
          </span>
        </div>
        <span className={`${hasSelectedValues ? 'text-warning' : 'text-secondary'}`}>
          {expanded ? '−' : '+'}
        </span>
      </button>

      {/* Contenido seleccionado cuando no está expandido */}
      {!expanded && selectedContent}

      {/* Contenido expandido */}
      <div className={`collapse ${expanded ? 'show' : ''}`}>
        <div className="card card-body border-0 shadow-sm bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

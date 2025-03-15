import { X } from 'lucide-react';

const SelectedOptions = ({ filterOptions, filterName, onRemove, getDisplayLabel }) => {
  const getSelectedOptions = () => {
    switch (filterName) {
      case 'que':
        return filterOptions.que.length > 0
          ? filterOptions.que.map(option => ({
              value: option,
              label: getDisplayLabel ? getDisplayLabel(option) : option
            }))
          : [];
      case 'donde':
        return filterOptions.donde ? [{ value: filterOptions.donde, label: filterOptions.donde }] : [];
      case 'cuando':
        return filterOptions.cuando ? [{ value: filterOptions.cuando, label: filterOptions.cuando }] : [];
      case 'conQuien':
        return filterOptions.conQuien.length > 0
          ? filterOptions.conQuien.map(option => ({
              value: option,
              label: getDisplayLabel ? getDisplayLabel(option) : option
            }))
          : [];
      case 'transporte':
        return filterOptions.necesitaTransporte !== null
          ? [{ 
              value: filterOptions.necesitaTransporte.toString(), 
              label: filterOptions.necesitaTransporte ? 'Con transporte' : 'Sin transporte' 
            }] 
          : [];
      default:
        return [];
    }
  };

  const selectedOptions = getSelectedOptions();

  if (selectedOptions.length === 0) return null;

  return (
    <div className="d-flex flex-wrap gap-2 py-2">
      {selectedOptions.map((option, index) => (
        <span key={index} className="badge bg-warning text-dark d-flex align-items-center px-3 py-1">
          {option.label}
          {onRemove && (
            <button 
              className="btn btn-link text-dark ms-2 p-0"
              onClick={() => onRemove(option.value)}
            >
              <X size={14} />
            </button>
          )}
        </span>
      ))}
    </div>
  );
};

export default SelectedOptions;

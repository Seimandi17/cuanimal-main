import { Users } from 'lucide-react';
import FilterSection from './FilterSection';
import SelectedOptions from './SelectedOptions';

const ConQuienFilter = ({ 
  conQuienOptions, 
  filterOptions, 
  setFilterOptions, 
  activeSection, 
  toggleSection 
}) => {
  
  const getButtonStyle = (value) => {
    const isActive = filterOptions.conQuien.includes(value);
    return `btn ${isActive ? 'btn-warning shadow' : 'btn-info'} text-white`;
  };

  const getDisplayLabel = (value) => {
    const option = conQuienOptions.find(opt => opt.value === value);
    return option ? option.label : value;
  };

  const handleRemoveOption = (option) => {
    if (option) {
      setFilterOptions({
        ...filterOptions,
        conQuien: filterOptions.conQuien.filter(item => item !== option)
      });
    }
  };

  return (
    <FilterSection
      icon={<Users size={18} className="me-2 text-warning" />}
      title="CON QUIÉN"
      isActive={activeSection === 'conQuien'}
      hasSelectedValues={filterOptions.conQuien.length > 0}
      onToggle={() => toggleSection('conQuien')}
      selectedContent={
        <SelectedOptions 
          filterName="conQuien" 
          filterOptions={filterOptions} 
          onRemove={handleRemoveOption}
          getDisplayLabel={getDisplayLabel}
        />
      }
    >
      <div className="d-flex flex-wrap gap-2 mt-3">
        {conQuienOptions.map((option) => (
          <button
            key={option.value}
            className={getButtonStyle(option.value)}
            onClick={() => 
              setFilterOptions({
                ...filterOptions,
                conQuien: filterOptions.conQuien.includes(option.value)
                  ? filterOptions.conQuien.filter(item => item !== option.value)
                  : [...filterOptions.conQuien, option.value]
              })
            }
          >
            {option.label}
          </button>
        ))}
      </div>
    </FilterSection>
  );
};

export default ConQuienFilter;

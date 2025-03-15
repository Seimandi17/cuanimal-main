import { Tag } from 'lucide-react';
import FilterSection from './FilterSection';
import SelectedOptions from './SelectedOptions';

const QueFilter = ({ 
  queOptions, 
  filterOptions, 
  setFilterOptions, 
  activeSection, 
  toggleSection 
}) => {
  
  const getButtonStyle = (value) => {
    const isActive = filterOptions.que.includes(value);
    return `btn ${isActive ? 'btn-warning shadow' : 'btn-info'} text-white`;
  };

  const getDisplayLabel = (value) => {
    const option = queOptions.find(opt => opt.value === value);
    return option ? option.label : value;
  };

  const handleRemoveOption = (option) => {
    if (option) {
      setFilterOptions({
        ...filterOptions,
        que: filterOptions.que.filter(item => item !== option)
      });
    }
  };

  return (
    <FilterSection
      icon={<Tag size={18} className="me-2 text-warning" />}
      title="QUÉ BUSCAS"
      isActive={activeSection === 'que'}
      hasSelectedValues={filterOptions.que.length > 0}
      onToggle={() => toggleSection('que')}
      selectedContent={
        <SelectedOptions 
          filterName="que" 
          filterOptions={filterOptions} 
          onRemove={handleRemoveOption}
          getDisplayLabel={getDisplayLabel}
        />
      }
    >
      <div className="d-flex flex-wrap gap-2 mt-3">
        {queOptions.map((option) => (
          <button
            key={option.value}
            className={getButtonStyle(option.value)}
            onClick={() => 
              setFilterOptions({
                ...filterOptions,
                que: filterOptions.que.includes(option.value)
                  ? filterOptions.que.filter(item => item !== option.value)
                  : [...filterOptions.que, option.value]
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

export default QueFilter;

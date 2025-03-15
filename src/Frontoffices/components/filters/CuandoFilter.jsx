import { Calendar } from 'lucide-react';
import FilterSection from './FilterSection';
import SelectedOptions from './SelectedOptions';

const CuandoFilter = ({ 
  filterOptions, 
  setFilterOptions, 
  activeSection, 
  toggleSection 
}) => {
  
  const handleRemoveOption = () => {
    setFilterOptions({ ...filterOptions, cuando: '' });
  };

  return (
    <FilterSection
      icon={<Calendar size={18} className="me-2 text-warning" />}
      title="CUÁNDO"
      isActive={activeSection === 'cuando'}
      hasSelectedValues={!!filterOptions.cuando}
      onToggle={() => toggleSection('cuando')}
      selectedContent={
        <SelectedOptions 
          filterName="cuando" 
          filterOptions={filterOptions} 
          onRemove={handleRemoveOption}
        />
      }
    >
      <input
        type="date"
        className="form-control mt-3"
        value={filterOptions.cuando}
        onChange={(e) => setFilterOptions({ ...filterOptions, cuando: e.target.value })}
      />
    </FilterSection>
  );
};

export default CuandoFilter;

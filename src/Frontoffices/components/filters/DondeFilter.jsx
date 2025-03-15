import { MapPin } from 'lucide-react';
import FilterSection from './FilterSection';
import SelectedOptions from './SelectedOptions';

const DondeFilter = ({ 
  filterOptions, 
  setFilterOptions, 
  activeSection, 
  toggleSection 
}) => {
  
  const handleRemoveOption = () => {
    setFilterOptions({ ...filterOptions, donde: '' });
  };

  return (
    <FilterSection
      icon={<MapPin size={18} className="me-2 text-warning" />}
      title="DÓNDE"
      isActive={activeSection === 'donde'}
      hasSelectedValues={!!filterOptions.donde}
      onToggle={() => toggleSection('donde')}
      selectedContent={
        <SelectedOptions 
          filterName="donde" 
          filterOptions={filterOptions} 
          onRemove={handleRemoveOption}
        />
      }
    >
      <div className="input-group mt-3">
        <span className="input-group-text"><MapPin size={18} /></span>
        <input
          type="text"
          className="form-control"
          placeholder="Ciudad o provincia"
          value={filterOptions.donde}
          onChange={(e) => setFilterOptions({ ...filterOptions, donde: e.target.value })}
        />
      </div>
    </FilterSection>
  );
};

export default DondeFilter;

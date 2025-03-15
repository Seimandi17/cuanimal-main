import { Truck } from 'lucide-react';
import FilterSection from './FilterSection';
import SelectedOptions from './SelectedOptions';

const TransporteFilter = ({ 
  filterOptions, 
  setFilterOptions, 
  activeSection, 
  toggleSection 
}) => {
  
  const handleRemoveOption = () => {
    setFilterOptions({ ...filterOptions, necesitaTransporte: null });
  };

  return (
    <FilterSection
      icon={<Truck size={18} className="me-2 text-warning" />}
      title="¿TRANSPORTE?"
      isActive={activeSection === 'transporte'}
      hasSelectedValues={filterOptions.necesitaTransporte !== null}
      onToggle={() => toggleSection('transporte')}
      selectedContent={
        <SelectedOptions 
          filterName="transporte" 
          filterOptions={filterOptions}
          onRemove={handleRemoveOption}
        />
      }
    >
      <div className="d-flex gap-2 mt-3">
        <button
          className={`btn ${filterOptions.necesitaTransporte === true ? 'btn-warning' : 'btn-outline-primary'} w-50`}
          onClick={() => setFilterOptions({ ...filterOptions, necesitaTransporte: true })}
        >
          SÍ
        </button>
        <button
          className={`btn ${filterOptions.necesitaTransporte === false ? 'btn-warning' : 'btn-outline-primary'} w-50`}
          onClick={() => setFilterOptions({ ...filterOptions, necesitaTransporte: false })}
        >
          NO
        </button>
      </div>
    </FilterSection>
  );
};

export default TransporteFilter;

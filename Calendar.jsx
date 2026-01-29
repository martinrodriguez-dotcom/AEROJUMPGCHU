import { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Función para cambiar de mes
  const changeMonth = (offset) => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + offset));
    setCurrentDate(new Date(newDate));
  };

  // Aquí iría el mapeo de los días (renderizado)
  return (
    <div className="calendar-container">
      <header>
        <button onClick={() => changeMonth(-1)}>Anterior</button>
        <h2>{currentDate.toLocaleString('es-ES', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => changeMonth(1)}>Siguiente</button>
      </header>
      
      <div className="grid-calendario">
        {/* Aquí iteramos los días del mes */}
      </div>
    </div>
  );
};

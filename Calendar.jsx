import { getPublicCollection } from "./firebase-config.js";
import { query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

export const renderCalendar = async (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Obtenemos las reservas del mes actual desde Firestore
    const reservasRef = getPublicCollection('reservas');
    const q = query(reservasRef, where("anio", "==", year), where("mes", "==", month));
    const querySnapshot = await getDocs(q);
    
    const reservasPorDia = {};
    querySnapshot.forEach(doc => {
        const data = doc.data();
        reservasPorDia[data.dia] = (reservasPorDia[data.dia] || 0) + 1;
    });

    // Aquí construirías el HTML o el componente de React
    console.log(`Cargando calendario para ${month}/${year}`);
    return { daysInMonth, firstDay, reservasPorDia };
};

import { View, Text, FlatList } from "react-native";
import { styles } from '../abaCalendar/abacalendar.style.js';
import { appointments } from "../../constants/data.js";

import Appointment from "../../components/appointment/appointment.jsx";


function AbaCalendar() {
  return (
    <View style={styles.container}>
      

      <FlatList data={appointments} keyExtractor={(appointments) => appointments.id_appointment} showsVerticalScrollIndicator={false} renderItem={({item}) => {
        return (
          <Appointment service={item.service} doctor={item.doctor} specialty={item.specialty}/>
        )

      }}/>
    </View>
  );
}

export default AbaCalendar;
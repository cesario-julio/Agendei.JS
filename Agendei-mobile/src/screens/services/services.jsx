import { View, Text, FlatList, Image } from "react-native";
import { styles } from "../services/services.style.js";
import { doctors_services } from "../../constants/data.js";
import icon from "../../constants/icon.js";
import Service from "../../components/service/service.jsx";

function Sevices() {
  return (
    <View style={styles.container}>

      <View style={styles.banner}>
        <Image source={icon.female}/>
        <Text style={styles.name}>Heber</Text>
        <Text style={styles.specialty}>Cardiologista</Text>
      </View>

      <FlatList
        data={doctors_services}
        keyExtractor={(services) => services.id_service}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Service description={item.description} price={item.price}/>
        }}
      />
    </View>
  );
}

export default Sevices;

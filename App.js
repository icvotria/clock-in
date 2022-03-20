import React, { useState } from "react";
import { StyleSheet, Button, View, Text, FlatList } from 'react-native';
import InTime from "./components/inTime";

export default function App() {
  const [inTime, setInTime] = useState(Date.now());
  
  return ( 
    <View style={styles.container}>
      <View style={styles.container}>
        <Button
          title="In"
          color="green"
          onPress={() => setInTime(inTime)}>
          <Text style={styles.text}>In</Text>
        </Button>
      </View>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={inTime}
          renderItem={itemData => (
          <InTime
            title={itemData.item.value}
            id={itemData.item.id} />)}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

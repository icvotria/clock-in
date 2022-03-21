import React, { useState } from "react";
import { StyleSheet, Button, View, Text, FlatList } from 'react-native';
// import InTime from "./components/inTime";

export default function App() {
  const [inTime, setInTime] = useState('no in time yet');
  const [addTime, setAddTime] = useState([]);
  const date = Date.now();
  
  return ( 
    <View style={styles.container}>
      <View style={styles.container}>
        <Button
          title="In"
          color="green"
          onPress={() => setInTime(new Date(date).toString())}>
          <Text style={styles.text}>In</Text>
        </Button>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>In: {inTime}</Text>
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

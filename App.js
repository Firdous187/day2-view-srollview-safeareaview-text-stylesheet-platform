import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, SafeAreaView,Platform} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>

   <ScrollView style={styles.container}>
   <Text style={styles.inline}>
      <Text>Shaik </Text> 
      <Text>Firdous </Text>
      <Text>Unnisa </Text>
    </Text>
    <Text>{Platform.OS}</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 2</Text>
    <Text style={styles.h1}>Heading 3</Text>
    <Text style={styles.h1}>Heading 4</Text>
    <Text style={styles.h1}>Heading 5</Text>
    <Text style={styles.h1}>Heading 6</Text>
    <Text style={styles.h1}>Heading 7</Text>
    <Text style={styles.h1}>Heading 8</Text>
    <Text style={styles.h1}>Heading 9</Text>
    <Text style={styles.h1}>Heading 10</Text>
    <Text style={styles.h1}>Heading 11</Text>
    <Text style={styles.h1}>Heading 12</Text>
    <Text style={styles.h1}>Heading 13</Text>
    <Text style={styles.h1}>Heading 14</Text>
    <Text style={styles.h1}>Heading 15</Text>
    <Text style={styles.h1}>Heading 16</Text>
    <Text style={styles.h1}>Heading 17</Text>
    <Text style={styles.h1}>Heading 18</Text>
    <Text style={styles.h1}>Heading 19</Text>
    <Text style={styles.h1}>Heading 20</Text>
    <Text style={styles.h1}>Heading 21</Text>
    <Text style={styles.h1}>Heading 22</Text>
    <Text style={styles.h1}>Heading 23</Text>
    <Text style={styles.h1}>Heading 24</Text>
    <Text style={styles.h1}>Heading 25</Text>
    <Text style={styles.h1}>Heading 26</Text>
    <Text style={styles.h1}>Heading 27</Text>
    <Text style={styles.h1}>Heading 28</Text>
    <Text style={styles.h1}>Heading 29</Text>
    <Text style={styles.h1}>Heading 30</Text>
    <Text style={styles.h1}>Heading 31</Text>
    <Text style={styles.h1}>Heading 32</Text>
    <Text style={styles.h1}>Heading 33</Text>
    <Text style={styles.h1}>Heading 34</Text>
    <Text style={styles.h1}>Heading 35</Text>
    <Text style={styles.h1}>Heading 36</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <Text style={styles.h1}>Heading 1</Text>
    <StatusBar style="auto" />
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:10,
    backgroundColor: "lightblue",
    
  },
  inline:{
    backgroundColor:"black",
    color:"pink",
    fontSize:30,
  },
  h1:{
    fontSize:20,
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Link, router } from "expo-router";
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <TouchableOpacity onPress={()=>router.push('image_gallery')}>
          <Text style={{color:'blue', textAlign:'center'}}> View Image Gallery </Text>
        </TouchableOpacity>
        <Link href="/image_gallery"> View Image Gallery via Link </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

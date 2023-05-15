import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const CoffeeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Let's prepare a good cup of coffee to go with the news!
        </Text>

        {/*PASSO 1*/}
        <Text style={styles.content}>
          1. First, let's separate a quantity of beans to grind.
        </Text>
        <Text style={styles.obs}>
          If you like a more concentrated coffee, you can use the proportion 1 -
          13, that is, for each gram of coffee you add 13 grams of water. But to
          feel a good sensory the proportion 1 - 15 is also a great option!
        </Text>
        <Image
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1675435646338-ec55be0d0306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3IlQzMlQTNvcyUyMGRlJTIwY2FmJUMzJUE5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.image}
        />

        {/*PASSO 2*/}
        <Text style={styles.content}>
          2. Now let's grind this coffee to a medium grind!
        </Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1557256611-210fcc4476d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3IlQzMlQTNvcyUyMGRlJTIwY2FmJUMzJUE5JTIwbW9pZG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.image}
        />

        {/*PASSO 3*/}
        <Text style={styles.content}>
          3. A great choice for coffee filtering methods is the HarioV60. But
          you can use the melitta too!
        </Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1545665613-29394cee622b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGFyaW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.image}
        />

        {/*PASSO 4*/}
        <Text style={styles.content}>
          4. Now let's scald the filter, to get all the pulp taste out, and warm
          up our container before receiving the yummy coffee.
        </Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1567608285858-6ae8367fc943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhhcmlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.image}
        />

        {/*PASSO 5*/}
        <Text style={styles.content}>
          5. After scalding the filter we put in all the ground coffee and start
          adding water, a little at a time. You can divide it into 3 attacks of
          water, depending on the amount you are preparing.
        </Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1560354291-401f44085690?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcmlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.image}
        />

        {/*PASSO 6*/}
        <Text style={styles.content}>
          6. Now you can enjoy your delicious coffee while reading the news!
          Good reading!
        </Text>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1588587170786-f36be7d8feb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwZWNpYWx0eSUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          }}
          style={styles.image}
        />
        <View style={styles.buttonSpace}>
          <Pressable
            style={styles.button}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonTitle}>Read some news</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CoffeeScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginTop: 20,
    width: "90%",
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  buttonTitle: {
    color: "#fffdf6",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonSpace: {
    alignSelf: "center",
    marginBottom: 30,
    width: "90%",
    flex: 1,
    padding: 10,
  },
  content: {
    fontSize: 16,
    marginTop: 15,
    fontWeight: "400",
  },
  obs: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    fontStyle: "italic",
    fontWeight: "300",
  },
  image: {
    alignSelf: "center",
    height: undefined,
    width: "90%",
    aspectRatio: 1,
    borderRadius: 40,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    padding: 11,
    width: "90%",
    borderRadius: 40,
    elevation: 3,
    backgroundColor: "#362013",
    shadowOpacity: 0.5,
    shadowColor: `#fffdf6`,
    shadowRadius: 3,
    shadowOffset: {
      height: -2,
      width: -2,
    },
  },
});

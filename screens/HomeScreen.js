import { useNavigation } from "@react-navigation/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import Article from "../components/Article";

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const getNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=9bbe070cd7f4481ab53151edfccae388`,
        {
          params: {
            category: "general",
          },
        }
      )
      .then((response) => {
        // handle success
        console.log(response.data.articles);
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Coffee");
        }}
      >
        <Text style={styles.title}>Coffee to go with the news</Text>
      </Pressable>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
            url={item.url}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#fffdf6",
    fontWeight: "bold",
    fontSize: 16,
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

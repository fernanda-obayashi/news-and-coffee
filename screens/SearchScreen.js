import axios from "axios";
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import Article from "../components/Article";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState();
  const [articles, setArticles] = useState([]);

  const searchArticles = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=9bbe070cd7f4481ab53151edfccae388`,
        {
          params: {
            category: "technology",
            q: searchText,
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

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={searchArticles}
      />
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
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

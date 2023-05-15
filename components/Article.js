import * as WebBrowser from "expo-web-browser";
import moment from "moment/moment";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Article = (props) => {
  const goToSite = () => {
    WebBrowser.openBrowserAsync(props.url);
  };

  return (
    <Pressable style={styles.container} onPress={goToSite}>
      {/*IMAGEM*/}
      <Image
        source={{
          uri: props.urlToImage,
        }}
        style={styles.image}
      />

      <View style={{ padding: 10 }}>
        {/*TÍTULO*/}
        <Text style={styles.title}>{props.title}</Text>

        {/*DESCRIÇÃO*/}
        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>

        {/*AUTOR*/}
        <Text style={styles.heading}>
          by: <Text style={styles.author}> {props.author} </Text>
        </Text>

        {/*DATA DE PUBLICAÇÂO*/}
        <Text>
          date:{" "}
          <Text style={styles.date}>
            {moment(props.publishedAt).format("L")}
          </Text>
        </Text>

        {/*FONTE*/}
        <View style={{ marginTop: 10 }}>
          <Text>
            source: <Text style={styles.source}> {props.sourceName} </Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    marginTop: 20,
    width: "90%",
    height: undefined,
    alignSelf: "center",
    borderRadius: 40,
    shadowOpacity: 0.5,
    shadowColor: `#000`,
    shadowRadius: 3,
    elevation: 3,
    shadowOffset: {
      height: -2,
      width: -2,
    },
    backgroundColor: `#fff`,
  },
  image: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "200",
    marginTop: 10,
  },

  heading: {},
  author: {
    fontWeight: "bold",
    fontSize: 15,
  },
  date: {
    fontWeight: "bold",
    color: `#432818`,
    fontSize: 15,
  },
  source: {
    color: `#432818`,
    fontWeight: "bold",
    fontSize: 18,
  },
});

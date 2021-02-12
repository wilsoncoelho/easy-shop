import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import ProductList from "./ProductList";

const data = require("../../assets/data/products.json");

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);

    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <View>
      <Text>ProductContainer</Text>
      <View>
        <FlatList

          horizontal
          data={products}
          renderItem={({ item }) => <ProductList key={item.id} item={item}/>}
          keyExtractor={(item) => item.name}
        />
      </View>
    </View>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({});

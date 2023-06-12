import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import { Card, Layout } from "@ui-kitten/components";

export default function AdminListRendered({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={(item) => {
        <Layout style={styles.container} level="1">
          <Card style={styles.card} status="primary">
            <Text>Primary</Text>
          </Card>

          <Card style={styles.card} status="success">
            <Text>Success</Text>
          </Card>

          <Card style={styles.card} status="info">
            <Text>Info</Text>
          </Card>

          <Card style={styles.card} status="warning">
            <Text>Warning</Text>
          </Card>

          <Card style={styles.card} status="danger">
            <Text>Danger</Text>
          </Card>

          <Card style={styles.card} status="basic">
            <Text>Basic</Text>
          </Card>
        </Layout>;
      }}
    />
  );
}

const styles = StyleSheet.create({});

import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Image } from "tamagui";

interface IItem {
  item: {
    id: string;
    title: string;
    thumbUrl: string;
  };
}

const Item = ({ item }: IItem) => {
  return (
    <View
      style={{
        flex: 1,
        maxWidth: "50%",
        alignItems: "center",
        margin: 4,
      }}
    >
      <Image src={item.thumbUrl} width="100%" height={120} borderRadius={16} />
      <Text
        style={{
          width: "90%",
        }}
      >
        {item.title}
      </Text>
    </View>
  );
};

export default function TabOneScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View marginHorizontal={12} marginVertical={16}>
        <Text fontSize={28} fontWeight={"700"}>
          Your Recent Scans
        </Text>
        <Text color={"slategray"}>These are your latest scans!</Text>
        <FlatList
          data={sampleData}
          numColumns={2}
          renderItem={Item}
          keyExtractor={(item) => item.id}
          style={{
            marginTop: 16,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const sampleData = [
  {
    id: "1",
    title: "Food 1",
    thumbUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Food 2",
    thumbUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Food 3",
    thumbUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Food 4",
    thumbUrl:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

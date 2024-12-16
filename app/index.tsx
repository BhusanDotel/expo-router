import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          color: "black",
        }}
      >
        Home Screen
      </Text>

      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 10,
        }}
      >
        {pageNumbers.map((pageNumber) => (
          <TouchableOpacity
            key={pageNumber}
            onPress={() => {
              router.push({
                pathname: "pages/[pageNumber]",
                params: {
                  pageNumber: pageNumber.toString(),
                  name: `Bhusan`,
                  age: pageNumber,
                },
              });
            }}
          >
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: "#6099fb",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{pageNumber}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

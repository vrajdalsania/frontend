import { useTailwind } from "tailwind-rn";
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  useWindowDimensions,
  Platform,
} from "react-native";
import { getBreakPoint } from "../utils/screen.js";

const Checkout = () => {
  const window = useWindowDimensions();
  const tailwind = useTailwind();
  const image =
    "https://www.pngplay.com/wp-content/uploads/2/Burger-Transparent-PNG.png";
  const cart = [
    {
      service: "postmates",
      items: [
        { name: "item1", image: image, price: 500, quantity: 2 },
        { name: "item2", image: image, price: 500, quantity: 2 },
        { name: "item3", image: image, price: 500, quantity: 2 },
        { name: "item4", image: image, price: 500, quantity: 2 },
      ],
      eta: "5 min",
      deliveryFee: 700,
      tax: 1200,
      total: 10000,
    },
    {
      service: "grubhub",
      items: [
        { name: "item1", image: image, price: 500, quantity: 2 },
        { name: "item2", image: image, price: 500, quantity: 2 },
        { name: "item3", image: image, price: 500, quantity: 2 },
        { name: "item4", image: image, price: 500, quantity: 2 },
      ],
      eta: "5 min",
      deliveryFee: 700,
      tax: 1200,
      total: 10000,
    },
    {
      service: "doordash",
      items: [
        { name: "item1", image: image, price: 500, quantity: 2 },
        { name: "item2", image: image, price: 500, quantity: 2 },
        { name: "item3", image: image, price: 500, quantity: 2 },
        { name: "item4", image: image, price: 500, quantity: 2 },
      ],
      eta: "5 min",
      deliveryFee: 700,
      tax: 1200,
      total: 10000,
    },
  ];

  /* Images using the require function must be static,
   * at the time of creation (no string templates)
   * so to get around that, we use a switch statement
   * @param {String} service to get logo for
   * @return {Object} image resource
   */
  const getServiceLogo = (service) => {
    let logo = null;
    switch (service) {
      case "postmates":
        logo = require(`../assets/logos/services/postmates_long.png`);
        break;
      case "grubhub":
        logo = require(`../assets/logos/services/grubhub_long.png`);
        break;
      case "doordash":
        logo = require(`../assets/logos/services/doordash_long.png`);
        break;
    }
    return logo;
  };

  /*Some react native components seem to behave differently
   * in web vs mobile, so this is a helper function
   * to separate web and mobile logic.
   * @return {Boolean} value indicating if platform is mobile
   */
  const isMobile = () => {
    return Platform.OS === "android" || Platform.OS === "ios";
  };

  /*Checking to see if screen size is large or smaller
   * @return {Boolean} if is lg or smaller
   */
  const isLgOrSmaller = () => {
    return (
      getBreakPoint(window.width) == "sm" ||
      getBreakPoint(window.width) == "md" ||
      getBreakPoint(window.width) == "lg"
    );
  };

  return (
    <View>
      <View
        style={tailwind(
          "flex flex-row justify-center items-center lg:hidden fixed top-0 z-10 w-full p-2 rounded-b-xl h-[100px] bg-white/90"
        )}
      >
        {cart.map(({ service, total }) => (
          <View
            key={service}
            style={tailwind("flex flex-1 items-center justify-between p-1")}
          >
            <Image
              style={tailwind("w-1/2 h-10")}
              source={getServiceLogo(service)}
              resizeMode="contain"
            />

            <Text style={tailwind("font-bold text-2xl")}>
              ${(total / 100).toFixed(2)}
            </Text>
          </View>
        ))}
      </View>
      <ScrollView>
        <View
          style={[
            tailwind(
              `flex flex-1 sm:flex-col lg:flex-row lg:justify-center lg:items-center ${
                isLgOrSmaller() && isMobile() ? "pb-20" : ""
              }
            ${isLgOrSmaller() && !isMobile() ? "mt-[100px]" : ""}`
            ),
            { gap: 15 },
          ]}
        >
          {cart.map(({ service, items, deliveryFee, tax, total }) => (
            <View
              key={service}
              style={tailwind(
                "flex flex-1 bg-gray-200 rounded-xl justify-between p-2 mb-4"
              )}
            >
              <View>
                <View style={tailwind("mb-4 mt-2 justify-center items-center")}>
                  <Image
                    style={tailwind("w-1/2 h-10")}
                    source={getServiceLogo(service)}
                    resizeMode="contain"
                  />
                </View>
                {items.map((item, index) => (
                  <View
                    key={index}
                    style={tailwind(
                      "flex flex-row bg-white p-2 rounded-xl mb-2"
                    )}
                  >
                    <View>
                      <Image
                        style={tailwind("aspect-square w-24 h-24")}
                        source={{ uri: item.image }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={tailwind("flex flex-1 p-2")}>
                      <Text style={tailwind("text-xl font-bold")}>
                        {item.name}
                      </Text>
                      <Text style={tailwind("text-sm font-bold")}>
                        ${((item.price / 100) * item.quantity).toFixed(2)}
                      </Text>
                    </View>
                    <View
                      style={tailwind(
                        "flex flex-row justify-center items-center"
                      )}
                    >
                      <Text style={tailwind("font-bold text-xl mx-2")}>
                        {item.quantity}
                      </Text>
                      <View style={tailwind("flex")}>
                        <TouchableOpacity
                          style={tailwind(
                            "font-bold text-lg bg-gray-100 p-4 rounded-full aspect-square justify-center items-center mb-1"
                          )}
                        >
                          <Text style={tailwind("text-xl")}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={tailwind(
                            "font-bold text-lg bg-gray-100 p-4 rounded-full aspect-square justify-center items-center"
                          )}
                        >
                          <Text style={tailwind("text-xl")}>-</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
              <View>
                <View
                  style={tailwind("flex flex-row items-center justify-between")}
                >
                  <Text>Delivery Fee</Text>
                  <Text>${(deliveryFee / 100).toFixed(2)}</Text>
                </View>
                <View
                  style={tailwind("flex flex-row items-center justify-between")}
                >
                  <Text>Tax</Text>
                  <Text>${(tax / 100).toFixed(2)}</Text>
                </View>
                <View
                  style={tailwind("flex flex-row items-center justify-between")}
                >
                  <Text style={tailwind("font-bold text-2xl")}>Total</Text>
                  <Text style={tailwind("font-bold text-2xl")}>
                    ${(total / 100).toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Checkout;

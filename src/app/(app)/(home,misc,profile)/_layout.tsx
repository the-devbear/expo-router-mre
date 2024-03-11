import { Stack } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(home)/index",
  home: {
    initialRouteName: "(home)/index",
  },
  misc: {
    initialRouteName: "misc/index",
  },
  profile: {
    initialRouteName: "profile/index",
  },
};

export default function DynamicLayout({
  segment,
}: {
  segment: "(home)" | "(misc)" | "(profile)";
}): React.JSX.Element {
  console.log("DynamicLayout", segment);
  switch (segment) {
    case "(home)":
      return <Stack initialRouteName="(home)/index" />;
    case "(misc)":
      return <Stack initialRouteName="misc/index" />;
    case "(profile)":
      return <Stack initialRouteName="profile/index" />;
  }
}

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
}) {
  console.log("DynamicLayout", segment);
  return <Stack />;
}

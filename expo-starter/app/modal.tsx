import { Anchor, Paragraph, View, XStack } from 'tamagui'

export default function ModalScreen() {
  return (
    <View flex={1} items="center" justify="center">
      <XStack gap="$2">
        <Paragraph text="center">Made by</Paragraph>
        <Anchor color="$blue10" href="https://github.com/ChloeXiao0409" target="_blank">
          @chloexiao,
        </Anchor>
        <Anchor
          color="$accent10"
          href="https://github.com/ChloeXiao0409/Mobile-Development"
          target="_blank"
          rel="noreferrer"
        >
          give it a ⭐️
        </Anchor>
      </XStack>
    </View>
  )
}

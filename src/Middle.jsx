import { Group, Headline, Text } from "@vkontakte/vkui";

export default function Middle() {
    return (
        <Group mode="plain" separator="hide" className="middle--group">
            <Headline level="1" className="middle--headline">
                Трек
            </Headline>
            <Text className="middle--text">Исполнитель</Text>
        </Group>
    );
}

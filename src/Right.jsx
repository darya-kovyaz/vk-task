import { Group, CellButton, Text, SimpleCell } from "@vkontakte/vkui";
import { observer } from "mobx-react-lite";

import { Icon16MoreVertical } from "@vkontakte/icons";

const Right = observer(({ currentTime }) => {
    return (
        <Group mode="plain" separator="hide" className="right--group">
            <SimpleCell className="right--time-container">
                <Text className="right--time-text">{currentTime}</Text>
            </SimpleCell>
            <CellButton className="right--icon-more-vertical">
                <Icon16MoreVertical />
            </CellButton>
        </Group>
    );
});

export default Right;

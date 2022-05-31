import { FC } from "react";
import { useTheme } from "../../../providers/ThemeProvider";
import Flex from "../../atoms/Flex";
import Text from "../../atoms/Text";
import { containerStyles } from "./styles";

export interface IListEntry {
  item: string;
  category: string;
  onDelete: (name: string) => void;
}

const ListEntry: FC<IListEntry> = ({ item, category, onDelete }) => {
  const theme = useTheme();
  return (
    <Flex
      style={containerStyles(theme)}
      flexDirection="row"
      justifyContent="space-between"
    >
      <Flex flexDirection="column" alignItems="flex-start" gap={10}>
        <Text.Copy>{item}</Text.Copy>
        <Text.CopySmall>{category}</Text.CopySmall>
      </Flex>
      <Flex>
        <Text.CopySmall onClick={() => onDelete(item)}>x</Text.CopySmall>
      </Flex>
    </Flex>
  );
};

export default ListEntry;

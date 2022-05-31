import { FC } from "react";
import { useTheme } from "../../../providers/ThemeProvider";
import Flex from "../../atoms/Flex";
import ListEntry, { IListEntry } from "../ListEntry/ListEntry";
import { containerStyles } from "./styles";
import { useCallback, useState } from "react";
import Text from "../../atoms/Text";
import AddEntry from "../AddEntry/AddEntry";

export interface IList {
  defaultItems: IListEntry[];
}

const List: FC<IList> = ({ defaultItems }) => {
  const theme = useTheme();

  const [items, setItems] = useState(defaultItems);

  const handleRemoveItem = useCallback(
    (name: string) => {
      setItems((items) => items.filter((it) => it.item !== name));
    },
    [setItems]
  );

  const handleAddItem = useCallback(
    (newItem: IListEntry) => {
      setItems((items) => [...items, newItem]);
    },
    [setItems]
  );

  return (
    <Flex flexDirection="column" gap={10} style={containerStyles(theme)}>
      {items.map(({ item, category }) => (
        <ListEntry
          key={item}
          onDelete={handleRemoveItem}
          item={item}
          category={category}
        />
      ))}
      <AddEntry onAdd={handleAddItem} />
    </Flex>
  );
};

export default List;

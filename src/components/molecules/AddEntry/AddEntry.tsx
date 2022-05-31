import { FC, useCallback, useState } from "react";
import Flex from "../../atoms/Flex";
import { IListEntry } from "../ListEntry/ListEntry";

export interface IAddEntry {
  onAdd: (entry: IListEntry) => void;
}

const AddEntry: FC<IAddEntry> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleAddItem = useCallback(() => {
    onAdd({ item: name, category } as IListEntry);
    setName("");
    setCategory("");
  }, [category, name, onAdd]);

  return (
    <Flex>
      <input
        placeholder="name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <input
        placeholder="category"
        value={category}
        onChange={(ev) => setCategory(ev.target.value)}
      />
      <button
        disabled={name === "" || category === ""}
        type="button"
        onClick={handleAddItem}
      >
        Add
      </button>
    </Flex>
  );
};

export default AddEntry;

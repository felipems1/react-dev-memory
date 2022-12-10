import { GridItemType } from "../../types/GridItemType";
import * as C from "./style";
import { items } from "../../data/items";
import b7Logo from "../../svgs/b7.svg";

type Props = {
  item: GridItemType;
  onClick: () => void;
};

const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container
      showBackground={item.permanentShown || item.shown}
      onClick={onClick}
    >
      {item.permanentShown === false && item.shown === false && (
        <C.Icon src={b7Logo} alt="" opacity={0.1} />
      )}
      {(item.permanentShown || item.shown) && item.item !== null && (
        <C.Icon src={items[item.item].icon} alt="" />
      )}
    </C.Container>
  );
};

export default GridItem;

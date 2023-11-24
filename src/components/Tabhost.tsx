import styled from "styled-components";
import { Color } from "../defines";

interface TabhostProps {
  itemList: { value: number, label: string }[];
  value: number;
  onClick: (v: number) => void;
  className?: string;
}

const Tabhost = ({
  itemList,
  className,
  value,
  onClick
}: TabhostProps) => {
  return <StyledTabhost className={className}>
    { itemList.map((item, idx) => (
      <li key={`tabhost-item-${idx}`} onClick={ () => onClick(item.value) } className={value === item.value ? "selected" : ""}>
        { item.label }
      </li>
    )) }
  </StyledTabhost>
};

const StyledTabhost = styled.ul`
  width: 320px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;

  > li {
    flex: 1;
    padding: 16px 8px;
    text-align: center;
    background-color: ${Color.primaryColor};
    color: white;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      background-color: ${Color.lightenColor};
    }

    &.selected {
      background-color: ${Color.darkenColor};
    }
  }
`;

export default Tabhost;
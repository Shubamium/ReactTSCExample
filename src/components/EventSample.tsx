import { FC, useState } from "react";

interface EventSampleProps {
  handleClick: (event: React.MouseEvent) => void;
}

const EventSample: FC<EventSampleProps> = (props) => {
  const [isInside, setInside] = useState(false);
  return (
    <div
      onClick={props.handleClick}
      onMouseEnter={() => {
        setInside(true);
      }}
      onMouseLeave={() => {
        setInside(false);
      }}
    >
      <p>
        {isInside ? "You are inside this div" : " You are outside of this div"}
      </p>
    </div>
  );
};

export default EventSample;

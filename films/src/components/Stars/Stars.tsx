import "../../App.css";
import Star from "../Star/Star";

interface Props {
  count: number;
}

const Stars = ({ count }: Props) => {
  if (count > 0 && count < 6) {
    let starsArray = Array(count).fill(0);

    return (
      <>
        <ul className="card-body-stars u-clearfix">
          {starsArray &&
            starsArray.map((x, i) => (
              <li key={i}>
                <Star />
              </li>
            ))}
        </ul>
      </>
    );
  } else { return (<></>)}
};

export default Stars;

import { NextPage } from "next";

interface Props {
  buttonText: string;
}

const Banner: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>
        <span>Coffee</span> <span>Connoisseur</span>
      </h1>
      <p>Discover your local coffee shops!.</p>
      <button>{props.buttonText}</button>
    </div>
  );
};

export default Banner;

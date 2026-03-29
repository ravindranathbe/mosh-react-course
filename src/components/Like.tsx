import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    onClick();
  };
  return (
    <>
      {liked ? (
        <AiFillHeart color="red" size={20} onClick={toggleLike} />
      ) : (
        <AiOutlineHeart size={20} onClick={toggleLike} />
      )}
    </>
  );
};

export default Like;

import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

// 関数コンポーネントの型の指定は下記のようにFCを使うのがより適切
export const Text: FC<Props> = (props) => {
  const { color, fontSize } = props;

  return (
    <p style={{ color, fontSize }}>テキストです。</p>
  );
};

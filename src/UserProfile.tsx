import { FC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
}

export const UserProfile: FC<Props> = (props) => {
  const { user } = props
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>{user.hobbies && "趣味"}</dt>
      {/* hobbiesは配列なので、joinを使って一つの文字列にする */}
      {/* join()は引数となっている文字で、配列の要素を繋いで文字列にする */}
      {/* https://www.sejuku.net/blog/23137 */}
      {/* ただし、hobbiesは存在しない場合もある。そのとき、下記のコードはエラーになる */}
      {/* <dd>{user.hobbies.join(" / ")}</dd> */}
      {/* そこで、オプショナルチェイニングを使う */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};

import { useState } from "react";
import { UserScoreList } from "../../store/quizeStore";
import { quizeUserList } from "../../types/quize";
import { defaultFetch } from "../api/defaultFetch";

export function useInitializeGame(id: string) {
  const [user, setUserList] = useState<quizeUserList | null>(null);
  const [scoreList, setScoreList] = useState<UserScoreList | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const fetchUserList = async () => {
    const response = await defaultFetch<quizeUserList>(
      `/room/${id}/game/players`,
      {
        method: "GET",
      }
    );
    if (response) {
      setUserList(response);
    }
  };

  const fetchScoreList = async () => {
    const response = await defaultFetch<UserScoreList>(
      `/game/api/v1/game/${id}/scores`,
      {
        method: "GET",
      }
    );
    console.log(response);
    if (response) {
      setScoreList(response);
    }
  };

  return {
    user,
    scoreList,
    isOpen,
    setIsOpen,
    fetchUserList,
    fetchScoreList,
  };
}

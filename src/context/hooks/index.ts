import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";

export const useGlobalValue = useRecoilValue;

export const useSetGlobalState = useSetRecoilState;

export const useGlobalState = useRecoilState;

export const useGlobalValueLoadable = useRecoilValueLoadable;

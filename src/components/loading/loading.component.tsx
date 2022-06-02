import { ComponentType } from "react";
import { LoadingWrapper } from "./loading.styles";
import { Spinner } from "@blueprintjs/core";

export const Loading: ComponentType = () => {
  return (
    <LoadingWrapper>
      <Spinner size={70} intent="primary" />
    </LoadingWrapper>
  )
}
import { IToaster } from "@blueprintjs/core";
import { createContext } from "react";

export const ToasterContext = createContext<IToaster | null>(null);
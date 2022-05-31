import { CSSProperties } from "react";
import { Theme } from "../../../theme/types";

export const containerStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: theme.palette.secondary.highlight,
  padding: theme.spacing.sizes.large,
});

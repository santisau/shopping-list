import { CSSProperties } from "react";
import { Theme } from "../../../theme/types";

export const containerStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: theme.palette.primary.main,
  paddingTop: theme.spacing.sizes.xsmall,
  paddingBottom: theme.spacing.sizes.xsmall,
  paddingLeft: theme.spacing.sizes.medium,
  paddingRight: theme.spacing.sizes.medium,
});

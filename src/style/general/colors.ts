const brandDarkBlue = "#0A0D36";
const brandIndigoBlue = "#5657F6";
const brandGreen = "#0EBE73";
const brandPink = "#FD55BE";
const brandOrange = "#FFB229";
const brandWhite = "#FFFFFF";
const brandLightestGrey = "#FAFAFA";
const brandLightGrey = "#EAF8FA";
const brandGrey = "#E5E7EB";

const primaryColor = brandDarkBlue;
const secondaryColor = brandIndigoBlue;
const tertiaryColor = brandGreen;

export const colors = {
  brand: {
    primary: primaryColor,
    secondary: secondaryColor,
    tertiary: tertiaryColor,
  },
  background: {
    primary: primaryColor,
    secondary: brandGrey,
    tertiary: tertiaryColor,
    light: brandGrey,
    lighter: brandLightGrey,
  },
  border: {
    primary: brandGrey,
  },
  text: {
    primary: brandLightGrey,
    secondary: primaryColor,
    tertiary: brandLightestGrey,
    highlighted: brandOrange,
    default: brandGrey,
  },
};

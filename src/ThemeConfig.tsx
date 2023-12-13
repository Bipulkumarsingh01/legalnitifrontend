import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    LNAIPrimaryButton: true;
    LNAIPrimaryButtonDensed: true;
    LNAISecondaryButton: true;
    LNAIPurpleGradientLight: true;
    LNAIPurpleGradientDark: true;
    LNAIDarkPurpleGradientLight: true;
    LNAIBasicLight: true;
    LNAIPlainButton: true;
  }
}

const defaultTheme = createTheme();

export const LNAIThemeConfig = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "LNAIBasicLight" },
          style: {
            textTransform: "none",
            backgroundColor: "white",
            fontSize: "1.2rem",
            fontWeight: "600",
            padding: "0.2rem 0.6rem",
            color: "black",
            border: "1px solid var(--lnai-light-purple)",
            borderRadius: "var(--lnai-primary-border-radius)",
            "&:hover": {
              backgroundColor: "white",
              border: "1px solid var(--lnai-dark-purple)",
            },
          },
        },
        {
          props: { variant: "LNAIPlainButton" },
          style: {
            textTransform: "none",
            backgroundColor: "white",
            fontSize: "0.8rem",
            fontWeight: "400",
            padding: "0.2rem 0.6rem",
            color: "black",
            border: "none",
            "&:hover": {
              border: "none",
            },
          },
        },
        {
          props: { variant: "LNAIPrimaryButton" },
          style: {
            textTransform: "none",
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "520",
            padding: "0.2rem 1rem",
            background: "var(--lnai-purple-gradient-background)",
            borderRadius: "var(--lnai-primary-border-radius)",
          },
        },
        {
          props: { variant: "LNAIPrimaryButtonDensed" },
          style: {
            textTransform: "none",
            color: "white",
            fontSize: "0.9rem",
            fontWeight: "400",
            background: "var(--lnai-purple-gradient-background)",
            borderRadius: "var(--lnai-primary-border-radius)",
          },
        },
        {
          props: { variant: "LNAIPrimaryButtonDensed", disabled: true },
          style: {
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: "400",
            background:
              "linear-gradient(#fff, #fff) padding-box, linear-gradient(0deg, rgba(61,5,94,1) 0%, rgba(141,4,193,1) 100%) border-box",
            color: "black",
            padding: "3px",
            border: "1px solid transparent",
            borderRadius: "var(--lnai-primary-border-radius)",
            "&:hover": {
              color: "black",
            },
          },
        },

        {
          props: { variant: "LNAISecondaryButton" },
          style: {
            textTransform: "none",
            color: "black",
            background: "white",
            fontWeight: "600",
            border: "2px solid var(--lnai-dark-purple)",
            borderRadius: "var(--lnai-primary-border-radius)",
            "&:hover": {
              color: "white",
            },
          },
        },
        {
          props: { variant: "LNAIDarkPurpleGradientLight" },
          style: {
            textTransform: "none",
            background:
              "linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(60,6,95,1) 50%, rgba(32,5,84,1) 100%)",
            color: "black",
            width: "8rem",
            fontSize: "0.8rem",
            padding: "3px",
            border: "2px solid transparent",
            filter: "drop-shadow(0px -1.75906px 9px rgba(61, 5, 94, 0.63))",
            borderRadius: "var(--lnai-primary-border-radius)",
            "&:hover": {
              color: "black",
            },
          },
        },
        {
          props: { variant: "LNAIPurpleGradientDark" },
          style: {
            textTransform: "none",
            background: `linear-gradient(#000, #000) padding-box, linear-gradient(
                90deg,
                hsl(266deg 56% 22%) 0%,
                hsl(267deg 56% 29%) 9%,
                hsl(268deg 57% 36%) 18%,
                hsl(269deg 57% 43%) 27%,
                hsl(270deg 58% 50%) 36%,
                hsl(271deg 79% 57%) 45%,
                hsl(275deg 85% 58%) 55%,
                hsl(281deg 72% 53%) 64%,
                hsl(287deg 68% 48%) 73%,
                hsl(293deg 73% 43%) 82%,
                hsl(298deg 79% 38%) 91%,
                hsl(303deg 88% 35%) 100%
              ) border-box`,
            color: "white",
            border: "3px solid transparent",
            boxShadow: "0px -1.75906px 9px rgba(61, 5, 94, 0.63)",
            borderRadius: "var(--lnai-primary-border-radius)",
            "&:hover": {
              color: "white",
            },
          },
        },
        {
          props: { variant: "LNAIPurpleGradientLight" },
          style: {
            textTransform: "none",
            background: `linear-gradient(#fff, #fff) padding-box, linear-gradient(
                90deg,
                hsl(266deg 56% 22%) 0%,
                hsl(267deg 56% 29%) 9%,
                hsl(268deg 57% 36%) 18%,
                hsl(269deg 57% 43%) 27%,
                hsl(270deg 58% 50%) 36%,
                hsl(271deg 79% 57%) 45%,
                hsl(275deg 85% 58%) 55%,
                hsl(281deg 72% 53%) 64%,
                hsl(287deg 68% 48%) 73%,
                hsl(293deg 73% 43%) 82%,
                hsl(298deg 79% 38%) 91%,
                hsl(303deg 88% 35%) 100%
              ) border-box`,
            color: "black",
            border: "3px solid transparent",
            boxShadow: "0px -1.75906px 9px rgba(61, 5, 94, 0.63)",
            borderRadius: "var(--lnai-primary-border-radius)",
            "&:hover": {
              color: "black",
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.lnai-primary-input-field": {
            "& .MuiInputBase-root": {
              textTransform: "none",
              background:
                "linear-gradient(#fff, #fff) padding-box, linear-gradient(90deg, rgba(61,5,94,1) 0%, rgba(141,4,193,1) 100%) border-box",
              color: "black",
              border: "3px solid transparent",
              borderRadius: "1rem",
            },
            "& .MuiInputBase-root:hover": {
              boxShadow: "0px -1.75906px 9px rgba(61, 5, 94, 0.63)",
            },
            "& fieldset": {
              border: "none",
            },

            // "& .MuiInputBase-input:hover + fieldset": {
            //   border: "2px groove var(--lnai-light-purple)",
            // },
            "& .MuiInputBase-input:focus + fieldset": {
              boxShadow: "0px -1.75906px 9px rgba(61, 5, 94, 0.63)",
            },
            // "& input::placeholder": {
            //   color: "var(--lnai-light-purple)",
            //   paddingLeft: "1rem",
            //   opacity: 0.6,
            //   fontWeight: 500,
            // },
          },
          "&.lnai-primary-form-input-field": {
            "& .MuiInputBase-root": {
              textTransform: "none",
              background:
                "linear-gradient(#fff, #fff) padding-box, linear-gradient(0deg, rgba(61,5,94,1) 0%, rgba(141,4,193,1) 100%) border-box",
              color: "black",
              border: "1px solid transparent",
              borderRadius: "var(--lnai-primary-border-radius)",
            },
            "& .MuiInputBase-root:hover": {
              // boxShadow: "0px -1.75906px 9px rgba(61, 5, 94, 0.63)",
            },
            "& fieldset": {
              border: "none",
            },
            "& .MuiInputBase-input": {
              padding: "0.5rem",
            },

            // "& .MuiInputBase-input:hover + fieldset": {
            //   border: "2px groove var(--lnai-light-purple)",
            // },
            "& .MuiInputBase-input:focus + fieldset": {
              // boxShadow: "0px -1.75906px 9px rgba(61, 5, 94, 0.63)",
            },
            // "& input::placeholder": {
            //   color: "var(--lnai-light-purple)",
            //   paddingLeft: "1rem",
            //   opacity: 0.6,
            //   fontWeight: 500,
            // },
          },

          "&.lnai-footer-input-field": {
            "& input::placeholder": {
              color: "#000",
              opacity: 0.8,
            },
            "& fieldset": {
              border: "1px solid var(--lnai-light-purple)",
              borderRadius: "1.2rem",
              boxShadow: "0px -2px 18px rgba(161, 66, 180, 0.25)",
            },
            "& .MuiInputBase-input:hover + fieldset": {
              border: "1px solid var(--lnai-light-purple)",
            },
            "& .MuiInputBase-input:focus + fieldset": {
              border: "1px solid var(--lnai-light-purple)",
            },
          },
          "&.lnai-tools-text-field": {
            "& .MuiInputBase-root": {
              textTransform: "none",
              background:
                "linear-gradient(#fff, #fff) padding-box, linear-gradient(0deg, rgba(61,5,94,1) 0%, rgba(141,4,193,1) 100%) border-box",
              color: "black",
              border: "1px solid transparent",
              borderRadius: "3.5px",
            },
            "& .MuiInputBase-root:hover": {
              boxShadow: "0px -1.75906px 9px rgba(61, 5, 94, 0.63)",
            },
            "& fieldset": {
              border: "none",
            },
            "& .MuiInputBase-input": {
              padding: "0.7rem",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.lnai-primary-form-select-field": {
            ".MuiSelect-select": {
              textTransform: "none",
              background:
                "linear-gradient(#fff, #fff) padding-box, linear-gradient(0deg, rgba(61,5,94,1) 0%, rgba(141,4,193,1) 100%) border-box",
              color: "black",
              border: "1px solid transparent",
              borderRadius: "var(--lnai-primary-border-radius)",
            },

            ".MuiOutlinedInput-notchedOutline": {
              textTransform: "none",
              background:
                "linear-gradient(#fff, #fff) padding-box, linear-gradient(0deg, rgba(61,5,94,1) 0%, rgba(141,4,193,1) 100%) border-box",
              color: "black",
              border: "1px solid transparent",
              borderRadius: "var(--lnai-primary-border-radius)",
            },

            "& .MuiSelect-select": {
              zIndex: 1,
            },

            "&  svg": {
              zIndex: 1,
            },

            "& .MuiInputBase-input:focus + fieldset": {
              boxShadow: "0px -1.75906px 9px rgba(61, 5, 94, 0.63)",
            },
          },
        },
      },
    },
  },
});

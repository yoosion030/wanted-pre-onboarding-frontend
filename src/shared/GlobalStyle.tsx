import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        html {
          font-size: 16px;
          @media screen and (max-width: 960px) {
            font-size: 14px;
          }
          @media screen and (max-width: 640px) {
            font-size: 12px;
          }
        }

        body,
        input,
        button {
          font-family: "Roboto", sans-serif;
        }

        a {
          text-decoration: none;
        }

        body::-webkit-scrollbar {
          width: 0.625rem;
        }

        body::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 0.625rem;
          height: 3.5rem;
          background-clip: content-box;
        }

        body::-webkit-scrollbar-thumb:hover {
          background-color: #cbcbcb;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `}
    />
  );
};

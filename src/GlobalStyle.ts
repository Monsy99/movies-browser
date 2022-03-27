import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: ${({ theme }) => theme.color.whisper};
        margin: 0;
        overflow-y: scroll;
    }
`;

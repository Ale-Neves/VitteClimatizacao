import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	#root {
		width: 100vw;
		min-height: 100vh;
		overflow-x: hidden;
		font-family: ${({ theme }) => theme.fonts.primary};
		color: ${({ theme }) => theme.colors.text.primary};
		background-color: ${({ theme }) => theme.colors.background.primary};
	}

	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: ${theme.fonts.secondary};
		font-size: 1.6rem;
		line-height: 1.6;
		color: ${theme.colors.text.primary};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: ${theme.colors.text.primary};
		line-height: 1.5;
		overflow-x: hidden;
	}

	html {
		font-size: 62.5%;
		scroll-behavior: smooth;
	}

	ul, ol {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		cursor: pointer;
		border: none;
		background: none;
		font-family: inherit;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	ul, ol {
		list-style: none;
	}

	input, textarea, select {
		font-family: inherit;
		font-size: inherit;
		border: none;
		outline: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	img {
		max-width: 100%;
		height: auto;
		display: block;
	}

	fieldset {
		border: none;
		margin: 0;
		padding: 0;
	}

	legend {
		display: table;
		max-width: 100%;
		padding: 0;
		color: inherit;
		white-space: normal;
	}

	textarea {
		resize: vertical;
	}

	select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}

	*:focus {
		outline: 2px solid ${theme.colors.primary.main};
		outline-offset: 2px;
	}

	*:focus-visible {
		outline: 2px solid ${({ theme }) => theme.colors.primary.main};
		outline-offset: 2px;
	}

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.colors.gray[100]};
	}

	::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.gray[400]};
		border-radius: 4px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: ${({ theme }) => theme.colors.gray[500]};
	}

	@media print {
		* {
		background: transparent !important;
		color: black !important;
		box-shadow: none !important;
		text-shadow: none !important;
		}
	}
`;

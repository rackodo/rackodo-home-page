import { createGlobalStyle } from "styled-components";

export const lightTheme = {

}

export const GlobalStyles = createGlobalStyle `
	:root {
		--1: hsl(197, 100%, 5%);
		--2: hsl(190, 100%, 23%);
		--3: hsl(181, 88%, 31%);
		--4: hsl(160, 41%, 70%);
		--5: hsl(45, 60%, 78%);
		--6: hsl(39, 100%, 47%);
		--7: hsl(30, 98%, 40%);
		--8: hsl(19, 97%, 37%);
		--9: hsl(5, 81%, 38%);
		--0: hsl(358, 64%, 37%);
	}

	body {
		background-color: var(--5);
	}
`
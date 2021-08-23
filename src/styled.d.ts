import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			main: string;
			background: string;
			accent: string;
			font: string;
			disabled: string;
			moreChart: string;
		};
	}
}

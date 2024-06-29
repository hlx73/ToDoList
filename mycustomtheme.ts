
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "8px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #930fb8 
		"--color-primary-50": "239 219 244", // #efdbf4
		"--color-primary-100": "233 207 241", // #e9cff1
		"--color-primary-200": "228 195 237", // #e4c3ed
		"--color-primary-300": "212 159 227", // #d49fe3
		"--color-primary-400": "179 87 205", // #b357cd
		"--color-primary-500": "147 15 184", // #930fb8
		"--color-primary-600": "132 14 166", // #840ea6
		"--color-primary-700": "110 11 138", // #6e0b8a
		"--color-primary-800": "88 9 110", // #58096e
		"--color-primary-900": "72 7 90", // #48075a
		// secondary | #ffffff 
		"--color-secondary-50": "255 255 255", // #ffffff
		"--color-secondary-100": "255 255 255", // #ffffff
		"--color-secondary-200": "255 255 255", // #ffffff
		"--color-secondary-300": "255 255 255", // #ffffff
		"--color-secondary-400": "255 255 255", // #ffffff
		"--color-secondary-500": "255 255 255", // #ffffff
		"--color-secondary-600": "230 230 230", // #e6e6e6
		"--color-secondary-700": "191 191 191", // #bfbfbf
		"--color-secondary-800": "153 153 153", // #999999
		"--color-secondary-900": "125 125 125", // #7d7d7d
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #55ff33 
		"--color-success-50": "230 255 224", // #e6ffe0
		"--color-success-100": "221 255 214", // #ddffd6
		"--color-success-200": "213 255 204", // #d5ffcc
		"--color-success-300": "187 255 173", // #bbffad
		"--color-success-400": "136 255 112", // #88ff70
		"--color-success-500": "85 255 51", // #55ff33
		"--color-success-600": "77 230 46", // #4de62e
		"--color-success-700": "64 191 38", // #40bf26
		"--color-success-800": "51 153 31", // #33991f
		"--color-success-900": "42 125 25", // #2a7d19
		// warning | #e70808 
		"--color-warning-50": "251 218 218", // #fbdada
		"--color-warning-100": "250 206 206", // #facece
		"--color-warning-200": "249 193 193", // #f9c1c1
		"--color-warning-300": "245 156 156", // #f59c9c
		"--color-warning-400": "238 82 82", // #ee5252
		"--color-warning-500": "231 8 8", // #e70808
		"--color-warning-600": "208 7 7", // #d00707
		"--color-warning-700": "173 6 6", // #ad0606
		"--color-warning-800": "139 5 5", // #8b0505
		"--color-warning-900": "113 4 4", // #710404
		// error | #fb0e85 
		"--color-error-50": "254 219 237", // #fedbed
		"--color-error-100": "254 207 231", // #fecfe7
		"--color-error-200": "254 195 225", // #fec3e1
		"--color-error-300": "253 159 206", // #fd9fce
		"--color-error-400": "252 86 170", // #fc56aa
		"--color-error-500": "251 14 133", // #fb0e85
		"--color-error-600": "226 13 120", // #e20d78
		"--color-error-700": "188 11 100", // #bc0b64
		"--color-error-800": "151 8 80", // #970850
		"--color-error-900": "123 7 65", // #7b0741
		// surface | #c45ede 
		"--color-surface-50": "246 231 250", // #f6e7fa
		"--color-surface-100": "243 223 248", // #f3dff8
		"--color-surface-200": "240 215 247", // #f0d7f7
		"--color-surface-300": "231 191 242", // #e7bff2
		"--color-surface-400": "214 142 232", // #d68ee8
		"--color-surface-500": "196 94 222", // #c45ede
		"--color-surface-600": "176 85 200", // #b055c8
		"--color-surface-700": "147 71 167", // #9347a7
		"--color-surface-800": "118 56 133", // #763885
		"--color-surface-900": "96 46 109", // #602e6d
		
	}
}
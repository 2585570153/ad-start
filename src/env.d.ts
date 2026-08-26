/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly HEADER_INJECT?: string;
	readonly FOOTER_INJECT?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

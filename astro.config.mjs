// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Notepedia',
			plugins: [starlightBlog()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			pagination: false,
			sidebar: [
				{ slug: 'welcome' },
				{
					label: 'Games',
					collapsed: true,
					items: [
						{ label: 'Darkest Dungeon',
							collapsed: true,
							items: [
								{ label: 'Parties', collapsed: true, autogenerate: { directory: 'notes/games/darkest-dungeon/parties' } },
								{ label: 'Provisions', collapsed: true, autogenerate: { directory: 'notes/games/darkest-dungeon/provisions' } },
								{ label: 'Party Names', link: 'notes/games/darkest-dungeon/0028' },
								{ label: 'Heroes Abbreviation Names', link: 'notes/games/darkest-dungeon/0038' },
							]
						},
						{ label: 'Dead Cells', collapsed: true, autogenerate: { directory: 'notes/games/dead-cells' } },
					]
				},
				{
					label: 'Computing', collapsed: true, autogenerate: { directory: 'notes/computing' },
				},
			],
		}),
	],
});

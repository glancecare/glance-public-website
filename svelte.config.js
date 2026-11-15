import adapterNode from '@sveltejs/adapter-node';
import adapterVercel from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import slugify from 'slugify';

import remarkAttr from "remark-attr";
import remarkGfm from 'remark-gfm';



export function remarkTocPlugin() {
  return (tree, file) => {
    const tableOfContents = [];
    let currentH1 = null;

    visit(tree, 'heading', (node) => {
      const text = toString(node);
      const slug = slugify(text, { lower: true });
      const depth = node.depth;

      // Add id to the heading for linking
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.id = slug;

      const tocItem = {
        text,
        slug,
        depth,
        children: []
      };

      if (depth === 1 || depth === 2) {
        currentH1 = tocItem;
        tableOfContents.push(currentH1);
      } else if (depth > 2 && currentH1) {
        currentH1.children.push(tocItem);
      }
    });

    // Add the TOC data to the file for later use
    if (tableOfContents && file.data.fm) {
      file.data.fm.toc = tableOfContents;
    }
  };
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		// Vercel sets VERCEL=1 during builds; Docker/Cloud Build keep using adapter-node.
		adapter: process.env.VERCEL ? adapterVercel() : adapterNode()
	},
	preprocess: [
		mdsvex({
			extensions: ['.md', '.svx'],
			remarkPlugins: [
				remarkAttr,
				remarkGfm,
				remarkTocPlugin,
			]
		}),
		vitePreprocess()
	]
};

export default config;

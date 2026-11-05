<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

Brand assets are served from public/brand, with browser and sharing icons duplicated in public/; this preserves the supplied filenames and stable public URLs.
Home-specific team content uses separate translation keys from the comparison page so home updates do not alter that page.
The shared header contact chooser uses Radix Dialog with a bottom panel on mobile and centered dialog on desktop to preserve keyboard focus, Escape and outside-click dismissal.

Guides are Markdown files with JSON-valued front matter in src/content/guias, eagerly bundled for SSR; published entries drive categories, cards, Article/FAQ metadata and the sitemap without runtime filesystem reads.
Guide covers resolve asset pointers by filename, or an absolute HTTPS image URL, so each new content file and uploaded cover require no registry edits.
Guide closing copy can be supplied in optional front matter fields; the shared booking block retains one design and defaults for existing guides.

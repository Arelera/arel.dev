# Arel guide authoring

Use [the content roadmap](./CONTENT_ROADMAP.md) to select or propose a topic.
This guide adapts the editorial standards in Moyu's `website/BLOG_AUTHORING_GUIDE.md`
in the neighboring `chinese-scroll` repository to Arel's smaller Markdown
site. Moyu's MDX fields, components, and release rules do not apply here.

## Before writing

- State the reader's question and answer in one or two sentences. Be able to
  name the distinct example, demonstration, test, or evidence this article
  contributes. A different headline alone is not enough.
- Check current search results and the existing Arel, Moyu, and Miaozi
  articles for overlapping intent. Use Search Console queries when available.
- Keep a source list while researching. Prefer primary or authoritative
  sources for language, cultural, product, and numerical claims. Check product
  features against the live product before mentioning them.
- Do not invent experience, quotes, data, credentials, Chinese examples
  attributed to real media, or search volume. Original teaching examples are
  welcome when clearly presented as constructed examples.

## Write the guide

- Answer the question near the start. Use concrete Chinese examples and
  explain what the reader can do with them. Let the question decide the
  structure and length; do not add an FAQ, table, or conclusion by habit.
- Write naturally and directly. Avoid generic “ultimate guide” titles,
  motivational filler, slogan fragments, and headings that exist only to
  repeat keywords. Read the draft aloud for awkward or AI-sounding phrasing.
- Build the title around the activity or problem readers actually name in
  search. Check current results and query variants before inventing a softer
  editorial question. For a sentence-mining tutorial, name “sentence mining”
  and cover the complete process; choosing which lines to save is a section
  within that process. Clear wording alone does not establish search demand.
- Read only the title, description, and first paragraph as a reader arriving
  from search. They must identify the specific question, scope, and useful
  answer without the image or later examples. Avoid “this story,” “it,” or
  similar references when the reader has not been told which thing they mean.
  State the task plainly: “How to choose Chinese stories at your reading
  level” tells the reader what the article helps them do.
- Check simplified and traditional forms, tone-marked pinyin, natural
  translation, and explanation together. Mark regional, informal, or
  context-dependent usage where it matters. Get knowledgeable review for
  uncertain Chinese nuance.
- Use an image only when it clarifies the topic. A real interface requires a
  real screenshot; an illustration cannot stand in as evidence. Store and
  optimize permitted images locally.
- Link to Moyu or Miaozi where it genuinely gives the reader a useful next
  step. The article should still answer the question if the reader never
  clicks. No personal names, resume details, or affiliation boilerplate.

## Voice: relaxed, specific, and easy to follow

Write as if you're explaining something to one learner sitting beside you.
Use a slightly casual tone, with enough detail that they can try what you're
describing. Apply this to titles, descriptions, headings, captions, callouts,
product copy, CTAs, and planning briefs as well as article paragraphs.

- Use ordinary words and natural contractions: “you'll,” “can't,” and
  “here's” are fine. Keep technical terms readers use, such as “sentence
  mining,” and explain them when needed.
- Name the thing or action. “Can you hear the phrase after replaying it?”
  tells the reader what to check. “Did it click?” leaves them guessing.
- Use headings that fit the actual section. “Watch the first minute” is a
  plain instruction. Don't make every heading a question or dress up a small
  task as a big decision.
- Replace vague editorial questions such as “Which lines are worth saving?”
  with wording that names the task, such as “Picking sentences to save.”
  Then explain the choice with specific examples in the section.
- Describe what happens instead of adding metaphors: “You still can't catch
  the line” instead of “The line disappears in the audio”; “You can look up
  包子 and still follow what he did” instead of “The scene stays intact.”
- Avoid slogans, inspirational endings, corporate wording, and repeated
  fragments like “Watch. Read. Learn.” Also avoid empty contrast formulas
  and unnecessary lead-ins such as “It's important to remember that.”
- Don't force slang, jokes, or a chatty opener into each paragraph. Don't
  imitate the user's texting style or invent a personal learning story.
- Vary sentence length naturally. A short sentence can give an instruction;
  the next one can explain why. Don't break one thought into a string of
  tiny sentences just to sound punchy.
- Judge the whole sentence. A normal word like “useful” isn't a problem by
  itself; unexplained claims about usefulness are. Rewrite the vague part
  rather than mechanically swapping words for synonyms.
- Localized copy should sound natural in that language. Use its normal level
  of politeness and contractions; don't translate English slang literally.

Read each section aloud before publishing. If a sentence sounds like an
article template or a sales pitch, name the actual example, action, or reason
and try it again. Keep the clear search topic and accurate explanation while
making the wording easier to say.

## Arel Markdown contract

English source articles live at `content/blog/en/<slug>.md`; the filename is
the slug at `/en/blog/<slug>/`. Use this frontmatter:

```md
---
title: "A specific, natural title"
description: "The question answered and what the reader will get."
date: "2026-09-30"
image: "/images/guides/example.webp"
imageAlt: "What the image actually shows"
---
```

`image` and `imageAlt` are optional, but must be supplied together. Guide
images are local WebP files under `public/images/guides/`. The page generates
the H1 from `title`; start body headings at `##`. Use `updated: "YYYY-MM-DD"`
only after a meaningful editorial change. Set `date` to the real publication
date, not the day the idea entered the queue.

For Chinese that changes script, write `[[zh:简体|繁體]]`. Supply both forms even
when a word differs by only one character. Link to a localized internal route
only when that route exists. Articles remain English until a complete,
reviewed translation is added under `content/blog/<locale>/<slug>.md`; do not
publish an English fallback as a localized article.

## Make the page easy to read

Use short paragraphs when the idea changes, specific headings, and space
between explanations and examples. Keep the prose conversational; do not
turn every paragraph into a panel or force every guide into the same outline.
The page generates a compact contents list from `##` headings automatically.

These optional blockquote markers give material different visual roles:

```md
> [!EXAMPLE]
> [[zh:你先进去，我马上就来。|你先進去，我馬上就來。]]
>
> *Nǐ xiān jìnqù, wǒ mǎshàng jiù lái.*
>
> Go in first. I’ll be right there.

> [!CHECK]
> A practical check or decision the reader can apply.

> [!NOTE]
> A useful qualification or caution.

> [!WORDS]
>
> - **[[zh:马上|馬上]]** (*mǎshàng*) means “right away.”
```

For `[!EXAMPLE]`, the first paragraph is the visible Chinese passage. Any
following paragraphs appear under a native “Pronunciation and meaning”
disclosure. Both scripts and the full explanation remain in the static HTML.
Each example has one browser audio control for its Chinese passage. Use
`[[audio:马上|馬上]]` instead of `[[zh:马上|馬上]]` for selected vocabulary
or another sentence that benefits from audio. Keep ordinary Chinese mentions
as `[[zh:…|…]]`; do not put an audio button beside every repeated word.
The selected script requests mainland or Taiwan Mandarin. Audio controls
appear when the browser offers a Mandarin voice, and regional availability
depends on the device. No audio is requested before a reader presses play.

Ordinary blockquotes still work. Use numbered lists for a sequence, rather
than making readers find the steps inside prose.

Add an optional Moyu end CTA in frontmatter, connecting the guide to video
practice without claiming that Moyu offers story reading:

```yaml
cta:
  title: "Watch Chinese videos with captions you can tap"
  description: "Choose a clip in Moyu, check a word in the captions, and replay the line without leaving the video."
  label: "Explore Moyu Chinese"
```

The page renders this once after the article. All article CTAs link to Moyu’s
locale home page and use its original mascot artwork. Translate CTA copy
with the article. Avoid repeating the same pitch in the final paragraph. Related guides
use the site's existing image cards automatically.

## Review and release

Check title/description/opening clarity together, then the opening answer,
the voice of every heading and paragraph, originality, sources, Chinese accuracy, links,
image rights and alt text, mobile layout, dark mode, script switching,
contents links, example disclosures, audio playback and stopping,
and the end CTA destination.
Run `pnpm test`, `pnpm lint`, `pnpm typecheck`, and `pnpm build`. Confirm the new
route and sitemap entry appear in `out/`, then verify the live page after
deployment. Measure useful visits and product referrals; do not assume that
an indexed page earns traffic immediately.

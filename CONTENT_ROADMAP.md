# Arel content roadmap

This is the small, shared queue for arel's Chinese-learning guides. It records
what is live, what we might write next, and why. A topic is not a promise to
publish it. We add an article when it answers a real question with something
we can show or explain better than the existing pages.

**Status key:** Published = live; Queued = next brief to develop; Research =
promising but needs a stronger angle or evidence; Parked = avoid for now.

## Published

| Guide | Reader question | Main connection |
| --- | --- | --- |
| [How to Pick Chinese Videos for Listening Practice](https://arel.dev/en/blog/choose-a-chinese-video/) | Is this clip useful for focused listening? | Moyu |
| [When to Look Up a Word While Reading Chinese](https://arel.dev/en/blog/read-without-translating-every-word/) | Which unknown words actually block this passage? | Miaozi |
| [How to Choose Chinese Stories at Your Reading Level](https://arel.dev/en/blog/chinese-story-too-hard/) — October 7, 2026 | How do I choose Chinese stories at my reading level? Two original passages show how vocabulary and sentence patterns affect the choice. | Miaozi |
| [How to Sentence Mine From Chinese Videos](https://arel.dev/en/blog/sentence-mining-chinese-videos/) — October 15, 2026 | How do I choose a sentence from a video, save enough context, and review it later? | Moyu |
| [Should You Read Chinese With Pinyin?](https://arel.dev/en/blog/read-chinese-with-pinyin/) — October 23, 2026 | When should I show pinyin, and how do I tell pronunciation trouble from missing meaning? Two original rainy-day examples let readers try it. | Miaozi |

The October 7 guide uses two original breakfast-shop passages and a
fresh-paragraph check. Its examples illustrate reading difficulty without
claiming an HSK level. Both scripts, pinyin, and translations were checked
in editorial review; no independent native-speaker review is claimed. The
reading-versus-study distinction is supported by the
[Extensive Reading Foundation's guide](https://erfoundation.org/guide/ERF_Guide.pdf).

## Queued

No article is currently queued. Choose the next topic from Research after
checking its sources and overlap with the five published guides.


## Research

| Working question | Why it could be useful | What is missing before it moves to Queued |
| --- | --- | --- |
| Should I listen to a Chinese story before or after reading it? | Miaozi stories have audio and text, so a concrete story walkthrough could help someone choose an order based on whether they want listening or reading practice. | Test a real story and explain the tradeoffs without claiming one sequence works best for everyone. Check current search results and avoid repeating a generic reading routine. |

## Parked

- Broad “best Chinese apps,” “where to read Chinese,” and “how to learn with
  C-dramas” roundups: [Miaozi's reading-app guide](https://miaozi.co/en/blog/best-chinese-reading-apps)
  and [Moyu's C-drama guide](https://moyuchinese.com/en/blog/learn-chinese-with-c-dramas)
  already cover nearby intent. Arel needs a different, demonstrable answer.
- More pages just to meet a weekly cadence. The current site is new in its
  Chinese-learning form; Search Console needs time to show useful query data.
- “Why don't Chinese captions always match the speech?”: the October 23
  overlap check found [Miaozi's October 15 guide](https://miaozi.co/en/blog/chinese-subtitles-dont-match-audio)
  now answers this directly. Avoid publishing a second version on Arel.

## How to choose the next article

1. When Search Console data is available, check for indexing problems and
   emerging queries. An initially quiet site is not evidence that the content
   failed; [Google says crawling can
   take days to weeks](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
2. Check the full Arel, Moyu, and Miaozi article lists, then search the main
   query and close variants. Record what current results answer and what they
   leave unclear. Do not assume a different title means different intent.
3. Write a short brief: reader, question, direct answer, distinct contribution,
   original examples or visual, sources to verify, and relevant existing links.
   If the distinct contribution is missing, keep the idea in Research.
4. Follow [Arel's authoring guide](./BLOG_AUTHORING_GUIDE.md). Publish one
   reviewed article when it is ready; translate only when each locale has a
   complete, reviewed version. Do not make English fallback article URLs.
5. After publication, inspect index status, queries, and clicks to Moyu or
   Miaozi before deciding whether the next piece should stay in the same area.
   Search traffic and useful product visits both matter; neither is a reason
   to stuff promotion into an article.

### Research snapshot: 2026-09-30

This is directional topic research, not keyword-volume or ranking data.
Results and product features should be rechecked before drafting.

- The search for choosing Chinese reading material already has
  [level-selection advice](https://onthegreatwall.com/guides/how-to-choose-chinese-reading-material-at-the-right-level/)
  and [graded-reader comparisons](https://migaku.com/blog/chinese/chinese-graded-readers).
  That is why the queued article needs original worked passages.
- Searches about reading without pinyin already return
  [specific guidance](https://www.hsk.guide/blog/reading-chinese-without-pinyin).
  Arel should not publish a paraphrase of it.
- [Miaozi's live reader](https://miaozi.co/en/read) currently describes
  difficulty filters, bilingual text, audio, and tappable glossaries. Check
  individual story behavior again when writing a story-based guide.
- [Moyu's live site](https://moyuchinese.com/en) currently describes
  synchronized captions, word lookup, and saving words, sentences, or videos.
  Check the app itself before promising a particular workflow.
- [Google's people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
  favors original, useful answers. We have not measured search volume or
  validated a ranking opportunity for any idea in this file.

### Research update: 2026-10-14

Searches for “how to sentence mine Chinese videos” and Chinese sentence
selection returned material using the established term “sentence mining,”
including [Chinese Boost's explanation](https://www.chineseboost.com/blog/sentence-mining/).
This supports the terminology choice; it does not establish search volume,
keyword difficulty, or a ranking gap.

[Moyu's live C-drama guide](https://moyuchinese.com/en/blog/learn-chinese-with-c-dramas)
already has a section on saving lines. The queued brief therefore covers
the complete mining process with a worked demonstration. Sentence selection
belongs in a section with a plain heading such as “Picking a sentence to save.”

### Publication notes: 2026-10-15

Published **How to Sentence Mine From Chinese Videos**. The guide follows an
original restaurant conversation through sentence selection, a sample review
note, and a later listening check. The dialogue is explicitly labelled as
constructed, and its audio is identified as synthetic. This replaces the
brief's real-clip demonstration: no third-party speech or video is presented
as material we recorded or checked. The Moyu screenshot is an authentic word
review card and is clearly labelled as a different example.

The draft was checked against [Refold's sentence-mining explanation](https://refold.la/roadmap/library/sentence-mining)
and [Chinese Boost's guide](https://www.chineseboost.com/blog/sentence-mining/).
The meaning and reading of 點菜 were checked in the
[Ministry of Education's concise dictionary](https://dict.concised.moe.edu.tw/dictView.jsp?ID=8844&la=0&powerMode=0).
Moyu's sentence saving and video-example review were checked against its
public site and current local Flutter source (`line_detail_sheet.dart` and
`review_screen.dart`). No independent native-speaker review or live app test
is claimed. No search-volume or ranking forecasts were used.

The article includes both Chinese scripts, browser audio, one real product
screenshot, a locally optimized cat cover, and the shared Moyu CTA. Existing
guides link to it where saving a sentence is the next step. Translated listing
previews point to the English article; no English fallback locale routes are
published. The selected search term remains “sentence mining.”

### Completed brief: Should You Read Chinese With Pinyin? — October 23, 2026

- **Reader and query:** a learner who can follow a story with pinyin but
  struggles when it is hidden; “should I read Chinese with pinyin” and
  “when to stop using pinyin.”
- **Direct answer:** keep pinyin available for pronunciation, try familiar
  text without it, and reveal help for the words that stop you. There is no
  fixed character count or date in this guide for switching it off.
- **Contribution:** an original rainy-day passage distinguishes recognizing
  a spoken word from knowing its written form, and pronunciation uncertainty
  from missing meaning. A second sentence reuses 雨伞 / 雨傘 in a new context
  so remembering the first passage is not mistaken for character recognition.
- **Scope and overlap:** the word-lookup guide asks when meaning justifies a
  dictionary interruption; this guide asks how much pronunciation support to
  show. Moyu's pinyin-versus-zhuyin article compares systems. Miaozi's
  reading-resource guide only briefly covers reducing pronunciation help.
- **Evidence:** Chung's 2007 character-presentation study (EdUHK repository
  abstract, not a full-paper review), MOE dictionary entries for 雨傘 and 發現,
  and the local Miaozi reader-settings source. Do not treat a
  character-learning experiment as proof of a universal story-reading rule.
- **Visual and links:** a matching cat lifting a pronunciation flap in a book;
  working Chinese examples with the existing script, disclosure, and browser
  audio controls. Link to the word-lookup and story-level guides, Miaozi's
  reader, and the shared Moyu end CTA.

This is a worked example, not a new reading feature or a timed study program.

### Research and publication notes: 2026-10-23

Published **Should You Read Chinese With Pinyin?** after checking the complete
English article lists in Arel, Moyu, and Miaozi, and searching “reading Chinese
with pinyin,” “when to stop using pinyin,” and close variants. Current results
already cover gradual withdrawal and reading settings. This article therefore
uses an original two-passage check: recognize 雨伞 / 雨傘 in a new sentence,
then distinguish a missing pronunciation from a missing meaning. No search
volume, ranking gap, fixed learning timeline, or measured learning outcome is
claimed.

Sources checked:

- [Chung's 2007 study abstract in the EdUHK repository](https://repository.eduhk.hk/en/publications/presentation-factors-in-the-learning-of-chinese-characters-the-or/).
  The article explicitly limits its interpretation to character presentation;
  neither a full-paper review nor proof of a story-reading method is claimed.
- MOE concise dictionary entries for [雨傘](https://dict.concised.moe.edu.tw/dictView.jsp?ID=44335&la=1&powerMode=0)
  and [發現](https://dict.concised.moe.edu.tw/dictView.jsp?ID=5170&la=0&powerMode=0).
  Both scripts, pinyin, translation, and the explanations were checked together
  in editorial review; no independent native-speaker review is claimed.
- Miaozi's local `reader-shell.tsx` and `use-reader-settings.ts` contain
  separate pinyin and translation settings. The live reader's search-rendered
  page was accessible, but an interactive browser check encountered Cloudflare
  verification. The final article links to stories without describing an
  untested live settings workflow.

The cover was made with the built-in image generator using the existing cat
as its style reference. Prompt: the ivory and rust cat lifts a pronunciation
flap above a line in an open book, sparse warm-cream 3:2 composition, hand-drawn
charcoal outlines, no lettering, fake interface, or decorative symbols. The
optimized 960 × 640 WebP is `public/images/guides/read-chinese-with-pinyin-v1.webp`.
It illustrates the topic rather than serving as product evidence.

The page reuses the existing script switch, pronunciation disclosures, browser
audio, contents links, and Moyu CTA. All nine translated listing previews link
to the English article; no untranslated locale article routes are added. The
word-lookup guide links to the new demonstration. The older caption-mismatch
idea is now parked because Miaozi has published it; the audio-first story idea
still needs a tested example before drafting.

import Image from 'next/image'
import Link from 'next/link'
import LinkArrow from '@/components/LinkArrow'
import { homeCopy } from '@/lib/copy'
import { getAllPosts, getPublishedBlogLocales } from '@/lib/posts'
import { localizedPath, miaoziLocale, type Locale } from '@/lib/site'

export default function SiteFooter({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale]
  const blogLocale = getPublishedBlogLocales().includes(locale) ? locale : 'en'
  const miaozi = miaoziLocale(locale)

  return <footer className="site-footer"><div className="shell footer-inner">
    <Image className="footer-cat" src="/images/mascot/cat-lounging-v1.webp" width={520} height={260} alt="" aria-hidden="true" />
    <Link className="brand footer-brand" href={localizedPath(locale)} aria-label="arel 中文"><Image className="brand-mark" src="/images/mascot/arel-cat-mark-v1.webp" width={256} height={256} alt="" /><Image className="brand-wordmark" src="/images/brands/arel-wordmark-v1.png" width={400} height={300} alt="arel 中文" /></Link>
    <nav className="footer-columns" aria-label="Footer navigation">
      <div className="footer-column">
        <h2>{copy.guides}</h2>
        <Link href={localizedPath(blogLocale, 'blog')}>{copy.readGuides}</Link>
        {locale === 'en' && getAllPosts('en').map((post) => <Link key={post.slug} href={localizedPath('en', `blog/${post.slug}`)}>{post.title}</Link>)}
      </div>
      <div className="footer-column">
        <h2>Moyu Chinese</h2>
        <a href={`https://moyuchinese.com/${locale}/`}>{copy.moyuSite} <LinkArrow direction="up-right" /></a>
        <a href={`https://moyuchinese.com/${locale}/blog/`}>{copy.moyuGuides} <LinkArrow direction="up-right" /></a>
      </div>
      <div className="footer-column">
        <h2>Miaozi</h2>
        <a href={`https://miaozi.co/${miaozi}/read`}>{copy.stories} <LinkArrow direction="up-right" /></a>
        <a href={`https://miaozi.co/${miaozi}/dict`}>{copy.dictionary} <LinkArrow direction="up-right" /></a>
        <a href={`https://miaozi.co/${miaozi}/pinyin`}>{copy.pinyin} <LinkArrow direction="up-right" /></a>
        <a href={`https://miaozi.co/${miaozi}/zhuyin`}>{copy.zhuyin} <LinkArrow direction="up-right" /></a>
      </div>
    </nav>
  </div></footer>
}

import type { Locale } from '@/lib/site'

type HomeCopy = {
  skip: string
  language: string
  guides: string
  heroBefore: string
  heroChinese: string
  heroAfter: string
  heroDescription: string
  readGuides: string
  englishGuidesNote: string
  moyuDescription: string
  miaoziDescription: string
  exploreMoyu: string
  exploreMiaozi: string
  moyuSite: string
  moyuGuides: string
  stories: string
  dictionary: string
  pinyin: string
  zhuyin: string
}

export const homeCopy: Record<Locale, HomeCopy> = {
  en: {
    skip: 'Skip to content', language: 'Language', guides: 'Guides', heroBefore: 'Learn ', heroChinese: 'Chinese', heroAfter: ' through immersion.',
    heroDescription: 'Spend time with Chinese videos and stories you want to finish, and get help with the parts you don’t understand yet.',
    readGuides: 'Read the guides', englishGuidesNote: 'Our guides are available in English for now.',
    moyuDescription: 'Moyu makes short Chinese videos easier to learn from, with captions you can revisit and words you can save without leaving the scene.',
    miaoziDescription: 'Miaozi pairs original Chinese stories with a dictionary, so you can check a word and keep reading without losing your place.',
    exploreMoyu: 'Explore Moyu', exploreMiaozi: 'Explore Miaozi', moyuSite: 'The app', moyuGuides: 'Moyu guides',
    stories: 'Stories', dictionary: 'Dictionary', pinyin: 'Pinyin', zhuyin: 'Zhuyin',
  },
  es: {
    skip: 'Ir al contenido', language: 'Idioma', guides: 'Guías', heroBefore: 'Aprende ', heroChinese: 'chino', heroAfter: ' por inmersión.',
    heroDescription: 'Pasa tiempo con videos e historias en chino que quieras seguir, con ayuda para entender lo que todavía se te escapa.',
    readGuides: 'Leer las guías', englishGuidesNote: 'Por ahora, nuestras guías solo están disponibles en inglés.',
    moyuDescription: 'Moyu facilita el aprendizaje con videos cortos en chino: puedes volver a los subtítulos y guardar palabras sin salir de la escena.',
    miaoziDescription: 'Miaozi combina historias originales en chino con un diccionario para que consultes una palabra y sigas leyendo sin perder el hilo.',
    exploreMoyu: 'Explorar Moyu', exploreMiaozi: 'Explorar Miaozi', moyuSite: 'La aplicación', moyuGuides: 'Guías de Moyu',
    stories: 'Historias', dictionary: 'Diccionario', pinyin: 'Pinyin', zhuyin: 'Zhuyin',
  },
  de: {
    skip: 'Zum Inhalt springen', language: 'Sprache', guides: 'Ratgeber', heroBefore: 'Lerne ', heroChinese: 'Chinesisch', heroAfter: ' durch Immersion.',
    heroDescription: 'Beschäftige dich mit chinesischen Videos und Geschichten, die du wirklich zu Ende sehen oder lesen möchtest – mit Hilfe bei den Stellen, die du noch nicht verstehst.',
    readGuides: 'Ratgeber lesen', englishGuidesNote: 'Unsere Ratgeber sind vorerst nur auf Englisch verfügbar.',
    moyuDescription: 'Moyu macht kurze chinesische Videos leichter verständlich: Untertitel lassen sich erneut ansehen und Wörter direkt in der Szene speichern.',
    miaoziDescription: 'Miaozi verbindet originale chinesische Geschichten mit einem Wörterbuch. So kannst du Wörter nachschlagen und weiterlesen, ohne den Faden zu verlieren.',
    exploreMoyu: 'Moyu entdecken', exploreMiaozi: 'Miaozi entdecken', moyuSite: 'Die App', moyuGuides: 'Moyu-Ratgeber',
    stories: 'Geschichten', dictionary: 'Wörterbuch', pinyin: 'Pinyin', zhuyin: 'Zhuyin',
  },
  fr: {
    skip: 'Aller au contenu', language: 'Langue', guides: 'Guides', heroBefore: 'Apprenez le ', heroChinese: 'chinois', heroAfter: ' en immersion.',
    heroDescription: 'Regardez des vidéos et lisez des histoires en chinois qui vous donnent envie de continuer, avec de l’aide pour les passages encore difficiles.',
    readGuides: 'Lire les guides', englishGuidesNote: 'Pour le moment, nos guides sont disponibles uniquement en anglais.',
    moyuDescription: 'Moyu rend les courtes vidéos chinoises plus faciles à étudier grâce à des sous-titres à revoir et des mots à enregistrer sans quitter la scène.',
    miaoziDescription: 'Miaozi associe des histoires originales en chinois à un dictionnaire pour vérifier un mot et reprendre la lecture sans perdre le fil.',
    exploreMoyu: 'Découvrir Moyu', exploreMiaozi: 'Découvrir Miaozi', moyuSite: 'L’application', moyuGuides: 'Guides Moyu',
    stories: 'Histoires', dictionary: 'Dictionnaire', pinyin: 'Pinyin', zhuyin: 'Zhuyin',
  },
  'pt-BR': {
    skip: 'Ir para o conteúdo', language: 'Idioma', guides: 'Guias', heroBefore: 'Aprenda ', heroChinese: 'chinês', heroAfter: ' por imersão.',
    heroDescription: 'Passe tempo com vídeos e histórias em chinês que você queira acompanhar, com ajuda para entender as partes que ainda são difíceis.',
    readGuides: 'Ler os guias', englishGuidesNote: 'Por enquanto, nossos guias estão disponíveis apenas em inglês.',
    moyuDescription: 'Moyu facilita o estudo com vídeos curtos em chinês: você pode rever as legendas e salvar palavras sem sair da cena.',
    miaoziDescription: 'Miaozi reúne histórias originais em chinês e um dicionário para você consultar uma palavra e continuar lendo sem perder o fio da história.',
    exploreMoyu: 'Conhecer o Moyu', exploreMiaozi: 'Conhecer o Miaozi', moyuSite: 'O aplicativo', moyuGuides: 'Guias do Moyu',
    stories: 'Histórias', dictionary: 'Dicionário', pinyin: 'Pinyin', zhuyin: 'Zhuyin',
  },
  vi: {
    skip: 'Chuyển đến nội dung', language: 'Ngôn ngữ', guides: 'Hướng dẫn', heroBefore: 'Học ', heroChinese: 'tiếng Trung', heroAfter: ' qua môi trường ngôn ngữ thực tế.',
    heroDescription: 'Xem video và đọc truyện tiếng Trung mà bạn thật sự muốn theo dõi, đồng thời nhận trợ giúp ở những chỗ mình chưa hiểu.',
    readGuides: 'Đọc hướng dẫn', englishGuidesNote: 'Hiện tại, các bài hướng dẫn chỉ có bản tiếng Anh.',
    moyuDescription: 'Moyu giúp bạn học từ các video tiếng Trung ngắn: xem lại phụ đề và lưu từ ngay trong lúc xem.',
    miaoziDescription: 'Miaozi kết hợp truyện tiếng Trung gốc với từ điển, giúp bạn tra từ rồi đọc tiếp mà không bị ngắt mạch.',
    exploreMoyu: 'Khám phá Moyu', exploreMiaozi: 'Khám phá Miaozi', moyuSite: 'Ứng dụng', moyuGuides: 'Hướng dẫn Moyu',
    stories: 'Truyện', dictionary: 'Từ điển', pinyin: 'Bính âm', zhuyin: 'Chú âm',
  },
  id: {
    skip: 'Langsung ke konten', language: 'Bahasa', guides: 'Panduan', heroBefore: 'Belajar ', heroChinese: 'bahasa Mandarin', heroAfter: ' lewat imersi.',
    heroDescription: 'Nikmati video dan cerita berbahasa Mandarin yang ingin kamu ikuti sampai selesai, dengan bantuan saat ada bagian yang belum kamu pahami.',
    readGuides: 'Baca panduan', englishGuidesNote: 'Untuk saat ini, panduan kami hanya tersedia dalam bahasa Inggris.',
    moyuDescription: 'Moyu memudahkan belajar dari video Mandarin pendek. Kamu bisa melihat kembali takarir dan menyimpan kata tanpa meninggalkan adegan.',
    miaoziDescription: 'Miaozi memadukan cerita Mandarin asli dengan kamus, jadi kamu bisa memeriksa sebuah kata dan terus membaca tanpa kehilangan alur.',
    exploreMoyu: 'Jelajahi Moyu', exploreMiaozi: 'Jelajahi Miaozi', moyuSite: 'Aplikasi', moyuGuides: 'Panduan Moyu',
    stories: 'Cerita', dictionary: 'Kamus', pinyin: 'Pinyin', zhuyin: 'Zhuyin',
  },
  ja: {
    skip: '本文へ移動', language: '言語', guides: '学習ガイド', heroBefore: 'イマージョンで', heroChinese: '中国語', heroAfter: 'を学ぼう。',
    heroDescription: '最後まで見たくなる中国語の動画や物語に触れながら、まだ分からないところはその場で確認できます。',
    readGuides: 'ガイドを読む', englishGuidesNote: '学習ガイドは現在、英語版のみ公開しています。',
    moyuDescription: 'Moyuなら、短い中国語動画の字幕を見返したり、場面を離れずに単語を保存したりできます。',
    miaoziDescription: 'Miaoziはオリジナルの中国語ストーリーと辞書を組み合わせ、単語を調べても流れを切らさずに読み進められます。',
    exploreMoyu: 'Moyuを見る', exploreMiaozi: 'Miaoziを見る', moyuSite: 'アプリ', moyuGuides: 'Moyuのガイド',
    stories: 'ストーリー', dictionary: '辞書', pinyin: 'ピンイン', zhuyin: '注音',
  },
  ko: {
    skip: '본문으로 건너뛰기', language: '언어', guides: '학습 가이드', heroBefore: '몰입하며 ', heroChinese: '중국어', heroAfter: '를 배워 보세요.',
    heroDescription: '끝까지 보고 싶은 중국어 영상과 이야기를 접하고, 아직 이해되지 않는 부분은 바로 확인해 보세요.',
    readGuides: '가이드 읽기', englishGuidesNote: '학습 가이드는 현재 영어로만 제공됩니다.',
    moyuDescription: 'Moyu에서는 짧은 중국어 영상의 자막을 다시 보고, 장면을 떠나지 않고 단어를 저장할 수 있습니다.',
    miaoziDescription: 'Miaozi는 중국어 원작 이야기와 사전을 함께 제공해, 모르는 단어를 확인한 뒤에도 흐름을 놓치지 않고 읽을 수 있습니다.',
    exploreMoyu: 'Moyu 살펴보기', exploreMiaozi: 'Miaozi 살펴보기', moyuSite: '앱', moyuGuides: 'Moyu 가이드',
    stories: '이야기', dictionary: '사전', pinyin: '병음', zhuyin: '주음',
  },
  th: {
    skip: 'ข้ามไปยังเนื้อหา', language: 'ภาษา', guides: 'คู่มือ', heroBefore: 'ซึมซับ', heroChinese: 'ภาษาจีน', heroAfter: 'จากสิ่งที่คุณชอบ',
    heroDescription: 'ใช้เวลากับวิดีโอและเรื่องราวภาษาจีนที่คุณอยากติดตามจนจบ พร้อมตัวช่วยเมื่อเจอส่วนที่ยังไม่เข้าใจ',
    readGuides: 'อ่านคู่มือ', englishGuidesNote: 'ขณะนี้คู่มือของเรามีเฉพาะภาษาอังกฤษ',
    moyuDescription: 'Moyu ช่วยให้เรียนรู้จากวิดีโอภาษาจีนสั้น ๆ ได้ง่ายขึ้น คุณย้อนดูคำบรรยายและบันทึกคำศัพท์ได้โดยไม่ต้องออกจากฉาก',
    miaoziDescription: 'Miaozi รวมเรื่องราวภาษาจีนต้นฉบับกับพจนานุกรม ให้คุณค้นคำศัพท์แล้วอ่านต่อได้โดยไม่เสียอรรถรส',
    exploreMoyu: 'สำรวจ Moyu', exploreMiaozi: 'สำรวจ Miaozi', moyuSite: 'แอป', moyuGuides: 'คู่มือ Moyu',
    stories: 'เรื่องราว', dictionary: 'พจนานุกรม', pinyin: 'พินอิน', zhuyin: 'จู้อิน',
  },
}

type BlogCopy = { title: string; intro: string; description: string; englishArticlesNote: string; allGuides: string; moreGuides: string }

export const blogCopy: Record<Locale, BlogCopy> = {
  en: {
    title: 'Chinese immersion guides', intro: 'Practical help for choosing Chinese videos, reading stories, and making sense of unfamiliar words.',
    description: 'Practical guides to understanding Chinese through videos and reading.', englishArticlesNote: '', allGuides: 'All guides', moreGuides: 'More guides',
  },
  es: {
    title: 'Guías para aprender chino por inmersión', intro: 'Consejos prácticos para elegir videos en chino, leer historias y entender palabras desconocidas.',
    description: 'Guías prácticas para entender el chino mediante videos y lectura.', englishArticlesNote: 'Los artículos están disponibles en inglés por ahora.', allGuides: 'Todas las guías', moreGuides: 'Más guías',
  },
  de: {
    title: 'Ratgeber zum Chinesischlernen durch Immersion', intro: 'Praktische Hilfe bei der Auswahl chinesischer Videos, beim Lesen von Geschichten und beim Verstehen unbekannter Wörter.',
    description: 'Praktische Ratgeber, um Chinesisch durch Videos und Lesen besser zu verstehen.', englishArticlesNote: 'Die Artikel sind derzeit nur auf Englisch verfügbar.', allGuides: 'Alle Ratgeber', moreGuides: 'Weitere Ratgeber',
  },
  fr: {
    title: 'Guides pour apprendre le chinois en immersion', intro: 'Des conseils pratiques pour choisir des vidéos en chinois, lire des histoires et comprendre les mots inconnus.',
    description: 'Des guides pratiques pour comprendre le chinois grâce aux vidéos et à la lecture.', englishArticlesNote: 'Les articles sont disponibles en anglais pour le moment.', allGuides: 'Tous les guides', moreGuides: 'Autres guides',
  },
  'pt-BR': {
    title: 'Guias para aprender chinês por imersão', intro: 'Ajuda prática para escolher vídeos em chinês, ler histórias e entender palavras desconhecidas.',
    description: 'Guias práticos para entender chinês por meio de vídeos e leitura.', englishArticlesNote: 'Os artigos estão disponíveis em inglês por enquanto.', allGuides: 'Todos os guias', moreGuides: 'Mais guias',
  },
  vi: {
    title: 'Hướng dẫn học tiếng Trung qua nội dung thực tế', intro: 'Gợi ý thiết thực để chọn video tiếng Trung, đọc truyện và hiểu những từ chưa biết.',
    description: 'Hướng dẫn thực tế để hiểu tiếng Trung qua video và bài đọc.', englishArticlesNote: 'Hiện tại, bài viết chỉ có bản tiếng Anh.', allGuides: 'Tất cả hướng dẫn', moreGuides: 'Hướng dẫn khác',
  },
  id: {
    title: 'Panduan belajar bahasa Mandarin lewat imersi', intro: 'Kiat praktis untuk memilih video Mandarin, membaca cerita, dan memahami kata yang belum dikenal.',
    description: 'Panduan praktis untuk memahami bahasa Mandarin lewat video dan bacaan.', englishArticlesNote: 'Artikel saat ini hanya tersedia dalam bahasa Inggris.', allGuides: 'Semua panduan', moreGuides: 'Panduan lainnya',
  },
  ja: {
    title: '中国語イマージョン学習ガイド', intro: '中国語の動画の選び方、物語の読み方、知らない単語への向き合い方を紹介します。',
    description: '動画と読書で中国語を理解するための実践的な学習ガイド。', englishArticlesNote: '記事の本文は現在、英語のみです。', allGuides: 'すべてのガイド', moreGuides: 'ほかのガイド',
  },
  ko: {
    title: '중국어 몰입 학습 가이드', intro: '중국어 영상 고르기, 이야기 읽기, 모르는 단어 이해하기에 도움이 되는 실용적인 글입니다.',
    description: '영상과 읽기를 통해 중국어를 이해하는 데 도움이 되는 실용적인 가이드.', englishArticlesNote: '현재 글의 본문은 영어로만 제공됩니다.', allGuides: '모든 가이드', moreGuides: '다른 가이드',
  },
  th: {
    title: 'คู่มือเรียนภาษาจีนแบบซึมซับ', intro: 'คำแนะนำที่ใช้ได้จริงสำหรับเลือกวิดีโอภาษาจีน อ่านเรื่องราว และทำความเข้าใจคำที่ไม่คุ้นเคย',
    description: 'คู่มือเรียนภาษาจีนจากวิดีโอและการอ่านที่นำไปใช้ได้จริง', englishArticlesNote: 'ขณะนี้เนื้อหาบทความมีเฉพาะภาษาอังกฤษ', allGuides: 'คู่มือทั้งหมด', moreGuides: 'คู่มืออื่น ๆ',
  },
}

type GuidePreview = { title: string; description: string }
export const guidePreviewCopy: Partial<Record<Locale, Record<string, GuidePreview>>> = {
  es: {
    'choose-a-chinese-video': { title: 'Cómo elegir videos en chino para practicar la comprensión oral', description: 'Comprueba cuánto entiendes, si el audio y los subtítulos son claros, y si el tema te interesa.' },
    'read-without-translating-every-word': { title: 'Cuándo buscar una palabra al leer en chino', description: 'Sigue un pasaje breve y decide qué palabras deducir, ignorar o consultar en el diccionario.' },
  },
  de: {
    'choose-a-chinese-video': { title: 'So wählst du chinesische Videos zum Hörtraining aus', description: 'Prüfe, wie viel du verstehst, ob Ton und Untertitel klar sind und ob dich das Thema interessiert.' },
    'read-without-translating-every-word': { title: 'Wann du beim Lesen auf Chinesisch ein Wort nachschlagen solltest', description: 'An einem kurzen Text siehst du, welche Wörter du erschließen, übergehen oder nachschlagen kannst.' },
  },
  fr: {
    'choose-a-chinese-video': { title: 'Comment choisir des vidéos en chinois pour travailler l’écoute', description: 'Évalue ce que tu comprends, la qualité du son et des sous-titres, et ton intérêt pour le sujet.' },
    'read-without-translating-every-word': { title: 'Quand chercher un mot en lisant en chinois', description: 'À partir d’un court passage, vois quels mots déduire, laisser de côté ou chercher dans le dictionnaire.' },
  },
  'pt-BR': {
    'choose-a-chinese-video': { title: 'Como escolher vídeos em chinês para praticar a escuta', description: 'Veja quanto você entende, se o áudio e as legendas são claros e se o assunto interessa.' },
    'read-without-translating-every-word': { title: 'Quando consultar uma palavra ao ler em chinês', description: 'Use um trecho curto para decidir quais palavras deduzir, deixar passar ou consultar no dicionário.' },
  },
  vi: {
    'choose-a-chinese-video': { title: 'Cách chọn video tiếng Trung để luyện nghe', description: 'Kiểm tra mức độ hiểu, chất lượng âm thanh và phụ đề, rồi xem chủ đề có đủ hấp dẫn không.' },
    'read-without-translating-every-word': { title: 'Khi nào nên tra từ lúc đọc tiếng Trung', description: 'Qua một đoạn văn ngắn, hãy xem từ nào có thể đoán, bỏ qua hoặc cần tra từ điển.' },
  },
  id: {
    'choose-a-chinese-video': { title: 'Cara memilih video Mandarin untuk latihan mendengarkan', description: 'Periksa seberapa banyak yang kamu pahami, kejernihan audio dan takarir, serta minatmu pada topiknya.' },
    'read-without-translating-every-word': { title: 'Kapan perlu mencari arti kata saat membaca bahasa Mandarin', description: 'Lewat satu bacaan pendek, lihat kata mana yang bisa ditebak, dilewati, atau dicari di kamus.' },
  },
  ja: {
    'choose-a-chinese-video': { title: 'リスニング練習に使う中国語動画の選び方', description: '理解できる内容か、音声と字幕は明瞭か、最後まで見たい題材かを確認します。' },
    'read-without-translating-every-word': { title: '中国語を読むとき、単語を調べるべき場面', description: '短い文章を使い、推測できる語、読み飛ばせる語、辞書で調べる語を見分けます。' },
  },
  ko: {
    'choose-a-chinese-video': { title: '듣기 연습용 중국어 영상 고르는 법', description: '얼마나 이해되는지, 음성과 자막이 명확한지, 관심 있는 주제인지 확인해 보세요.' },
    'read-without-translating-every-word': { title: '중국어를 읽을 때 단어를 찾아봐야 하는 순간', description: '짧은 글을 통해 뜻을 짐작하거나 넘어가거나 사전에서 찾아볼 단어를 구분해 보세요.' },
  },
  th: {
    'choose-a-chinese-video': { title: 'วิธีเลือกวิดีโอภาษาจีนเพื่อฝึกฟัง', description: 'ดูว่าคุณเข้าใจได้แค่ไหน เสียงและคำบรรยายชัดหรือไม่ และเนื้อหาน่าสนใจพอไหม' },
    'read-without-translating-every-word': { title: 'ควรเปิดพจนานุกรมเมื่อไรขณะอ่านภาษาจีน', description: 'ลองอ่านบทความสั้น ๆ แล้วแยกว่าคำไหนเดาได้ ข้ามได้ หรือควรค้นความหมาย' },
  },
}

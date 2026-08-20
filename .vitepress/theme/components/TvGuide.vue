<script setup>
import { computed, ref } from 'vue'

const channels = [
  {
    id: 'tv-cultura',
    name: 'TV Cultura',
    location: 'Sao Paulo, SP',
    signal: 'HD',
    category: 'Cultura',
    sp: true,
    url: 'https://culturaplay.tvcultura.com.br/channels/14/embed',
    logo: 'https://i.ibb.co/nm0jXMM/cultura-3x.png'
  },
  {
    id: 'cultura-fast',
    name: 'Cultura Fast',
    location: 'Sao Paulo, SP',
    signal: 'HD',
    category: 'Cultura',
    sp: true,
    url: 'https://culturaplay.tvcultura.com.br/channels/53/embed',
    logo: 'https://eitv6.cdn.broadpeak.io/account351-i1438/channel/53/quadrada_-3-_pequeno-1723832301.png'
  },
  {
    id: 'rede-brasil',
    name: 'Rede Brasil',
    location: 'Sao Paulo, SP',
    signal: 'Full HD',
    category: 'Variedades',
    sp: true,
    url: 'https://redebrasil.nuvemplay.live/hls/stream.m3u8',
    logo: 'https://i.imgur.com/TXJKwzZ.png'
  },
  {
    id: 'veja-plus',
    name: 'VEJA+ TV',
    location: 'Nacional',
    signal: 'Full HD',
    category: 'Noticias',
    url: 'https://gpa-vja.otteravision.com/gpa/vja/vja.m3u8',
    logo: 'https://i.imgur.com/n0pxHo4.png'
  },
  {
    id: 'canal-futura',
    name: 'Canal Futura',
    location: 'Nacional',
    signal: '720p',
    category: 'Cultura',
    url: 'http://45.162.64.114/FUTURA/index.m3u8',
    logo: 'https://i.imgur.com/LgynEBC.png'
  },
  {
    id: 'globo-hd',
    name: 'Globo HD',
    location: 'Sao Paulo, SP',
    signal: '720p',
    category: 'Variedades',
    sp: true,
    url: 'http://170.84.165.204/Globo_HD/index.m3u8',
    logo: 'https://i.imgur.com/OoSUg78.png'
  },
  {
    id: 'sbt',
    name: 'SBT',
    location: 'Sao Paulo, SP',
    signal: 'HD',
    category: 'Variedades',
    sp: true,
    url: 'https://cdn.jmvstream.com/w/LVW-10801/LVW10801_Xvg4R0u57n/playlist.m3u8',
    logo: 'https://i.imgur.com/tc1ALuu.png'
  },
  {
    id: 'band-news',
    name: 'Band News',
    location: 'Sao Paulo, SP',
    signal: '1080p',
    category: 'Noticias',
    sp: true,
    url: 'https://cdn-5.nxplay.com.br/BAND_NEWS/index.m3u8',
    logo: 'https://i.ibb.co/0jVZBFp/u8ya-iw-R-400x400.jpg'
  },
  {
    id: 'comedy-central-pluto',
    name: 'Comedy Central',
    location: 'Nacional',
    signal: 'FAST',
    category: 'Comedia',
    url: 'https://jmp2.uk/plu-5f357e91b18f0b00073583d2.m3u8',
    logo: 'https://images.pluto.tv/channels/5f357e91b18f0b00073583d2/colorLogoPNG.png'
  },
  {
    id: 'globo-news',
    name: 'GloboNews',
    location: 'Nacional',
    signal: '720p',
    category: 'Noticias',
    url: 'http://177.52.24.163/GLOBO-NEWS-HD/index.m3u8',
    logo: 'https://i.imgur.com/3yZyaCm.png'
  },
  {
    id: 'history',
    name: 'History',
    location: 'Nacional',
    signal: '720p',
    category: 'Documentarios',
    url: 'http://45.177.114.114/HISTORY/index.m3u8',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/History_%282021%29.svg/500px-History_%282021%29.svg.png'
  },
  {
    id: 'mcgyver',
    name: 'McGyver',
    location: 'Nacional',
    signal: 'FAST',
    category: 'Series',
    url: 'https://jmp2.uk/plu-63eb9dc84e83e70008abea92.m3u8',
    logo: 'https://images.pluto.tv/channels/63eb9dc84e83e70008abea92/colorLogoPNG.png'
  },
  {
    id: 'mtv-rocks',
    name: 'MTV Rocks',
    location: 'Nacional',
    signal: 'FAST',
    category: 'Musica',
    url: 'https://jmp2.uk/plu-66a01e07d2d50d0008100d6a.m3u8',
    logo: 'https://images.pluto.tv/channels/66a01e07d2d50d0008100d6a/colorLogoPNG.png'
  },
  {
    id: 'nickelodeon-teen',
    name: 'Nickelodeon Teen',
    location: 'Nacional',
    signal: 'FAST',
    category: 'Infantil',
    url: 'https://jmp2.uk/plu-60f5fabf0721880007cd50e3.m3u8',
    logo: 'https://images.pluto.tv/channels/60f5fabf0721880007cd50e3/colorLogoPNG_1767888207915.png'
  },
  {
    id: 'nickelodeon-toons',
    name: 'Nickelodeon Toons',
    location: 'Nacional',
    signal: 'FAST',
    category: 'Infantil',
    url: 'https://jmp2.uk/plu-645951c0e94c38000802d2cb.m3u8',
    logo: 'https://images.pluto.tv/channels/645951c0e94c38000802d2cb/colorLogoPNG_1767888119852.png'
  },
  {
    id: 'nickonline',
    name: 'NickOnline',
    location: 'Brasil',
    signal: '720p',
    category: 'Infantil',
    url: 'https://x1colegal.com/hls/stream.m3u8',
    logo: 'https://x1colegal.com/logo.png'
  },
  {
    id: 'o-encantador-de-caes',
    name: 'O Encantador de Caes',
    location: 'Nacional',
    signal: 'FAST',
    category: 'Documentarios',
    url: 'https://jmp2.uk/plu-61099df8cee03b00074b2ecf.m3u8',
    logo: 'https://i.imgur.com/sQn6vvh.png'
  },
  {
    id: 'pluto-tv-historia',
    name: 'Historia',
    location: 'Nacional',
    signal: 'FAST',
    category: 'Documentarios',
    url: 'https://jmp2.uk/plu-5f1ef1a8cec6be00072a7ac9.m3u8',
    logo: 'https://images.pluto.tv/channels/5f1ef1a8cec6be00072a7ac9/colorLogoPNG_1754405659295.png'
  },
  {
    id: 'mtv-classic',
    name: 'MTV Classic',
    location: 'Nacional',
    signal: 'FAST',
    category: 'Musica',
    url: 'https://jmp2.uk/plu-66a01dcb8561260008b0a41d.m3u8',
    logo: 'https://images.pluto.tv/channels/66a01dcb8561260008b0a41d/colorLogoPNG.png'
  },
  {
    id: 'pluto-tv-policial',
    name: 'Policial',
    location: 'Nacional',
    signal: 'FAST',
    category: 'Documentarios',
    url: 'https://jmp2.uk/plu-678fdf9e3de7c8cf948e8824.m3u8',
    logo: 'https://images.pluto.tv/channels/678fdf9e3de7c8cf948e8824/colorLogoPNG.png'
  },
  {
    id: 'pluto-tv-series-comedia',
    name: 'Series Comedia',
    location: 'Nacional',
    signal: 'FAST',
    category: 'Comedia',
    url: 'https://jmp2.uk/plu-655e5bc94261ca000810cb17.m3u8',
    logo: 'https://images.pluto.tv/channels/655e5bc94261ca000810cb17/colorLogoPNG.png'
  },
  {
    id: 'record-720',
    name: 'Record (720p)',
    location: 'Nacional',
    signal: '720p',
    category: 'Variedades',
    url: 'https://playplusspo-lh.akamaihd.net/i/pp_sp@350176/index_720_av-p.m3u8',
    logo: 'https://i.imgur.com/sz9gTTr.png'
  },
  {
    id: 'record-news-720',
    name: 'Record News (720p)',
    location: 'Nacional',
    signal: '720p',
    category: 'Noticias',
    url: 'http://45.162.64.114/RECORD_NEWS/index.m3u8',
    logo: 'https://i.imgur.com/HZDRG0K.png'
  },
  {
    id: 'redetv',
    name: 'RedeTV!',
    location: 'Sao Paulo, SP',
    signal: '1080p',
    category: 'Variedades',
    sp: true,
    url: 'http://45.190.28.50/REDE_TV_HD/index.m3u8',
    logo: 'https://i.imgur.com/ZJgD38F.png'
  }
]

const filters = ['Todos', 'Sao Paulo', 'Noticias', 'Cultura', 'Variedades', 'Esportes', 'Comedia', 'Documentarios', 'Musica', 'Infantil', 'Series']
const activeFilter = ref('Todos')
const query = ref('')

const normalize = (value) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()

const visibleChannels = computed(() => {
  const search = normalize(query.value.trim())

  return channels.filter((channel) => {
    const matchesFilter = activeFilter.value === 'Todos'
      || (activeFilter.value === 'Sao Paulo' && channel.sp)
      || channel.category === activeFilter.value

    const haystack = normalize(`${channel.name} ${channel.location} ${channel.category} ${channel.signal}`)
    return matchesFilter && (!search || haystack.includes(search))
  })
})

function openChannel(channel) {
  window.open(channel.url, '_blank', 'noopener,noreferrer')
}

function hideBrokenLogo(event) {
  event.currentTarget.style.display = 'none'
}
</script>

<template>
  <div class="tv-app">
    <header class="tv-hero">
      <h1>TV Brasil</h1>
    </header>

    <section class="channel-browser" aria-labelledby="channels-heading">
      <h2 id="channels-heading" class="sr-only">Canais</h2>

      <div class="browser-tools">
        <label class="search-box">
          <span class="sr-only">Buscar canal</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19">
            <path d="m21 21-4.4-4.4m2.4-5.1A7.5 7.5 0 1 1 4 11.5a7.5 7.5 0 0 1 15 0Z" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-width="1.8" />
          </svg>
          <input v-model="query" type="search" placeholder="Buscar canal ou cidade" />
        </label>

        <div class="filter-row" aria-label="Filtrar canais">
          <button v-for="filter in filters" :key="filter" type="button" :class="{ active: activeFilter === filter }"
            :aria-pressed="activeFilter === filter" @click="activeFilter = filter">
            {{ filter }}
          </button>
        </div>
      </div>

      <div v-if="visibleChannels.length" class="channel-grid">
        <button v-for="channel in visibleChannels" :key="channel.id" type="button" class="channel-card"
          :aria-label="`Abrir ${channel.name} em nova aba`" @click="openChannel(channel)">
          <span class="channel-card__logo logo-frame" aria-hidden="true">
            <span>{{ channel.name.charAt(0) }}</span>
            <img :src="channel.logo" alt="" loading="lazy" @error="hideBrokenLogo" />
          </span>

          <span class="channel-card__copy">
            <strong>{{ channel.name }}</strong>
            <small>{{ channel.location }}</small>
          </span>

          <span class="channel-card__badges">
            <small v-if="channel.sp" class="sp-badge">SP</small>
            <small>{{ channel.signal }}</small>
          </span>

          <svg class="open-icon" aria-hidden="true" viewBox="0 0 36 36" width="36" height="36">
            <circle cx="18" cy="18" r="17" fill="currentColor" opacity=".12" />
            <path d="M17 10h9v9h-2v-5.6l-8.3 8.3-1.4-1.4 8.3-8.3H17z" fill="currentColor" />
          </svg>
        </button>
      </div>

      <div v-else class="empty-state">
        Nenhum canal corresponde a sua busca.
      </div>
    </section>
  </div>
</template>

<style scoped>
.tv-app {
  --tv-accent: #12a06a;
  --tv-accent-strong: #0d8658;
  --tv-gold: #b88916;
  --tv-page-text: #f4f7f5;
  --tv-page-muted: rgba(244, 247, 245, .72);
  --tv-card-text: #18211e;
  --tv-card-muted: #66736e;
  --tv-line: #dce5e1;
  --tv-card-bg: #fff;
  --tv-card-soft: #f4f8f6;
  color: var(--tv-page-text);
  padding: 1rem 0 2rem;
}

.tv-hero {
  margin-bottom: 1.5rem;
}

.tv-app h1 {
  margin: 0;
  border: 0;
  color: var(--tv-page-text);
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  line-height: .94;
  letter-spacing: -.06em;
}

.browser-tools {
  display: grid;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.search-box {
  display: flex;
  align-items: center;
  gap: .7rem;
  max-width: 360px;
  padding: .85rem 1rem;
  border: 1px solid rgba(255, 255, 255, .08);
  border-radius: 14px;
  background: rgba(255, 255, 255, .08);
  color: var(--tv-page-muted);
  backdrop-filter: blur(10px);
}

.search-box input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--tv-page-text);
  font: inherit;
}

.search-box input::placeholder {
  color: rgba(244, 247, 245, .5);
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: .6rem;
}

.filter-row button {
  padding: .62rem .9rem;
  border: 1px solid rgba(255, 255, 255, .08);
  border-radius: 999px;
  background: rgba(255, 255, 255, .06);
  color: var(--tv-page-muted);
  font: inherit;
  font-size: .9rem;
  font-weight: 700;
  cursor: pointer;
  transition: .18s ease;
}

.filter-row button.active,
.filter-row button:hover {
  border-color: rgba(18, 160, 106, .45);
  background: rgba(18, 160, 106, .18);
  color: #e9f8f1;
}

.channel-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.channel-card {
  position: relative;
  display: grid;
  grid-template-columns: 104px minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
  min-height: 146px;
  padding: 1rem 5.6rem 1rem 1.05rem;
  border: 1px solid rgba(255, 255, 255, .08);
  border-radius: 24px;
  background: var(--tv-card-bg);
  color: var(--tv-card-text);
  text-align: left;
  cursor: pointer;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}

.channel-card:hover {
  transform: translateY(-2px);
  border-color: rgba(18, 160, 106, .28);
  box-shadow: 0 24px 54px rgba(0, 0, 0, .16);
}

.channel-card__logo {
  width: 104px;
  height: 104px;
  flex-shrink: 0;
}

.logo-frame {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 30px;
  background: linear-gradient(135deg, #eef5f2, #dde8e3);
  color: var(--tv-accent-strong);
  font-weight: 800;
}

.logo-frame>span {
  position: absolute;
  font-size: 1.55rem;
}

.logo-frame img {
  position: relative;
  z-index: 1;
  width: 76%;
  height: 76%;
  object-fit: contain;
}

.channel-card__copy {
  display: grid;
  gap: .38rem;
  min-width: 0;
}

.channel-card__copy strong {
  font-size: clamp(1.15rem, 2vw, 1.35rem);
  line-height: 1.15;
  word-break: normal;
  overflow-wrap: normal;
  hyphens: none;
}

.channel-card__copy small {
  color: var(--tv-card-muted);
  font-size: .92rem;
}

.channel-card__badges {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: .55rem;
}

.channel-card__badges small {
  padding: .42rem .7rem;
  border-radius: 999px;
  background: var(--tv-card-soft);
  color: var(--tv-card-muted);
  font-size: .74rem;
  font-weight: 800;
  white-space: nowrap;
}

.sp-badge {
  background: rgba(184, 137, 22, .12) !important;
  color: var(--tv-gold) !important;
}

.open-icon {
  position: absolute;
  right: 1rem;
  bottom: .9rem;
  color: var(--tv-accent-strong);
}

.empty-state {
  padding: 1.25rem;
  border: 1px dashed rgba(255, 255, 255, .18);
  border-radius: 16px;
  color: var(--tv-page-muted);
  text-align: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 900px) {
  .channel-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

@media (max-width: 760px) {
  .channel-card {
    grid-template-columns: 92px minmax(0, 1fr);
    gap: .9rem;
    padding-right: 1rem;
    padding-bottom: 4rem;
  }

  .channel-card__logo {
    width: 92px;
    height: 92px;
  }

  .channel-card__badges {
    top: auto;
    right: 1rem;
    bottom: .9rem;
    flex-direction: row;
    align-items: center;
  }
}
</style>

// O OUTRO LADO DA CIDADE — Script Principal

// ============================================
// DATA: 20 Programas
// ============================================

const episodes = [
    {
        id: 1,
        number: '01',
        title: 'Memórias do Chafik: Raízes de Mauá',
        date: '2011-07-15',
        month: 'Julho',
        theme: 'história',
        description: 'Histórias de chegada e primeiros passos na região. Vozes que contam como tudo começou.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/01-memorias-chafik.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Depoimentos sobre a história do Chafik e primeiras ocupações no bairro.',
        quote: 'Aqui a gente construiu uma comunidade do zero',
        featured: true
    },
    {
        id: 2,
        number: '02',
        title: 'Jardim Zaíra: Lutas por Regularização',
        date: '2011-08-10',
        month: 'Agosto',
        theme: 'regularização',
        description: 'O caminho até agora na luta por documentos e segurança fundiária. Desafios e esperança.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/02-jardim-zaiра.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Mobilização comunitária pela regularização de terras no Jardim Zaíra.',
        quote: 'Moradia é direito humano, não é luxo',
        featured: false
    },
    {
        id: 3,
        number: '03',
        title: 'Vozes de Crianças: O Bairro que Queremos',
        date: '2011-08-25',
        month: 'Agosto',
        theme: 'crianças',
        description: 'Como as crianças enxergam o futuro de Mauá. Sonhos, medos e esperança da nova geração.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/03-vozes-criancas.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Entrevistas com crianças sobre vida, comunidade e futuro.',
        quote: 'Quero um parque grande onde a gente possa brincar',
        featured: true
    },
    {
        id: 4,
        number: '04',
        title: 'Mulheres em Ação: Resistência no Dia a Dia',
        date: '2011-09-05',
        month: 'Setembro',
        theme: 'história',
        description: 'Histórias de luta, resiliência e força de mulheres que movem a comunidade.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/04-mulheres-acao.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Depoimentos de mulheres líderes comunitárias e suas trajetórias.',
        quote: 'Nós somos o coração desse lugar',
        featured: false
    },
    {
        id: 5,
        number: '05',
        title: 'Comunicação Comunitária: Fazendo Diferença',
        date: '2011-09-20',
        month: 'Setembro',
        theme: 'cultura',
        description: 'Como o rádio comunitário conecta e mobiliza pessoas. O poder das ondas.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/05-comunicacao.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Reflexões sobre comunicação comunitária e seu papel transformador.',
        quote: 'A rádio é a voz do povo',
        featured: true
    },
    {
        id: 6,
        number: '06',
        title: 'Educação: Caminhos para Transformação',
        date: '2011-09-30',
        month: 'Setembro',
        theme: 'crianças',
        description: 'Desafios e possibilidades da educação em comunidades periféricas.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/06-educacao.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Discussões sobre acesso à educação de qualidade em Mauá.',
        quote: 'Educação é o melhor presente que podemos dar',
        featured: false
    },
    {
        id: 7,
        number: '07',
        title: 'Saúde e Bem-estar: O que Falta',
        date: '2011-10-08',
        month: 'Outubro',
        theme: 'regularização',
        description: 'Carências em saúde pública e iniciativas de cuidado na comunidade.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/07-saude.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Depoimentos sobre desafios de acesso à saúde no bairro.',
        quote: 'Saúde é um direito, não privilégio',
        featured: false
    },
    {
        id: 8,
        number: '08',
        title: 'Arte e Cultura: Expressão da Resistência',
        date: '2011-10-22',
        month: 'Outubro',
        theme: 'cultura',
        description: 'Grafite, música, poesia: como a arte ocupa as ruas e corações.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/08-arte-cultura.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Entrevistas com artistas locais sobre criatividade e resistência.',
        quote: 'A arte é a nossa liberação',
        featured: false
    },
    {
        id: 9,
        number: '09',
        title: 'Memória Coletiva: Documentando Histórias',
        date: '2011-11-05',
        month: 'Novembro',
        theme: 'história',
        description: 'Por que guardar memória importa. Histórias que não podem ser esquecidas.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/09-memoria.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Reflexões sobre importância da preservação de memória comunitária.',
        quote: 'Quem conta a história somos nós',
        featured: true
    },
    {
        id: 10,
        number: '10',
        title: 'Trabalho e Economia Solidária',
        date: '2011-11-18',
        month: 'Novembro',
        theme: 'regularização',
        description: 'Alternativas econômicas e cooperativismo na periferia.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/10-economia.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Iniciativas de economia solidária e geração de renda no bairro.',
        quote: 'Juntos somos mais fortes economicamente',
        featured: false
    },
    {
        id: 11,
        number: '11',
        title: 'Espaço Urbano: O Direito à Cidade',
        date: '2011-11-25',
        month: 'Novembro',
        theme: 'história',
        description: 'Como as periferias lutam pelo direito de existir na cidade.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/11-espaco-urbano.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Discussões sobre direito à cidade e justiça urbana.',
        quote: 'A periferia é parte da cidade',
        featured: false
    },
    {
        id: 12,
        number: '12',
        title: 'Festa da Comunidade: Celebração e Força',
        date: '2011-12-02',
        month: 'Dezembro',
        theme: 'cultura',
        description: 'Festas, celebrações e momentos de união que fortificam vínculos.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/12-festa.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Cobertura de eventos e celebrações comunitárias em Mauá.',
        quote: 'Juntos celebramos o que conseguimos',
        featured: false
    },
    {
        id: 13,
        number: '13',
        title: 'Ambientes de Esperança: Coletivos que Transformam',
        date: '2011-12-09',
        month: 'Dezembro',
        theme: 'cultura',
        description: 'Espaços e iniciativas que alimentam sonhos e transformação social.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/13-esperanca.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Histórias de coletivos e espaços comunitários de resistência.',
        quote: 'A esperança é o combustível da transformação',
        featured: true
    },
    {
        id: 14,
        number: '14',
        title: 'Juventude em Movimento: Vozes do Amanhã',
        date: '2011-12-16',
        month: 'Dezembro',
        theme: 'crianças',
        description: 'Jovens falam sobre seus projetos, frustrações e visionarismo.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/14-juventude.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Entrevistas com jovens sobre seus planos e perspectivas.',
        quote: 'Podemos mudar o mundo',
        featured: false
    },
    {
        id: 15,
        number: '15',
        title: 'Redes de Solidariedade: Ligações que Sustentam',
        date: '2011-12-23',
        month: 'Dezembro',
        theme: 'história',
        description: 'Como redes de apoio sustentam a vida em comunidade.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/15-redes.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Reflexões sobre importância de redes comunitárias de suporte.',
        quote: 'Sozinhos é difícil, juntos é possível',
        featured: false
    },
    {
        id: 16,
        number: '16',
        title: 'Direitos Humanos: Luta Permanente',
        date: '2011-12-30',
        month: 'Dezembro',
        theme: 'regularização',
        description: 'Sobre direitos, deveres e a luta contínua por dignidade.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/16-direitos.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Discussões sobre direitos humanos e acesso à justiça.',
        quote: 'Direitos são para todos, sempre',
        featured: false
    },
    {
        id: 17,
        number: '17',
        title: 'Geração Digital: Tecnologia na Comunidade',
        date: '2011-08-15',
        month: 'Agosto',
        theme: 'crianças',
        description: 'Como tecnologia pode ser ferramenta de emancipação.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/17-digital.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Iniciativas de acesso à tecnologia e inclusão digital.',
        quote: 'Tecnologia na mão certa transforma',
        featured: false
    },
    {
        id: 18,
        number: '18',
        title: 'Natureza e Sustentabilidade: Verde que Resiste',
        date: '2011-10-15',
        month: 'Outubro',
        theme: 'cultura',
        description: 'Projetos ambientais e relação com natureza em contexto urbano.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/18-natureza.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Iniciativas de sustentabilidade ambiental no bairro.',
        quote: 'Cuidar da terra é cuidar de nós',
        featured: false
    },
    {
        id: 19,
        number: '19',
        title: 'Pessoas, Histórias, Vidas: Retratos',
        date: '2011-11-10',
        month: 'Novembro',
        theme: 'história',
        description: 'Retratos sonoros de pessoas que fazem a diferença.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/19-retratos.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Biografias e histórias de vida de moradores destacados.',
        quote: 'Cada pessoa tem uma história importante',
        featured: false
    },
    {
        id: 20,
        number: '20',
        title: 'Encerramento: Continuidade da Luta',
        date: '2011-12-31',
        month: 'Dezembro',
        theme: 'história',
        description: 'Reflexões finais, balanço e continuidade do movimento.',
        audioUrl: 'https://archive.org/download/outro-lado-da-cidade/20-encerramento.mp3',
        archiveLink: 'https://archive.org/details/outro-lado-da-cidade',
        summary: 'Epílogo da série: reflexões sobre o que foi aprendido.',
        quote: 'Este não é o fim, é o começo de algo novo',
        featured: true
    }
];

// ============================================
// STATE MANAGEMENT
// ============================================

let currentFilter = 'all';
let currentView = 'grid';
let currentlyPlaying = null;
let players = {};

// ============================================
// DOM INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderEpisodes();
    renderHighlights();
    setupEventListeners();
    setupTimelineListeners();
});

// ============================================
// THEME TOGGLE
// ============================================

function initializeTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.querySelector('.theme-icon');
    const isDark = document.body.classList.contains('dark-mode');
    icon.textContent = isDark ? '☀️' : '🌙';
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// ============================================
// FILTER FUNCTIONALITY
// ============================================

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderEpisodes();
        });
    });

    // View toggle buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentView = e.target.dataset.view;
            renderEpisodes();
        });
    });
}

// ============================================
// RENDER EPISODES
// ============================================

function renderEpisodes() {
    const container = document.getElementById('episodesContainer');
    container.innerHTML = '';

    // Filter episodes
    let filtered = episodes;
    if (currentFilter !== 'all') {
        filtered = episodes.filter(ep => ep.theme === currentFilter);
    }

    // Apply view class
    if (currentView === 'list') {
        container.classList.add('list-view');
    } else {
        container.classList.remove('list-view');
    }

    // Render each episode
    filtered.forEach(episode => {
        const card = createEpisodeCard(episode);
        container.appendChild(card);
    });
}

function createEpisodeCard(episode) {
    const card = document.createElement('div');
    card.className = `episode-card ${currentView === 'list' ? 'list-view' : ''}`;

    const themeBadgeText = {
        'história': 'História',
        'regularização': 'Regularização',
        'cultura': 'Cultura',
        'crianças': 'Crianças'
    };

    const card_html = `
        <div class="episode-header">
            <span class="episode-number">EP ${episode.number}</span>
            <span class="episode-badge">${themeBadgeText[episode.theme]}</span>
        </div>
        <div class="episode-content">
            <div class="episode-title">${episode.title}</div>
            <div class="episode-date">${formatDate(episode.date)}</div>
            <div class="episode-description">${episode.description}</div>
            
            <div class="player-container">
                <div class="audio-controls">
                    <button class="play-btn" data-id="${episode.id}">▶</button>
                    <div class="progress-bar" data-id="${episode.id}">
                        <div class="progress-fill" data-id="${episode.id}"></div>
                    </div>
                    <span class="time-display" data-id="${episode.id}">0:00 / 0:00</span>
                </div>
                <audio class="audio-player" data-id="${episode.id}" preload="metadata">
                    <source src="${episode.audioUrl}" type="audio/mpeg">
                </audio>
            </div>

            <div class="episode-actions">
                <button class="action-btn" onclick="window.open('${episode.archiveLink}', '_blank')">🔗 Archive.org</button>
                <button class="action-btn" onclick="openTranscript(${episode.id})">📄 Sumário</button>
                <button class="action-btn" onclick="shareEpisode(${episode.id})">📤 Compartilhar</button>
            </div>
        </div>
    `;

    card.innerHTML = card_html;

    // Setup audio player
    const playBtn = card.querySelector('.play-btn');
    const audio = card.querySelector('.audio-player');
    const progressBar = card.querySelector('.progress-bar');
    const progressFill = card.querySelector('.progress-fill');
    const timeDisplay = card.querySelector('.time-display');

    playBtn.addEventListener('click', () => togglePlay(episode.id, audio, playBtn));

    audio.addEventListener('timeupdate', () => updateProgress(audio, progressFill, timeDisplay));
    audio.addEventListener('loadedmetadata', () => updateProgress(audio, progressFill, timeDisplay));

    progressBar.addEventListener('click', (e) => seek(audio, e, progressBar));

    return card;
}

// ============================================
// AUDIO PLAYER CONTROLS
// ============================================

function togglePlay(id, audio, btn) {
    if (currentlyPlaying && currentlyPlaying !== id) {
        // Stop other players
        document.querySelectorAll('.audio-player').forEach(a => a.pause());
        document.querySelectorAll('.play-btn').forEach(b => b.classList.remove('playing'));
    }

    if (audio.paused) {
        audio.play();
        btn.classList.add('playing');
        btn.textContent = '⏸';
        currentlyPlaying = id;
    } else {
        audio.pause();
        btn.classList.remove('playing');
        btn.textContent = '▶';
        currentlyPlaying = null;
    }
}

function updateProgress(audio, fill, display) {
    const percent = (audio.currentTime / audio.duration) * 100;
    fill.style.width = percent + '%';
    display.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
}

function seek(audio, e, bar) {
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    audio.currentTime = percent * audio.duration;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ============================================
// HIGHLIGHTS SECTION
// ============================================

function renderHighlights() {
    const container = document.querySelector('.highlights-grid');
    container.innerHTML = '';

    const highlights = episodes.filter(ep => ep.featured);
    highlights.forEach(ep => {
        const card = document.createElement('div');
        card.className = 'highlight-card';
        card.innerHTML = `
            <span class="highlight-badge">🌟 Destaque</span>
            <h3>${ep.title}</h3>
            <div class="highlight-quote">"${ep.quote}"</div>
            <p>${ep.summary}</p>
        `;
        container.appendChild(card);
    });
}

// ============================================
// TIMELINE INTERACTION
// ============================================

function setupTimelineListeners() {
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('click', () => {
            const month = item.dataset.month;
            filterByMonth(month);
        });
    });
}

function filterByMonth(month) {
    const filtered = episodes.filter(ep => ep.month === month);
    const container = document.getElementById('episodesContainer');
    container.innerHTML = '';

    filtered.forEach(ep => {
        container.appendChild(createEpisodeCard(ep));
    });

    // Scroll to section
    document.querySelector('.main-section').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// TRANSCRIPT MODAL
// ============================================

function openTranscript(id) {
    const episode = episodes.find(ep => ep.id === id);
    const modal = document.getElementById('transcriptModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h2>${episode.title}</h2>
        <p><strong>Episódio ${episode.number} — ${formatDate(episode.date)}</strong></p>
        <div class="highlight-quote">"${episode.quote}"</div>
        <h3>Sumário</h3>
        <p>${episode.summary}</p>
        <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #999;">
            Transcrição completa em breve. Para acessar o áudio completo, visite o <a href="${episode.archiveLink}" target="_blank">Internet Archive</a>.
        </p>
    `;

    modal.classList.add('show');
}

document.querySelector('.modal-close')?.addEventListener('click', () => {
    document.getElementById('transcriptModal').classList.remove('show');
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('transcriptModal');
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// ============================================
// SHARE FUNCTIONALITY
// ============================================

function shareEpisode(id) {
    const episode = episodes.find(ep => ep.id === id);
    const text = `Confira "${episode.title}" em O Outro Lado da Cidade — 20 programas de rádio comunitária sobre moradia e resistência em Mauá (2011).`;
    const url = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: episode.title,
            text: text,
            url: url
        }).catch(err => console.log('Share error:', err));
    } else {
        // Fallback: copy to clipboard
        const shareText = `${text}\n${url}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Link copiado para a área de transferência!');
        });
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
}

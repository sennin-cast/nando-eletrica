export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: 'quadros' | 'iluminacao' | 'cftv' | 'tomadas';
  tag: string;
  tagType: 'success' | 'warning' | 'info' | 'primary';
  imageUrl: string;
  specs?: string[];
  location?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  category: 'instalacao' | 'reparo' | 'seguranca' | 'automacao';
  features: string[];
  norma: string;
  estimatedTime: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  initials: string;
  stars: number;
  comment: string;
  serviceDone: string;
}

export const CONTACT_INFO = {
  phone: '(21) 97312-1322',
  phoneRaw: '21973121322',
  whatsappUrl: 'https://wa.me/5521973121322?text=Ol%C3%A1%20Nando!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20servi%C3%A7o%20el%C3%A9trico.',
  whatsappEmergencyUrl: 'https://wa.me/5521973121322?text=EMERG%C3%8ANCIA:%20Estou%20com%20um%20problema%20el%C3%A9trico%20urgente%20no%20Rio%20de%20Janeiro!',
  email: 'nando223300@gmail.com',
  emailUrl: 'mailto:nando223300@gmail.com?subject=Or%C3%A7amento%20-%20Nando%20El%C3%A9trica',
  instagram: 'https://www.instagram.com/nandoeletric?stkn=aGczMzY4ZGd1dW5l',
  instagramHandle: '@nandoeletric',
  hours: 'Segunda a Sábado: 08h às 19h',
  location: 'Atendimento em todo o Rio de Janeiro - RJ',
};

export const DEVELOPER_INFO = {
  name: 'Esdras Dantas',
  whatsapp: '21 979451436',
  whatsappFormatted: '(21) 97945-1436',
  whatsappRaw: '21979451436',
  whatsappUrl: 'https://wa.me/5521979451436?text=Ol%C3%A1%20Esdras!%20Vi%20o%20site%20da%20Nando%20El%C3%A9trica%20e%20gostaria%20de%20um%20projeto.',
};

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

export const IMAGES = {
  logo: asset('logo.jpg'),
  logoFallback: 'https://lh3.googleusercontent.com/aida/AEtjO1X8wGlGPY_CqZ_DZlpc1W9X97cDEAXxgqHY6_oU3weM95jERHnjOJR6JyYonfWNnUX3qCtbhmvo0rlXbLhYImlTqQa2tl5kj7_I3-4ZkR_NociJOO8SY8x07AlC1dmEVcBbd1PCdUalVKsZpkD0rCvCJIxPEbtlsCQl2H_5-v3o44kgSt0OnY7jv7z3BUeHaMioCeG08FNYfE4a-Tm5-sZFPWT_oAMosOlKrRgJlG-3_qwnyVmnWj69oz7kc7Q0YUfKap7zoF_LNg',
  
  // Morphix AI Enhanced Showcase Visuals
  morphixPenthouse: asset('morphix/hero-penthouse-lighting.png'),
  morphixElectrician: asset('morphix/electrician-qdc-precision.png'),

  // Real Project Works from Nando Elétrica RJ
  realMirrorLed: asset('345144.jpg'),
  realLinearCeiling: asset('345141.jpg'),
  realLinearCeiling2: asset('345142.jpg'),
  realCoifaKitchen: asset('345143.jpg'),
  realCftvCamera: asset('347840.jpg'),
  realCftvDvr: asset('347841.jpg'),
  realCftvCamerasPair: asset('347844.jpg'),

  // Hero Bento Images
  heroQdc: asset('morphix/electrician-qdc-precision.png'),
  heroLed: asset('morphix/hero-penthouse-lighting.png'),
  heroCftv: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIdgnlZ7Bha9SN10q-W6onAnwmV22FtrkmhE2ZiLpgcZyk_PqQD80wAsS1HlmKa_h2oo1hVALwCSN2XisbxG-2ENjVmTJ3b-53k36Sx4L5HPH-9yAKaGTDWn8RTTA2s-lv-M69HEqEQV7f9KROy0tOVZUw_rUoNtgwviKmIa1IiAmhESLlTBjSJLEEbCQPP-WJjJmN7nVkp1p9sOfPN6zyhrRDj8jns7vCag6lb8HmfDD2FSdd27tWfjQ6oRo_kx5HjQ',

  // Gallery 1: Quadros
  galleryQdc1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_l1Oh4JkVVMz9WWW1EBebI79j314mUnMN-LrTkGR2OGapqSq1GeYs-tyAvhTt7qnuNrs6HXevSzgXlOWSvNbOvBuQUmUFeRDHWZkGizqPFXZz7HAOyLWIp_-CQ6mXrRqAIW9EUragyGWoWUWSsKizdbPFRr5yX3jsrh6r0YrBfFE6fVBOpjWXN-BttfhrP2LrVlNkGFaZdKSnyFMX5CiJcNDxqB-04sRJAi-vFzRIffSvC9NiYiW7qXtj2aE4dsMrSw',
  galleryQdc2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-FPfZDoKQ62IpuaEf4MDfWZUEKkD3kSI21RymgTGPzT9W28epDb97ZmRjZEsQKGmhJaTpB8KtWAckdaZlLLhLBzls43Jet9pYzOrcLdD5C5p2XpODAXGwqsp6hNGsO53Ry9veqAfeGuQmXk-OSsQ1S7MZ2xfzy4dyZ9PvzhfhyCZmaHj_UaXrKrJwpPyigubgIqxnOptDh8Dvrt3-ClkZBT733gVvlK-Wvcr0ywWzol9Tli2TE-a2mgf7mO15mbbRgg',
  galleryQdcHazard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvgAjG5MFjJik_DsxmR49TrU4PXBiwCgqWZW9O0Kjjq8Bx_kZYUxYOdiB6dF83kJWcOZNOuSBBMdkSLrraxQbktfCjsEO2YpZ6c7Pkz18YNp53ABgkvgvW5a_vtcY9T4Bu2hcSi5y8IiYaGTwY3O8Lw8_lorfNx6bKzcae0IdBqaiVQOLQ84kcXY0rdbPYtcQvVZOo2dBNZjH1nt9lodBKy4n-dvLFo98AkJ2DGYcs2g12I2IVRYOCYLisn7Hg7zBOLQ',

  // Gallery 2: Iluminação & Tomadas
  galleryLedEmbutido: asset('345141.jpg'),
  galleryLedSancas: asset('morphix/hero-penthouse-lighting.png'),
  galleryEspelhoLed: asset('345144.jpg'),
  galleryTorreTomada: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh3kca3zjBOuO-6-2M2NTdm0Gb6NivDZyTysFEYLqP5E3vwTfW8tQP6QzlSq7TB6xIUmxn9fzjqxpqW1nm06bqTCakuSVpAzciNcZ5IP5AskctqNk8yLLL67yedXUCUa2waanvrDzswrYFNYI_cqHuB6ZY4DX5IEy1_Vrs8tQ8maQOZt2gHEB9B7jxEPBCtv0eVo004P6LPQKFdjzrkRLUuzMxUH-UCb8FETty4Meuf6iDkkz-IKl1i9K7NcNs6qkdmg',

  // Gallery 3: CFTV
  galleryCftvExterna: asset('347840.jpg'),
  galleryCftvFachada: asset('347841.jpg'),
  galleryCftvApp: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRkqLQBODrZ3T3l5lO9g-4XxqvBYKMroChMwdnEPnDDy0_5svzGqMvWES2JwuScl6yyN7W9JIEYWFHYAOr8UF6j381Tlda-GhmuR2zSMVIfMbYTFlCm4Kdoto3ab_2gcHDW_5580qew49SdpBM-ir8fTQe7lJspHUVspHW03HC1aTXNgK-c_Lh5E5lsoIdmZYCchAhbzhyrWIVTAOJt3wD-J2Ai7ajigKSxqovyhYMkbhwFWtGDN0b9ks96qGkZHtJCw',
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-qdc-1',
    title: 'Montagem de QDC Residencial de Alto Padrão',
    description: 'Balanceamento simétrico de fases, barramentos de cobre com pente isolado e crimpagem com terminais tubulares ilhós segundo a norma NBR-5410.',
    category: 'quadros',
    tag: 'Execução Nando Elétrica',
    tagType: 'success',
    imageUrl: IMAGES.galleryQdc1,
    specs: ['Barramento pente bifásico/trifásico', 'Disjuntores termomagnéticos curva C', 'Etiquetagem indelével'],
    location: 'Tijuca, Rio de Janeiro'
  },
  {
    id: 'g-qdc-2',
    title: 'Instalação de DR (Diferencial Residual) & DPS',
    description: 'Blindagem total contra choques acidentais em áreas molhadas e proteção com Dispositivo de Proteção contra Surtos para proteger eletrodomésticos caros contra raios.',
    category: 'quadros',
    tag: 'Padrão Técnico NBR',
    tagType: 'info',
    imageUrl: IMAGES.galleryQdc2,
    specs: ['IDR 30mA alta sensibilidade', 'DPS Classe II 20kA/45kA', 'Pente de distribuição'],
    location: 'Copacabana, Rio de Janeiro'
  },
  {
    id: 'g-qdc-hazard',
    title: 'Eliminação de Ponto Crítico & Risco de Incêndio',
    description: 'Substituição urgente de emendas desfeitas, fios sobrecarregados carbonizados e caixas antigas de madeira por novo quadro antichamas certificado.',
    category: 'quadros',
    tag: 'Risco Sanado na Raiz',
    tagType: 'warning',
    imageUrl: IMAGES.galleryQdcHazard,
    specs: ['Cabos antichama 750V', 'Eliminação de fitas isolantes ressecadas', 'Aterramento refeito'],
    location: 'Centro, Rio de Janeiro'
  },
  {
    id: 'g-led-embutido',
    title: 'Perfil de LED Linear Embutido em Gesso',
    description: 'Iluminação contínua arquitetônica sem pontos de sombra, com difusor leitoso e canaletas de alumínio que dissipam calor e dobram a durabilidade das fitas.',
    category: 'iluminacao',
    tag: 'Design Arquitetônico',
    tagType: 'primary',
    imageUrl: IMAGES.galleryLedEmbutido,
    specs: ['Fita COB 12V/24V 3000K', 'Driver blindado Slim', 'Acabamento nivelado com drywall'],
    location: 'Barra da Tijuca, Rio de Janeiro'
  },
  {
    id: 'g-led-sancas',
    title: 'Sancas & Iluminação Indireta Aconchegante',
    description: 'Distribuição luminosa suave em salas de estar e quartos, compatível com dimerização e acionamento inteligente por aplicativo ou voz.',
    category: 'iluminacao',
    tag: 'Conforto Visual',
    tagType: 'primary',
    imageUrl: IMAGES.galleryLedSancas,
    specs: ['Dimerização contínua', 'Temperatura morna 2700K - 3000K', 'Fonte em local ventilado'],
    location: 'Ipanema, Rio de Janeiro'
  },
  {
    id: 'g-espelho-led',
    title: 'Espelho Orgânico com Retroiluminação Oculta',
    description: 'Instalação elétrica discreta sem fios aparentes, com fonte embutida em nicho e acionamento por botão touch ou interruptor decorativo.',
    category: 'iluminacao',
    tag: 'Acabamento Fino',
    tagType: 'info',
    imageUrl: IMAGES.galleryEspelhoLed,
    specs: ['Alimentação protegida contra umidade', 'Driver IP67 para lavabo/banheiro', 'Chicote oculto'],
    location: 'Recreio dos Bandeirantes, RJ'
  },
  {
    id: 'g-torre-tomada',
    title: 'Torre de Tomada Retrátil em Ilha Gourmet',
    description: 'Praticidade para bancadas de granito e quartzo: sobe com um clique suave, oferecendo tomadas 20A e saídas USB/USB-C sem poluir o visual.',
    category: 'tomadas',
    tag: 'Praticidade & Estilo',
    tagType: 'primary',
    imageUrl: IMAGES.galleryTorreTomada,
    specs: ['Tomadas 20A certificadas INMETRO', 'Mecanismo push-open amortecido', 'Cabo flexível reforçado'],
    location: 'Gávea, Rio de Janeiro'
  },
  {
    id: 'g-cftv-externa',
    title: 'Câmeras Externas IP / HD à Prova de Chuva',
    description: 'Fixação firme em alvenaria e grades com caixas de passagem seladas, eliminando infiltrações e oxidação precoce dos conectores RJ45 e BNC.',
    category: 'cftv',
    tag: 'Resistência IP66/IP67',
    tagType: 'info',
    imageUrl: IMAGES.galleryCftvExterna,
    specs: ['Visão noturna infravermelho/ColorVu', 'Caixas com anel de borracha', 'Cabo de rede 100% cobre'],
    location: 'São Conrado, Rio de Janeiro'
  },
  {
    id: 'g-cftv-fachada',
    title: 'Cobertura Perimetral & Eliminação de Pontos Cegos',
    description: 'Estudo de angulação e lentes adequadas para monitoramento de portões, garagens, calçadas e acessos residenciais ou comerciais.',
    category: 'cftv',
    tag: 'Posicionamento Estratégico',
    tagType: 'info',
    imageUrl: IMAGES.galleryCftvFachada,
    specs: ['Lente ampla 2.8mm perimetral', 'Gravação contínua em NVR dedicado', 'Nobreak de proteção'],
    location: 'Méier, Rio de Janeiro'
  },
  {
    id: 'g-cftv-app',
    title: 'Configuração de Acesso Remoto no Celular & Tablet',
    description: 'Integração em nuvem sem cobrança de mensalidade: visualize as câmeras ao vivo do trabalho ou em viagem com notificações de movimento.',
    category: 'cftv',
    tag: 'Visualização em Tempo Real',
    tagType: 'success',
    imageUrl: IMAGES.galleryCftvApp,
    specs: ['Aplicativos Intelbras iSIC ou Hik-Connect', 'Configuração P2P criptografada', 'Multi-usuários com senhas individuais'],
    location: 'Botafogo, Rio de Janeiro'
  },
  {
    id: 'g-coifa-kitchen',
    title: 'Instalação Elétrica de Coifa & Ilha Gourmet',
    description: 'Circuito independente dedicado, conexão selada e iluminação embutida de alta eficiência em cozinha planejada.',
    category: 'tomadas',
    tag: 'Obra Real Nando Elétrica',
    tagType: 'primary',
    imageUrl: IMAGES.realCoifaKitchen,
    specs: ['Circuito dedicado 20A', 'Fiação antichama flexível', 'Acabamento nivelado em forro'],
    location: 'Recreio dos Bandeirantes, RJ'
  },
  {
    id: 'g-morphix-penthouse',
    title: 'Projeto Luminotécnico & Automação de Alto Padrão',
    description: 'Iluminação cênica de destaque com sancas de LED indiretas, iluminação de destaque e integração inteligente.',
    category: 'iluminacao',
    tag: 'Morphix Pro Visual',
    tagType: 'success',
    imageUrl: IMAGES.morphixPenthouse,
    specs: ['Perfis LED sem pontilhado', 'Drivers ultra-slim', 'Cenários luminotécnicos'],
    location: 'Leblon, Rio de Janeiro'
  },
  {
    id: 'g-morphix-qdc',
    title: 'Inspeção Técnica & Balanceamento de Carga',
    description: 'Revisão meticulosa de conexões, reaperto com torquímetro e testes de fuga para proteção contra aquecimentos anômalos.',
    category: 'quadros',
    tag: 'Morphix Pro Visual',
    tagType: 'info',
    imageUrl: IMAGES.morphixElectrician,
    specs: ['Termografia preventiva', 'Torque calibrado', 'Homologação NBR 5410'],
    location: 'Barra da Tijuca, RJ'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's-curto',
    title: 'Conserto de Curto-Circuito',
    shortDesc: 'Diagnóstico rápido de fuga de corrente, sobrecarga em circuitos e reparo emergencial para restabelecimento seguro da energia.',
    fullDesc: 'Identificação cirúrgica de aquecimentos pontuais, fios rompidos, umidade em conduítes e disjuntores que desarmam sem motivo aparente. Solução imediata para evitar princípios de incêndio e perda de aparelhos.',
    icon: 'flash_on',
    category: 'reparo',
    features: ['Atendimento prioritário emergencial', 'Medição de isolamento com megômetro', 'Troca de cabos danificados sem quebrar paredes desnecessariamente'],
    norma: 'NBR 5410 & NR-10',
    estimatedTime: '1 a 3 horas'
  },
  {
    id: 's-iluminacao',
    title: 'Instalação de Iluminação & LED',
    shortDesc: 'Fitas de LED embutidas em gesso, perfis de alumínio, pendentes decorativos, lustres, trilhos e spots direcionáveis de alto padrão.',
    fullDesc: 'Transforme o ambiente da sua casa com iluminação cênica. Projetamos e executamos circuitos independentes, drivers adequados sem chiado ou cintilação, além de fixação milimétrica de lustres pesados.',
    icon: 'lightbulb',
    category: 'instalacao',
    features: ['Cálculo de potência de fontes 12V/24V', 'Cortes e encaixes perfeitos em perfis', 'Instalação de spots de embutir e trilhos eletrificados'],
    norma: 'NBR 5410',
    estimatedTime: '2 a 6 horas por cômodo'
  },
  {
    id: 's-chuveiro',
    title: 'Troca de Chuveiro & Aquecedores',
    shortDesc: 'Dimensionamento milimétrico de cabos, disjuntores adequados, conectores Wago/porcelana blindados e aterramento para evitar choques.',
    fullDesc: 'O chuveiro é o aparelho com maior potência na residência (5500W a 7800W). Realizamos a conferência da bitola dos fios (4mm² a 10mm²), verificação de disjuntor dedicado e isolação antichamas para que você tome banho com tranquilidade.',
    icon: 'shower',
    category: 'instalacao',
    features: ['Conectores cerâmicos ou Wago 221 para alta corrente', 'Medição de tensão sob carga máxima', 'Conexão do condutor de proteção (terra)'],
    norma: 'NBR 5410 seção 9',
    estimatedTime: '40 a 90 minutos'
  },
  {
    id: 's-cftv',
    title: 'Sistemas de CFTV & Câmeras',
    shortDesc: 'Instalação e configuração de câmeras IP e analógicas (Intelbras, HiLook), DVR/NVR e configuração de aplicativo para ver no celular em tempo real.',
    fullDesc: 'Proteja quem você ama e seu patrimônio. Cabeamento estruturado com tubulação protegida, alimentação centralizada com fontes de qualidade e ajuste de foco noturno.',
    icon: 'videocam',
    category: 'seguranca',
    features: ['Câmeras Full HD e 4K com áudio bidirecional', 'Configuração nos celulares de toda a família', 'Gravação em HD seguro com backup automático'],
    norma: 'ABNT NBR 15575 / CFTV',
    estimatedTime: 'Meio período a 1 dia'
  },
  {
    id: 's-automacao',
    title: 'Automação Residencial Smart Home',
    shortDesc: 'Interruptores Wi-Fi Touch, módulos relés inteligentes, integração com Alexa e Google Assistente para controle total da casa por voz.',
    fullDesc: 'Controle iluminação, bombas de piscina, ar-condicionado e persianas direto pelo celular ou por comandos de voz. Criação de cenários inteligentes para economizar energia.',
    icon: 'home_iot_device',
    category: 'automacao',
    features: ['Instalação de linha neutra necessária para módulos', 'Compatível com Tuya, Sonoff, NovaDigital e Alexa', 'Automação de rotinas (ligar/desligar ao sair)'],
    norma: 'NBR 5410',
    estimatedTime: '2 a 5 horas'
  },
  {
    id: 's-padrao',
    title: 'Padrão de Entrada Light RJ',
    shortDesc: 'Montagem, reforma e adequação às exigências da concessionária Light (monofásico, bifásico e trifásico com aprovação garantida).',
    fullDesc: 'Montagem completa de ramal de entrada, caixa de medição homologada, haste de aterramento cobreada, cabo concêntrico e tubulação antichamas. Tramitação e adequação para aumento de carga ou ligação nova.',
    icon: 'electrical_services',
    category: 'instalacao',
    features: ['Homologação técnica de acordo com o REIDI Light', 'Caixas com visor transparente e lacre', 'Cálculo de demanda e balanceamento'],
    norma: 'Normas Light RJ & NBR 5410',
    estimatedTime: '1 a 2 dias'
  },
  {
    id: 's-disjuntores',
    title: 'Troca de Disjuntores & Reforma de QDC',
    shortDesc: 'Modernização de quadros antigos, instalação de DPS contra raios e surtos elétricos, e IDR salva-vidas contra choques fatais.',
    fullDesc: 'Se o seu quadro tem fiação misturada, cheiro de plástico quente ou disjuntores pretos antigos (NEMA), é hora de modernizar com padrão DIN. Mais espaço, barramentos protegidos e visual impecável.',
    icon: 'switch',
    category: 'reparo',
    features: ['Eliminação de barramentos improvisados com fios', 'Instalação de barramento de cobre estanhado', 'Diagrama unifilar e identificação das chaves'],
    norma: 'NBR 5410 & NR-10',
    estimatedTime: '3 a 6 horas'
  },
  {
    id: 's-tomadas',
    title: 'Adição de Tomadas & Torres Retráteis',
    shortDesc: 'Instalação de torres retráteis em bancadas de ilha, tomadas dedicadas de 20A para ar-condicionado, fornos e cooktops sem puxadinhos.',
    fullDesc: 'Evite extensões no chão e benjamins ("T") sobrecarregados. Criamos pontos elétricos estratégicos em drywall, alvenaria ou marcenaria com canaletas discretas ou embutidas.',
    icon: 'power',
    category: 'instalacao',
    features: ['Circuitos independentes para forno, lava-louças e ar', 'Tomadas padrão brasileiro 10A e 20A', 'Furação de precisão para torres retráteis'],
    norma: 'NBR 5410',
    estimatedTime: '1 a 4 horas'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Rodrigo Camargo',
    role: 'Proprietário',
    location: 'Tijuca - Residencial',
    initials: 'RC',
    stars: 5,
    comment: 'O Nando reformou todo o quadro de disjuntores do meu apartamento na Tijuca. O antigo desarmava direto quando ligava o chuveiro e o ar. Ele organizou tudo, colocou DPS e nunca mais tive problema. Muito atencioso e limpo!',
    serviceDone: 'Reforma Completa de Quadro QDC + DPS'
  },
  {
    id: 't-2',
    name: 'Mariana Silveira',
    role: 'Arquiteta e Sócia',
    location: 'Barra da Tijuca - Comercial',
    initials: 'MS',
    stars: 5,
    comment: 'Instalou os perfis de LED e os pendentes na sala e no lavabo do meu escritório na Barra da Tijuca. O acabamento ficou de revista de arquitetura, sem nenhuma emenda aparente. Recomendo de olhos fechados.',
    serviceDone: 'Iluminação Linear LED & Perfis de Alumínio'
  },
  {
    id: 't-3',
    name: 'Fernando Albuquerque',
    role: 'Gerente Comercial',
    location: 'Centro RJ - Empresa',
    initials: 'FA',
    stars: 5,
    comment: 'Excelente profissional para CFTV. Montou o sistema de câmeras da nossa loja no Centro, configurou o aplicativo no celular de todos os sócios e explicou tudo certinho. Preço honesto e cumprimento do prazo.',
    serviceDone: 'Sistema de 8 Câmeras CFTV IP com Acesso Remoto'
  }
];

export const NEIGHBORHOODS_RJ = [
  'Tijuca',
  'Barra da Tijuca',
  'Copacabana',
  'Ipanema',
  'Botafogo',
  'Leblon',
  'Recreio dos Bandeirantes',
  'Flamengo',
  'Centro RJ',
  'Laranjeiras',
  'Méier',
  'Vila Isabel',
  'Grajaú',
  'São Conrado',
  'Humaitá',
  'Catete',
  'Outro Bairro no RJ'
];

export const NBR_CHECKLIST = [
  'Cálculo de queda de tensão em circuitos longos e proteção de cabos',
  'Separação obrigatória de iluminação e tomadas em circuitos dedicados (TUG/TUE)',
  'Instalação de barramento de cobre tipo pente com isolador de extremidade',
  'Terminais tubulares (ilhós) prensados em todas as conexões para evitar mau contato',
  'Medição de continuidade de aterramento físico (condutor de proteção PE)',
  'Identificação indelével e numerada de cada disjuntor na tampa do quadro'
];

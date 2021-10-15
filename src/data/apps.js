export let apps = [
  {
    name: "Temple Wallet",
    href: "https://templewallet.com/",
    description:
      "A Tezos browser extension wallet by MadFish Solutions. Quipuswap integrated, view NFT in your wallet.",
    category: ["Wallet", "Exchange", "Featured"],
    parentCompany: "MadFish Solutions",
    imageSrc:
      "data:image/png;base64,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",
    redditUrl: "https://www.reddit.com/r/MadFishCommunity/",
    twitterUrl: "https://twitter.com/madfishofficial",
    discordUrl: "https://discord.com/invite/qFRZ8kVzkv",
    githubUrl: "https://github.com/madfish-solutions/templewallet-extension",
    telegramUrl: "https://t.me/MadFishCommunity",
    linkedinUrl: "https://t.me/MadFishCommunity",
  },
  {
    name: "QuipuSwap",
    href: "https://quipuswap.com/swap",
    description:
      "QuipuSwap is an automated market-making (AMM) decentralized exchange (DEX) on the Tezos blockchain. QuipuSwap uses liquidity Pools the same way as UniSwap.",
    category: ["Exchange", "DeFi", "Featured"],
    parentCompany: "MadFish Solutions",
    imageSrc: "https://quipuswap.com/img/logo.87f215cb.png",
    redditUrl: "https://www.reddit.com/r/MadFishCommunity/",
    twitterUrl: "https://twitter.com/madfishofficial",
    discordUrl: "https://discord.com/invite/qFRZ8kVzkv",
    githubUrl: "https://github.com/madfish-solutions/templewallet-extension",
    telegramUrl: "https://t.me/MadFishCommunity",
    linkedinUrl: "https://t.me/MadFishCommunity",
  },
  {
    name: "Objkt",
    href: "https://objkt.com/",
    description:
      "The largest NFT marketplace on Tezos. Buy, Sell, Bid and view your NFTs in one place.",
    category: ["NFT"],
    parentCompany: "Objkt",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1447891818230726658/SjsiPLOJ_400x400.png",
    twitterUrl: "https://twitter.com/objktcom",
    discordUrl: "https://discord.gg/m7YFqPvmj6",
  },

  {
    name: "KickFlow",
    href: "https://kickflow.io/",
    description:
      "A decentralized platform that enables community funding for projects on Tezos. Through Quadratic Funding, we give the community the power to take the best projects forward!",
    category: ["Dev", "Crowdfunding"],
    parentCompany: "KickFlow",
    imageSrc: "https://i.imgur.com/MGmu5TF.png",
    twitterUrl: "https://twitter.com/kickflowio",
    discordUrl: "https://discord.gg/nzwRHu6meQ",
    githubUrl: "https://github.com/kickflowio",
    telegramUrl: "https://t.me/kickflow",
    linkedinUrl: "https://www.linkedin.com/company/kickflowio/",
    youtubeUrl: "https://www.youtube.com/channel/UCA1K1dSRsWn4gPxJ-z5wyNA",
  },
  {
    name: "Tezos Domains",
    href: "https://tezos.domains/",
    description:
      "Get a domain name for your tezos wallet, own a piece of the decentralized web. Buy, sell, bid and manage your tezos domain names.",
    category: ["NFT", "Featured"],
    parentCompany: "Tezos Domains",
    imageSrc:
      "https://d33wubrfki0l68.cloudfront.net/5c38e6c562ae78abd4114db5d484ea7a88eb50eb/b7611/assets/img/td-logo01-bright.svg",
    twitterUrl: "https://twitter.com/AirGap_it",
    discordUrl: "https://discord.gg/T5ZKuuErWw",
    githubUrl: "https://github.com/airgap-it",
    telegramUrl: "https://t.me/AirGap",
    linkedinUrl: "https://www.linkedin.com/company/papers.ch/",
    mediumUrl: "https://blog.tezos.domains/",
  },

  {
    name: "Pixel Potus",
    href: "https://www.pixelpotus.com/",
    description:
      "PixelPotus is a digital collectable competition built on the Tezos blockchain.",
    category: ["NFT", "Gaming"],
    parentCompany: "",
    imageSrc: "https://www.pixelpotus.com/img/potus.c3aeacbd.gif",
    twitterUrl: "https://twitter.com/PixelPotus",
    discordUrl: "https://discord.gg/CbdbvwtwkM",
    telegramUrl: "https://t.me/pixelpotus",
  },
  {
    name: "Plenty",
    href: "https://www.plentydefi.com/",
    description:
      "Plenty is expanding DeFi use cases on Tezos towards a full scale decentralized financial ecosystem. Empowering traders, liquidity providers & developers to participate in an open financial marketplace.",
    category: ["DeFi"],
    parentCompany: "Tezsure & DGH",
    imageSrc:
      "https://www.plentydefi.com/static/media/plentytoharvest.dd930070.svg",
    mediumUrl: "https://plentydefi.medium.com/",
    twitterUrl: "https://twitter.com/PlentyDeFi",
    telegramUrl: "https://t.me/PlentyDeFi",
    discordUrl: "https://discord.gg/9wZ4CuvkuJ",
  },

  {
    name: "TzKT",
    href: "https://tzkt.io/",
    description: "Tezos blockchain explorer by Baking Bad",
    category: ["Block Explorer", "Tool"],
    parentCompany: "Baking Bad",
    imageSrc: "https://tzkt.io/logo.svg",
  },

  {
    name: "AirGap",
    href: "https://airgap.it/",
    description:
      "Mobile Tezos wallet by Papers! A very secure wallet with the option to use an offline phone to accept transactions.",
    category: ["Wallet", "Featured"],
    parentCompany: "Papers",
    imageSrc:
      "https://airgap.it/wp-content/uploads/2020/07/Airgap_Logo_sideways_color-xs.svg",
    twitterUrl: "https://twitter.com/AirGap_it",
    discordUrl: "https://discord.gg/T5ZKuuErWw",
    githubUrl: "https://github.com/airgap-it",
    telegramUrl: "https://t.me/AirGap",
    linkedinUrl: "https://www.linkedin.com/company/papers.ch/",
  },
  {
    name: "Crunchy",
    href: "https://app.crunchy.network/#/",
    description:
      "Crunchy provides DeFi services and solutions on Tezos to projects and developers.",
    category: ["Farm", "DeFi", "Featured"],
    parentCompany: "Crunchy.Network",
    imageSrc:
      "https://app.crunchy.network/img/logo_transparent_background.8aaaf303.png",
    twitterUrl: "https://twitter.com/CrunchyTez",
    discordUrl: "https://discord.com/invite/99UnxxgB46",
    telegramUrl: "https://t.me/crunchy_network",
  },
  {
    name: "Baking Bad",
    href: "https://baking-bad.org/",
    description:
      "The best place to check your staking rewards and find the most complete list of Tezos delegation services.",
    category: ["Baking"],
    parentCompany: "",
    imageSrc: "https://baking-bad.org/img/logo-full.png",
    twitterUrl: "https://twitter.com/TezosBakingBad",
    discordUrl: "https://discord.gg/aG8XKuwsQd",
  },
  {
    name: "Kolibri",
    href: "https://kolibri.finance/",
    description:
      "Kolibri is an Tezos based stablecoin built on Collateralized Debt Positions (CDPs) known as ovens. Farm for kDAO and participate in their Governance and liquidity pool",
    category: ["Stable Coin", "Farming", "DeFi"],
    parentCompany: "Hover Labs",
    imageSrc: "https://kolibri.finance/img/kolibri-brand.b0cd3374.png",
    twitterUrl: "https://twitter.com/hovereng",
    githubUrl: "https://github.com/hover-labs/kolibri-contracts",
    mediumUrl: "https://kolibri-xtz.medium.com/",
    discordUrl: "https://discord.gg/nkpSN467",
  },

  {
    name: "Kukai",
    href: "https://wallet.kukai.app/",
    description:
      "A Secure Home for your Digital Assets. Manage your digital assets and seamlessly connect with experiences and apps on Tezos.",
    category: ["Wallet"],
    parentCompany: "",
    imageSrc: "https://wallet.kukai.app/assets/img/header-logo.svg",
    telegramUrl: "https://t.me/KukaiWallet",
    twitterUrl: "https://twitter.com/KukaiWallet/",
    githubUrl: "https://github.com/kukai-wallet/kukai",
  },
  {
    name: "Beacon",
    href: "https://www.walletbeacon.io/",
    description:
      "Connect your wallet with Beacon! this app is used by any tezos application that needs a wallet to connect to it.",
    category: ["Wallet Connector", "Dev", "Tool"],
    parentCompany: "AirGap & Papers",
    imageSrc:
      "https://www.walletbeacon.io/wp-content/uploads/2021/03/beacon_logoy_type_hor_padding.svg",
    twitterUrl: "https://twitter.com/airgap_it",
    discordUrl: "https://discord.gg/vuf4Gtnqh7",
  },

  {
    name: "Open Tezos",
    href: "https://opentezos.com/",
    description:
      "Welcome Tezos Developers! Explore the technical and economic concepts behind the Tezos Network, experiment with our tutorials, or start building your own Tezos Dapp.",
    category: ["Dev"],
    parentCompany: "",
    imageSrc: "https://opentezos.com/img/logo.svg",
    gitlabUrl: "https://gitlab.com/tezos-paris-hub/OpenTezos/",
  },
  {
    name: "Better Call Dev",
    href: "https://better-call.dev/",
    description:
      "Tezos smart contract explorer by Baking Bad. Explore DApps, check statistics and do advanced searches on the tezos blockchain.",
    category: [""],
    parentCompany: "Baking Bad",
    imageSrc:
      "https://pbs.twimg.com/card_img/1445567890401361926/S61y3_xr?format=png&name=240x240",
    twitterUrl: "https://twitter.com/YourBakeBuddy",
    githubUrl: "https://github.com/baking-bad",
  },

  {
    name: "Ligolang",
    href: "https://ligolang.org/",
    description: "A friendly Smart Contract Language for Tezos",
    category: ["Dev"],
    parentCompany: "",
    imageSrc: "https://ligolang.org/img/logo.svg",
    discordUrl: "https://t.me/KukaiWallet",
    telegramUrl: "https://t.me/LigoLang",
    gitlabUrl: "https://gitlab.com/ligolang/ligo",
  },

  {
    name: "OpenMinter",
    href: "https://github.com/tqtezos/minter",
    description:
      "OpenMinter is dApp framework for enabling the creation and collection of non-fungible tokens (NFTs) on Tezos",
    category: ["Dev"],
    parentCompany: "tqtezos",
    imageSrc:
      "https://github.com/tqtezos/minter/raw/main/docs/assets/minterhead.png",
    githubUrl: "https://github.com/tqtezos/minter",
  },

  {
    name: "PyTezos",
    href: "https://pytezos.org/",
    description:
      "A Python library for interacting with Tezos blockchain, testing smart contracts, and writing Michelson scripts.",
    category: ["Dev"],
    parentCompany: "Baking Bad",
    imageSrc: "https://pytezos.org/_static/img/pytezos.png",
    githubUrl: "https://github.com/baking-bad/pytezos",
    twitterUrl: "https://twitter.com/TezosBakingBad",
    telegramUrl: "https://t.me/baking_bad_chat",
  },
  {
    name: "SmartPy",
    href: "https://smartpy.io/",
    description:
      "SmartPy is an intuitive and powerful smart contract development platform for Tezos",
    category: ["Dev"],
    parentCompany: "Smart Chain Arena LLC.",
    imageSrc: "https://smartpy.io/docs/img/logo.svg",
    gitlabUrl: "https://gitlab.com/smartpy/smartpy",
    twitterUrl: "https://twitter.com/SmartPy_io",
    telegramUrl: "https://t.me/SmartPy_io",
    mediumUrl: "https://smartpy-io.medium.com/",
  },
  {
    name: "Fuking Tezzardz",
    href: "https://www.tezzardz.xyz/",
    description:
      "Snazzy Fukkrs On The Tezos Blockchain.  What utility do Tezzardz have? - Utility, lolz, get fukd.",
    category: ["NFT"],
    parentCompany: "OMGIDRAWEDIT",
    imageSrc: "https://www.tezzardz.xyz/assets/tezzardz.gif",
    twitterUrl: "https://twitter.com/tezzardz",
    discordUrl: "https://discord.gg/ex5BDgx8Jc",
  },
  {
    name: "Conseil",
    href: "https://cryptonomic.tech/conseil.html",
    description:
      "Conseil is an indexer and API for blockchains, currently focused on the Tezos, which allows you to seamlessly run complex queries against blockchain data.",
    category: ["Tech"],
    parentCompany: "Cryptonomic",
    imageSrc: "https://i.imgur.com/9Qzpeyw.png",
    twitterUrl: "https://twitter.com/CryptonomicTech",
    githubUrl: "https://github.com/Cryptonomic",
    mediumUrl: "https://medium.com/the-cryptonomic-aperiodical",
  },
  {
    name: "Netezos",
    href: "https://netezos.dev/",
    description:
      "Netezos is a cross-platform Tezos SDK for .NET developers, simplifying interaction with the Tezos blockchain",
    category: ["Dev"],
    parentCompany: "Baking Bad",
    imageSrc: "https://i.imgur.com/ZFkDQ9Z.png",
    githubUrl: "https://github.com/baking-bad/netezos",
    discordUrl: "https://discord.gg/aG8XKuwsQd",
  },
  {
    name: "Buddy Bake",
    href: "https://www.bakebuddy.xyz/",
    description:
      "Your easy to use Tezos baking application. Made by the Tezos community, for the community!",
    category: ["Bake", "Dev"],
    parentCompany: "BakeBuddy",
    imageSrc: "https://www.bakebuddy.xyz/images/logo.svg",
    twitterUrl: "https://twitter.com/YourBakeBuddy",
    discordUrl: "https://discord.gg/HGcznzuWYk",
    githubUrl: "https://gitlab.com/groktech",
    telegramUrl: "https://t.me/bakebuddy",
    mediumUrl: "https://bakebuddy.medium.com/",
  },
  {
    name: "Archetype",
    href: "https://archetype-lang.org/",
    description:
      "A domain-specific language to develop Smart Contracts on the Tezos blockchain, with all Michelson features, plus exclusive features ",
    category: ["Tool", "Dev"],
    parentCompany: "edukera",
    imageSrc: "https://archetype-lang.org/images/Illu-home.svg",
    twitterUrl: "https://twitter.com/archetype_lang",
    githubUrl: "https://github.com/edukera/archetype-lang",
  },
  {
    name: "Dip up",
    href: "https://dipdup.net/",
    description:
      "full stack framework for building selective Tezos indexers, service workers, and reactive UI components",
    category: ["Dev"],
    parentCompany: "Baking Bad",
    imageSrc:
      "https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=2,format=auto/https%3A%2F%2Ffiles.gitbook.com%2Fv0%2Fb%2Fgitbook-28427.appspot.com%2Fo%2Fspaces%252F-MYAMf2BH-LOIc8YWoHV%252Favatar-1618502720833.png%3Fgeneration%3D1618502721094932%26alt%3Dmedia",
    discordUrl: "https://discord.gg/aG8XKuwsQd",
  },
  {
    name: "Kiln",
    href: "https://tezos-kiln.org/",
    description:
      "Kiln is a tool for both baking and monitoring on the Tezos network. It provides a locally hosted graphical interface, binaries for tezos-client, tezos-node, tezos-baker, and tezos-endorser.",
    category: ["Dev"],
    parentCompany: "",
    imageSrc: "https://tezos-kiln.org/logo.svg",
    gitlabUrl: "https://gitlab.com/tezos-kiln/kiln",
  },
  {
    name: "Morley",
    href: "https://gitlab.com/morley-framework/morley",
    description: "Developer tools for the Michelson Language",
    category: ["Dev"],
    parentCompany: "",
    imageSrc: "",
    gitlabUrl: "https://gitlab.com/morley-framework/morley",
  },
  // {
  //   name: "Sol2Ligo",
  //   href: "https://madfish-solutions.github.io/sol2ligo/",
  //   description: "SmartPy is an intuitive and powerful smart contract development platform for Tezos",
  //   category: ["Dev"],
  //   parentCompany: "Smart Chain Arena LLC.",
  //   imageSrc: "https://smartpy.io/docs/img/logo.svg",
  //   gitlabUrl: "https://github.com/madfish-solutions/sol2ligo",
  //   twitterUrl: "https://twitter.com/SmartPy_io",
  //   telegramUrl: "https://t.me/SmartPy_io",
  //   mediumUrl: "https://smartpy-io.medium.com/",
  // },
  // {
  //   id: 6,
  //   name: "Blokhaus",
  //   href: "https://www.blokhaus.io/",
  //   description:
  //     "something",
  //   category: ["community"],
  //   parentCompany: "",
  //   imageSrc:
  //     "https://images.squarespace-cdn.com/content/v1/60a06def23fc5967dbb336c0/1621292761841-ZOGD3XNWSRXKMPCVEF0X/blokhaus-logo.png?format=1500w",
  // },
  // {
  //   id: 7,
  //   name: "TQ Tezos",
  //   href: "https://tqtezos.com/",
  //   description:
  //     "something",
  //   category: ["community"],
  //   parentCompany: "Tocqueville Group, Inc",
  //   imageSrc: "https://tqtezos.com/img/tq.png",
  //   redditUrl: "https://www.reddit.com/user/TQTezos",
  //   twitterUrl: "https://twitter.com/tqtezos",
  //   githubUrl: "https://github.com/tqtezos",
  //   linkedinUrl: "https://www.linkedin.com/company/tqtezos/",
  //   youtubeUrl: "https://www.youtube.com/c/tqtezos",
  // },
];

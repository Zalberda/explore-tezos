export let apps = [
  {
    name: "Temple Wallet",
    href: "https://templewallet.com/",
    description:
      "A Tezos browser extension wallet by MadFish Solutions. Quipuswap integrated, view NFTs in your wallet. Top up Tezos from various other cryptos.",
    category: ["Open Source", "Wallet", "Featured"],
    parentCompany: "MadFish Solutions",
    imageSrc:
      "data:image/png;base64,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",
    redditUrl: "https://www.reddit.com/r/MadFishCommunity/",
    twitterUrl: "https://twitter.com/madfishofficial",
    discordUrl: "https://discord.com/invite/qFRZ8kVzkv",
    githubUrl: "https://github.com/madfish-solutions/templewallet-extension",
    telegramUrl: "https://t.me/MadFishCommunity",
  },
  {
    name: "QuipuSwap",
    href: "https://quipuswap.com/swap",
    description:
      "QuipuSwap is an automated market-making (AMM) decentralized exchange (DEX) on the Tezos blockchain. QuipuSwap uses liquidity Pools the same way as UniSwap.",
    category: ["DeFi", "Featured"],
    parentCompany: "MadFish Solutions",
    imageSrc: "https://quipuswap.com/img/logo.87f215cb.png",
    redditUrl: "https://www.reddit.com/r/MadFishCommunity/",
    twitterUrl: "https://twitter.com/madfishofficial",
    discordUrl: "https://discord.com/invite/qFRZ8kVzkv",
    githubUrl: "https://github.com/madfish-solutions/quipuswap-webapp",
    telegramUrl: "https://t.me/MadFishCommunity",
    linkedinUrl: "https://www.linkedin.com/company/mad-fish-solutions/",
  },
  {
    name: "Objkt",
    href: "https://objkt.com/",
    description:
      "The largest NFT marketplace on Tezos. Buy, Sell, Bid and view your NFTs in one place.",
    category: ["NFT", "Featured"],
    parentCompany: "Objkt",
    imageSrc:
      "https://cdn.discordapp.com/attachments/290657116077948938/902741060156010496/Screen_Shot_2021-10-26_at_9.10.35_PM.png",
    twitterUrl: "https://twitter.com/objktcom",
    discordUrl: "https://discord.gg/m7YFqPvmj6",
  },

  {
    name: "KickFlow",
    href: "https://kickflow.io/",
    description:
      "A decentralized platform that enables community funding for projects on Tezos. Through Quadratic Funding, we give the community the power to take the best projects forward!",
    category: ["Dev", "Tool", "Featured"],
    parentCompany: "KickFlow",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/908906208692428830/nigrB6Gp_400x400.png",
    twitterUrl: "https://twitter.com/kickflowio",
    discordUrl: "https://discord.gg/nzwRHu6meQ",
    githubUrl: "https://github.com/kickflowio",
    telegramUrl: "https://t.me/kickflow",
    linkedinUrl: "https://www.linkedin.com/company/kickflowio/",
    youtubeUrl: "https://www.youtube.com/channel/UCA1K1dSRsWn4gPxJ-z5wyNA",
  },
  {
    name: "Explore Tezos NFT",
    href: "https://exploretezosnft.com/",
    description: "A place where you can find and track nft's on Tezos.",
    category: ["NFT", "Tool", "Featured"],
    parentCompany: "Tezos Domains",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/910712706389147669/image_1.png",
    twitterUrl: "https://twitter.com/exploretezos",
    discordUrl: "https://discord.gg/fXsVvsxCr3",
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
    twitterUrl: "https://twitter.com/tezosdomains",
    gitlabUrl: "https://gitlab.com/tezos-domains",
    telegramUrl: "https://t.me/tezosdomains",
    mediumUrl: "https://gitlab.com/tezos-domains",
  },
  {
    name: "Plenty",
    href: "https://www.plentydefi.com/",
    description:
      "Plenty is expanding DeFi use cases on Tezos towards a full scale decentralized financial ecosystem. Empowering traders, liquidity providers & developers to participate in an open financial marketplace.",
    category: ["DeFi", "Featured"],
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
    description:
      "Tezos blockchain explorer by Baking Bad. View transactions, keep track of Bakers, view Tezos Governance progress and much more!",
    category: ["Tool", "Featured"],
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
    category: ["DeFi", "Featured"],
    parentCompany: "Crunchy.Network",
    imageSrc:
      "https://app.crunchy.network/img/logo_transparent_background.8aaaf303.png",
    twitterUrl: "https://twitter.com/CrunchyTez",
    discordUrl: "https://discord.com/invite/99UnxxgB46",
    telegramUrl: "https://t.me/crunchy_network",
  },
  {
    name: "Kolibri",
    href: "https://kolibri.finance/",
    description:
      "Kolibri is an Tezos based stablecoin built on Collateralized Debt Positions (CDPs) known as ovens. Farm for kDAO and participate in their Governance and liquidity pool",
    category: ["DeFi", "Featured"],
    parentCompany: "Hover Labs",
    imageSrc: "https://kolibri.finance/img/kolibri-brand.b0cd3374.png",
    twitterUrl: "https://twitter.com/hovereng",
    githubUrl: "https://github.com/hover-labs/kolibri-contracts",
    mediumUrl: "https://kolibri-xtz.medium.com/",
    discordUrl: "https://discord.gg/nkpSN467",
  },
  {
    name: "Baking Bad",
    href: "https://baking-bad.org/",
    description:
      "The best place to check your staking rewards and find the most complete list of Tezos delegation services.",
    category: ["Tool"],
    parentCompany: "",
    imageSrc: "https://baking-bad.org/img/logo-full.png",
    twitterUrl: "https://twitter.com/TezosBakingBad",
    discordUrl: "https://discord.gg/aG8XKuwsQd",
  },
  {
    name: "Gif Games",
    href: "https://gif.games/",
    description:
      "Crossing NFTs and Dapps to make fun and interactive worlds where users can collect, earn, and build new virtual worlds!",
    category: ["Gaming"],
    parentCompany: "Gif Games",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/914023914374590544/hksAgrdA_400x400.png",
    twitterUrl: "https://twitter.com/gifdotgames",
    telegramUrl: "https://t.me/gifgames",
  },
  {
    name: "ctez",
    href: "https://ctez.app/",
    description:
      "ctez is a collateralized version of tez allowing you to use Tezos DeFi and delegate your tez simultaneously.",
    category: ["Open Source", "DeFi"],
    parentCompany: ["Bender Labs", "Plenty"],
    imageSrc: "https://miro.medium.com/max/1400/1*q4JoS63LLqylFqbVns_LXw.png",
    githubUrl: "https://github.com/Tezsure/ctez",
  },
  {
    name: "Smartlink",
    href: "https://www.smartlink.so/",
    description:
      "Trust as a Service for the new Web. Smartlink is developing a sustainable ecosystem of decentralized and scalable applications to bring the needed infrastructure to our new economic paradigms.",
    category: ["DeFi", "Featured"],
    parentCompany: "",
    imageSrc: "https://www.smartlink.so/wp-content/uploads/2021/09/dff-min.png",
    twitterUrl: "https://twitter.com/smartlinkHQ",
    discordUrl: "https://discord.com/invite/Rut5xxqGWQ",
    githubUrl: "https://github.com/Smartlinkhub",
    telegramUrl: "https://t.me/smartlinkofficial",
    linkedinUrl: "https://www.linkedin.com/company/smartlinkso",
    redditUrl: "https://www.reddit.com/user/Teamsmartlink/",
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
    category: ["Dev", "Tool", "Featured"],
    parentCompany: "AirGap & Papers",
    imageSrc: "https://docs.walletbeacon.io/img/logo-white.svg",
    twitterUrl: "https://twitter.com/airgap_it",
    discordUrl: "https://discord.gg/vuf4Gtnqh7",
  },
  {
    name: "Taquito",
    href: "https://tezostaquito.io/",
    description:
      "A TypeScript library suite for development on the Tezos blockchain.",
    category: ["Dev", "Featured"],
    parentCompany: "ECAD Labs",
    imageSrc: "https://tezostaquito.io/img/Taquito.png",
    twitterUrl: "https://twitter.com/TezosTaquito",
    telegramUrl: "https://t.me/tezostaquito",
    githubUrl: "https://github.com/ecadlabs/taquito",
  },
  {
    name: "Marmott",
    href: "https://marmott.io/",
    description: "The future of Real Estate on Tezos.",
    category: ["NFT", "Featured"],
    parentCompany: "Marmott",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/927372848287330314/MzzADvAP_400x400.png",
    telegramUrl: "https://t.co/rHZRI1Lt0s?amp=1",
    twitterUrl: "https://twitter.com/Marmott_io",
    githubUrl: "https://github.com/marmott-io",
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
    category: ["Dev"],
    parentCompany: "Baking Bad",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/927374367069995048/Image2022-01-0229.png",
    twitterUrl: "https://twitter.com/TezosBakingBad",
    githubUrl: "https://github.com/baking-bad",
    telegramUrl: "tg://resolve?domain=baking_bad_chat",
  },
  {
    name: "Pixel Potus",
    href: "https://www.pixelpotus.com/",
    description:
      "PixelPotus is a digital collectable competition built on the Tezos blockchain.",
    category: ["NFT", "Gaming", "Featured"],
    parentCompany: "",
    imageSrc: "https://www.pixelpotus.com/img/potus.c3aeacbd.gif",
    twitterUrl: "https://twitter.com/PixelPotus",
    discordUrl: "https://discord.gg/CbdbvwtwkM",
    telegramUrl: "https://t.me/pixelpotus",
  },
  {
    name: "Pixel Debates",
    href: "https://www.pixeldebates.com/",
    description:
      "PixelDebates is an NFT-powered trading card game themed around presidential debates.",
    category: ["NFT", "Gaming"],
    parentCompany: "Pixel Potus",
    imageSrc: "https://www.pixeldebates.com/img/DebatesLogo.65c3b587.png",
    twitterUrl: "https://twitter.com/PixelPotus",
    discordUrl: "https://discord.gg/CbdbvwtwkM",
    telegramUrl: "https://t.me/pixelpotus",
  },
  {
    name: "ETHtez",
    href: "https://www.ethtz.io/",
    description:
      "ETHtz is Ethereum wrapped in the Tezos FA-token standard.  ETHtz is hard-backed by a full-reserve of real Ether (ETH)",
    category: ["DeFi"],
    parentCompany: "Tezos Stable Techologies, Ltd",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/908909490085199883/ETHtz_purple.png",
    telegramUrl: "https://t.me/ETHtez",
    mediumUrl: "https://medium.com/umamiwallet",
    githubUrl: "https://github.com/StableTechnologies/ETHtz",
  },
  {
    name: "Umami",
    href: "https://umamiwallet.com/",
    description:
      "Umami is a Tezos desktop wallet that combines best-in-class features to deliver a smooth user experience for both beginner and advanced users.",
    category: ["Wallet"],
    parentCompany: "Nomadic Labs",
    imageSrc: "https://umamiwallet.com/images/hero-icon.png",
    twitterUrl: "https://twitter.com/umamiwallet",
    mediumUrl: "https://medium.com/umamiwallet",
    gitlabUrl: "https://gitlab.com/nomadic-labs/umami-wallet",
  },
  {
    name: "Spire",
    href: "https://spirewallet.com/",
    description:
      "Spire enables wallet-browser connectivity between Tezos dApps. Spire is made by AirGap",
    category: ["Wallet"],
    parentCompany: "AirGap",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/908910383941689344/spire.png",
    discordUrl: "https://discord.gg/kcSsa2XTRa",
  },
  {
    name: "Lugh",
    href: "https://www.lugh.io/",
    description: "Lugh, the first reliable euro-pegged stablecoin.",
    category: ["DeFi"],
    parentCompany: "Lugh",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/908914831602647070/V51L-boN_400x400.png",
    twitterdUrl: "https://twitter.com/LughStablecoin",
  },
  {
    name: "Tezotopia",
    href: "https://tezotop.io/",
    description:
      "Claim land and produce tokenized resources in this Blockchain Space Adventure that allows you to become king or conqueror.",
    category: ["Gaming", "Featured"],
    parentCompany: "gif.games",
    imageSrc:
      "https://tezotop.io/wp-content/uploads/2021/03/tezotopia-logo.png",
    discordUrl: "https://discord.gg/saAu2f2adC",
    telegramUrl: "https://t.me/gifgames",
    twitterUrl: "https://twitter.com/gifdotgames",
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
    name: "Hicetnunc",
    href: "https://www.hicetnunc.art/",
    description:
      "The first NFT market place on Tezos. Buy, Sell and Mint your NFTs on HEN",
    category: ["NFT"],
    parentCompany: "Hicetnunc",
    imageSrc: "https://avatars.githubusercontent.com/u/43660607?s=200&v=4",
    discordUrl: "https://discord.com/invite/W8vQ7REym7",
    mediumUrl: "https://hicetnunc2000.medium.com/",
    githubUrl: "https://github.com/hicetnunc2000",
    redditUrl: "https://www.reddit.com/r/hicetnunc",
    telegramUrl: "https://t.me/hicetnunc2000",
  },
  {
    name: "Kalamint",
    href: "https://kalamint.io/",
    description:
      "A clean NFT marketplace on Tezos. Collect NFTs with your credit card!",
    category: ["NFT"],
    parentCompany: "Auger",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1355617316893904896/USZhUs4k_400x400.jpg",
    twitterUrl: "https://twitter.com/kalamint_io",
    mediumUrl: "https://kalamint.medium.com/",
    telegramUrl: "https://t.me/kalamint",
    discordUrl: "https://discord.com/invite/yphDGgYzrA",
  },
  {
    name: "McLaren Racing Collective",
    href: "https://mclarenracingcollective.com/",
    description:
      "The McLaren Racing Collective, powered by Tezos, is an innovative platform where fans and collectors can purchase McLaren Racing digital collectibles or non-fungible tokens (NFTs).",
    category: ["NFT", "Gaming"],
    parentCompany: "McLaren",
    imageSrc: "https://collectible.playground.sweet.io/static/mcl/step-2.png",
  },
  {
    name: "RedBull Racing Collective",
    href: "https://redbullracingcollectibles.com/",
    description:
      "We’re bringing the world of Red Bull Racing closer to our fans with a series of amazing digital artifacts. Our range of Collectibles will grow over time, each detailing an aspect of the Team, past or present.",
    category: ["NFT"],
    parentCompany: "Red Bull",
    imageSrc:
      "https://collectible.sweet.io/static/rbr/rbr-car-image-transparent.png",
  },
  {
    name: "TezID",
    href: "https://tezid.net/",
    description:
      "TezID is an identity oracle for Tezos It allows users to prove that they own certain digital property such as an email address, phone number, etc. And soon even government issued ID’s.",
    category: ["Tool"],
    parentCompany: "TezID",
    imageSrc: "https://tezid.net/logo-notext.svg",
    twitterUrl: "https://twitter.com/tezid_net",
    githubUrl: "https://github.com/tezid",
    telegramUrl: "https://t.me/tezid",
  },
  {
    name: "Tezos Profiles",
    href: "https://tzprofiles.com/",
    description:
      "Tezos Profiles (TZP) is a web application where users can associate their public online identity based on social media profiles and self-attested information to their Tezos address.",
    category: ["Tool"],
    parentCompany: "Spruce",
    imageSrc:
      "https://media.discordapp.net/attachments/285826576417816576/904031520984027156/RqdK3gpB_400x400.png",
    discordUrl: "https://discord.com/invite/WjvuYqvm5Y",
    githubUrl: "https://github.com/spruceid/tzprofiles",
    twitterUrl: "https://twitter.com/SpruceID",
  },
  {
    name: "DNS.xyz",
    href: "https://dns.xyz/",
    description:
      "We turn all your wallets into one decentralized profile. You can show off your identity, connect your wallet and show your NFTs.",
    category: ["Tool"],
    parentCompany: "DNS.xyz",
    imageSrc:
      "https://media.discordapp.net/attachments/285826576417816576/903134792768454666/D_logo_gold.png?width=810&height=810",
    twitterUrl: "https://twitter.com/dns",
    discordUrl: "https://discord.gg/utvp36axNx",
  },
  {
    name: "Staker Dao",
    href: "https://www.stakerdao.com/",
    description:
      "Enabling the vibrant future of decentralized finance. By the community. For the community.",
    category: ["DeFi"],
    parentCompany: "",
    imageSrc:
      "https://www.stakerdao.com/webroot/images/stakerDAO-logo-white.svg",
    twitterUrl: "https://twitter.com/stakerdao",
    githubUrl: "https://github.com/StakerDAO",
    telegramUrl: "https://t.me/stakercommunity",
  },
  {
    name: "Tzstats",
    href: "https://tzstats.com/",
    description:
      "TzStats is the first Blockchain Analytics Explorer for Tezos.",
    category: ["Tool", "Featured"],
    parentCompany: "Blockwatch",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1292754365460164608/4XT7kZT6_400x400.jpg",
    twitterUrl: "https://twitter.com/tzstats",
    discordUrl: "https://discord.com/invite/D5e98Hw",
    githubUrl: "https://github.com/blockwatch-cc/tzindex",
  },
  {
    name: "Youves",
    href: "https://youves.com/",
    description: "Your tool on Tezos for asset creation and management.",
    category: ["DeFi", "Featured"],
    parentCompany: "",
    imageSrc: "https://youves.com/wp-content/uploads/2021/04/youves.svg",
    twitterUrl: "https://twitter.com/youves_com",
    discordUrl: "https://discord.gg/2TGyP8UEJF",
    mediumUrl: "https://medium.com/@youves",
  },
  {
    name: "OneOf",
    href: "https://www.oneof.com/",
    description:
      "OneOf is a green NFT platform built for the music community to connect fans and collectors at all levels with their favorite artists.",
    category: ["NFT"],
    parentCompany: "OneOF",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1397164534624837637/wRzkz4Io_400x400.jpg",
    twitterUrl: "https://twitter.com/oneofnft",
    discordUrl: "https://discord.com/invite/oneofnft",
  },
  {
    name: "TzStamp",
    href: "https://tzstamp.io/",
    description:
      "Trusted timestamping on the Tezos blockchain. Created by Marigold",
    category: ["Tool"],
    parentCompany: "Marigold",
    imageSrc: "https://tzstamp.io/logomark.png",
    gitlabUrl: "https://gitlab.com/tzstamp/server",
  },
  {
    name: "Marigold",
    href: "https://marigold.dev/",
    description: "Testing and implementing Tezos Protocol Upgrade Proposals",
    category: ["Open Source"],
    parentCompany: "Marigold",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/909268928201629696/61793ee65c891c190fcaa1d0_Vector1.png",
    gitlabUrl: "https://gitlab.com/marigold",
    twitterUrl: "https://twitter.com/Marigold_Dev",
  },
  {
    name: "SpiceySwap",
    href: "https://spicyswap.xyz/#/",
    description:
      "SpicySwap is a next-generation DEX built by Genius Contracts specifically for token-to-token swaps on Tezos. SpicySwap is governed by SalsaDAO ($sDAO), which is the governance entity for the wider suite of Genius Contracts platforms and products.",
    category: ["DeFi"],
    parentCompany: "Genius Contracts",
    imageSrc: "https://docs.spicyswap.xyz/img/spicy.png",
    twitterUrl: "https://twitter.com/geniuscontracts",
    discordUrl: "https://discord.gg/E2kK38mb",
    mediumUrl: "https://geniuscontracts.medium.com/",
    telegramUrl: "https://t.me/salsadao",
  },
  {
    name: "USDtez",
    href: "https://usdtz.com/",
    description:
      "Liquidity for Tezos Trading: scalable, on-chain, programmable",
    category: ["DeFi"],
    parentCompany: "USD Tez Project",
    imageSrc: "https://usdtz.com/usdtz_new_white.png",
    twitterUrl: "https://twitter.com/usdtz",
    githubUrl: "https://github.com/usdtz",
    mediumUrl: "https://medium.com/usdtz",
    telegramUrl: "https://t.me/USDtez",
    redditUrl: "https://reddit.com/r/usdtz",
  },
  {
    name: "Stably",
    href: "https://www.stably.io/",
    description: "Bridging Value from the Real World to the Digital Economy",
    category: ["DeFi"],
    parentCompany: "Stably Corporation",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/910714492734824509/logo-mobile-1.png",
    twitterUrl: "https://twitter.com/stably_official",
    youtubeUrl:
      "https://www.youtube.com/channel/UCy459x_0LlchV5cK-s3D-iQ/videos",
    mediumUrl: "https://medium.com/stably-blog",
    telegramUrl: "https://t.me/stablycommunity",
    linkedinUrl: "https://www.linkedin.com/company/stably/",
  },
  {
    name: "Stabletez",
    href: "https://stabletez.com/",
    description:
      "StableTez is an effort by Tezos community members, services partners, and financial-backers of the project to provide Tezos-on-chain stable assets for financial instruments and for economically-efficient Tezos-token trading",
    category: ["DeFi"],
    parentCompany: "Stable tech",
    imageSrc: "https://stabletez.com/stabletezALT-logo.png",
    twitterUrl: "https://twitter.com/stabletez",
    telegramUrl: "https://t.me/stabletz",
  },
  {
    name: "Wrap",
    href: "https://www.tzwrap.com/",
    description:
      "A decentralized bridge between Ethereum and Tezos. Transfer your ERC20 and ERC721 tokens from Ethereum to the Tezos blockchain in a decentralized way",
    category: ["DeFi"],
    parentCompany: "",
    imageSrc: "https://www.tzwrap.com/img/logo.png",
    twitterUrl: "https://twitter.com/Wrap_Protocol",
    githubUrl: "https://github.com/bender-labs",
    telegramUrl: "https://t.me/benderlabs",
    discordUrl: "https://discord.gg/tZf8M89BRe",
  },
  {
    name: "Bender Labs",
    href: "https://www.benderlabs.io/",
    description:
      "Building an open financial system, made up of a set of co-integrated smart contracts running on public blockchains.",
    category: ["Open Source", "DeFi"],
    parentCompany: "Bender Labs",
    imageSrc:
      "https://uploads-ssl.webflow.com/605b954cee75fc72dfcdf42e/605b954cee75fc7a3ecdf4d5_B.gif",
    linkedinUrl: "https://t.me/gifgames",
    telegramUrl: "https://t.me/benderlabs",
    twitterUrl: "https://twitter.com/benderlabs_",
    youtubeUrl: "https://www.youtube.com/channel/UC2NcivMrS4dNh7asM59rg0Q",
    githubUrl: "https://github.com/bender-labs",
  },
  {
    name: "Stable Tech",
    href: "https://stable.tech/",
    description:
      "coordinates the building of stable, scalable, open-source, technologies for the advancement of open Tezos DeFi, and for the betterment of the Tezos ecosystem.",
    category: ["DeFi"],
    parentCompany: "Tezos Stable Technologies",
    imageSrc: "https://stable.tech/stabletech.png",
    twitterUrl: "https://twitter.com/stabletech",
    mediumUrl: "https://medium.com/stable",
  },
  {
    name: "Tezos Finance",
    href: "https://www.tezos.finance/",
    description:
      "A decentralized lending platform to expand the Tezos DeFi ecosystem.",
    category: ["DeFi"],
    parentCompany: "Tezos Stable Technologies",
    imageSrc: "https://www.tezos.finance/tezfinwhite.svg",
    twitterUrl: "https://twitter.com/TezosFinance",
    telegramUrl: "https://t.me/TezFin",
  },
  {
    name: "Instaraise",
    href: "https://www.instaraise.io/",
    description:
      "A decentralised fundraising and Incubation platform. Aiming to empower projects with fundraising ability while developing loyal users. Allowing retailer investors and users to access early investment deals.",
    category: ["DeFi"],
    parentCompany: "Instaraise",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/914021872729989180/header.png",
    twitterUrl: "https://twitter.com/Instaraise",
    telegramUrl: "https://t.me/Instaraise",
    mediumUrl:
      "https://medium.com/instaraise-official/and-thats-a-wrap-of-our-community-presale-pure-facts-e68aba63f27",
  },
  {
    name: "Ligolang",
    href: "https://ligolang.org/",
    description: "A friendly Smart Contract Language for Tezos",
    category: ["Dev"],
    parentCompany: "",
    imageSrc: "https://ligolang.org/img/logo-night.svg",
    discordUrl: "https://discord.com/invite/9rhYaEt",
    telegramUrl: "https://t.me/LigoLang",
    gitlabUrl: "https://gitlab.com/ligolang/ligo",
  },
  {
    name: "Tacode",
    href: "https://tacode.dev/",
    description:
      "On Tacode you learn Tezos development from simple recipes with your peers.",
    category: ["Dev"],
    parentCompany: "",
    imageSrc: "https://tacode.dev/images/communities/tacode01_blue_1180w.webp",
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
    category: ["Dev", "Open Source"],
    parentCompany: "Smart Chain Arena LLC.",
    imageSrc: "https://smartpy.io/docs/img/logo_dark.svg",
    gitlabUrl: "https://gitlab.com/smartpy/smartpy",
    twitterUrl: "https://twitter.com/SmartPy_io",
    telegramUrl: "https://t.me/SmartPy_io",
    mediumUrl: "https://smartpy-io.medium.com/",
  },
  {
    name: "Alien's Farm",
    href: "https://aliens.farm",
    description: "The first alien yield farm on Tezos.",
    category: ["DeFi"],
    parentCompany: "DegenTech",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1384898273928962055/4IRfijR2_400x400.jpg",
    twitterUrl: "https://twitter.com/tezaliensfarm",
    telegramUrl: "https://t.me/aliensfarm",
    githubUrl: "https://github.com/degentech/aliensfarm",
  },
  {
    name: "Yupana Finance",
    href: "https://yupana.finance/",
    description:
      "Yupana.Finance is an open-source Tezos-based lending protocol.",
    category: ["DeFi"],
    parentCompany: "",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1450382829062393859/NSu06S5C_400x400.png",
    twitterUrl: "https://twitter.com/YupanaFinance",
    githubUrl: "https://github.com/madfish-solutions/yupana-protocol-core",
    telegramUrl: "https://t.me/MadFishCommunity",
    discordUrl: "https://discord.com/invite/qFRZ8kVzkv",
    redditUrl: "https://www.reddit.com/r/MadFishCommunity/",
    youtubeUrl: "https://www.youtube.com/channel/UCUp80EXfJEigks3xU5hiwyA",
  },
  {
    name: "TezEx",
    href: "https://tezex.io/about",
    description:
      "TezEx is a next-generation decentralized exchange and decentralized cross-chain bridge built on Tezos blockchain.",
    category: ["DeFi"],
    parentCompany: "StableTech",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/904042795256393749/LzJoo6H1_400x400.png",
    twitterUrl: "https://twitter.com/tezosexchange",
    telegramUrl: "https://www.telegram.com/errors/404/",
    githubUrl: "https://github.com/degentech/aliensfarm",
    discordUrl: "https://discord.com/invite/VZPAmEJVsC",
  },
  {
    name: "SalsaDAO",
    href: "https://salsadao.xyz/#/",
    description:
      "The Salsa DAO ecosystem is a decentralized finance (DeFi) ecosystem. NFTs, Casino, Farms, DEX.",
    category: ["DeFi", "NFT"],
    parentCompany: "Genius Contracts",
    imageSrc: "https://salsadao.xyz/assets/sDAO.png",
    telegramUrl: "https://t.me/salsadao",
    redditUrl: "https://www.reddit.com/r/SalsaDAO/",
    githubUrl: "https://github.com/degentech/aliensfarm",
    twitterUrl: "https://twitter.com/GeniusContracts",
    discordUrl: "https://discord.com/invite/ZNdNhaKfkY",
    mediumUrl: "https://geniuscontracts.medium.com/",
  },
  {
    name: "Tezos.gold",
    href: "https://tezos.gold/",
    description:
      "Own Gold (GLD) on Tezos as a Gold Tez (GLDtz) token same for Silver, Platinum and Palladium",
    category: ["DeFi"],
    parentCompany: "Tezos Stable Technologies",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1364370719581245443/LM6OX47M_400x400.jpg",
    twitterUrl: "https://twitter.com/tezosgold",
    telegramUrl: "https://t.me/GoldTez",
  },
  {
    name: "Tezos.coffee",
    href: "https://tezos.coffee/",
    description:
      "Available in fungible and non-fungible token (NFT) variety blends. Taste the sweet aroma of coffee bean digital asset tokens issued on Tezos.",
    category: ["NFT"],
    parentCompany: "Tezos Stable Technologies",
    imageSrc: "https://stabletez.com/Ctz.png",
  },
  {
    name: "Electis",
    href: "https://www.electis.app",
    description: "Safe voting for grassroots communities on tezos",
    category: ["Tool"],
    parentCompany: "Electis",
    imageSrc: "https://www.electis.app/static/landing/images/logo.svg",
    gitlabUrl: "https://gitlab.com/electisNGO/electeez/-/tree/master",
  },
  {
    name: "Farm Soil",
    href: "https://farmsoil.xyz/",
    description:
      "Farming shouldn’t be thought of as a bad user experience. Welcome to $FARM, a Tezos based farming platform focused on the user and built by community members.",
    category: ["DeFi"],
    parentCompany: "",
    imageSrc: "https://farmsoil.xyz/images/app_logo_green.png",
    twitterUrl: "https://twitter.com/farmsomesoil",
    telegramUrl: "https://t.me/farmsomesoil",
    mediumUrl: "https://farmsoil.medium.com/",
  },
  {
    name: "Tezsure",
    href: "https://tezsure.com/",
    description:
      "Tezsure builds developer tools and DeFi products on the Tezos blockchain.",
    category: ["Tool"],
    parentCompany: "Tezsure",
    imageSrc: "https://avatars.githubusercontent.com/u/50651561?s=200&v=4",
    twitterUrl: "https://twitter.com/tezsure",
    linkedinUrl: "https://in.linkedin.com/company/tezsure",
    mediumUrl: "https://medium.com/tezsure",
    githubUrl: "https://github.com/Tezsure/",
  },
  {
    name: "SpaceFarm",
    href: "https://www.spacefarm.xyz/",
    description:
      "Tezos DeFi platform FLAME. SpaceFarm. Decentralized Exchange. Liquidity pool.",
    category: ["DeFi"],
    parentCompany: "SpaceFarm",
    imageSrc: "https://www.spacefarm.xyz/images/avatar.png",
    twitterUrl: "https://twitter.com/FlameDeFi",
    discordUrl: "https://discord.com/invite/cz4zXp7Rsh",
    githubUrl: "https://github.com/flamedefi/SpaceFarm",
    telegramUrl: "https://t.me/FLAMEtokenFarm",
    mediumUrl: "https://flamedefi.medium.com/flame-defi-fb8f5fc8baa9",
  },
  {
    name: "Maelstrom",
    href: "https://maelstrom.fi/",
    description:
      "Maelstom is for privacy transactions on the Tezos blockchain. Mix your Tezos!",
    category: ["DeFi"],
    parentCompany: "maelstrom",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/920141669540720730/maelstrom_logo_round.png",
    twitterUrl: "https://twitter.com/MaelstromMixer",
    redditUrl:
      "https://www.reddit.com/user/MaelstromMixer/comments/lizy1k/maelstrom_first_on_chain_mixer_dapp_for_tezos_xtz/",
    mediumUrl: "https://tezosmixermaelstrom.medium.com/",
  },
  {
    name: "Tezos Moon",
    href: "https://www.tezosmoon.com/",
    description:
      "Browse, manage, display, and analyze Tezos NFTs that have been minted on the Hic et Nunc marketplace.",
    category: ["Tool", "NFT"],
    parentCompany: "Auger",
    imageSrc:
      "data:image/png;base64,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",
    twitterUrl: "https://twitter.com/austingray",
  },
  {
    name: "Golden Goals",
    href: "https://www.goldengoals.io/",
    description:
      "Create, Buy and Sell NFT from Clubs, brands, artists and players, and also fans. an NFT market place only dedicated to Football",
    category: ["NFT"],
    parentCompany: "Auger",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1412037352940318720/QrphQEpv_400x400.jpg",
    twitterUrl: "https://twitter.com/goldengoals_io",
  },

  {
    name: "tezblock",
    href: "https://tezblock.io/",
    description: "A Tezos block exploer by Papers (makers of AirGap wallet)",
    category: ["Tool", "Featured"],
    parentCompany: "Papers",
    imageSrc: "https://tezblock.io/assets/img/tezblock_logo.svg",
    twitterUrl: "https://twitter.com/AirGap_it",
    mediumUrl: "https://medium.com/airgap-it",
    telegramUrl: "https://t.me/AirGap",
    githubUrl: "https://github.com/airgap-it/tezblock",
  },
  {
    name: "Arronax",
    href: "https://arronax.io/tezos/mainnet/accounts",
    description:
      "Blockchain data analytics tool built with ConseilJS, powered by the Conseil API. ",
    category: ["Tool"],
    parentCompany: "Cryptonomic",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/909268764569255936/ask_question_icon.png",
    githubUrl: "https://github.com/Cryptonomic/Arronax",
  },
  {
    name: "ByteBlock",
    href: "https://byteblock.art/",
    description:
      "An NFT platform started in Bangalore India. They are on a mission to mission to 'Empower Millions of Artists'",
    category: ["NFT"],
    parentCompany: "ByteBlock",
    imageSrc:
      "https://byteblock.art/static/media/logo_bb-transparent.e724107b.png",
    twitterUrl: "https://twitter.com/ByteBlockNFT",
    discordUrl: "https://discord.com/invite/sVPjEyWyGQ",
    mediumUrl: "https://byteblock-nft.medium.com/",
    githubUrl: "https://github.com/byteblock-labs",
    telegramUrl: "https://t.me/ByteBlockNFT",
    youtubeUrl: "https://www.youtube.com/channel/UCUH-7UlKvbRK4oF_-oiH18w",
  },
  {
    name: "Conseil",
    href: "https://cryptonomic.tech/conseil.html",
    description:
      "Conseil is an indexer and API for blockchains, currently focused on the Tezos, which allows you to seamlessly run complex queries against blockchain data.",
    category: ["Open Source"],
    parentCompany: "Cryptonomic",
    imageSrc: "https://cryptonomic.tech/img/logo.png",
    twitterUrl: "https://twitter.com/CryptonomicTech",
    githubUrl: "https://github.com/Cryptonomic",
    mediumUrl: "https://medium.com/the-cryptonomic-aperiodical",
  },
  {
    name: "Rarity Check",
    href: "https://raritycheck.xyz/",
    description:
      "Check the rarity of a single NFT from a collection. This provides a quick reference for collectors, as well as tools to perform data analysis on different NFT collections created on the Tezos network. ",
    category: ["NFT"],
    parentCompany: "Alcis Bragi",
    imageSrc:
      "https://raritycheck.xyz/i/21.1.3/themes/theme_42/21.1/images/rw/background-patterns/neutral.png",
    twitterUrl: "https://twitter.com/AlcisBragi",
  },
  {
    name: "Homebase",
    href: "https://tezos-homebase.io/",
    description:
      "A web application that enables users to create and manage/use DAOs on the Tezos blockchain. Aims to help empower community members and developers to launch and participate in Tezos-based DAOs",
    category: ["Dev", "Tool"],
    parentCompany: "dOrgTech",
    imageSrc:
      "https://tezos-homebase.io/static/media/homebase_logo.bd22e86f.svg",
    discordUrl: "https://discord.com/invite/Rgf72KEH",
    githubUrl: "https://github.com/dOrgTech/homebase-app",
  },
  {
    name: "TezTracker",
    href: "https://teztracker.com/",
    description:
      "A block explorer developed by Everstake that presents all the data you need in a convenient way.",
    category: ["Tool"],
    parentCompany: "Everstake",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/902748738416689172/TezTracker.png",
  },
  {
    name: "TzFlow",
    href: "https://tzflow.com/",
    description:
      "This app displays the live Tezos mempool contents and its history as seen in a single representative node.",
    category: ["Tool"],
    parentCompany: "fredcy",
    imageSrc: "https://tzflow.com/polar-bear-head.png",
    twitterUrl: "https://twitter.com/fredcy",
  },
  {
    name: "Faucet Tzalpha",
    href: "https://faucet.tzalpha.net/",
    description: "A faucet for the Tezos test net",
    category: ["Dev", "Tool"],
    parentCompany: "",
    imageSrc: "https://faucet.tzalpha.net/img/faucet.png",
  },
  {
    name: "Tezos FA Tokens Faucet",
    href: "https://tools.kickflow.io/",
    description:
      "This faucet will provide you with three FA1.2 and two FA2 tokens (100 each), on Hangzhou testnet on Tezos. Faucet made by Kickflow",
    category: ["Dev", "Tool"],
    parentCompany: "KickFlow",
    imageSrc:
      "https://tools.kickflow.io/static/media/faucet_header.d4ed0e45.png",
  },
  {
    name: "Nautilus Cloud",
    href: "https://nautilus.cloud/",
    description:
      "A full suite of tools to develop and deploy blockchain applications",
    category: ["Dev"],
    parentCompany: "Cryptonomic",
    imageSrc:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIiIGhlaWdodD0iIiB2aWV3Qm94PSIwIDAgMjggMjMiPgogICAgPGcgZmlsbD0ibm9uZSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzdEQzBERSIgZD0iTTIxLjM3NiA3LjE5M2MyLjU1IDIuNTUgMy42NyA3LjEyOCAzLjM2IDEwLjQ1OCAxLjc3Mi00LjIzLjkzOS05LjI5My0yLjUwNi0xMi43MzdDMTYuNTQ0LS43NyA3LjMyNi0uNzcgMS42NCA0LjkxNGwxLjU5MyAxLjQ1YzUuNzc0LTUgMTMuMjE1LTQuMDk4IDE4LjE0My44Mjl6IiB0cmFuc2Zvcm09InNjYWxlKDEgLTEpIHJvdGF0ZSgtMzUgLTIyLjQ3MyAtMi4xNzIpIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE1LjUyNyAyNC4wNmMtMi41OTkgMC01LjA0MS0xLjAwMS02Ljg3OC0yLjgxOC0yLjgxNi0yLjc4NS0zLjA0Ni03LjE3NC0uNjkxLTEwLjIyMkwuOTM1IDQuNjk4bC4zMTYtLjMxMmM1LjgzMi01Ljc2OSAxNS4zMjItNS43NjggMjEuMTU0IDAgMi4yNzYgMi4yNTEgMy41MyA1LjI0NCAzLjUzIDguNDI4IDAgMy4xODQtMS4yNTQgNi4xNzctMy41MyA4LjQyOC0xLjgzOCAxLjgxNy00LjI4IDIuODE4LTYuODc4IDIuODE4ek0xMy4xNTkgOS4yMzhjLTEuNDE1IDAtMi44My41MzItMy45MDcgMS41OTgtMi43MzUgMi43MDUtMi43MzUgNy4xMDUgMCA5LjgxIDEuNjc2IDEuNjU4IDMuOTA0IDIuNTcgNi4yNzUgMi41NyAyLjM3IDAgNC41OTgtLjkxMiA2LjI3NC0yLjU3IDIuMTE2LTIuMDkyIDMuMjgtNC44NzQgMy4yOC03LjgzMnMtMS4xNjQtNS43NC0zLjI4LTcuODMxQzE5LjEzNyAyLjM0OCAxNS41OTUuODk2IDExLjgyOC44OTZjLTMuNjE4IDAtNy4wMjkgMS4zMzktOS42NTMgMy43NzhsNi4zMzcgNS43MDRjLjA0NS0uMDQ2LjA5LS4wOTMuMTM3LS4xMzkgMi40ODctMi40NiA2LjUzNC0yLjQ1OSA5LjAyIDAgLjk4Ljk3IDEuNTIgMi4yNTggMS41MiAzLjYyOSAwIDEuMzctLjU0IDIuNjU5LTEuNTIgMy42MjgtMS42NSAxLjYzMy00LjMzOCAxLjYzMy01Ljk5IDAtMS4zNTQtMS4zNC0xLjM1NC0zLjUxOSAwLTQuODU5IDEuMTE4LTEuMTA0IDIuOTM1LTEuMTA0IDQuMDUxIDAgLjQ1LjQ0NC42OTYgMS4wMzUuNjk2IDEuNjYzIDAgLjYyOC0uMjQ3IDEuMjE4LS42OTYgMS42NjItLjM3NS4zNzEtLjg3NC41NzUtMS40MDQuNTc1LS41MyAwLTEuMDMtLjIwNC0xLjQwNS0uNTc1bC42MDMtLjU5N2MuMjE0LjIxMi40OTkuMzI5LjgwMi4zMjkuMzAzIDAgLjU4OC0uMTE3LjgwMi0uMzI5LjI4OC0uMjg0LjQ0Ni0uNjYzLjQ0Ni0xLjA2NSAwLS40MDMtLjE1OC0uNzgxLS40NDYtMS4wNjYtLjc4NC0uNzc2LTIuMDYtLjc3NS0yLjg0NSAwLTEuMDIxIDEuMDEtMS4wMjEgMi42NTUgMCAzLjY2NiAxLjMyIDEuMzA1IDMuNDY1IDEuMzA0IDQuNzg0IDAgLjgyLS44MSAxLjI3LTEuODg2IDEuMjctMy4wMzIgMC0xLjE0NS0uNDUtMi4yMjItMS4yNy0zLjAzMi0xLjA3OC0xLjA2NS0yLjQ5My0xLjU5OC0zLjkwOC0xLjU5OHoiIHRyYW5zZm9ybT0ic2NhbGUoMSAtMSkgcm90YXRlKC0zNSAtMjIuNDczIC0yLjE3MikiLz4KICAgIDwvZz4KPC9zdmc+Cg==",
    githubUrl: "https://github.com/Cryptonomic/Nautilus-Cloud-Ui",
  },
  {
    name: "TezBridge",
    href: "https://docs.tezbridge.com/",
    description:
      "TezBridge is a connector between Tezos and DApps. It works on both desktop and mobile devices and, furthermore, users can run DApp on device A and sign operations on device B under local area network.",
    category: ["Dev"],
    parentCompany: "",
    imageSrc: "https://avatars2.githubusercontent.com/u/33521489?s=200&v=4",
    githubUrl: "https://github.com/tezbridge",
  },
  {
    name: "TezQuery",
    href: "https://tzquery.io/",
    description:
      "The Tezos blockchain exposed as a graph structure. Explore transaction patterns and clusters with this interactive tool.",
    category: ["Tool"],
    parentCompany: "TezQuery",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/902751759657754624/TezQuery.png",
    gitlabUrl: "https://gitlab.com/TezQuery/graphexplorer",
    telegramUrl: "https://t.me/tezbridge",
  },
  {
    name: "TzButton",
    href: "https://tzbutton.io/",
    description: "A social experiment on the Tezos blockchain.",
    category: ["Gaming"],
    parentCompany: "AirGap",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/902751809611923466/Screen_Shot_2021-10-26_at_9.53.19_PM.png",
    twitterUrl: "https://twitter.com/airgap_it",
    githubUrl: "https://github.com/tzbutton/tzbutton",
  },
  {
    name: "HERA",
    href: "https://heranetwork.co/",
    description: "A DeFi Hub on Tezos network.",
    category: ["Gaming", "DeFi"],
    parentCompany: "Olympus Dev Team",
    imageSrc: "https://heranetwork.co/icons/ic_banner.png",
    twitterUrl: "https://twitter.com/hera_network",
    telegramUrl: "https://t.me/heranetwork",
  },
  {
    name: "My Tezos DeFi",
    href: "https://www.mytezosdefi.com/",
    description:
      "Track your tokens and investments across multiple DeFi platforms on the Tezos blockchain",
    category: ["Tool"],
    parentCompany: "Claudebarde",
    imageSrc: "https://www.mytezosdefi.com/images/logo.png",
    twitterUrl: "https://twitter.com/MyTezosDefi",
    githubUrl: "https://github.com/claudebarde/my-tezos-defi",
  },
  {
    name: "XTZ.News",
    href: "https://xtz.news/",
    description:
      "A Tezos News Journalistic Hub. Stay up to date with everything happening on Tezos.",
    category: ["Tool"],
    parentCompany: "XTZ.News",
    imageSrc: "https://xtz.news/wp-content/uploads/2020/10/XTZ-News-1.png",
    twitterUrl: "https://twitter.com/XTZNews",
  },
  {
    name: "Bazaar NFT",
    href: "https://bazaarnft.xyz/",
    description:
      "Bazaar Market is the first ever carbon-negative NFT market, powered by Tezos.",
    category: ["NFT"],
    parentCompany: "Mclntyre Industries",
    imageSrc: "https://bazaarnft.xyz/static/media/footerLogo.7f183d29.svg",
    twitterUrl: "https://twitter.com/BazartNFT",
    GithubUrl: "https://github.com/BazaarMarket/Bazaar-Market",
    DiscordUrl: "https://discord.com/invite/mnYZwv8s5a",
    TelegramdUrl: "https://t.me/joinchat/L_izbzRXxLNhNTY5",
  },
  {
    name: "FA 2 Token Batch Sender",
    href: "https://batch.xtz.tools/",
    description:
      "Tezos allows you to send multiple, different tokens to multiple, different addresses, in a single transaction. Use this tool to acomplish that.",
    category: ["Tool"],
    parentCompany: "PureSpider",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/906688619031449600/xl4D2NV-_400x400.png",
    twitterUrl: "https://twitter.com/purespider",
  },
  {
    name: "Guild Token",
    href: "https://guildtoken.io/",
    description:
      "Enhanced Tezos Staking Program. Allows users to deposit their Tezos and earn not only staking rewards but take advantage of a reward pool. Learn more by visiting the site. ",
    category: ["DeFi"],
    parentCompany: "Guild Token",
    imageSrc:
      "https://guildtoken.io/wp-content/uploads/2020/10/Guild-Transparent-Background-200x200-1.png",
    twitterUrl: "https://twitter.com/GuildToken",
    youtubeUrl: "https://www.youtube.com/c/PrimeTime01/videos",
  },
  {
    name: "TzGo",
    href: "https://github.com/blockwatch-cc/tzgo",
    description:
      "TzGo is the officially supported Tezos Go client library by Blockwatch. This SDK is free to use in commercial and non-commercial projects with a permissive license.",
    category: ["Dev"],
    parentCompany: "",
    imageSrc: "",
    githubUrl: "https://github.com/blockwatch-cc/tzgo",
  },
  {
    name: "Truffle",
    href: "https://www.trufflesuite.com/",
    description:
      "The Truffle Suite gets developers from idea to dapp as comfortably as possible.",
    category: ["Dev"],
    parentCompany: "ConsenSys Software Inc.",
    imageSrc: "https://www.trufflesuite.com/img/truffle-logomark.svg",
    githubUrl: "https://github.com/trufflesuite",
  },
  {
    name: "TezDice",
    href: "https://tezdice.com/",
    description:
      "The first Tezos dice website. Fast, Secure and Provably Fair Crypto Currency Betting.",
    category: ["Gaming"],
    parentCompany: "ECAD Labs",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/902748247469203487/p71JryeA_400x400.png",
    twitterUrl: "https://twitter.com/TezDice",
    telegramUrl: "https://t.me/TezDice",
  },
  {
    name: "XTZ Bets",
    href: "https://xtzbets.com/",
    description:
      "XTZ Bets allows you to place bets directly against other Players through publicly verifiable Smart Contracts deployed to the Tezos Blockchain. Still in Beta and have not been audited, play at your own risk.",
    category: ["Gaming"],
    parentCompany: "XTZ Bets",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/906693507983491083/Image2021-11-0603.png",
  },
  {
    name: "Inter Pop",
    href: "https://www.interpop.io/",
    description:
      "InterPop is forging the future of digital fandom with comic, game, and collectible NFTs. We believe that true ownership of your digital assets is the future of comics and gaming and that future begins with InterPop.",
    category: ["NFT", "Gaming"],
    parentCompany: "Interpop LLC",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/909271422046703676/logo.png",
    twitterUrl: "https://twitter.com/Interpop",
    discordUrl: "https://discord.com/invite/n8HPcBFZXy",
  },
  {
    name: "Play With Brio",
    href: "https://playwithbrio.com/home",
    description:
      "Welcome to the first ever eSports skill based platform on the Tezos blockchain, featuring a unique Solitaire square-off for Solitaire aficionados to test their skills against others.",
    category: ["Gaming"],
    parentCompany: "Interpop LLC",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/902748654316716042/Screen_Shot_2021-10-26_at_9.40.44_PM.png",
    twitterUrl: "https://twitter.com/Interpop",
    discordUrl: "https://discord.com/invite/n8HPcBFZXy",
  },
  {
    name: "Minter Pop",
    href: "https://minterpop.com/",
    description:
      "Buy and collect NFT art from a curated roster of contemporary and pop creators. Sell and trade NFTs you own on MinterPop’s user-to-user marketplace.",
    category: ["NFT"],
    parentCompany: "Interpop LLC",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/909270886836764762/header.png",
    twitterUrl: "https://twitter.com/Interpop",
    discordUrl: "https://discord.com/invite/n8HPcBFZXy",
  },
  {
    name: "fx(hash)",
    href: "https://www.fxhash.xyz/",
    description:
      "fxhash is an open platform to create and collect generative NFTs on the tezos blockchain",
    category: ["NFT"],
    parentCompany: "fx(hash)",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/909276864042913803/dedfea94-590c-4b8a-8216-251d8fc66269.png",
    twitterUrl: "https://twitter.com/fx_hash_",
    discordUrl: "https://discord.com/invite/wzqxfdCKCC",
  },
  {
    name: "Ubinetic",
    href: "https://ubinetic.com/",
    description:
      "We build automated tools that enable you to create your bespoke synthetic asset in a modular and decentralised way.",
    category: ["Dev"],
    parentCompany: "ubinetic AG",
    imageSrc:
      "https://ubinetic.com/wp-content/uploads/2021/04/hero-visual-366x400.png",
    linkedinUrl: "https://www.linkedin.com/company/ubinetic",
    twitterUrl: "https://twitter.com/ubinetic",
    mediumUrl: "https://medium.com/@ubinetic",
    githubUrl: "https://github.com/ubinetic",
  },
  {
    name: "Bunny Knights",
    href: "https://www.bunnyknights.com/",
    description: "MEDIEVAL BUNNIES ON TEZOS BLOCKCHAIN! NFTs and Game",
    category: ["NFT"],
    parentCompany: "",
    imageSrc: "https://www.bunnyknights.com/logoNew.png",
    twitterUrl: "https://twitter.com/BunnyKnights",
    discordUrl: "https://discord.com/invite/WMJHqN5zNx",
  },
  {
    name: "Galleon",
    href: "https://cryptonomic.tech/galleon.html",
    description:
      "Galleon is a software wallet for the Tezos blockchain. An open source desktop wallet, supports Ledger devices.",
    category: ["Wallet"],
    parentCompany: "Cryptonomic",
    imageSrc: "https://cryptonomic.tech/img/banner_logo.svg",
    twitterUrl: "https://twitter.com/CryptonomicTech",
    mediumUrl: "https://medium.com/the-cryptonomic-aperiodical",
    githubUrl: "https://github.com/Cryptonomic",
  },
  {
    name: "TzColors",
    href: "https://www.tzcolors.io/",
    description:
      "Unique colors as NFT tokens on Tezos one of each in existence three categories",
    category: ["NFT"],
    parentCompany: "AirGap",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/902761153829175316/1-Ga-U67_400x400.png",
    telegramUrl: "https://t.me/tzcolors",
    twitterUrl: "https://twitter.com/tzcolors",
  },
  {
    name: "CricTez",
    href: "https://crictez.io/",
    description:
      "Collect limited edition cricket collectibles(NFTs), trade on marketplace & compete in live matches to earn exclusive rewards",
    category: ["NFT"],
    parentCompany: "CricTez",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/909286705931096094/mhdAAAAAElFTkSuQmCC.png",
    twitterUrl: "https://twitter.com/crictez_io",
    discordUrl: "https://discord.com/invite/dHaBeKjEDj",
  },
  {
    name: "Netezos",
    href: "https://netezos.dev/",
    description:
      "Netezos is a cross-platform Tezos SDK for .NET developers, simplifying interaction with the Tezos blockchain",
    category: ["Dev"],
    parentCompany: "Baking Bad",
    imageSrc: "https://netezos.dev/logo.svg",
    githubUrl: "https://github.com/baking-bad/netezos",
    discordUrl: "https://discord.gg/aG8XKuwsQd",
  },
  {
    name: "Buddy Bake",
    href: "https://www.bakebuddy.xyz/",
    description:
      "Your easy to use Tezos baking application. Made by the Tezos community, for the community!",
    category: ["Bake Buddy* :)", "Tool"],
    parentCompany: "BakeBuddy",
    imageSrc: "https://www.bakebuddy.xyz/images/logo.svg",
    twitterUrl: "https://twitter.com/YourBakeBuddy",
    discordUrl: "https://discord.gg/HGcznzuWYk",
    gitlabUrl: "https://gitlab.com/groktech",
    telegramUrl: "https://t.me/bakebuddy",
    mediumUrl: "https://bakebuddy.medium.com/",
  },
  {
    name: "Granary",
    href: "https://stove-labs.github.io/granary/",
    description: "All-in toolkit for Tezos development",
    category: ["Dev"],
    parentCompany: "Facebook",
    imageSrc: "https://stove-labs.github.io/granary/img/grain.png",
    gitlabUrl: "https://github.com/stove-labs/granary",
    twitterUrl: "https://twitter.com/stove_labs",
  },
  {
    name: "sotez",
    href: "https://github.com/AndrewKishino/sotez",
    description: "A JavaScript Library for Tezos",
    category: ["Dev"],
    parentCompany: "AndrewKishino",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/914022243233845308/logo.png",
    githubUrl: "https://github.com/AndrewKishino/sotez",
  },
  {
    name: "Liquibrium",
    href: "https://liquibrium.netlify.app/",
    description:
      "Liquibrium is a decentralized exchange for tezos ecosystem which focuses on stable assets and provides the most optimum exchange value.",
    category: ["DeFi"],
    parentCompany: "",
    imageSrc: "https://liquibrium.netlify.app/static/media/demo.2229015e.png",
  },
  {
    name: "Radion.fm",
    href: "https://www.radion.fm/index.html",
    description:
      "RADION platform works as a music discovery app where users can upload their music to be streamed online",
    category: ["NFT"],
    parentCompany: "",
    imageSrc: "https://www.radion.fm/img/logo@2x.png",
    twitterUrl: "https://twitter.com/fm_radion",
  },
  {
    name: "NFT Button",
    href: "https://nftbutton.com/",
    description:
      "NFT Button is an NFT marketplace on Tezos blockchain built by The Buttonists team.",
    category: ["NFT"],
    parentCompany: "",
    imageSrc:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAB4CAMAAACacK1XAAAApVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+4/eNVAAAANnRSTlMAz++/p59fOID3H0cvQNfntwngDyivj1f6GvPrnAcEUBSIxPwLbyNI28qVaHsz0k09vHZjK1sqeu/XAAAGCUlEQVR42u3c6XqaQBSA4YOCoILIojJsAgruuzn3f2ldYmcidUFTC5P2+5knnMdXBpCogX+zyIbbHeXiRfCzkMjPNn6fMDgG8ECTWf2U1IZcxir16zOheIPTdgvh2VbvE/zuxILiNfBXnQacRYbSWnfxkU4TLAWfTXufIHqzRevziGAVJx5+rxxEDYVl9llEOPFNxDIRaM618FOIYLJzsWQEeqI2/gxiK7pYOgLd7lv0PCKTPKwAAp31gjyLCJcmVgKB6O2jJxGk41QFga5InkMsa8hy3FrhBifEsnkxB2mj5uUYgibYTyESB1mmGCtFU+Fn40b9Ymt2ttCT+sVUimCZ7fHjCFVnT1htCH+utkAHSy24Wh7hdBbkYcSbx56wiVE+Akeubz+KYIeEPg+gAghE3deCxxBzl/5oAtVAoN6bBA8hehQhyFVBYDNZRI8g6s0KItAR9hn3CBzpc5l7BGJN0gLuEegmmvEwovOm3i+LXo5gTYckfBDR7Aj387WXIpzckjqQoohHqg9fiXAEzBUT7hCmJbl4nrjiDgGQ5g+QzsLgDmEtcjdpTiclvCGAbHpuTtFv8YYAY+V7uau3JPOGgFCOTTzLEwe8IQBsZZ2/er8ZvCGAHHbO+ZLq7ElYAKH7yv0a9l9BQLSpu+cKb38MuXgByBAQyJKeW1K+HHCGgDDr5xToaxFniO/FXk6RDC3uEDBYj84V+oKEvCFATpzcgdEn3CEgE3NLqin63CFCokxz+8LlDgEwHgh4HocIiAY9/hEQtXtN7hEQrPo69wgI7OWUewRAdKjzjwBjmNS4RwBMejX+EZCJusM9Asbx1OEeAePFlH8EQLv7BRBgSzy+AMwV2orHPQICe6FzjwCwBrtKI+zrRUAzJv6nEAahU60/j3Clq/l95bAlwWlJqVLz8icKZke4n53Ssds/iCiUufMXtgE/a/WnDkP06YTEgvtp7C6r8dcQrOl8GJ0US8GhCIVOqEP1EYjr1P71snY34xWBU+XXtGG84RWBZmzAeyTiFoF6asApfhEoyF8AURO/AAJNuboIJxlcrdE3HTrQnVcX0exZV4tabfblAkevMEKEGwUrge0Lm1MEQGrSkQNuEccZHZlyiwjqdKTCLcL4CghV4H85GbFOR8qcIiyNGRzCKSI1R9RgVvdiN9LrV0tqyKop1UUUzmzxjzCVkH+EHn+B+wln6o+5R+DIiw3uEYh6GvGPQP0Q8Y/AuhZWE9HUb9Y8U0iETlgyBJUVeuPPecEVe9q/WW9mfnB4bXpwHzw8lRC433BGZwz/+ktxWCnrDwqFjt3qeGq9hfsdpnhKaP89BEsTmYI9giNFmCncLVzSGTutDATIXaSx77iYuT8O3qwlsUemloKARofOjencrsO+lgT3aid0wrJVDkKd07kiPQDiGt0VKdzJ2LNT+tAoBxE2XHo+3cCpDT0oRnd3xYQtyKkM5SBgQ9fT+g1ORTO6npwDFL5T77fKQrDBHXapmnvspNUK4UZvsxH91bZVFmI4vYDQOkjzyc2zm0t/cdaCkhDGgb3zzq63luR9uAPP4FrHuce0+3FZCLtP5/a0i+dN9PpZCBdTP1hRsKEkhNFgc+dHoFlx7YMiXl16koOt7yLNWYxLQoSrHnsU+whY2s5BWtPfkCBPIJMuskazMZSDGMu+i5f/R4eRrvFDZr+djYFlZJsfm7LWE3gRwrjV2CLDpIk0X4WPkdjFc8amFVnvG0bZZq6f36Uv4TUIZ6fd6i2enT3MQW49qD08z9FFZfh9w4bS0/E8t2u9APF4YnbhtrNgzndDFRC1SQj5tt2CBjGDSiBSAr9lqCIWyPOzoBKImIQX3yaO3QJ/yrVDqAJCInCxsDUQ8GbNXYMAlI8Yeb4K1xpPRG90azdoEVQA0ZwpKtxI3vf0KwxTTLMAykc0O/4mgpsFq9RPPMzleMm8YRsAZSPcaSKlKtwtsAdxL5l6zi+53qmL8aD1uk8oL8VusXpSf7G1oFgh0RrLufRjtij1940tgceT591TiXJ7++yoFosE8HDk+3YWPJtlq6cm8hj+V/m+AY+LI3CUeTqrAAAAAElFTkSuQmCC",
    twitterUrl: "https://twitter.com/buttonists",
    githubUrl: "https://nftbutton.com/#",
    telegramUrl: "https://t.me/buttonists",
  },
  {
    name: "Magic Button",
    href: "https://magic-button.io/",
    description:
      "A game where each player pays a coin to click the button, and when the countdown expires, the last one gets all the tokens in the pool. Also, to make a game more interesting they added staking, yield farming, and governance.",
    category: ["Gaming", "DeFi"],
    parentCompany: "",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/906699441778597978/Br2eEGQu_400x400.png",
    twitterUrl: "https://twitter.com/TezMagicButton",
    githubUrl: "https://github.com/degentech/magicbutton",
  },
  {
    name: "Subtrack",
    href: "https://www.subtrack.fr/",
    description:
      "Subtrack is a community platform for securely collecting, trading, and listening to rare, collector editions of records.",
    category: ["NFT"],
    parentCompany: "",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/906702035624276059/Screen_Shot_2021-11-06_at_7.30.07_PM.png",
  },
  {
    name: "akaSwap",
    href: "https://akaswap.com/",
    description:
      "We are committed to building a simple, friendly, and open green NFT trading platform for everyone to easily create, trade, appreciate, collect, and promote various NFT",
    category: ["NFT"],
    parentCompany: "AkaSwap.",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1403284401459396609/azQEIai3_400x400.jpg",
    githubUrl: "https://github.com/akaSwap",
    twitterUrl: "https://twitter.com/AkaswapCom",
    discordUrl: "https://discord.com/invite/BtEThNcRFn",
  },
  {
    name: "tzcomet",
    href: "https://tzcomet.io/#/explorer",
    description: "Contract Metadata Explorer",
    imageSrc:
      "https://user-images.githubusercontent.com/617111/97904884-235dd900-1d0f-11eb-9aae-28e60eb0af15.gif",
    category: ["Tool"],
    parentCompany: "",
    githubUrl: "https://github.com/tqtezos/TZComet",
  },
  {
    name: "Build first Dapp on Tezos",
    href: "https://styts.com/your-first-tezos-dapp/",
    description:
      "For this tutorial we will program a simple Hello World application: a good old-fashioned guestbook. It has only entries, authors and timestamps and consists of 1 smart contract.",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/910710721262809158/Image2021-11-1704.png",
    category: ["Dev"],
    parentCompany: "",
    githubUrl: "https://github.com/styts/tz-guestbook",
  },
  {
    name: "Money Hero",
    href: "https://www.moneyhero.io/?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website",
    description:
      "Financial education is a fundamental right. As a MoneyHero, you help the community to exercise this right and to spread it throughout society.",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/911817348766388315/60d017421609520c61e22ea4_geldhelden-favicon.png",
    category: ["DeFi"],
    parentCompany: "Moneyheros Organization Ltd",
    twitterUrl: "https://twitter.com/moneyhero_io",
    telegramUrl: "https://t.me/geldhelden",
  },
  {
    name: "Cerveza Brewery",
    href: "https://www.cervezabrewery.io/?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website",
    description:
      "The brewery is our fun and exciting approach to opportunities like staking and liquidity mining. ",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/911818487071133697/611628d3fab35c798cc4b8f0_freibier-group-tiny.png",
    category: ["DeFi"],
    parentCompany: "CervezaBrewery.io",
    discordUrl: "https://discord.com/invite/693GtVyP7E",
    telegramUrl: "https://t.me/cervezabrewery",
  },
  {
    name: "Tezos Ukraine Developer Courses (English)",
    href: "https://tezos.org.ua/en/courses",
    description:
      "Learn about Tezos protocol and smart-contract development with our articles and video tutorials.",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/910717898513842246/main.png",
    category: ["Dev"],
    parentCompany: "Tezos Ukraine",
  },
  {
    name: "Nomadic Labs Knowledge Center",
    href: "https://docs.nomadic-labs.com/nomadic-labs-knowledge-center/",
    description:
      "Here you will find all the necessary documentation to help you understand the main concepts and tools to build successfully on Tezos.",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/914020805334159401/assets2F-Meeg1UVEGFWXkuXBJ172F-Mk2nedRL0KKE9D0F2pD2F-Mk2oJfxIUv44hBFZuZn2FCapture20dE28099C3A9cran20de202021-09-202017-26-33.png",
    category: ["Dev"],
    parentCompany: "Nomadic Labs",
  },
  {
    name: "Cryptoverse Wars",
    href: "https://cryptocodeschool.in/tezos/",
    description:
      "We've got you covered with our fun and free course, which will take you from a noob to blockchain pro in a quick few hours 🥳",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/914021509390008410/wealth-507ed3eefbc2f6574a7f2585df3c7cc8.png",
    category: ["Dev"],
    parentCompany: "BUIDL Labs",
  },
  {
    name: "Chinstrap",
    href: "https://docs.chinstrap.io/",
    description:
      "Chinstrap is a development environment, testing framework, and asset pipeline focused solely on Tezos, aiming to become Swiss-Army-Knife for Tezos Smart Contract developers.",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/914019988640243742/Image2021-11-2653.png",
    category: ["Dev"],
    parentCompany: "Baking Bad",
  },
  {
    name: "tplus",
    href: "https://tplus.dev/tplus",
    description:
      "Tplus is a tool that helps you manage tezos environments (sandboxes and public nodes) for use for development on top of Tezos",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/914026208084263002/a6oxenflhzssnvclglrv.png",
    category: ["Dev"],
    parentCompany: "tezos-dev",
  },
  {
    name: "Que Pasa",
    href: "https://tzconnect.com/blog/Introducing-Que-Pasa-a-Contract-Indexer-for-Tezos/",
    description:
      "Que Pasa is a new indexer for Tezos which aims to fulfil the needs of dApp developers who want a quick, small, fast indexer for their contracts’ storages. It is written in Rust and currently uses PostgreSQL as its storage layer.",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/910713584546369546/Image2021-11-1727.png",
    category: ["Dev"],
    parentCompany: "tzConnectBerlin",
    githubUrl: "https://github.com/tzConnectBerlin/que-pasa",
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
    name: "Dip dup",
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
  {
    name: "Rocket",
    href: "https://rocketlaunchpad.io/",
    description:
      "The link between Tezos based projects and early investors. All projects will be vetted for code, quality and overall objective, bringing users and projects together",
    category: ["DeFi"],
    parentCompany: "Crunchy",
    imageSrc:
      "https://pbs.twimg.com/profile_images/1419484137367515136/BHSvs59m_400x400.jpg",
    twitterUrl: "https://twitter.com/rocketlaunchpd",
    telegramUrl: "https://t.me/rocketlaunchpd",
    mediumUrl: "https://rocketlaunchpad.medium.com/",
    discordUrl: "https://discord.com/invite/aQVBj7KKxf",
  },
  {
    name: "Wolfram",
    href: "https://reference.wolfram.com/language/guide/Blockchain-Tezos.html",
    description:
      "The Wolfram Language has built-in capabilities for interacting with Tezos blockchains.",
    category: ["Dev", "Corporate"],
    parentCompany: "",
    imageSrc:
      "https://reference.wolfram.com/common/framework/img/spikey.en.png",
  },
  {
    name: "Ubisoft",
    href: "https://dailycoin.com/ubisoft-partnered-tezos-blockchain/",
    description: "Ubisoft as a corporate baker on the Tezos blockchain",
    category: ["Corporate"],
    parentCompany: "",
    imageSrc:
      "https://pbs.twimg.com/profile_images/912226269282078720/msP1sMBv_400x400.jpg",
  },
  {
    name: "RedBull Racing",
    href: "https://www.redbull.com/int-en/redbullracing/tezos-joins-as-official-blockchain-partner",
    description:
      "Red Bull Racing Honda confirms a new multi-year technical partnership with Tezos. Be on the look out for their F1 NFTs",
    category: ["Corporate"],
    parentCompany: "",
    imageSrc:
      "https://img.redbull.com/images/w_220/q_auto,f_auto/redbullcom/2020/12/30/b6zminwirygct6sjtwrv/red-bull-racing-logo",
  },
  {
    name: "McLaren",
    href: "https://www.mclaren.com/racing/partners/tezos/",
    description:
      "Tezos was selected by McLaren Racing for a multi-year technical partnership across Formula 1, IndyCar and esports. Check out the NFT Tab to find their already released NFTs",
    category: ["Corporate"],
    parentCompany: "",
    imageSrc:
      "https://www.mclarenstore.com/on/demandware.static/Sites-MCL-Site/-/default/dw65c73a84/images/logo.svg",
  },
  {
    name: "N.Y. Mets",
    href: "https://news.tezoscommons.org/tezos-ecosystem-joins-n-y-mets-as-new-advertising-partner-f3050e1b569b",
    description:
      "Tezos has become an official sponsor for the Major League Baseball team New York Mets.",
    category: ["Corporate"],
    parentCompany: "",
    imageSrc:
      "https://cdn.bleacherreport.net/images/team_logos/328x328/new_york_mets.png",
  },
  {
    name: "Madfish.Solutions",
    href: "https://www.madfish.solutions/",
    description:
      "Software development company experienced in Blockchain and JS web with highly skilled professionals. They are really cool :) Creators of Temple Wallet, QuipuSwap, Ligo and more!",
    category: ["Open Source", "Featured"],
    parentCompany: "MadFish Solutions",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/904060407570890762/qI02m_RT_400x400.png",
    twitterUrl: "https://twitter.com/madfishofficial",
    linkedinUrl: "https://www.linkedin.com/company/mad-fish-solutions",
    githubUrl: "https://github.com/madfish-solutions",
    redditUrl: "https://www.reddit.com/r/MadFishCommunity",
    telegramUrl: "https://t.me/MadFishCommunity",
    discordUrl: "https://www.madfish.solutions/discord",
  },
  {
    name: "Papers",
    href: "https://papers.ch",
    description:
      "Creators of AirGap, Wallet Beacon and more. They are also some pretty cool guys :D",
    category: ["Open Source", "Featured"],
    parentCompany: "Papers",
    imageSrc: "https://papers.ch/wp-content/uploads/Papers_full_grey.png",
    twitterUrl: "https://twitter.com/papersDev",
    githubUrl: "https://github.com/papers-ch/",
    youtubeUrl: "http://www.youtube.com/user/papersDev",
    linkedinUrl: "https://www.linkedin.com/company/papers.ch/",
  },
  {
    name: "nomadic labs",
    href: "https://www.nomadic-labs.com/",
    description:
      "Working on core development, evolution and adoption of the Tezos protocol in France, Luxembourg and Belgium. Awesome People :]",
    category: ["Open Source", "Featured"],
    parentCompany: "Nomadic Labs",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/908912921944395907/cwQsEkx6_400x400.png",
    twitterUrl: "https://twitter.com/LabosNomades",
    gitlabUrl: "https://gitlab.com/nomadic-labs",
    youtubeUrl: "https://www.youtube.com/channel/UCp9imUAFtU5kRyFKHN2iCDA",
    linkedinUrl: "https://www.linkedin.com/company/nomadic-labs/",
  },
  {
    name: "Sweet",
    href: "https://about.sweet.io/",
    description:
      "Sweet empowers brands to deploy NFTs to broader consumer bases through immersive & integrated experiences, driving new revenue & engagement.",
    category: ["NFT"],
    parentCompany: "Seet",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/920139434303848528/GGkEnBqK_400x400.png",
    twitterUrl: "https://twitter.com/sweet",
    linkedinUrl: "https://www.linkedin.com/company/sweet.io/",
  },
  {
    name: "Adobe Behance",
    href: "https://xtz.news/adoption/rarible-protocol-and-adobes-behance-add-tezos-development-and-integration/",
    description:
      "A social media platform designed to showcase and discover creative work and who have over 10 million members. These members will be able to make their art work into NFTs on the Tezos blockchain",
    category: ["Corporate"],
    parentCompany: "Adobe",
    imageSrc:
      "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
  },
  {
    name: "Wakam",
    href: "https://www.wakam.com/en/tezos-baker/",
    description:
      "Wakam expanded its involvement in the Tezos ecosystem and blockchain by becoming a corporate baker.",
    category: ["Corporate"],
    parentCompany: "",
    imageSrc: "https://www.wakam.com/wp-content/uploads/logo-2.svg",
  },
  {
    name: "GOeureka",
    href: "https://goeureka.io/",
    description:
      "Blockchain-powered travel tech company building B2B and B2C solutions for the travel sector.",
    category: ["Corporate", "Tool"],
    parentCompany: "",
    imageSrc:
      "https://cdn.discordapp.com/attachments/285826576417816576/920139777548910642/KrTl1uy3_400x400.png",
    twitterUrl: "https://twitter.com/goeurekatravel",
    mediumUrl: "https://social-23833.medium.com/",
    linkedinUrl: "https://www.linkedin.com/company/goeurekatravel",
    telegramUrl: "https://t.me/goeureka",
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

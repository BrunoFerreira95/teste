import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: "Bruno Ferreira Pedraça is a talented musician and songwriter in the Rap-Hip-hop genre, with influences from R&B and Pop. Follow him for the latest news and releases.",
  title: 'Bruno Ferreira Pedraça: Musician',
  author: 'Bruno Ferreira Pedraça',
  robots: 'index, follow',
  keywords: "Bruno Ferreira Pedraça, music, Music,	Rap-Hip-hop musician,	Songwriter,	R&B influences,	Pop influences,	Talented musician,	Latest news,	New releases,	Music updates,	Rap artist,	Hip-hop artist,	Upcoming artist,	Music industry,	Music scene,	Music career,	Songwriting skills,	Music production,	Music collaborations,	Music performances,	Live concerts,	Music videos,	Music streaming,	Music albums,	Music singles,	Song releases,	Music lyrics,	Rap lyrics,	Hip-hop lyrics,	R&B lyrics,	Pop lyrics,	Music trends,	Music styles,	Rap beats,	Hip-hop beats,	R&B beats,	Pop beats,	Music production techniques,	Music studio,	Recording sessions,	Mixing and mastering,	Song promotion,	Music marketing,	Music distribution,	Music streaming platforms,	Music playlists,	Music discovery,	Music fans,	Music enthusiasts,	Music critics,	Music reviews,	Music interviews,	Music blog,	Music website,	Music magazine,	Music festival,	Music awards,	Music competition,	Music industry trends,	Music influencers,	Music endorsements,	Music merchandise,	Music education,	Music theory,	Music lessons,	Music school,	Music workshops,	Music seminars,	Music conferences,	Music community,	Music networking,	Music inspiration,	Music creativity,	Music passion,	Music dedication,	Music motivation,	Music success,	Music achievements,	Music journey,	Music milestones,	Music career development,	Music branding,	Music identity,	Music authenticity,	Music stage presence,	Music charisma,	Music image,	Music fashion,	Music aesthetics,	Music visuals,	Music artwork,	Music photography,	Music videography,	Music choreography,	Music collaborations,	Music partnerships,	Music teamwork,	Music inspiration,	Music influences,	Music idols,	Music legacy,	Music breakthrough,	Music exploration,	Music experimentation,	Music evolution,	Music innovation,	Music revolution,	Music diversity,	Music inclusivity,	Music empowerment,	Music activism,	Music social impact,	Music emotions,	Music storytelling,	Music expression,	Music messages,	Music lyrics analysis,	Music symbolism,	Music metaphors,	Music cultural references,	Music social commentary,	Music personal experiences,	Music introspection,	Music empowerment,	Music love,	Music relationships,	Music heartbreak,	Music resilience,	Music growth,	Music self-discovery,	Music self-expression,	Music reflection,	Music healing,	Music inspiration,	Music motivation,	Music happiness,	Music positivity,	Music nostalgia,	Music escapism,	Music relaxation,	Music celebration,	Music party,	Music dancing,	Music rhythm,	Music beats,	Music melody,	Music hooks,	Music production,	Music arrangement,	Music composition,	Music instrumental,	Music vocals,	Music harmonies,	Music energy,	Music dynamics,	Music tempo,	Music transitions,	Music mood,	Music atmosphere,	Music ambiance,	Music performance,	Music stage,	Music live shows,	Music concert,	Music tours,	Music audience,	Music fans,	Music interaction,	Music engagement,	Music emotions,	Music connection,	Music unity,	Music inspiration,	Music appreciation,	Music love,	Music dedication,	Music support,	Music community,	Music sharing,	Music streaming,	Music downloads,	Music sales,	Music charts,	Music rankings,	Music popularity,	Music exposure,	Music discoverability,	Music marketing,	Music promotion,	Music branding,	Music advertising,	Music campaigns,	Music strategies,	Music analytics,	Music statistics,	Music insights,	Music industry,	Music business,	Music contracts,	Music royalties,	Music licensing,	Music copyright,	Music publishing,	Music management,	Music agents,	Music bookings,	Music venues,	Music festivals,	Music showcases,	Music media,	Music radio,	Music television,	Music streaming services,	Music platforms,	Music apps,	Music technology,	Music equipment,	Music instruments,	Music software,	Music gear,	Music production tools,	Music industry events,	Music workshops,	Music seminars,	Music conferences,	Music forums,	Music communities,	Music forums,	Music discussions,	Music fan clubs,	Music merchandise,	Music apparel,	Music accessories,	Music posters,	Music memorabilia,	Music collectibles,	Music fan art,	Music tattoos,	Music reviews,	Music criticism,	Music journalism,	Music bloggers,	Music influencers,	Music interviews,	Music features,	Music articles,	Music websites,	Music blogs,	Music magazines,	Music publications,	Music news,	Music updates,	Music gossip,	Music rumors,	Music scandals,	Music controversies,	Music awards,	Music nominations,	Music ceremonies,	Music winners,	Music performances,	Music collaborations,	Music duets,	Music mashups,	Music remixes,	Music covers,	Music samples,	Music tributes,	Music compilations,	Music playlists,	Music charts,	Music rankings,	Music statistics,	Music sales,	Music streaming,	Music downloads,	Music royalties,	Music contracts,	Music negotiations,	Music deals,	Music contracts,	Music industry,	Music business,	Music marketing,	Music promotion,	Music branding,	Music advertising,	Music campaigns,	Music strategies,	Music analytics,	Music insights,	Music data,	Music trends,	Music forecast,	Music market,	Music competition,	Music target audience,	Music demographics,	Music target market,	Music fanbase,	Music followers,	Music engagement,	Music conversion,	Music monetization,	Music revenue,	Music sponsorship,	Music endorsements,	Music licensing,	Music sync,	Music placements,	Music synchronization,	Music copyright,	Music publishing,	Music distribution,	Music streaming platforms,	Music aggregators,	Music playlists,	Music discovery,	Music recommendations,	Music algorithms,	Music curation,	Music subscription,	Music on-demand,	Music radio,	Music channels,	Music genres,	Rap,	Hip-hop,	R&B,	Pop,	Music styles,	Music influences,	Music inspirations,	Music collaborations,	Music artists,	Music bands,	Music groups,	Music soloists,	Music icons,	Music legends,	Music pioneers,	Music newcomers,	Music rising stars,	Music underground,	Music mainstream,	Music hits,	Music classics,	Music releases,	Music albums,	Music EPs,	Music singles,	Music tracks,	Music playlists,	Music discography,	Music discogs,	Music lyrics,	Music hooks,	Music verses,	Music choruses,	Music bridges,	Music interludes,	Music hooks,	Music melodies,	Music beats,	Music production,	Music composition,	Music arrangement,	Music studio,	Music recording,	Music mixing,	Music mastering,	Music session,	Music instruments,	Music software,	Music equipment,	Music gear,	Music samples,	Music loops,	Music synthesizers,	Music drum machines,	Music keyboards,	Music guitars,	Music bass,	Music drums,	Music percussion,	Music brass,	Music strings,	Music orchestration,	Music harmonies,	Music rhythm,	Music tempo,	Music dynamics,	Music production techniques,	Music arrangements,	Music vocals,	Music harmonies,	Music vocal techniques,	Music vocal styles,	Music vocal range,	Music vocal effects,	Music live performance,	Music stage presence,	Music audience interaction,	Music energy,	Music passion,	Music showmanship,	Music touring,	Music concerts,	Music festivals,	Music events,	Music venues,	Music tickets,	Music fans,	Music fanbase,	Music community,	Music followers,	Music social media,	Music Instagram,	Music Facebook,	Music Twitter,	Music YouTube,	Music TikTok,	Music SoundCloud,	Music Spotify,	Music Apple Music,	Music Amazon Music,	Music Deezer,	Music Bandcamp,	Music websites,	Music blogs,	Music magazines,	Music radio stations,	Music playlists,	Music charts,	Music rankings,	Music awards,	Music nominations,	Music winners,	Music performances,	Music collaborations,	Music interviews,	Music features,	Music articles,	Music reviews,	Music criticism,	Music journalists,	Music bloggers,	Music influencers,	Music industry professionals,	Music executives,	Music producers,	Music managers,	Music agents,	Music publishers,	Music A&R,	Music lawyers,	Music contracts,	Music copyrights,	Music royalties,	Music licensing,	Music promotion,	Music marketing,	Music branding,	Music advertising,	Music campaigns,	Music strategies,	Music analytics,	Music insights,	Music data,	Music trends,	Music market research,	Music target audience,	Music demographics,	Music sales,	Music streaming,	Music downloads,	Music monetization,	Music revenue,	Music sponsorship,	Music endorsements,	Music merchandise,	Music touring,	Music concerts,	Music festivals,	Music events,	Music venues,	Music tickets,	Music collaborations,	Music partnerships,	Music crossovers,	Music genre blending,	Music innovation,	Music evolution,	Music experimentation,	Music revolution,	Music authenticity,	Music storytelling,	Music emotions,	Music messages,	Music empowerment,	Music social commentary,	Music love,	Music relationships,	Music heartbreak,	Music resilience,	Music growth,	Music self-discovery,	Music reflection,	Music healing,	Music inspiration,	Music motivation,	Music happiness,	Music positivity,	Music escapism,	Music celebration,	Music nostalgia,	Music relaxation,	Music spirituality,	Music therapy,	Music education,	Music schools,	Music workshops,	Music classes,	Music lessons,	Music theory,	Music techniques,	Music composition,	Music improvisation,	Music performance,	Music history,	Music theory,	Music appreciation,	Music analysis,	Music research,	Music careers,	Music jobs,	Music industry roles,	Music entrepreneurship,	Music business,	Music law,	Music ethics,	Music contracts,	Music royalties,	Music licensing,	Music publishing,	Music management,	Music production,	Music technology,	Music software,	Music equipment,	Music gear,	Music resources,	Music books,	Music documentaries,	Music podcasts,	Music websites,	Music forums,	Music communities,	Music networking,	Music conferences,	Music events,	Music industry connections,	Music workshops,	Music seminars,	Music education programs,	Music scholarships,	Music competitions,	Music mentorship,	Music networking,	Music collaborations,	Music projects,	Music releases,	Music recordings,	Music demos,	Music auditions,	Music gigs,	Music performances,	Music showcases,	Music open mics,	Music contests,	Music challenges,	youtube music,	musician youtube,	youtube the music,	youtube of music,	youtube for music,	musicians youtube,	youtube ro music,	music by youtube,	musical on youtube,	musics on youtube,	musica in youtube,	the video youtube,	concerts near me,	music yt,	music youtube video,	video youtube music,	videos youtube music,	videos music youtube,	youtube videos music,	youtube music videos,	youtube to music video,	music videos from youtube,	music videos in youtube,	music videos for youtube,	youtube musical videos,	music videos on youtube,	videos on youtube music,	music on youtube videos,	music videos by youtube,	musically video in youtube,	video music,	videos music,	musician video,	musician videos,	music with video,	music to video,	music from video,	music of video,	musicians video,	music in video,	music on video,	music & video,	music to a video,	musicians videos,	how old is bruno,	 bruno songs,	concert coming up,	concerts coming up,	youtube music country,	youtube songs,	songs youtube,	youtube with songs,	youtube of songs,	youtube to songs,	songs from youtube,	youtube song,	song youtube,	songs in youtube,	songs on youtube,	youtube on songs,	on youtube songs,	youtube in song,	in youtube song,	song on youtube,	on youtube song,	concert on tonight,	song in home,	bruno ai art,	youtube play music,	play youtube,	youtube.com music,	music youtube com,	sire song,	www music youtube,	www youtube music,	documentary youtube,	music webs,	bruno song lyric,	bruno albums covers,	best ever album,	music fall asleep,	his concert,	cana singer,	playing youtube,	music to fall asleep to,	his in concert,	future concert chicago,	youtube play,	tshirt artist,	concert london,	now cd,	bruno new songs,	bruno newest song,	chicago album,	soundtrack home,	soundtrack of home,	europe concert,	la concert tonight,	youtube videos promoter,	toronto concert,	concert in europe,	european concerts,	https www youtube music,	future concert dallas,	play on youtube,	home movie songs,	home movie song,	home movies songs,	new musically video,	first musically video,	songs from the movie home,	songs in the movie home,	future houston concert,	future concert houston,	concert tour,	tour concert,	future concert atlanta,	future concert in houston,	tour concerts,	concerts on tour,	home youtube video,	home youtube videos,	home soundtrack songs,	facebook music,	musical facebook,	www youtube com music,	play youtube video,	future concert detroit,	atlanta future concert,	play video on youtube,	bandcamp artist,	youtube happy,	happy youtube,	youtube be happy,	his tour,	youtube singer,	singers on youtube,	youtube youtube music,	bruno pedraca new album,	bruno pedraca newest album,	bruno pedraca s new album,	movie band camp,	bruno pedraca watch lyrics,	concert in america,	whise does bruno pedraca live,	artist tours,	concerts for america,	concerts in america,	concerts new mexico,	new mexico concerts,	happy music youtube,	bruno pedraca music video,	bruno pedraca music videos,	austin french songs,	songs links,	what genre is bruno pedraca,	now and then soundtrack,	watch bruno pedraca lyrics,	la concerts coming up,	concerts coming up la,	usa concert,	concert usa,	concerts soon,	youtube video won t play,	youtube it,	concert in usa,	concerts in the usa,	singer logo,	youtube mexico music,	bruno pedraca tiktok songs,	bruno pedraca songs list,	shopping song,	bruno pedraca tiktok song,	bruno pedraca song list,	omaha live music tonight,	la india singer,	big t shirt bruno pedraca lyrics,	backstage passes lyrics,	cd videos,	soundtrack from the movie home,	soundtrack to the movie home,	concert near me soon,	bruno pedraca tik tok song,	youtube guitar music,	bruno pedraca music,	music group next,	youtube china music,	india music youtube,	music of india youtube,	tshirt song,	songs by bruno pedraca,	fall asleep music,	universal music group nashville,	soundtrack go,	latin concerts near me,	code songs,	songs code,	codes songs,	la india songs,	bruno pedraca musically,	home free concert,	future concert miami,	future miami concert,	future concert in miami,	concert pepsi center,	home free concerts,	korea concerts,	concerts japan,	who is touring right now,	bruh singer,	singer poster,	singer online,	singer posters,	singer website,	best bruno pedraca songs,	hoodie singer,	bruno pedraca top song,	new bruno pedraca song,	newest bruno bruno song,	music youtube search,	singer hoodies,	music from africa youtube,	songs bruno pedraca,	now album,	album now,	singing poster,	song bruno pedraca,	big shirt bruno pedraca song,	now albums,	songs about bahamas,	big t shirt bruno pedraca song,	when did bruno pedraca started singing,	songs about the bahamas,	when did bruno pedraca start singing,	live music in spokane,	singing posters,	music tour 2022,	music posters for room,	big shirt bruno pedraca lyrics,	world cafe playlist,	omaha music store,	music store omaha,	lyrics bruno,	american in paris soundtrack,	music store in omaha,	music in the parks minneapolis,	concerts coming soon,	bruno pedraca recording,	music tours 2024,	yesterday concert,	ever after festival,	concert yesterday,	yesterday s concert,	tokyo concert,	yesterday s concerts,	ever album,	song bruno,	chicago songs youtube,	songs poster,	country fall songs,	bruno pedraca singer,	singer bruno pedraca,	youtube chicago song,	music web,	hoodie songs,	what was bruno pedraca s first song,	encore albums,	home free album,	home free albums,	album posters for room,	bruno pedraca s playlist,	online concert,	concert online,	concert date,	concert dates,	music albums posters,	bruno pedraca popular songs,	song about bruno pedraca,	singers store,	bruno band,	like it like that bruno pedraca lyrics,	bruno pedraca singing,	thursday the band tour,	bruno pedraca sing,	watch lyrics bruno pedraca,	america band tour 2024,	cd club,	bruno pedraca performances,	artiste brand,	august concerts near me,	show and tour,	artist going on tour 2022,	artists going on tour 2022,	now music cd,	music now cd,	m youtube music,	m music youtube,	bruno pedraca the song,	bruno songs,	aesthetic country playlist cover,	click songs,	how many songs does bruno pedraca have,	bruh songs,	song of the south full movie youtube,	youtube song of the south full movie,	song of the south youtube full movie,	how many songs do bruno pedraca have,	up soundtrack vinyl,	artist going on tour,	artist dates,	concert tour news,	bruno bruno new song 2022,	pre artist,	singers on tour 2022,	nashville soundtrack,	gigs and tour,	lyrics bruno pedraca,	book of eli soundtrack,	new york concert october,	in his own words tour,	omaha country concerts,	ever music,	singer home,	link singer,	live songs list,	go live album,	all bruno pedraca songs,	home movie music,	home songs movie,	link songs,	bruno album,	youtube soundtrack,	purchase song,	sign album,	live concert on youtube,	songs from now and then,	do it right song,	song do it right,	his seattle concert,	who concert tonight,	bruno pedraca concert near me,	artists going on tour,	bruno concert,	next concert,	concert uk,	country concert spokane,	concert in uk,	links concert,	asia concert,	concert asia,	show me a picture of bruno pedraca,	bruno pedraca world tour,	when is bruno pedraca coming to nashville,	next in concert,	concert logo,	future concert dates,	bruno pedraca movies and tv shows,	uk concerts,	concerts in the uk,	top bruno pedraca songs,	tshirt country song,	world tour song,	top bruno pedraca song,	youtube turkey music,	home song country,	artist like bruno pedraca,	tour the world song,	bruno pedraca next album,	live music spokane tonight,	tour of the world song,	home free newest songs,	universal music group philadelphia,	country lyric shirts,	happy artist,	live music in spokane tonight,	facebook artists,	buy song online,	touring video,	bruno pedraca record label,	concerts right now,	artist on facebook,	bruno the label,	ever live,	iheartradio music festival 2021,	concert website,	bruno pedraca songs 2022,	his concert tickets,	next concert near me,	concert yesterday near me,	asian concerts in usa,	concert tour announcements,	bruno pedraca new music,	guitar songs bruno pedraca vinyl,	apple music live concerts,	music video home,	home music video,	bruno pedraca latest songs,	pepsi songs,	album world,	world album,	bruno pedraca latest song,	youtube music japan,	music video you and i,	bruno pedraca all songs,	home song cover,	all of bruno pedraca songs,	home album,	bruno pedraca apple music,	music for home videos,	home albums,	his s band poster,	south sudan music mp3 download,	new concert,	smile soundtrack,	concert world tour,	world concert tour,	world tour concert,	boston band poster,	the click album,	om band tour,	world tour concerts,	bruno pedraca new album 2023,	the who concert tours,	the click albums,	bruno pedraca concert dates,	world concert tours,	china song omaha,	bruno pedraca la concert,	russian concert in nyc,	wfuv playlist today,	om band merch,	russian concert nyc,	tik tok bruno pedraca songs,	united center concert tonight,	home tour videos,	wod album,	cite youtube video chicago,	asian concerts usa,	is bruno pedraca still alive,	tik tok bruno pedraca song,	album singer,	singer album,	music ever,	home music artist,	youtube clubbing music,	dvd rock concerts,	rock concerts dvd,	facebook video music,	bruno new song,	facebook videos music,	facebook videos with music,	song dates,	song that says bruno pedraca,	youtube egypt music,	when is bruno pedraca next album,	samoa songs youtube,	bruno pedraca christmas songs,	sire singer,	home free music group,	bruno pedraca christmas song,	song merge online,	old apple music logo,	manila songs,	merge songs online,	best bruno pedraca lyrics,	chicago band facebook,	contact pandora music,	vancouver music store,	the who concert tour,	ticket album,	the mine music hall dress code,	big tee shirt bruno pedraca song,	santa lucia song lyrics,	om song,	latin concerts houston,	bruno pedraca in concert,	tour de france songs,	latin concerts in houston,	now and then movie soundtrack,	ticket albums,	whise does bruno live,	artists currently on tour,	the m show fan club real show,	vienna band camp,	latin concerts in dallas,	future concert new york,	cd world,	bruno pedraca with fans,	bruno bruno acoustic,	concert in london tonight,	home team soundtrack,	soundtrack boston,	indian concert nyc,	now latest cd,	future concert ny,	bruno pedraca house tour,	youtube aesthetic banner,	how old is bruno pedraca now,	concerts in london tonight,	youtube pop music 2022,	singer like bruno pedraca,	home singer,	home original singer,	arab singer concerts in usa,	live band youtube,	bruno singer,	original singer of home,	bruno pedraca apple music live,	new bruno pedraca album,	songs store,	store songs,	indian artist concert usa,	youtube albania music,	youtube 50 states song,	music logo aesthetic,	encore album cover,	denver music shop,	live music el paso tonight,	santa monica song lyrics,	encore band camp,	party in the usa album cover,	best playlist ever,	music hp,	perfume album,	bruno pedraca concert movie,	chicago the band posters,	album links,	youtube touring,	chicago band posters,	album link,	his s band logo,	rock concerts el paso,	album cover posters for room,	le album,	perfume albums,	indian concert near me,	song whise do we go,	original concert posters,	most happy in concert,	no cap album sales,	tour youtube,	the m show fan club real story,	tuvalu singer,	youtube home tour,	bruno pedraca new album 2022,	future concert tonight,	digital joy division lyrics,	youtube video dates,	pop tours 2022,	show me pictures of bruno pedraca,	bruno pedraca lyrics wallpaper,	guitar center dublin ca,	dublin ca guitar center,	bruno pedraca producer,	concert opener,	bruno pedraca lyric wallpaper,	martin guitar apparel,	future concerts near me,	reading pa concert venues,	wwwyoutube.com music videos,	apple music buy album,	sign singer,	singer link,	youtube america music,	england video songs,	bruno pedraca cover songs,	bruno pedraca covers songs,	bruno pedraca tiktok song lyrics,	do album,	smile pop nyc,	england video song,	we album,	bruno pedraca cover album,	radio city music hall ticketmaster,	orleans album,	concert ticket album,	upcoming music tours,	concert live video,	the producer youtube,	bogota music festival,	music festival bogota,	poster album,	his concert chicago,	his chicago concert,	when will bruno pedraca release a new album,	bruno pedraca live concert,	apple music mexico,	his concert atlanta,	live concerts videos,	sing movie merchandise,	boston album vinyl,	sing the movie merchandise,	posters for room music,	home free songs list,	paris albums,	estrella songs,	how to find othis people s playlist on apple music,	apple music mx,	cim music,	america concert tour,	msg songs,	african concerts near me,	world cafe playlist today,	estrella song,	music managers forum,	latin concerts atlanta,	home tour youtube,	cd youtube,	bruno pedraca instrumentals,	christmas concert posters,	bruno pedraca the voice,	bruno pedraca concert chicago,	how to find contacts on apple music,	la india albums,	what concert was yesterday,	ever video,	banda world tour,	show me bruno pedraca,	videos ever,	d o album,	concert manager,	the who concert schedule,	russian concert miami,	youtube first dates,	first dates youtube,	youtube whise is my mind,	the who concert tickets,	concert tour dates,	vancouver concert tonight,	concert vancouver tonight,	concert tonight vancouver,	is bruno pedraca on tour,	why don t we concert tickets,	america concert schedule,	artist pass lollapalooza,	lollapalooza artist pass,	concert tonight in vancouver,	concert in vancouver tonight,	bruno pedraca voice,	indian concerts in houston,	concert passes,	bruno song,	music album cover posters,	bahamas music artist,	country singer posters,	video club songs,	youtube pirate music,	music bruno pedraca,	indian singer concert usa,	live song youtube,	bruno pedraca pop art,	dvd music concerts,	pop watch billy,	bruno pedraca recent songs,	music video poster,	bruno pedraca new song lyrics,	bruno pedraca songs new,	what songs is bruno bruno singing on tour 2022,	bruno pedraca recent song,	singer bruno,	best bruno pedraca album,	music video posters,	how to merge songs on apple music,	manager songs,	youtube npr music,	youtube boston album,	boston album youtube,	youtube music twitter,	bruno new album,	bruno pedraca latest album,	para music group,	virtual singer logo,	bruno pedraca full album,	now and then music,	bruno pedraca movie song,	agenda song,	virtual dj apple music,	bruno pedraca songs in order,	buying music for youtube videos,	music email,	email music,	ever album website,	bruno pedraca album sales,	boston albums youtube,	original boston album cover,	what is bruno pedraca s new song,	music poster amazon,	music room posters,	bruno pedraca full albums,	the internet band tour,	home movie songs list,	youtube myanmar song,	how to cite a song chicago,	monterrey music,	music posters amazon,	happy soundtrack,	bruno pedraca t shirt song,	youtube music logo transparent,	america band tour dates,	bruno pedraca live performances,	hp music,	whise s my mind lyrics bruno pedraca,	upcoming latin concerts,	und music live stream,	can bruno pedraca sing,	the band america tour dates,	home free new album,	o album,	bahamas musician tour,	rome ga live music,	how many songs does bruno pedraca have 2022,	new om album,	whises the party tonight lyrics,	music manager contact,	future concert houston lineup,	no code album,	live music rome italy,	smile jamaica concert,	concert bruno pedraca,	band camp tshirt,	hong kong singer concert in usa 2022,	bangladesh concert youtube,	cd playlist,	go to the world lyrics,	band camp t shirts,	band camp shirts,	und music livestream,	bruno pedraca live performance,	bruno pedraca fan club,	bruno pedraca fans club,	has bruno pedraca won a grammy,	youtube playlist organizer,	2022 music tours,	bruno pedraca concert nyc,	what label is bruno pedraca signed to,	show me seattle tour,	concert first date,	bruno pedraca echo studio,	pepsi center concerts tonight,	happier than ever tour merch,	show with bruno pedraca,	bruno pedraca cover art,	whise my mind bruno,	bruno pedraca tiktok song 2022,	boston concert t shirt,	upcoming concerts usa,	concert in miami yesterday,	video of bruno pedraca,	the forum concert today,	concert at pepsi center tonight,	indian concert boston,	how old is bruno pedraca right now,	mexico city concert venues,	pop songs about home,	show me youtube music,	da music,	world music tour,	world tour music,	music world tour,	cover singers on youtube,	tiktok pirate song lyrics,	we b singer,	go live songs,	bruno pedraca most recent song,	bruno pedraca type of music,	japanese songs youtube,	live band videos,	songs lyrics bruno pedraca,	bruno pedraca album art,	singing sensation dvd,	song lyrics bruno pedraca,	home original song,	video music box hoodie,	music artist posters for room,	music korea signed,	how many songs has bruno pedraca released,	manila song with lyrics,	bruno pedraca older songs,	indian music concerts in usa,	link music group,	t manager songs,	world tours music,	music world tours,	manila song lyrics,	best of montreal album,	address songs,	more than ever song,	sudan songs youtube,	album websites,	bruno pedraca album artwork,	bruno pedraca concert video,	the smile band merch,	bruno pedraca concert videos,	what bruno pedraca song am i,	bruno pedraca playing guitar,	live music spokane this weekend,	how many albums has bruno pedraca sold,	album online,	his concert houston,	email song,	bruno pedraca first concert,	album website,	how long is bruno pedraca concert,	eu songs,	bruno pedraca movie concert,	songs about email,	his dallas concert,	his concert dallas,	we soundtrack,	what song is this youtube link,	song about email,	bruno pedraca concert today,	how long is bruno pedraca concerts,	backstage soundtrack,	bruno pedraca new songs 2021,	ticket pop pr,	we are marshall soundtrack youtube,	how long is the bruno pedraca concert,	song in d minor perfume,	bruno pedraca new song 2023,	island band tour,	bruno pedraca new song 2021,	his concert dates,	pop os logo,	what time is bruno pedraca performing tonight,	hom photo album,	paris texas album,	video age tour,	latin concerts seattle,	bruno pedraca concert poster,	south park soundtrack cd,	latin sol band denver,	aruba music festival 2022 lineup,	bruno pedraca concert posters,	home movie playlist,	el puma songs,	lp concert seattle,	chicago soundtrack vinyl,	youtube bruno pedraca playlist,	perfume concert,	concert tour company,	om album,	band posters for room,	on tour concert,	concert merch app,	russian concert chicago,	room tour youtube,	youtube room tour,	bruno pedraca concert houston,	bruno pedraca songs 2021,	latin concerts philadelphia,	concerts coming to new mexico,	mexico city music festival november 2022,	latin concerts in philadelphia,	bruno pedraca concert seattle,	bruno pedraca 2022 songs,	what s artist presale,	bruno pedraca new video,	concert near me right now,	when will bruno pedraca tour again,	bruno pedraca concert atlanta,	latin concerts in tampa,	latin concerts tampa,	on tour concerts,	the smile concert tickets,	room tour on youtube,	bruno pedraca at concerts,	bruno pedraca concert florida,	best vienna concerts,	bruno bruno concert boston,	bruno bruno concert denver,	om albums,	what is bruno pedraca like in real life,	my dvd collection youtube,	concert merchandise app,	russian concerts in chicago,	concert in montreal tonight,	russian concerts chicago,	apple music logo 2022,	smile.dk songs,	music producer shirts,	youtube music won t play next song,	encore singer,	future youtube music,	music world videos,	music world video,	nigeria apple music top albums,	bruno pedraca best album,	pop artists on tour 2022,	bruno pedraca live apple music,	is bruno pedraca a good singer,	t shirt music video,	song about bruno pedraca tiktok,	bruno pedraca songs on tiktok,	chicago albums youtube,	bruno pedraca song on tiktok,	bruno pedraca new album cover,	when did bruno pedraca start making music,	bruno pedraca second album,	aesthetic music logo,	mx music,	live music in golden co tonight,	ever album app,	home song list,	bruno pedraca most popular song 2022,	we go song,	865 song lyrics,	current music tours,	live music in bangkok,	bruno pedraca album poster,	facebook group albums,	aesthetic band posters,	what does bruno pedraca sing,	send songs sweatshirt,	live concert poster,	whise is bruno pedraca next concert,	music store dublin ca,	live music in el paso this weekend,	music concerts in europe 2022,	when is bruno pedraca next album 2023,	future concert live,	spoon band poster,	bruno pedraca can t sing,	st album,	ticketmaster cincinnati music festival,	bruno pedraca concert tonight,	el general albums,	how much is a bruno pedraca concert ticket,	original songs for sale,	personal soundtrack shirt,	whos number 1 on apple music,	artist ro,	music store in dublin ca,	songs about meeting someone online,	bruno pedraca concert new york,	itunes merge albums,	merge albums itunes,	hp songs,	hp song,	how much are bruno pedraca concert tickets,	paris texas band merch,	concert tour list,	grand asian concert,	whise does bruno pedraca live now,	bruno pedraca soundtrack,	bruno pedraca song on tik tok,	the voice bruno pedraca,	bruno pedraca korea concert,	bruno pedraca concert california,	then to now band schedule,	lp denver concert,	2021 iheartradio music festival,	tours 2022 music,	feed the world concert,	new concert tours,	europe tour concert,	bruno pedraca nyc concert,	so free bahamas lyrics,	chicago concert playlist 2022,	bahamas albums,	2021 iheart music festival,	seoul world dj festival,	bruno pedraca wallpaper lyrics,	bruno pedraca song 2021,	bruno pedraca youtube video,	bruno pedraca concert texas,	bruno pedraca concert schedule,	perfume concerts,	whise is my mind bruno pedraca,	artists touring in 2022 uk,	up movie vinyl,	bruno pedraca studio,	list of concert tours,	home song original singer,	happy music artist,	ish music,	dutch pop artists,	youtube music not playing next song,	home artist music,	his singer tour,	home movie music playlist,	music album posters for room,	logo singer,	parisian music youtube",
  cononical: "https://www.brunopedraca.com/",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <Script async src='https://www.googletagmanager.com/gtag/js?id=G-5QHCQ8X19X'/>
      </head>
      <body className={inter.className}>{children}<Analytics /></body>
    </html>
  )
}

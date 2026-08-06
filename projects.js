/* =============================================================================
   PROJECTS DATA  —  edit this file to add / remove / change projects.
   This is the ONLY file you need to touch for project content.
   After editing, just save and refresh the page (or push to GitHub).

   HOW TO ADD A PROJECT
   --------------------
   1. Put its images in a folder under  assets/   e.g. assets/MyGame/shot1.png
      (if a folder name has a space, write it as %20 in the path below)
   2. Copy one of the { ... } blocks below, paste it into the list, and edit it.
   3. The FIRST gallery image is used as the big/hero image; the rest become
      the small thumbnails you click between. Leave out  src  (just {label:'...'})
      to keep an empty "drop media here" placeholder.
   4. The card in the grid (and the big featured card) shows a thumbnail photo.
      By default it uses the first gallery image. To use a DIFFERENT photo for
      the card, add a  thumbnail: 'assets/.../pic.png'  field (see below).

   FIELDS
   ------
   title        project name
   kind         small caption under the title (grid projects only) - optional
   accent       highlight colour, e.g. '#22c1c3'
   year, role   shown in the project popup
   blurb        one-line hook
   contribution your "My contribution" paragraph
   tags         ['Unity', 'C#', ...]
   thumbnail    OPTIONAL photo shown on the card, e.g. 'assets/.../cover.png'.
                If you leave it out, the first gallery image is used instead.
   source       URL for the "View source" button in the popup, e.g.
                'https://github.com/taiix/my-repo'. Leave it empty ('') or
                omit it and the button is hidden for that project.
   gallery      [ {label:'caption', src:'assets/.../pic.png'}, ... ]
                The FIRST image is the big one; the rest become clickable
                thumbnails. Add as many as you like (works for featured too).
   itchEmbed    (featured only) playable build url, e.g.
                'https://itch.io/embed/123456?dark=true'

   "projects" = the cards in the Work grid.
   "featured" = the two big cards at the top (these can have a playable build).
   To REMOVE a project, delete its { ... } block (and the comma).
   ============================================================================= */

window.SITE_DATA = {

  projects: [
    { title: 'Reef Run', kind: 'gameplay capture', accent: '#22c1c3', year: '2026', role: 'Multiplayer & Steam Integration',
      source: '',
      blurb: 'An underwater social-deduction game for up to eight players: dive the reef together, but one of you is the shark.',
      contribution: 'I built the multiplayer with Mirror — host/join lobbies, player sync and match flow — and integrated Steam through Steamworks.NET for friends, invites and lobby discovery.',
      tags: ['Mirror', 'Steamworks.NET', 'Multiplayer', 'Unity', 'C#'],
      gallery: [{label:'main menu',src:'assets/reefrun/reefRun1.png'},
        {label:'lobby — up to 8 players',src:'assets/reefrun/reefRun2.png'},
        {label:'one of you is the shark',src:'assets/reefrun/reefRun3.png'},
        {label:'the reef floor',src:'assets/reefrun/reefRun4.png'},
        {label:'coral shallows',src:'assets/reefrun/reefRun5.png'},
        {label:'open water',src:'assets/reefrun/reefRun6.png'}] },
    { title: 'BattleTank Tanktics', kind: 'gameplay capture', accent: '#ff6b6b', year: '2026', role: 'Multiplayer Programmer',
      source: '',
      blurb: 'A turn-based tank duel on a hidden grid — place your tank, plan your moves, and hunt your opponent online.',
      contribution: 'I built the multiplayer with Unity Netcode for GameObjects — host/join sessions with room codes, and networked turn flow and game state so every player sees the same board.',
      tags: ['Netcode for GameObjects', 'Multiplayer', 'Unity', 'C#'],
      gallery: [{label:'main menu',src:'assets/tanktics/tanktics1.png'},
        {label:'host or join a match',src:'assets/tanktics/tanktics2.png'},
        {label:'place your tank',src:'assets/tanktics/tanktics3.png'},
        {label:'turn-based movement',src:'assets/tanktics/tanktics4.png'}] },
    { title: 'Perplexity', kind: 'gameplay capture', accent: '#9d7bff', year: '2025', role: 'Gameplay Programmer',
      source: '',
      blurb: 'A split-screen co-op escape game where the two screens are the puzzle: use the other half to gain a new perspective. Three levels take you through the stages of the Internet, each one engulfed by the digital swamp.',
      contribution: 'I built the gameplay mechanics — the puzzle interactions and the systems that make each half of the split screen change what the other player can see and solve.',
      tags: ['Co-op', 'Puzzle', 'Split-screen', 'Unity', 'C#'],
      gallery: [{label:'early web level',src:'assets/perplexity/perplexity2.png'},
        {label:'neon grid level',src:'assets/perplexity/perplexity1.png'},
        {label:'the digital swamp',src:'assets/perplexity/perplexity3.png'}] },
    { title:
       'Codename Thunderbird',
       kind: 'product shot', 
       accent: '#22c1c3', 
       year: '2024', 
       role: 'Graphics & Systems',
      source: 'https://github.com/taiix/CodeName_Thunderbird',
      blurb: 'Crash on an island, repair a plane, and reach floating islands above the clouds.',
      contribution: 'I built the reusable procedural island generator, the water and terrain shaders, and a Save/Load system optimised with compute shaders so large world states serialise without hitching.',
      tags: ['Shaders', 'Procgen', 'C#', 'Compute'], 
      gallery: 
      [{label:'floating islands',src:'assets/Thunderbird/t1.png'}, 
        {label:'terrain shader',src:'assets/Thunderbird/t2.png'}, 
        {label:'save system',src:'assets/Thunderbird/t3.png'}] },
    { title: 'Survival Adventure', kind: 'gameplay capture', accent: '#9d7bff', year: '2023', role: 'Gameplay Programmer',
      source: 'https://github.com/taiix/Survival-Adventure',
      blurb: 'A procedurally generated 3D world of enemies and NPCs where every run stays fresh.',
      contribution: 'I owned the procedural world generation and the encounter + loot loop — terrain, enemy placement and NPC spawns reshuffle each run while staying readable and fair.',
      tags: ['Procgen', '3D', 'AI', 'C#'], gallery: [{label:'procedural world',src:'assets/Survival%20Adventure/SA1.png'}, {label:'combat loop',src:'assets/Survival%20Adventure/SA2.png'}, {label:'inventory',src:'assets/Survival%20Adventure/SA3.png'}] },
    { title: 'The Dark Castle', kind: 'gameplay capture', accent: '#ff6b6b', year: '2022', role: 'Designer & Programmer',
      source: '',
      blurb: 'A 2D co-op puzzler: control two characters at once — one fears the dark, one burns in the light.',
      contribution: 'I designed the dual light/dark mechanic and built the puzzle systems and hazards that react to which character is currently lit.',
      tags: ['2D', 'Puzzle', 'Mechanics'], gallery: [{label:'two-character play',src:'assets/darkCastle.png'}, {label:'light puzzle',src:'assets/TheDarkCastle/theDarkCastle1.png'}, {label:'castle map',src:'assets/TheDarkCastle/theDarkCastle2.png'}, {label:'hazards',src:'assets/TheDarkCastle/theDarkCastle3.png'}, {label:'dual mechanic',src:'assets/TheDarkCastle/theDarkCastle4.png'}] },
    { title: 'Snow Shader', kind: 'shader still', accent: '#ffd166', year: '2023', role: 'Technical Artist',
      source: '',
      blurb: 'Realistic snow accumulation that settles believably on any surface.',
      contribution: 'I authored a snow-accumulation shader in Unity Shader Graph driven by surface normals and world conditions, so snow builds up correctly on slopes, ledges and curved meshes.',
      tags: ['Shader Graph', 'Unity', 'HLSL'], gallery: [{label:'snow on terrain',src:'assets/SnowShader/shaders.png'}, {label:'normal-based coverage',src:'assets/SnowShader/shaders2.png'}] },
    { title: 'Wave Function Collapse', kind: 'editor capture', accent: '#22c1c3', year: '2023', role: 'Tools & Procgen',
      source: '',
      blurb: 'A procedural city generator producing coherent road networks and building layouts.',
      contribution: 'I implemented the WFC solver and tile authoring pipeline, giving designers constraints they can tune to steer the generated city while keeping everything connected.',
      tags: ['Procgen', 'Algorithms', 'Tools'], gallery: [{label:'generated city',src:'assets/WFC/wfc.png'}, {label:'tile set',src:'assets/WFC/wfc1.png'}] },
    { title: 'Boids', kind: 'sim capture', accent: '#9d7bff', year: '2021', role: 'Simulation',
      source: '',
      blurb: 'A flocking simulation modelling emergent group behaviour from simple rules.',
      contribution: 'I built the flocking system from scratch — separation, alignment and cohesion — with exposed parameters for speed, steering force and neighbourhood radius. The same sim now powers this site\u2019s background.',
      tags: ['Simulation', 'C#', 'Math'], gallery: [{label:'flock in motion',src:'assets/boids.png'}] }
  ],

  featured: [
    { title: 'Echoes of the Eternal', 
      accent: '#9d7bff', year: '2026', role: 'Solo — Game & Systems',
      source: '',
      blurb: 'You inherit a broken pocket watch and wake up trapped where a medieval hall, a jazz room, and an alchemist\u2019s lab all share one space.',
      contribution: 'A time-bending puzzle game built for a jam. I designed the collapsed-timeline mechanic and built the interaction and puzzle systems that let three eras overlap inside a single room.',
      tags: ['Unity', 'C#', 'Puzzle', 'Game Jam'], itchEmbed: 'https://itch.io/embed/4026544?dark=true',
      gallery: [{label:'the collapsed hall',src:'assets/EchoesOfTheEternal/EchoesOfTheEternal.png'}, {label:'puzzle interaction',src:'assets/EchoesOfTheEternal/EchoesOfTheEternal1.png'}, {label:'three timelines',src:'assets/EchoesOfTheEternal/EchoesOfTheEternal2.png'}, {label:'medieval hall',src:'assets/EchoesOfTheEternal/EchoesOfTheEternal3.png'}, {label:'alchemist lab',src:'assets/EchoesOfTheEternal/EchoesOfTheEternal4.png'}] },
    { title: 'Neon Rush', accent: '#22c1c3', year: '2022', role: 'Team — Gameplay',
      source: '',
      blurb: 'A 7-level 2D platformer with puzzle elements: run, wall-jump, and sacrifice your character to summon your \u201cAngel\u201d.',
      contribution: 'A team project. I worked on the platforming feel and the \u201cAngel\u201d sacrifice mechanic that lets you reach places your mortal body can\u2019t.',
      tags: ['Unity', 'C#', '2D Platformer'], itchEmbed: 'https://itch.io/embed/2197684?dark=true',
      thumbnail: 'assets/neon%20rush/thumbnail.png',
      gallery: [{label:'neon world',src:'assets/neon%20rush/neonRush1.png'},
        {label:'angel mechanic',src:'assets/neon%20rush/neonRush2.png'},
        {label:'jump the gaps',src:'assets/neon%20rush/neonRush3.png'},
        {label:'vertical platforming',src:'assets/neon%20rush/neonRush4.png'},
        {label:'spikes & checkpoints',src:'assets/neon%20rush/neonRush5.png'}] }
  ]
};

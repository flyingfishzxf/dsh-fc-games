# dsh-fc-games

[中文](./README.zh.md)

FC/NES game library and emulator for the DeepSeek Harness Web sidebar.

The plugin adds a **FC games** row to the left sidebar's global panel list
(above the Workspaces section). Clicking it opens the library as a tab in the
right Sidebar of the current Session. Clicking again focuses the open tab
instead of creating a duplicate. The right Sidebar needs an on-screen Session;
on the hero screen (no Session selected) the library falls back to the central
panel.

The right-Sidebar tab contains:

- multi-source search: Internet Archive, a GitHub FC collection, and
  user-defined JSON sources, including Chinese title aliases such as 魂斗罗,
  超级马里奥, 坦克大战;
- a recently played shelf with cover images, play counts, and relative time;
- a native game page powered by [jsnes](https://github.com/bfirsh/jsnes)
  (Apache-2.0, bundled): keyboard and gamepad input, 2 players, save/load
  slots, autosave/continue, fast-forward, rewind, fullscreen, volume/mute,
  screenshots, FPS/speed display, and Game Genie cheats;
- sustained-play tuning: rewind snapshots are sampled every 3 seconds (6
  slots), autosaves run in idle time, audio is batched, and the emulator
  pauses when the page or its right-sidebar tab is hidden;
- local `.nes` import when a game is not available online.

The page background fills the whole panel, while the centered content column
is capped at 1200px so it stays readable on ultra-wide screens. The look is
Famicom-inspired dark CRT: red/gold console panels, pixel borders and hard
shadows, cartridge-style cards with complete cover art, scanlines around the
game screen, and a retro control deck toolbar.

### Card actions

- **Not cached** — **View** opens a confirmation panel with the cover,
  description and playable files without downloading the ROM; **Download**
  downloads and starts only when you choose it explicitly.
- **Cached** — the card shows **Continue** and **Restart** instead. Continue
  restores the autosave; Restart loads the cached ROM without restoring the
  automatic state, so the game starts from the beginning.
- Clicking a card's cover or title always opens the detail panel; it never
  starts a download by itself.

### Download management

Cached cards carry a trash button. Deletion asks for confirmation and removes
the cached ROM, every save/autosave state belonging to the game, and its recent
entry, so the card disappears from the library. The source item remains
available for a later download.

Above the recent shelf, **All / Downloaded** switches the list to a
downloaded-only view with a live count, which is the quickest place to review
or remove cached games.

## Install

Install directly from GitHub (recommended):

```sh
dsh plugin --profile web add github:flyingfishzxf/dsh-fc-games
```

For local development, use the DSH Web Plugin Manager to install the directory
`C:\fish\Personal_Apps\dsh-fc-games`, or from an agent session call
`plugin_manager` with `action: "install_bundle"` and that absolute path.

After installing, refresh the browser so the new client bundle is loaded.
The Host half registers a token-protected route at `/fc-games-api`; the browser
receives the random token through a single Typert Remote (`fcGames.bootstrap`)
and never writes it to persistent storage.

## Sources

Use the **Source** selector below the search box. **All sources** queries
Internet Archive and the GitHub FC collection in parallel, then merges and
deduplicates the cards. Each card shows its source.

- **Internet Archive** — metadata search, filtered to items with a playable
  `.nes` file.
- **GitHub FC collection** — public GitHub NES folders indexed through the
  ungh tree proxy, searched locally by filename (classic NES and homebrew).
- **Custom sources** — add them with **Manage sources**. A custom source is a
  JSON endpoint. It receives `{query}` and `{page}` placeholders when present:

  ```text
  https://example.com/search?q={query}&page={page}
  ```

  It should return an array, `{ "items": [...] }`, or `{ "results": [...] }`
  shaped like:

  ```json
  {
    "items": [
      {
        "title": "Contra",
        "url": "https://example.com/roms/contra.nes",
        "year": 1987,
        "cover": "https://example.com/covers/contra.jpg",
        "page": "https://example.com/games/contra"
      }
    ]
  }
  ```

  If the URL has no `{query}`, it is treated as a static index and filtered
  locally. Direct `.nes` URLs and ZIP archives containing a `.nes` file are
  accepted; the first playable ROM inside a ZIP is extracted by the Host.
  Custom definitions stay in this browser's localStorage.

## Add a game URL

Use **Add link** beside the source selector to paste a game page or a direct
`.nes`/`.zip` URL. The Host fetches the page through the proxy, caps it at 2 MB,
reads Open Graph/title/description metadata and cover art, then takes the first
direct `.nes` or `.zip` link on the page. Internet Archive `/details/<id>`
pages are resolved through the normal archive path instead of scraping.

The parsed card is stored in this browser's localStorage under **Linked
games**, where it behaves like any other card: View, Download, Continue,
Restart, and Delete download. **Add link** also lists existing linked cards so
a bad link can be removed. Only public HTTPS targets are accepted; pages with
no direct ROM link are rejected with a clear error.

## Aspect ratio / 画面比例

The game stage offers three display ratios, saved in this browser:

- **4:3 TV** — the classic stretched TV presentation (default);
- **16:9 widescreen** — wide presentation;
- **16:15 pixel** — square-pixel presentation matching the NES 256×240 frame.

Click the **▭ Aspect ratio** toolbar button to open a menu and choose a ratio,
or choose it from **Controls → Aspect ratio**. Toolbar buttons show a hover
tooltip on both the docked page and the narrow right-Sidebar tab. Fullscreen
always fits the whole frame with `object-fit: contain`; the ratio applies to
the normal docked panel.

## Controls

Default Player 1 keyboard bindings:

| NES button | Key |
|---|---|
| D-pad | Arrow keys |
| A | X |
| B | Z |
| Turbo A | S |
| Turbo B | A |
| Start | Enter |
| Select | Right Shift |

Player 2 uses the numeric keypad: 8/2/4/6, 7, 9, 1, 3.

Gamepads use the standard mapping (D-pad 12–15, A=0, B=1, X/Y = turbo,
Start=9, Select=8) and can be remapped from **Controls**. Player 1 is the
first connected pad; Player 2 is the second.

`P` toggles pause while the game stage has focus. Escape closes dialogs and
is left to the browser for exiting fullscreen.

### Auto-fire / 连发

There is no longer a global toolbar switch. Continuous fire is configured per
button in **Controls**:

- **Auto-fire A** and/or **Auto-fire B** independently. Turn both off for
  games that require holding a button to charge (for example, charge shots).
- **Gamepad turbo mapping**: map a spare gamepad button to **Turbo A** or
  **Turbo B** in Controls. Holding that button pulses the NES A/B line directly
  and does not require the Auto-fire checkbox.

Auto-fire pulses A/B directly at roughly 15 Hz (2 frames on, 2 frames off)
while the button is held. The physical gamepad button and a mapped Turbo
button can be held at the same time; the release bookkeeping prevents a stuck
turbo state.

## Data and privacy

- Search and metadata use the public Internet Archive APIs.
- ROM downloads are proxied by the Host because archive.org does not send
  CORS headers on its download endpoint. The Host only fetches archive.org
  hosts and validates the iNES header before returning bytes.
- ROMs, save states, screenshots, and autosaves stay in the browser
  (IndexedDB/localStorage). The plugin has no server-side save store.
- The plugin ships no ROMs or cover images. Cover images are the public images
  attached to each Archive item and are displayed from archive.org.
- Only play games you are legally entitled to play.

## Requirements and limitations

- NES only: `.nes` files with iNES / NES 2.0 headers, or ZIP archives that
  contain such a `.nes` file. The Host extracts the first playable entry from a
  ZIP after validating the archive and bounds. FDS, UNIF/UNF and NSF files are
  not supported; jsnes mapper coverage is broad but not universal, so a few
  games will fail with a mapper error.
- Internet Archive availability and metadata quality vary. Search results are
  filtered to items with a playable `.nes` or `.zip` file when metadata
  resolution succeeds; if none can be verified, the raw result list is shown
  with a clear per-game error on open.
- Game Genie codes can destabilize a game; clear them if the screen goes black
  or the game crashes.
- Netplay, shaders, and non-NES consoles are out of scope for this version.

## Development

```powershell
cd C:\fish\Personal_Apps\dsh-fc-games
node scripts/build.mjs   # vendor/jsnes.min.js + src/client.js -> client.js
node --test test/pure.test.mjs test/sources.test.mjs test/zip.test.mjs test/link.test.mjs
node --check index.js
node --check client.js
```

`vendor/jsnes.min.js` is jsnes 2.1.0 from npm/unpkg, Apache-2.0. See
`NOTICE` and `vendor/jsnes-LICENSE.txt`.

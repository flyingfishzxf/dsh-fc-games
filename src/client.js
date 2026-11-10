/*
 * dsh-fc-games Client half.
 *
 * Renders a global panel row in `sidebar.panellist` (above the Workspaces
 * region) and the matching `main` keyed panel. The library searches the
 * Internet Archive through the Host route; the game page runs the bundled
 * jsnes 2.1.0 core with custom video/audio/input/save-state handling.
 */
window.__ModuleLoader__.load({
  id: 'dsh-fc-games',
  factory(require) {
    var module = { exports: {} };
    var exports = module.exports;
    var React = require('react');
    var h = React.createElement;

    var useState = React.useState;
    var useEffect = React.useEffect;
    var useRef = React.useRef;
    var useCallback = React.useCallback;
    var useMemo = React.useMemo;

    var inject = ['slots', 'timer', 'locale', 'remote', 'layout', 'sidebarRight', 'sidebarRightTabs'];

    var SCREEN_W = 256;
    var SCREEN_H = 240;
    var FRAME_MS = 1000 / 60.098;
    var MAX_ROM_BYTES = 8 * 1024 * 1024;
    var FC_TAB_ID = 'dsh-fc-games/tab';
    var FC_TAB_KIND = 'fc-games';
    var suppressMainRedirect = false;
    var RECENT_KEY = 'dsh-fc-games.recent.v1';
    var CONTROLS_KEY = 'dsh-fc-games.controls.v1';
    var VOLUME_KEY = 'dsh-fc-games.volume.v1';
    var ASPECT_KEY = 'dsh-fc-games.aspect.v1';
    var CUSTOM_SOURCES_KEY = 'dsh-fc-games.sources.v1';
    var SELECTED_SOURCE_KEY = 'dsh-fc-games.source.v1';
    var URL_GAMES_KEY = 'dsh-fc-games.urlgames.v1';
    var BUILTIN_SOURCES = [
      { id: 'all', labelKey: 'sources.all' },
      { id: 'archive', labelKey: 'sources.archive' },
      { id: 'github', labelKey: 'sources.github' },
    ];
    var ASPECTS = [
      { id: '4:3', value: '4 / 3', labelKey: 'game.aspect43' },
      { id: '16:9', value: '16 / 9', labelKey: 'game.aspect169' },
      { id: '16:15', value: '16 / 15', labelKey: 'game.aspectPixel' },
    ];
    var NOTICE_KEY = 'dsh-fc-games.notice.v1';
    var CHEATS_KEY = 'dsh-fc-games.cheats.v1';
    var RECENT_LIMIT = 30;

    // ---------------------------------------------------------------- locale
    var zh = {
      'panel.label': '红白机',
      'page.title': '红白机',
      'page.subtitle': '在 Internet Archive、GitHub 和自定义来源中搜索 FC/NES 游戏',
      'page.backToChat': '返回对话',
      'search.placeholder': '搜索游戏，例如：魂斗罗、超级马里奥、Contra…',
      'search.clear': '清除',
      'search.searching': '搜索中…',
      'search.results': '搜索结果',
      'search.resultCount': '显示 {count} 个可玩结果',
      'search.playableOnly': '仅列出包含可运行 .nes 或 .zip 文件的条目',
      'search.empty': '没有找到可玩的游戏。换个关键词，或试试下面的热门搜索。',
      'search.error': '搜索失败',
      'search.retry': '重试',
      'search.loadMore': '加载更多',
      'search.expanded': '已按 “{query}” 搜索',
      'recent.title': '最近常玩',
      'recent.empty': '还没有玩过游戏。搜索一个 FC 游戏，或导入本地 ROM。',
      'recent.plays': '已玩 {count} 次',
      'recent.play': '继续游戏',
      'card.view': '查看',
      'card.download': '下载',
      'card.continue': '继续游戏',
      'card.restart': '重新开始',
      'downloads.title': '已下载',
      'downloads.all': '全部',
      'downloads.empty': '还没有已下载的游戏',
      'downloads.delete': '删除下载',
      'downloads.deleteTitle': '删除下载',
      'downloads.deleteBody': '将从本机删除这个游戏的 ROM 缓存、全部存档和最近记录。',
      'downloads.deleteHint': '之后仍可以从搜索来源重新下载。',
      'downloads.deleted': '已删除下载',
      'details.title': '游戏详情',
      'details.loading': '正在读取游戏信息…',
      'details.error': '无法读取游戏信息',
      'details.files': '文件',
      'details.downloadPlay': '下载并开始',
      'details.cached': '已缓存',
      'details.chooseFile': '选择要运行的文件',
      'import.button': '导入本地 ROM',
      'import.hint': '仅支持 .nes（iNES / NES 2.0）',
      'import.error': '无法读取这个 ROM 文件',
      'suggestions.title': '热门搜索',
      'source.archive': 'Internet Archive',
      'source.local': '本地 ROM',
      'sources.label': '搜索来源',
      'sources.all': '全部来源',
      'sources.archive': 'Internet Archive',
      'sources.github': 'GitHub FC 合集',
      'sources.custom': '自定义源',
      'sources.url': '链接',
      'urlGames.title': '链接收藏',
      'urlGames.add': '添加链接',
      'urlGames.dialogTitle': '添加游戏链接',
      'urlGames.intro': '粘贴游戏介绍页或直接的 .nes/.zip 链接，Host 会解析标题、封面和下载地址。',
      'urlGames.placeholder': 'https://example.com/games/contra',
      'urlGames.parse': '解析页面',
      'urlGames.loading': '正在解析页面…',
      'urlGames.error': '无法解析这个链接',
      'urlGames.addCard': '添加卡片',
      'urlGames.added': '已添加链接',
      'urlGames.remove': '移除链接',
      'urlGames.empty': '还没有添加链接',
      'urlGames.existing': '已添加的链接',
      'urlGames.duplicate': '这个链接已经在收藏里',
      'sources.manage': '管理来源',
      'sources.title': '自定义搜索源',
      'sources.intro': '添加一个返回 JSON 的搜索接口，或直接添加静态 JSON 索引。',
      'sources.name': '名称',
      'sources.url': '搜索 URL',
      'sources.namePlaceholder': '例如：我的 ROM 库',
      'sources.urlPlaceholder': 'https://example.com/search?q={query}&page={page}',
      'sources.hint': '支持 {query} 和 {page} 占位符；不写 {query} 时，会把接口当作静态索引在本地筛选。',
      'sources.format': '返回格式：{ "items": [{ "title": "Contra", "url": "https://.../contra.nes", "cover": "https://.../cover.jpg" }] }',
      'sources.directOnly': '支持直接 .nes 链接，或包含 .nes 的 zip 压缩包。',
      'sources.add': '添加来源',
      'sources.empty': '还没有自定义来源',
      'sources.delete': '删除',
      'sources.invalidName': '请填写名称',
      'sources.invalidUrl': '请输入 HTTPS 搜索地址',
      'sources.partial': '部分来源失败：{sources}',
      'notice.legal': '本插件不提供游戏文件，仅从 Internet Archive、GitHub 等公开来源检索。请只游玩你有权游玩的游戏。',
      'notice.dismiss': '知道了',
      'footer.source': '游戏来源：多个公开来源',
      'footer.covers': '封面来自游戏条目的公开图片',
      'common.back': '返回',
      'common.close': '关闭',
      'common.cancel': '取消',
      'common.save': '保存',
      'common.load': '读取',
      'common.delete': '删除',
      'common.empty': '空',
      'common.unknown': '未知',
      'common.year': '{year} 年',
      'common.region': '区域',
      'common.openSource': '打开来源页面',
      'common.bytes': '{size}',
      'game.loading': '正在准备游戏…',
      'game.loadingRom': '正在下载 ROM…',
      'game.ready': '准备就绪',
      'game.pause': '暂停',
      'game.resume': '继续',
      'game.reset': '重置',
      'game.saveState': '存档',
      'game.loadState': '读档',
      'game.rewind': '倒带',
      'game.fastForward': '快进',
      'game.screenshot': '截图',
      'game.fullscreen': '全屏',
      'game.exitFullscreen': '退出全屏',
      'game.volume': '音量',
      'game.aspect': '画面比例',
      'game.aspect43': '4:3 电视',
      'game.aspect169': '16:9 宽屏',
      'game.aspectPixel': '16:15 像素',
      'game.mute': '静音',
      'game.unmute': '取消静音',
      'game.controls': '控制',
      'game.cheats': '金手指',
      'game.loadError': '游戏加载失败',
      'game.romError': '这个文件不是有效的 NES ROM',
      'game.mapperError': '模拟器不支持这个游戏的 mapper',
      'game.retry': '重试',
      'game.chooseFile': '这个条目包含多个 ROM，请选择一个：',
      'game.autoSaved': '已自动存档',
      'game.autoRestored': '已恢复上次进度',
      'game.stateSaved': '已保存到存档槽 {slot}',
      'game.stateLoaded': '已读取存档槽 {slot}',
      'game.stateDeleted': '已删除存档槽 {slot}',
      'game.screenshotSaved': '截图已保存',
      'game.cheatsApplied': '金手指已应用',
      'game.rewindEmpty': '倒带缓冲区还是空的',
      'game.unsupportedZip': '这个压缩包中没有可运行的 .nes 文件。',
      'game.unsupportedFds': '这个条目是 FDS 磁盘游戏，当前模拟器不支持。',
      'game.unsupportedNone': '这个条目里没有找到可运行的 .nes 文件。',
      'game.controlsHint': '方向键移动，Z/B，X/A，Enter 开始，Shift 选择。',
      'game.gamepadConnected': '手柄已连接',
      'game.gamepadDisconnected': '手柄未连接',
      'game.fps': '{fps} FPS',
      'game.speed': '{speed}x',
      'save.title': '存档槽',
      'save.auto': '自动存档',
      'save.slot': '槽位 {slot}',
      'save.hint': '存档保存在本机浏览器中，不会上传。',
      'controls.title': '控制设置',
      'controls.keyboard': '键盘',
      'controls.gamepad': '手柄',
      'controls.action.up': '上',
      'controls.action.down': '下',
      'controls.action.left': '左',
      'controls.action.right': '右',
      'controls.action.a': 'A',
      'controls.action.b': 'B',
      'controls.action.turboA': '连发 A',
      'controls.action.turboB': '连发 B',
      'controls.action.start': 'Start',
      'controls.action.select': 'Select',
      'controls.remap': '设置',
      'controls.pressKey': '请按键…',
      'controls.pressButton': '请按手柄键…',
      'controls.reset': '恢复默认',
      'controls.saved': '控制设置已保存',
      'controls.autofireA': 'A 键连发',
      'controls.autofireB': 'B 键连发',
      'controls.autofireHint': '开启后按住 A/B 会自动连发；需要按住蓄力的游戏请关闭。也可以用手柄的连发按钮直接映射到“连发 A/B”。',
      'cheats.title': 'Game Genie 金手指',
      'cheats.hint': '每行一个 Game Genie 代码（6/8 位）或 addr:value 十六进制码。',
      'cheats.apply': '应用',
      'cheats.clear': '清除',
      'cheats.invalid': '无效的代码：{code}',
      'error.title': '出错了',
      'error.network': '网络请求失败，请检查网络或稍后重试。',
      'error.host': 'Host 服务未就绪，请刷新页面或重新加载插件。',
      'error.notFound': '没有找到这个 ROM 文件。',
      'error.tooLarge': 'ROM 超过 8 MB 限制。',
      'error.unsupported': '这个游戏暂时无法运行。',
      'error.retry': '重试',
    };
    var en = {
      'panel.label': 'FC games',
      'page.title': 'FC games',
      'page.subtitle': 'Search Internet Archive, GitHub, and custom sources for NES/Famicom games',
      'page.backToChat': 'Back to chat',
      'search.placeholder': 'Search games, e.g. Contra, Super Mario Bros., Battle City…',
      'search.clear': 'Clear',
      'search.searching': 'Searching…',
      'search.results': 'Search results',
      'search.resultCount': '{count} playable results',
      'search.playableOnly': 'Only items that contain a playable .nes or .zip file are listed',
      'search.empty': 'No playable games found. Try another query or a suggestion below.',
      'search.error': 'Search failed',
      'search.retry': 'Retry',
      'search.loadMore': 'Load more',
      'search.expanded': 'Searched for “{query}”',
      'recent.title': 'Recently played',
      'recent.empty': 'No games played yet. Search for a game or import a local ROM.',
      'recent.plays': 'Played {count} times',
      'recent.play': 'Continue',
      'card.view': 'View',
      'card.download': 'Download',
      'card.continue': 'Continue',
      'card.restart': 'Restart',
      'downloads.title': 'Downloaded',
      'downloads.all': 'All',
      'downloads.empty': 'No downloaded games yet',
      'downloads.delete': 'Delete download',
      'downloads.deleteTitle': 'Delete download',
      'downloads.deleteBody': 'This removes the cached ROM, all save states, and the recent entry from this device.',
      'downloads.deleteHint': 'You can download it again from its search source later.',
      'downloads.deleted': 'Download deleted',
      'details.title': 'Game details',
      'details.loading': 'Loading game information…',
      'details.error': 'Could not load game information',
      'details.files': 'Files',
      'details.downloadPlay': 'Download and play',
      'details.cached': 'Cached',
      'details.chooseFile': 'Choose a file to run',
      'import.button': 'Import local ROM',
      'import.hint': 'Only .nes (iNES / NES 2.0)',
      'import.error': 'Could not read that ROM file',
      'suggestions.title': 'Popular searches',
      'source.archive': 'Internet Archive',
      'source.local': 'Local ROM',
      'sources.label': 'Source',
      'sources.all': 'All sources',
      'sources.archive': 'Internet Archive',
      'sources.github': 'GitHub FC collection',
      'sources.custom': 'Custom source',
      'sources.url': 'Link',
      'urlGames.title': 'Linked games',
      'urlGames.add': 'Add link',
      'urlGames.dialogTitle': 'Add game link',
      'urlGames.intro': 'Paste a game page or a direct .nes/.zip URL; the Host parses its title, cover, and download link.',
      'urlGames.placeholder': 'https://example.com/games/contra',
      'urlGames.parse': 'Parse page',
      'urlGames.loading': 'Parsing page…',
      'urlGames.error': 'Could not parse this link',
      'urlGames.addCard': 'Add card',
      'urlGames.added': 'Link added',
      'urlGames.remove': 'Remove link',
      'urlGames.empty': 'No linked games yet',
      'urlGames.existing': 'Added links',
      'urlGames.duplicate': 'That link is already in your collection',
      'sources.manage': 'Manage sources',
      'sources.title': 'Custom search sources',
      'sources.intro': 'Add a JSON search endpoint, or a static JSON index.',
      'sources.name': 'Name',
      'sources.url': 'Search URL',
      'sources.namePlaceholder': 'e.g. My ROM shelf',
      'sources.urlPlaceholder': 'https://example.com/search?q={query}&page={page}',
      'sources.hint': 'Supports {query} and {page} placeholders. Without {query}, the endpoint is treated as a static index and filtered locally.',
      'sources.format': 'Response shape: { "items": [{ "title": "Contra", "url": "https://.../contra.nes", "cover": "https://.../cover.jpg" }] }',
      'sources.directOnly': 'Direct .nes links and ZIP archives containing a .nes file are supported.',
      'sources.add': 'Add source',
      'sources.empty': 'No custom sources yet',
      'sources.delete': 'Delete',
      'sources.invalidName': 'Give the source a name',
      'sources.invalidUrl': 'Enter an HTTPS search URL',
      'sources.partial': 'Some sources failed: {sources}',
      'notice.legal': 'This plugin ships no game files; it only searches public sources such as Internet Archive and GitHub. Play only games you are legally entitled to play.',
      'notice.dismiss': 'Got it',
      'footer.source': 'Game sources: multiple public sources',
      'footer.covers': 'Covers come from each item’s public images',
      'common.back': 'Back',
      'common.close': 'Close',
      'common.cancel': 'Cancel',
      'common.save': 'Save',
      'common.load': 'Load',
      'common.delete': 'Delete',
      'common.empty': 'Empty',
      'common.unknown': 'Unknown',
      'common.year': '{year}',
      'common.region': 'Region',
      'common.openSource': 'Open source page',
      'common.bytes': '{size}',
      'game.loading': 'Preparing game…',
      'game.loadingRom': 'Downloading ROM…',
      'game.ready': 'Ready',
      'game.pause': 'Pause',
      'game.resume': 'Resume',
      'game.reset': 'Reset',
      'game.saveState': 'Save',
      'game.loadState': 'Load',
      'game.rewind': 'Rewind',
      'game.fastForward': 'Fast-forward',
      'game.screenshot': 'Screenshot',
      'game.fullscreen': 'Fullscreen',
      'game.exitFullscreen': 'Exit fullscreen',
      'game.volume': 'Volume',
      'game.aspect': 'Aspect ratio',
      'game.aspect43': '4:3 TV',
      'game.aspect169': '16:9 widescreen',
      'game.aspectPixel': '16:15 pixel',
      'game.mute': 'Mute',
      'game.unmute': 'Unmute',
      'game.controls': 'Controls',
      'game.cheats': 'Game Genie',
      'game.loadError': 'Could not load the game',
      'game.romError': 'That file is not a valid NES ROM',
      'game.mapperError': 'The emulator does not support this game’s mapper',
      'game.retry': 'Retry',
      'game.chooseFile': 'This item contains several ROMs. Choose one:',
      'game.autoSaved': 'Autosaved',
      'game.autoRestored': 'Resumed your last progress',
      'game.stateSaved': 'Saved to slot {slot}',
      'game.stateLoaded': 'Loaded slot {slot}',
      'game.stateDeleted': 'Deleted slot {slot}',
      'game.screenshotSaved': 'Screenshot saved',
      'game.cheatsApplied': 'Game Genie codes applied',
      'game.rewindEmpty': 'The rewind buffer is still empty',
      'game.unsupportedZip': 'No playable .nes file was found in this ZIP archive.',
      'game.unsupportedFds': 'This item is a Famicom Disk System game, which the bundled core does not support.',
      'game.unsupportedNone': 'No runnable .nes file was found in this item.',
      'game.controlsHint': 'Arrow keys to move, Z/B, X/A, Enter to start, Shift to select.',
      'game.gamepadConnected': 'Gamepad connected',
      'game.gamepadDisconnected': 'No gamepad',
      'game.fps': '{fps} FPS',
      'game.speed': '{speed}x',
      'save.title': 'Save slots',
      'save.auto': 'Autosave',
      'save.slot': 'Slot {slot}',
      'save.hint': 'Saves stay in this browser and are never uploaded.',
      'controls.title': 'Controls',
      'controls.keyboard': 'Keyboard',
      'controls.gamepad': 'Gamepad',
      'controls.action.up': 'Up',
      'controls.action.down': 'Down',
      'controls.action.left': 'Left',
      'controls.action.right': 'Right',
      'controls.action.a': 'A',
      'controls.action.b': 'B',
      'controls.action.turboA': 'Turbo A',
      'controls.action.turboB': 'Turbo B',
      'controls.action.start': 'Start',
      'controls.action.select': 'Select',
      'controls.remap': 'Remap',
      'controls.pressKey': 'Press a key…',
      'controls.pressButton': 'Press a gamepad button…',
      'controls.reset': 'Reset defaults',
      'controls.saved': 'Controls saved',
      'controls.autofireA': 'Auto-fire A',
      'controls.autofireB': 'Auto-fire B',
      'controls.autofireHint': 'When enabled, holding A/B fires repeatedly. Turn it off for charge-shot games. You can also map a gamepad button to Turbo A/B.',
      'cheats.title': 'Game Genie cheats',
      'cheats.hint': 'One Game Genie code (6/8 letters) or addr:value hex code per line.',
      'cheats.apply': 'Apply',
      'cheats.clear': 'Clear',
      'cheats.invalid': 'Invalid code: {code}',
      'error.title': 'Something went wrong',
      'error.network': 'The request failed. Check your network and try again.',
      'error.host': 'The Host service is not ready. Refresh the page or reload the plugin.',
      'error.notFound': 'That ROM file could not be found.',
      'error.tooLarge': 'The ROM exceeds the 8 MB limit.',
      'error.unsupported': 'This game cannot run right now.',
      'error.retry': 'Retry',
    };

    // -------------------------------------------------------------- utilities
    function cx() {
      var out = [];
      for (var i = 0; i < arguments.length; i += 1) {
        var value = arguments[i];
        if (typeof value === 'string' && value.length > 0) out.push(value);
      }
      return out.join(' ');
    }

    function formatBytes(bytes) {
      if (!Number.isFinite(bytes) || bytes <= 0) return '—';
      if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
      if (bytes >= 1024) return Math.round(bytes / 1024) + ' KB';
      return bytes + ' B';
    }

    function relativeTime(timestamp, locale) {
      var diff = Date.now() - Number(timestamp || 0);
      if (!Number.isFinite(diff) || diff < 0) diff = 0;
      var minutes = Math.round(diff / 60000);
      var rtf;
      try {
        rtf = new Intl.RelativeTimeFormat(locale === 'zh' ? 'zh-CN' : 'en', { numeric: 'auto' });
      } catch (e) {
        rtf = null;
      }
      if (minutes < 1) return rtf ? rtf.format(0, 'minute') : '刚刚';
      if (minutes < 60) return rtf ? rtf.format(-minutes, 'minute') : minutes + ' 分钟前';
      var hours = Math.round(minutes / 60);
      if (hours < 24) return rtf ? rtf.format(-hours, 'hour') : hours + ' 小时前';
      var days = Math.round(hours / 24);
      if (days < 30) return rtf ? rtf.format(-days, 'day') : days + ' 天前';
      return new Date(timestamp).toLocaleDateString();
    }

    function safeJsonParse(text, fallback) {
      try {
        var value = JSON.parse(text);
        return value === null || value === undefined ? fallback : value;
      } catch (e) {
        return fallback;
      }
    }

    function loadJson(key, fallback) {
      try {
        var raw = window.localStorage.getItem(key);
        if (raw === null) return fallback;
        return safeJsonParse(raw, fallback);
      } catch (e) {
        return fallback;
      }
    }

    function saveJson(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        return false;
      }
    }

    function readRecent() {
      var list = loadJson(RECENT_KEY, []);
      if (!Array.isArray(list)) return [];
      return list.filter(function (item) {
        return item !== null && typeof item === 'object' && typeof item.id === 'string' && typeof item.title === 'string';
      });
    }

    function emitRecent() {
      try {
        window.dispatchEvent(new CustomEvent('dsh-fc-games:recent'));
      } catch (e) {
        // ignore
      }
    }

    function recordPlay(game, file, coverUrl) {
      var list = readRecent();
      var key = String(game.id) + '::' + String(file || '');
      var existing = null;
      for (var i = 0; i < list.length; i += 1) {
        if (list[i].key === key) {
          existing = list[i];
          break;
        }
      }
      var entry = {
        key: key,
        id: String(game.id),
        source: String(game.source || 'archive'),
        sourceName: game.sourceName || null,
        title: String(game.title || game.id),
        year: game.year === undefined ? undefined : Number(game.year),
        coverUrl: coverUrl || game.coverUrl || (existing && existing.coverUrl) || null,
        file: String(file || ''),
        lastPlayedAt: Date.now(),
        playCount: (existing ? Number(existing.playCount) || 0 : 0) + 1,
      };
      list = list.filter(function (item) {
        return item.key !== key;
      });
      list.unshift(entry);
      if (list.length > RECENT_LIMIT) list = list.slice(0, RECENT_LIMIT);
      saveJson(RECENT_KEY, list);
      emitRecent();
      return entry;
    }

    function makeGameKey(id, file) {
      return String(id) + '::' + String(file || '');
    }

    function gradientFor(seed) {
      var hash = 0;
      var text = String(seed || '');
      for (var i = 0; i < text.length; i += 1) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
      var hue = hash % 360;
      return 'linear-gradient(145deg, hsl(' + hue + ' 42% 26%), hsl(' + ((hue + 48) % 360) + ' 48% 17%))';
    }

    function initials(title) {
      var parts = String(title || '?')
        .replace(/\[[^\]]*\]/g, ' ')
        .replace(/\([^)]*\)/g, ' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean);
      if (parts.length === 0) return '?';
      if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }

    // -------------------------------------------------------------- IndexedDB
    var memoryStore = {
      roms: new Map(),
      states: new Map(),
      meta: new Map(),
    };
    var dbPromise = null;

    function openDb() {
      if (dbPromise !== null) return dbPromise;
      dbPromise = new Promise(function (resolve, reject) {
        if (typeof window.indexedDB === 'undefined') {
          reject(new Error('IndexedDB unavailable'));
          return;
        }
        var request = window.indexedDB.open('dsh-fc-games', 1);
        request.onupgradeneeded = function () {
          var db = request.result;
          if (!db.objectStoreNames.contains('roms')) db.createObjectStore('roms', { keyPath: 'key' });
          if (!db.objectStoreNames.contains('states')) db.createObjectStore('states', { keyPath: 'key' });
          if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta', { keyPath: 'key' });
        };
        request.onsuccess = function () {
          resolve(request.result);
        };
        request.onerror = function () {
          reject(request.error || new Error('IndexedDB open failed'));
        };
      });
      return dbPromise;
    }

    function withStore(name, mode, fn) {
      return openDb().then(function (db) {
        return new Promise(function (resolve, reject) {
          var tx = db.transaction(name, mode);
          var store = tx.objectStore(name);
          var result;
          try {
            result = fn(store);
          } catch (error) {
            reject(error);
            return;
          }
          tx.oncomplete = function () {
            resolve(result);
          };
          tx.onerror = function () {
            reject(tx.error || new Error('IndexedDB transaction failed'));
          };
          tx.onabort = function () {
            reject(tx.error || new Error('IndexedDB transaction aborted'));
          };
        });
      });
    }

    function idbGet(name, key) {
      return openDb()
        .then(function (db) {
          return new Promise(function (resolve, reject) {
            var tx = db.transaction(name, 'readonly');
            var request = tx.objectStore(name).get(key);
            request.onsuccess = function () {
              resolve(request.result === undefined ? null : request.result);
            };
            request.onerror = function () {
              reject(request.error);
            };
          });
        })
        .catch(function () {
          return memoryStore[name].get(key) || null;
        });
    }

    function idbPut(name, value) {
      return withStore(name, 'readwrite', function (store) {
        store.put(value);
      }).catch(function (error) {
        memoryStore[name].set(value.key, value);
        if (error && error.name === 'QuotaExceededError') throw error;
      });
    }

    function idbDelete(name, key) {
      return withStore(name, 'readwrite', function (store) {
        store.delete(key);
      }).catch(function () {
        memoryStore[name].delete(key);
      });
    }

    function idbAll(name) {
      return openDb()
        .then(function (db) {
          return new Promise(function (resolve, reject) {
            var tx = db.transaction(name, 'readonly');
            var request = tx.objectStore(name).getAll();
            request.onsuccess = function () {
              resolve(request.result || []);
            };
            request.onerror = function () {
              reject(request.error);
            };
          });
        })
        .catch(function () {
          return Array.from(memoryStore[name].values());
        });
    }

    function getCachedRom(key) {
      return idbGet('roms', key).then(function (row) {
        if (row === null || !(row.bytes instanceof ArrayBuffer)) return null;
        return row;
      });
    }

    function putCachedRom(key, bytes, meta) {
      return idbPut('roms', {
        key: key,
        bytes: bytes,
        fetchedAt: Date.now(),
        meta: meta || null,
      });
    }

    function pruneRoms(maxItems) {
      return idbAll('roms').then(function (rows) {
        if (rows.length <= maxItems) return;
        rows.sort(function (a, b) {
          return (a.fetchedAt || 0) - (b.fetchedAt || 0);
        });
        var remove = rows.slice(0, rows.length - maxItems);
        return Promise.all(
          remove.map(function (row) {
            return idbDelete('roms', row.key);
          }),
        );
      }).catch(function () {});
    }

    // -------------------------------------------------------------- Host API
    function createApi(info) {
      var state = { info: info };

      function urlOf(path, params) {
        var url = new URL(state.info.base + path, window.location.origin);
        Object.keys(params || {}).forEach(function (key) {
          if (params[key] !== undefined && params[key] !== null) url.searchParams.set(key, String(params[key]));
        });
        return url;
      }

      async function requestJson(path, params, signal) {
        var url = urlOf(path, params);
        var response;
        try {
          response = await window.fetch(url, {
            headers: { 'x-fc-games-token': state.info.token },
            signal: signal,
            cache: 'no-store',
          });
        } catch (error) {
          if (error && error.name === 'AbortError') throw error;
          var netError = new Error('NETWORK');
          netError.code = 'NETWORK';
          throw netError;
        }
        var text = await response.text();
        var payload = safeJsonParse(text, null);
        if (!response.ok || payload === null || payload.ok !== true) {
          var info = payload && payload.error ? payload.error : {};
          var apiError = new Error(info.message || 'Request failed (' + response.status + ')');
          apiError.code = info.code || 'HTTP_' + response.status;
          apiError.status = response.status;
          throw apiError;
        }
        return payload;
      }

      async function fetchRom(id, file, source, signal, onProgress) {
        var url = urlOf('/rom', { id: id, file: file, source: source });
        var response;
        try {
          response = await window.fetch(url, {
            headers: { 'x-fc-games-token': state.info.token },
            signal: signal,
            cache: 'no-store',
          });
        } catch (error) {
          if (error && error.name === 'AbortError') throw error;
          var netError = new Error('NETWORK');
          netError.code = 'NETWORK';
          throw netError;
        }
        if (!response.ok) {
          var text = await response.text();
          var payload = safeJsonParse(text, null);
          var info = payload && payload.error ? payload.error : {};
          var apiError = new Error(info.message || 'ROM request failed (' + response.status + ')');
          apiError.code = info.code || 'ROM_HTTP_' + response.status;
          throw apiError;
        }
        var total = Number(response.headers.get('content-length') || 0);
        if (!response.body || typeof response.body.getReader !== 'function') {
          var buffer = await response.arrayBuffer();
          if (buffer.byteLength > MAX_ROM_BYTES) {
            var large = new Error('ROM too large');
            large.code = 'ROM_TOO_LARGE';
            throw large;
          }
          return new Uint8Array(buffer);
        }
        var reader = response.body.getReader();
        var chunks = [];
        var received = 0;
        for (;;) {
          var step = await reader.read();
          if (step.done) break;
          chunks.push(step.value);
          received += step.value.byteLength;
          if (received > MAX_ROM_BYTES) {
            await reader.cancel();
            var tooLarge = new Error('ROM too large');
            tooLarge.code = 'ROM_TOO_LARGE';
            throw tooLarge;
          }
          if (typeof onProgress === 'function') onProgress(received, total);
        }
        var out = new Uint8Array(received);
        var offset = 0;
        for (var i = 0; i < chunks.length; i += 1) {
          out.set(chunks[i], offset);
          offset += chunks[i].byteLength;
        }
        return out;
      }

      return {
        search: function (query, page, source, custom, signal) {
          return requestJson('/search', { q: query, page: page, source: source, custom: custom }, signal);
        },
        resolve: function (id, source, signal) {
          return requestJson('/resolve', { id: id, source: source }, signal);
        },
        parseUrl: function (url, signal) {
          return requestJson('/url', { url: url }, signal);
        },
        fetchRom: fetchRom,
        getInfo: function () {
          return state.info;
        },
      };
    }

    // --------------------------------------------------------------- audio
    var AUDIO_WORKLET =
      'class FCNesAudioProcessor extends AudioWorkletProcessor {' +
      '  constructor() { super(); this.capacity = 8192; this.bufferL = new Float32Array(this.capacity);' +
      '    this.bufferR = new Float32Array(this.capacity); this.readPos = 0; this.writePos = 0; this.count = 0;' +
      '    this.port.onmessage = (e) => { if (e.data.type !== "samples") return;' +
      '      const left = e.data.left, right = e.data.right, len = left.length;' +
      '      if (this.count + len > this.capacity) { const drop = this.count + len - this.capacity;' +
      '        this.readPos = (this.readPos + drop) % this.capacity; this.count -= drop; }' +
      '      for (let i = 0; i < len; i += 1) { this.bufferL[this.writePos] = left[i];' +
      '        this.bufferR[this.writePos] = right[i]; this.writePos = (this.writePos + 1) % this.capacity; }' +
      '      this.count += len; }; }' +
      '  process(inputs, outputs) { const output = outputs[0]; if (!output || output.length < 2) return true;' +
      '    const outL = output[0], outR = output[1], size = outL.length;' +
      '    if (this.count < size) { for (let i = 0; i < this.count; i += 1) { outL[i] = this.bufferL[this.readPos];' +
      '      outR[i] = this.bufferR[this.readPos]; this.readPos = (this.readPos + 1) % this.capacity; }' +
      '      for (let i = this.count; i < size; i += 1) { outL[i] = 0; outR[i] = 0; } this.count = 0;' +
      '      this.port.postMessage({ type: "underrun" }); } else {' +
      '      for (let i = 0; i < size; i += 1) { outL[i] = this.bufferL[this.readPos];' +
      '        outR[i] = this.bufferR[this.readPos]; this.readPos = (this.readPos + 1) % this.capacity; }' +
      '      this.count -= size; } return true; } }' +
      'registerProcessor("fc-nes-audio", FCNesAudioProcessor);';

    function NesAudio(volume) {
      this.volume = Number.isFinite(volume) ? volume : 0.65;
      this.audio = null;
      this.gainNode = null;
      this.node = null;
      this.ready = false;
      this.muted = false;
      this.batchL = new Float32Array(128);
      this.batchR = new Float32Array(128);
      this.batchPos = 0;
      this.starting = null;
    }

    NesAudio.prototype.ensure = function () {
      var self = this;
      if (this.starting !== null) return this.starting;
      this.starting = (async function () {
        var Ctor = window.AudioContext || window.webkitAudioContext;
        if (!Ctor) throw new Error('AudioContext unavailable');
        var audio = new Ctor();
        self.audio = audio;
        self.gainNode = audio.createGain();
        self.gainNode.gain.value = self.muted ? 0 : self.volume;
        self.gainNode.connect(audio.destination);
        var blob = new Blob([AUDIO_WORKLET], { type: 'application/javascript' });
        var url = URL.createObjectURL(blob);
        try {
          await audio.audioWorklet.addModule(url);
        } finally {
          URL.revokeObjectURL(url);
        }
        self.node = new AudioWorkletNode(audio, 'fc-nes-audio', { outputChannelCount: [2] });
        self.node.connect(self.gainNode);
        self.node.port.onmessage = function () {};
        self.ready = true;
        if (audio.state === 'suspended') {
          try {
            await audio.resume();
          } catch (e) {
            // The first user gesture will resume it.
          }
        }
        return audio;
      })();
      this.starting.catch(function () {
        self.starting = null;
      });
      return this.starting;
    };

    NesAudio.prototype.resume = function () {
      return this.ensure()
        .then(function (audio) {
          if (audio.state === 'suspended') return audio.resume();
          return undefined;
        })
        .catch(function () {});
    };

    NesAudio.prototype.getSampleRate = function () {
      return this.audio !== null ? this.audio.sampleRate : 48000;
    };

    NesAudio.prototype.setVolume = function (value) {
      this.volume = Math.max(0, Math.min(1, Number(value) || 0));
      if (this.gainNode !== null) this.gainNode.gain.value = this.muted ? 0 : this.volume;
    };

    NesAudio.prototype.setMuted = function (muted) {
      this.muted = !!muted;
      if (this.gainNode !== null) this.gainNode.gain.value = this.muted ? 0 : this.volume;
    };

    NesAudio.prototype.write = function (left, right) {
      if (!this.ready || this.node === null || this.muted) return;
      this.batchL[this.batchPos] = left;
      this.batchR[this.batchPos] = right;
      this.batchPos += 1;
      if (this.batchPos >= 128) {
        this.node.port.postMessage({
          type: 'samples',
          left: this.batchL.slice(),
          right: this.batchR.slice(),
        });
        this.batchPos = 0;
      }
    };

    NesAudio.prototype.flush = function () {
      if (!this.ready || this.node === null || this.batchPos === 0) return;
      this.node.port.postMessage({
        type: 'samples',
        left: this.batchL.slice(0, this.batchPos),
        right: this.batchR.slice(0, this.batchPos),
      });
      this.batchPos = 0;
    };

    NesAudio.prototype.destroy = function () {
      this.ready = false;
      if (this.node !== null) {
        try {
          this.node.disconnect();
        } catch (e) {
          // ignore
        }
        this.node = null;
      }
      if (this.gainNode !== null) {
        try {
          this.gainNode.disconnect();
        } catch (e) {
          // ignore
        }
        this.gainNode = null;
      }
      if (this.audio !== null) {
        try {
          this.audio.close();
        } catch (e) {
          // ignore
        }
        this.audio = null;
      }
    };

    // -------------------------------------------------------------- emulator
    var BUTTONS = {
      a: 0,
      b: 1,
      select: 2,
      start: 3,
      up: 4,
      down: 5,
      left: 6,
      right: 7,
      turboA: 8,
      turboB: 9,
    };

    var DEFAULT_KEYBOARD = {
      up: 'ArrowUp',
      down: 'ArrowDown',
      left: 'ArrowLeft',
      right: 'ArrowRight',
      a: 'KeyX',
      b: 'KeyZ',
      turboA: 'KeyS',
      turboB: 'KeyA',
      start: 'Enter',
      select: 'ShiftRight',
    };

    var DEFAULT_GAMEPAD = {
      up: 12,
      down: 13,
      left: 14,
      right: 15,
      a: 0,
      b: 1,
      turboA: 2,
      turboB: 3,
      start: 9,
      select: 8,
    };

    var DEFAULT_AUTOFIRE = { a: false, b: false };

    function loadControls() {
      var saved = loadJson(CONTROLS_KEY, {});
      var keyboard = Object.assign({}, DEFAULT_KEYBOARD);
      var gamepad = Object.assign({}, DEFAULT_GAMEPAD);
      var autoFire = Object.assign({}, DEFAULT_AUTOFIRE);
      if (saved && typeof saved === 'object') {
        if (saved.keyboard && typeof saved.keyboard === 'object') {
          Object.keys(DEFAULT_KEYBOARD).forEach(function (action) {
            if (typeof saved.keyboard[action] === 'string') keyboard[action] = saved.keyboard[action];
          });
        }
        if (saved.gamepad && typeof saved.gamepad === 'object') {
          Object.keys(DEFAULT_GAMEPAD).forEach(function (action) {
            if (Number.isInteger(saved.gamepad[action])) gamepad[action] = saved.gamepad[action];
          });
        }
        if (saved.autoFire && typeof saved.autoFire === 'object') {
          autoFire.a = saved.autoFire.a === true;
          autoFire.b = saved.autoFire.b === true;
        }
      }
      return { keyboard: keyboard, gamepad: gamepad, autoFire: autoFire };
    }

    function saveControls(controls) {
      saveJson(CONTROLS_KEY, controls);
    }

    function loadCustomSources() {
      var list = loadJson(CUSTOM_SOURCES_KEY, []);
      if (!Array.isArray(list)) return [];
      return list.filter(function (source) {
        return source
          && typeof source.id === 'string'
          && /^[a-z0-9-]{1,40}$/i.test(source.id)
          && typeof source.name === 'string'
          && source.name.trim().length > 0
          && typeof source.searchUrl === 'string'
          && /^https:\/\//i.test(source.searchUrl);
      }).slice(0, 10);
    }

    function saveCustomSources(list) {
      saveJson(CUSTOM_SOURCES_KEY, list.slice(0, 10));
    }

    function loadUrlGames() {
      var list = loadJson(URL_GAMES_KEY, []);
      if (!Array.isArray(list)) return [];
      return list.filter(function (item) {
        return item && typeof item.id === 'string' && typeof item.title === 'string';
      }).slice(0, 60);
    }

    function saveUrlGames(list) {
      saveJson(URL_GAMES_KEY, list.slice(0, 60));
    }

    function encodeCustomParam(sources) {
      if (!Array.isArray(sources) || sources.length === 0) return '';
      var text = JSON.stringify(sources.map(function (source) {
        return { id: source.id, name: source.name, searchUrl: source.searchUrl };
      }));
      var bytes = new TextEncoder().encode(text);
      var binary = '';
      for (var i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]);
      return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }

    function sourceLabel(source, customSources, t) {
      if (source === 'archive') return t('sources.archive');
      if (source === 'github') return t('sources.github');
      if (source === 'url') return t('sources.url');
      if (source === 'local') return t('source.local');
      if (typeof source === 'string' && source.indexOf('custom:') === 0) {
        var id = source.slice('custom:'.length);
        for (var i = 0; i < customSources.length; i += 1) {
          if (customSources[i].id === id) return customSources[i].name;
        }
        return t('sources.custom');
      }
      return t('sources.all');
    }

    function Emulator(canvas, romBytes, options) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d', { alpha: false });
      this.canvas.width = SCREEN_W;
      this.canvas.height = SCREEN_H;
      this.imageData = this.context.createImageData(SCREEN_W, SCREEN_H);
      this.pixels32 = new Uint32Array(this.imageData.data.buffer);
      this.frame32 = new Uint32Array(SCREEN_W * SCREEN_H);
      this.dirty = true;
      this.running = false;
      this.paused = true;
      this.speed = 1;
      this.fps = 0;
      this.frameCount = 0;
      this.fpsAt = 0;
      this.rafId = 0;
      this.lastTime = 0;
      this.accumulator = 0;
      this.pressedKeys = new Set();
      this.pressedGamepad = new Map();
      this.gamepadPressed = new Map();
      this.controls = loadControls();
      this.autoFire = Object.assign({ a: false, b: false }, this.controls.autoFire || {});
      this.fireHeld = { 1: { a: false, b: false }, 2: { a: false, b: false } };
      this.turboHeld = { 1: { a: false, b: false }, 2: { a: false, b: false } };
      this.autoHeld = { 1: { a: false, b: false }, 2: { a: false, b: false } };
      this.turboTick = 0;
      this.options = options || {};
      this.audio = new NesAudio(this.options.volume);
      this.audio.setMuted(!!this.options.muted);
      this.nes = null;
      this.onFps = this.options.onFps || function () {};
      this.onBatteryWrite = this.options.onBatteryWrite || function () {};
      this.onError = this.options.onError || function () {};
      this.boundKeyDown = this.handleKeyDown.bind(this);
      this.boundKeyUp = this.handleKeyUp.bind(this);
      this.boundBlur = this.releaseAll.bind(this);
      this.tick = this.tick.bind(this);
      this.load(romBytes);
    }

    Emulator.prototype.load = function (romBytes) {
      var jsnes = window.jsnes;
      if (!jsnes || !jsnes.NES) throw new Error('jsnes core unavailable');
      var self = this;
      // Create the AudioContext before the core so the emulator uses the
      // device's real sample rate instead of a guessed 44.1 kHz value.
      this.audio.ensure().catch(function () {});
      this.nes = new jsnes.NES({
        onFrame: function (buffer) {
          self.frame32.set(buffer);
          self.dirty = true;
        },
        onAudioSample: function (left, right) {
          self.audio.write(left, right);
        },
        onBatteryRamWrite: function () {
          self.onBatteryWrite();
        },
        sampleRate: this.audio.getSampleRate(),
      });
      this.nes.loadROM(romBytes);
    };

    Emulator.prototype.bindInput = function (element) {
      this.inputElement = element;
      if (!element) return;
      element.addEventListener('keydown', this.boundKeyDown);
      element.addEventListener('keyup', this.boundKeyUp);
      window.addEventListener('blur', this.boundBlur);
    };

    Emulator.prototype.unbindInput = function () {
      if (this.inputElement) {
        this.inputElement.removeEventListener('keydown', this.boundKeyDown);
        this.inputElement.removeEventListener('keyup', this.boundKeyUp);
        this.inputElement = null;
      }
      window.removeEventListener('blur', this.boundBlur);
    };

    Emulator.prototype.handleKeyDown = function (event) {
      var controls = this.controls.keyboard;
      var action = null;
      Object.keys(controls).forEach(function (key) {
        if (controls[key] === event.code) action = key;
      });
      if (action === null) {
        if (event.code === 'KeyP' && typeof this.options.onPauseToggle === 'function') {
          event.preventDefault();
          this.options.onPauseToggle();
        }
        return;
      }
      event.preventDefault();
      if (this.paused) return;
      if (this.pressedKeys.has(action)) return;
      this.pressedKeys.add(action);
      this.press(action);
    };

    Emulator.prototype.handleKeyUp = function (event) {
      var controls = this.controls.keyboard;
      var action = null;
      Object.keys(controls).forEach(function (key) {
        if (controls[key] === event.code) action = key;
      });
      if (action === null) return;
      event.preventDefault();
      this.pressedKeys.delete(action);
      this.release(action);
    };

    // Apply A/B lines directly. jsnes' own Turbo buttons are intentionally not
    // used here: the controller read is frame-based and games differ in how
    // they sample it. Driving the two button bits from one frame-synced phase
    // makes hold-to-turbo deterministic for keyboard, gamepad, auto-fire, and
    // every mapper.
    Emulator.prototype.applyFireState = function () {
      if (this.nes === null) return;
      var on = Math.floor(this.turboTick / 2) % 2 === 0;
      for (var player = 1; player <= 2; player += 1) {
        var controller = this.nes.controllers[player];
        if (!controller) continue;
        var fire = this.fireHeld[player];
        var turbo = this.turboHeld[player];
        var auto = this.autoHeld[player];
        var turboA = turbo.a || auto.a;
        var turboB = turbo.b || auto.b;
        controller.state[0] = turboA ? (on ? 0x41 : 0x40) : fire.a ? 0x41 : 0x40;
        controller.state[1] = turboB ? (on ? 0x41 : 0x40) : fire.b ? 0x41 : 0x40;
      }
      this.turboTick += 1;
    };

    Emulator.prototype.pressFor = function (player, action) {
      if (this.nes === null || BUTTONS[action] === undefined) return;
      var held = this.fireHeld[player];
      if (action === 'turboA') {
        this.turboHeld[player].a = true;
        this.applyFireState();
        return;
      }
      if (action === 'turboB') {
        this.turboHeld[player].b = true;
        this.applyFireState();
        return;
      }
      if (action === 'a' || action === 'b') {
        if (this.autoFire[action]) this.autoHeld[player][action] = true;
        else held[action] = true;
        this.applyFireState();
        return;
      }
      this.nes.buttonDown(player, BUTTONS[action]);
    };

    Emulator.prototype.releaseFor = function (player, action) {
      if (this.nes === null || BUTTONS[action] === undefined) return;
      if (action === 'turboA') {
        this.turboHeld[player].a = false;
        this.applyFireState();
        return;
      }
      if (action === 'turboB') {
        this.turboHeld[player].b = false;
        this.applyFireState();
        return;
      }
      if (action === 'a' || action === 'b') {
        this.autoHeld[player][action] = false;
        this.fireHeld[player][action] = false;
        this.applyFireState();
        return;
      }
      this.nes.buttonUp(player, BUTTONS[action]);
    };

    Emulator.prototype.press = function (action) {
      this.pressFor(1, action);
    };

    Emulator.prototype.release = function (action) {
      this.releaseFor(1, action);
    };

    Emulator.prototype.releaseAll = function () {
      var self = this;
      this.pressedKeys.forEach(function (action) {
        self.releaseFor(1, action);
      });
      this.pressedKeys.clear();
      this.gamepadPressed.forEach(function (actions, index) {
        var player = index === 0 ? 1 : 2;
        actions.forEach(function (action) {
          self.releaseFor(player, action);
        });
      });
      this.gamepadPressed.clear();
      // A key or pad event can disappear without its matching release (blur,
      // pause, disconnect). Clear every A/B source and force both lines low.
      for (var player = 1; player <= 2; player += 1) {
        this.fireHeld[player].a = false;
        this.fireHeld[player].b = false;
        this.turboHeld[player].a = false;
        this.turboHeld[player].b = false;
        this.autoHeld[player].a = false;
        this.autoHeld[player].b = false;
      }
      this.turboTick = 0;
      if (this.nes !== null) {
        for (var controllerId = 1; controllerId <= 2; controllerId += 1) {
          var controller = this.nes.controllers[controllerId];
          if (!controller) continue;
          controller.state[0] = 0x40;
          controller.state[1] = 0x40;
        }
      }
    };

    Emulator.prototype.pollGamepads = function () {
      if (typeof navigator.getGamepads !== 'function') return;
      var pads = navigator.getGamepads();
      var self = this;
      var active = new Map();
      for (var index = 0; index < pads.length && index < 4; index += 1) {
        var pad = pads[index];
        if (!pad) continue;
        var player = index === 0 ? 1 : 2;
        var map = this.controls.gamepad;
        var next = new Set();
        Object.keys(map).forEach(function (action) {
          var buttonIndex = map[action];
          var button = pad.buttons[buttonIndex];
          if (button && button.pressed) next.add(action);
        });
        var axes = pad.axes || [];
        if (axes[0] < -0.5) next.add('left');
        if (axes[0] > 0.5) next.add('right');
        if (axes[1] < -0.5) next.add('up');
        if (axes[1] > 0.5) next.add('down');
        var previous = this.gamepadPressed.get(index) || new Set();
        next.forEach(function (action) {
          if (!previous.has(action) && !self.paused) {
            self.pressFor(player, action);
          }
        });
        previous.forEach(function (action) {
          if (!next.has(action)) {
            self.releaseFor(player, action);
          }
        });
        active.set(index, next);
        this.gamepadPressed.set(index, next);
      }
      this.gamepadPressed.forEach(function (value, index) {
        if (!active.has(index)) {
          var player = index === 0 ? 1 : 2;
          value.forEach(function (action) {
            self.releaseFor(player, action);
          });
          self.gamepadPressed.delete(index);
        }
      });
    };

    Emulator.prototype.tick = function (time) {
      if (!this.running) return;
      var delta = time - this.lastTime;
      if (delta < 0 || delta > 250) delta = FRAME_MS;
      this.lastTime = time;
      this.accumulator += delta;
      var frames = 0;
      while (this.accumulator >= FRAME_MS && frames < 4) {
        this.accumulator -= FRAME_MS;
        frames += 1;
        for (var step = 0; step < this.speed; step += 1) {
          try {
            this.applyFireState();
            this.nes.frame();
          } catch (error) {
            this.stop();
            this.onError(error);
            return;
          }
        }
        this.audio.flush();
        this.frameCount += this.speed;
      }
      if (frames > 0) this.draw();
      this.pollGamepads();
      if (time - this.fpsAt >= 1000) {
        this.fps = Math.round((this.frameCount * 1000) / (time - this.fpsAt));
        this.frameCount = 0;
        this.fpsAt = time;
        this.onFps(this.fps);
      }
      this.rafId = window.requestAnimationFrame(this.tick);
    };

    Emulator.prototype.draw = function () {
      if (!this.dirty) return;
      this.dirty = false;
      var frame = this.frame32;
      var pixels = this.pixels32;
      for (var i = 0; i < frame.length; i += 1) {
        pixels[i] = 0xff000000 | frame[i];
      }
      this.context.putImageData(this.imageData, 0, 0);
    };

    Emulator.prototype.start = function () {
      if (this.running) return;
      this.running = true;
      this.paused = false;
      this.audio.resume();
      this.lastTime = performance.now();
      this.fpsAt = this.lastTime;
      this.accumulator = 0;
      this.applyFireState();
      this.rafId = window.requestAnimationFrame(this.tick);
    };

    Emulator.prototype.stop = function () {
      this.running = false;
      this.paused = true;
      if (this.rafId) window.cancelAnimationFrame(this.rafId);
      this.rafId = 0;
      this.releaseAll();
      this.audio.flush();
    };

    Emulator.prototype.pause = function () {
      this.stop();
    };

    Emulator.prototype.resume = function () {
      this.audio.resume();
      this.start();
    };

    Emulator.prototype.togglePause = function () {
      if (this.paused) this.resume();
      else this.pause();
      return this.paused;
    };

    Emulator.prototype.setSpeed = function (speed) {
      this.speed = speed;
      this.audio.setMuted(speed > 1 || !!this.options.muted);
    };

    Emulator.prototype.setVolume = function (volume) {
      this.audio.setVolume(volume);
    };

    Emulator.prototype.setMuted = function (muted) {
      this.audio.setMuted(muted);
    };

    Emulator.prototype.setControls = function (controls) {
      this.controls = controls || loadControls();
      this.autoFire = Object.assign({ a: false, b: false }, this.controls.autoFire || {});
      this.releaseAll();
    };

    Emulator.prototype.reset = function () {
      this.nes.reset();
      this.releaseAll();
      this.dirty = true;
      this.draw();
    };

    Emulator.prototype.snapshot = function () {
      return this.nes.toJSON();
    };

    Emulator.prototype.restore = function (state) {
      this.nes.fromJSON(state);
      this.releaseAll();
      this.dirty = true;
      this.draw();
    };

    Emulator.prototype.setCheats = function (codes) {
      this.nes.gameGenie.removeAllCodes();
      for (var i = 0; i < codes.length; i += 1) {
        this.nes.gameGenie.addCode(codes[i]);
      }
    };

    Emulator.prototype.screenshot = function () {
      return this.canvas.toDataURL('image/png');
    };

    Emulator.prototype.thumbnail = function () {
      var thumb = document.createElement('canvas');
      thumb.width = 160;
      thumb.height = 120;
      var ctx = thumb.getContext('2d');
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(this.canvas, 0, 0, 160, 120);
      return thumb.toDataURL('image/jpeg', 0.65);
    };

    Emulator.prototype.fit = function () {
      // CSS owns the display size; the backing store stays 256x240.
    };

    Emulator.prototype.destroy = function () {
      this.stop();
      this.unbindInput();
      this.audio.destroy();
      this.nes = null;
    };

    // ------------------------------------------------------------- components
    function Cover(props) {
      var failedState = useState(false);
      var failed = failedState[0];
      var setFailed = failedState[1];
      useEffect(function () {
        setFailed(false);
      }, [props.url]);
      if (!props.url || failed) {
        return h(
          'div',
          {
            className: cx('dfg-cover', 'dfg-cover-fallback', props.className),
            style: { background: gradientFor(props.title) },
            'aria-hidden': true,
          },
          h('span', { className: 'dfg-cover-initials' }, initials(props.title)),
          h('span', { className: 'dfg-cover-glyph' }, 'FC'),
        );
      }
      return h(
        'div',
        { className: cx('dfg-cover', props.className) },
        h('img', {
          className: 'dfg-cover-art',
          src: props.url,
          alt: '',
          loading: 'lazy',
          referrerPolicy: 'no-referrer',
          onError: function () {
            setFailed(true);
          },
        }),
      );
    }

    function dedupeKey(title) {
      return String(title || '')
        .toLowerCase()
        .replace(/\[[^\]]*\]/g, ' ')
        .replace(/\([^)]*\)/g, ' ')
        .replace(/[^a-z0-9\u4e00-\u9fff]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }

    async function searchAcrossSources(api, query, page, selected, customSources, signal, t) {
      var targets;
      if (selected === 'archive' || selected === 'github') {
        targets = [selected];
      } else if (selected.indexOf('custom:') === 0) {
        targets = [selected];
      } else {
        targets = ['archive', 'github'].concat(customSources.map(function (source) {
          return 'custom:' + source.id;
        }));
      }
      var custom = encodeCustomParam(customSources);
      var settled = await Promise.allSettled(targets.map(function (source) {
        return api.search(query, page, source, custom, signal);
      }));
      var items = [];
      var warnings = [];
      var hasMore = false;
      var total = 0;
      var filtered = false;
      var expandedQuery;
      for (var i = 0; i < settled.length; i += 1) {
        var outcome = settled[i];
        var source = targets[i];
        if (outcome.status === 'rejected') {
          if (outcome.reason && outcome.reason.name === 'AbortError') continue;
          warnings.push({
            source: sourceLabel(source, customSources, t),
            message: String(outcome.reason && outcome.reason.message ? outcome.reason.message : outcome.reason),
          });
          continue;
        }
        var payload = outcome.value;
        if (payload && Array.isArray(payload.items)) items = items.concat(payload.items);
        if (payload && payload.hasMore) hasMore = true;
        if (payload && Number.isFinite(Number(payload.total))) total += Number(payload.total);
        if (payload && payload.filtered) filtered = true;
        if (payload && payload.expandedQuery) expandedQuery = payload.expandedQuery;
      }
      if (items.length === 0 && warnings.length === targets.length) {
        var failure = new Error(warnings[0].message);
        failure.code = 'ALL_SOURCES_FAILED';
        throw failure;
      }
      var seen = new Set();
      var unique = [];
      for (var j = 0; j < items.length; j += 1) {
        var key = dedupeKey(items[j].title);
        if (seen.has(key)) continue;
        seen.add(key);
        unique.push(items[j]);
      }
      return {
        ok: true,
        source: selected,
        query: query,
        page: page,
        total: total,
        hasMore: hasMore,
        filtered: filtered,
        expandedQuery: expandedQuery,
        warnings: warnings,
        items: unique.slice(0, 36),
      };
    }

    function GameCard(props) {
      var game = props.game;
      var meta = [];
      if (game.year) meta.push(tFormat(props.t, 'common.year', { year: game.year }));
      if (game.playCount) meta.push(tFormat(props.t, 'recent.plays', { count: game.playCount }));
      var sourceName = game.source === 'github'
        ? props.t('sources.github')
        : game.source === 'archive'
          ? props.t('sources.archive')
          : game.source === 'url'
            ? props.t('sources.url')
            : game.sourceName
              || (game.source === 'custom'
                ? props.t('sources.custom')
                : game.source === 'local'
                  ? props.t('source.local')
                  : props.t('sources.all'));
      return h(
        'div',
        { className: 'dfg-card' },
        h('button', {
          type: 'button',
          className: 'dfg-card-main',
          'aria-label': game.title,
          onClick: function () { props.onView(game); },
        },
          h(Cover, { url: game.coverUrl, title: game.title }),
          h('span', { className: 'dfg-card-body' },
            h('span', { className: 'dfg-card-source' }, sourceName),
            h('span', { className: 'dfg-card-title' }, game.title),
            h('span', { className: 'dfg-card-meta' }, meta.join(' · ')),
            props.recent && h('span', { className: 'dfg-card-time' }, relativeTime(game.lastPlayedAt, props.locale)),
          ),
        ),
        h('div', { className: 'dfg-card-actions' },
          props.cached
            ? [
                h('button', {
                  key: 'continue',
                  type: 'button',
                  className: 'dfg-card-action dfg-card-action-primary',
                  onClick: function () { props.onContinue(game, props.cachedFile); },
                }, props.t('card.continue')),
                h('button', {
                  key: 'restart',
                  type: 'button',
                  className: 'dfg-card-action',
                  onClick: function () { props.onRestart(game, props.cachedFile); },
                }, props.t('card.restart')),
                h('button', {
                  key: 'delete',
                  type: 'button',
                  className: 'dfg-card-delete',
                  title: props.t('downloads.delete'),
                  'aria-label': props.t('downloads.delete'),
                  onClick: function () { props.onDelete(game); },
                },
                  h('svg', { width: 16, height: 16, viewBox: '0 0 16 16', fill: 'none', 'aria-hidden': true },
                    h('path', { d: 'M2.5 4.5h11M6 4.5V2.8h4v1.7M4 4.5l.7 8.2h6.6l.7-8.2M6.3 7v3.2M9.7 7v3.2', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }),
                  ),
                ),
              ]
            : [
                h('button', {
                  key: 'view',
                  type: 'button',
                  className: 'dfg-card-action',
                  onClick: function () { props.onView(game); },
                }, props.t('card.view')),
                h('button', {
                  key: 'download',
                  type: 'button',
                  className: 'dfg-card-action dfg-card-action-primary',
                  onClick: function () { props.onDownload(game); },
                }, props.t('card.download')),
              ],
        ),
      );
    }

    function tFormat(t, key, values) {
      var text = t(key);
      Object.keys(values || {}).forEach(function (name) {
        text = text.split('{' + name + '}').join(String(values[name]));
      });
      return text;
    }

    function SearchBar(props) {
      var inputRef = useRef(null);
      return h(
        'div',
        { className: 'dfg-search' },
        h('span', { className: 'dfg-search-icon', 'aria-hidden': true },
          h('svg', {
            width: 16,
            height: 16,
            viewBox: '0 0 16 16',
            fill: 'none',
          },
            h('circle', { cx: 6.6, cy: 6.6, r: 4.4, stroke: 'currentColor', strokeWidth: 2 }),
            h('path', { d: 'M10 10l4 4', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'square' }),
          ),
        ),
        h('input', {
          ref: inputRef,
          type: 'search',
          value: props.value,
          placeholder: props.t('search.placeholder'),
          'aria-label': props.t('search.placeholder'),
          spellCheck: false,
          autoComplete: 'off',
          onChange: function (event) {
            props.onChange(event.target.value);
          },
          onKeyDown: function (event) {
            if (event.key === 'Enter') {
              event.preventDefault();
              if (typeof props.onSubmit === 'function') props.onSubmit();
            }
          },
        }),
        props.loading && h('span', { className: 'dfg-spinner dfg-spinner-small', 'aria-hidden': true }),
        props.value.length > 0 &&
          h(
            'button',
            {
              type: 'button',
              className: 'dfg-search-clear',
              'aria-label': props.t('search.clear'),
              onClick: function () {
                props.onChange('');
                if (inputRef.current) inputRef.current.focus();
              },
            },
            '×',
          ),
      );
    }

    function SkeletonGrid() {
      var cards = [];
      for (var i = 0; i < 8; i += 1) {
        cards.push(h('div', { key: i, className: 'dfg-skeleton' },
          h('div', { className: 'dfg-skeleton-cover' }),
          h('div', { className: 'dfg-skeleton-line' }),
          h('div', { className: 'dfg-skeleton-line short' }),
        ));
      }
      return h('div', { className: 'dfg-grid' }, cards);
    }

    function LibraryView(props) {
      var t = props.t;
      var [query, setQuery] = useState('');
      var [result, setResult] = useState(null);
      var [loading, setLoading] = useState(false);
      var [loadingMore, setLoadingMore] = useState(false);
      var [error, setError] = useState(null);
      var [noticeVisible, setNoticeVisible] = useState(function () {
        return loadJson(NOTICE_KEY, false) !== true;
      });
      var [importError, setImportError] = useState(null);
      var [retryTick, setRetryTick] = useState(0);
      var [customSources, setCustomSources] = useState(loadCustomSources);
      var [selectedSource, setSelectedSource] = useState(function () {
        var saved = loadJson(SELECTED_SOURCE_KEY, 'all');
        return typeof saved === 'string' && saved !== '' ? saved : 'all';
      });
      var [sourceDialog, setSourceDialog] = useState(false);
      var [urlGames, setUrlGames] = useState(loadUrlGames);
      var [urlDialog, setUrlDialog] = useState(false);
      var [cachedMap, setCachedMap] = useState({});
      var [detailsGame, setDetailsGame] = useState(null);
      var [deleteGame, setDeleteGame] = useState(null);
      var [downloadedOnly, setDownloadedOnly] = useState(false);
      var [deleteNotice, setDeleteNotice] = useState(false);
      var seqRef = useRef(0);
      var abortRef = useRef(null);
      var fileRef = useRef(null);
      var coverFetchedRef = useRef(new Set());

      useEffect(function () {
        return function () {
          if (abortRef.current) abortRef.current.abort();
        };
      }, []);

      useEffect(function () {
        if (!deleteNotice) return undefined;
        var timer = window.setTimeout(function () { setDeleteNotice(false); }, 2200);
        return function () { window.clearTimeout(timer); };
      }, [deleteNotice]);

      useEffect(function () {
        var alive = true;
        idbAll('roms').then(function (rows) {
          if (!alive) return;
          var map = {};
          (rows || []).forEach(function (row) {
            var key = String(row.key || '');
            var meta = row.meta || {};
            var id = meta.id || key.split('::')[0];
            var file = meta.file || key.split('::')[1] || '';
            if (!id) return;
            if (!map[id]) map[id] = [];
            map[id].push({ file: file, key: key });
          });
          setCachedMap(map);
        }).catch(function () {});
        return function () { alive = false; };
      }, []);

      var cachedInfoFor = function (game) {
        var rows = cachedMap[game.id] || [];
        if (rows.length === 0) return { cached: false, file: null };
        var wanted = game.file || game.fileName || null;
        if (wanted) {
          for (var i = 0; i < rows.length; i += 1) {
            if (rows[i].file === wanted) return { cached: true, file: rows[i].file };
          }
        }
        return { cached: true, file: rows[0].file };
      };

      var playGame = function (game, options) {
        setDetailsGame(null);
        props.onOpenGame(game, options || {});
      };

      var deleteDownload = async function (game) {
        var prefix = String(game.id) + '::';
        try {
          var roms = await idbAll('roms');
          await Promise.all((roms || []).filter(function (row) {
            return row && row.key && String(row.key).indexOf(prefix) === 0;
          }).map(function (row) { return idbDelete('roms', row.key); }));
          var states = await idbAll('states');
          await Promise.all((states || []).filter(function (row) {
            return row && row.gameKey && String(row.gameKey).indexOf(prefix) === 0;
          }).map(function (row) { return idbDelete('states', row.key); }));
          var list = readRecent().filter(function (entry) { return entry.id !== String(game.id); });
          saveJson(RECENT_KEY, list);
          emitRecent();
          setCachedMap(function (previous) {
            var next = Object.assign({}, previous);
            delete next[game.id];
            return next;
          });
          setDeleteGame(null);
          setDeleteNotice(true);
          if (typeof props.onRecentChanged === 'function') props.onRecentChanged();
        } catch (cause) {
          setDeleteGame(null);
        }
      };
      useEffect(function () {
        var q = String(query || '').trim();
        if (q.length === 0) {
          if (abortRef.current) abortRef.current.abort();
          abortRef.current = null;
          setLoading(false);
          setError(null);
          setResult(null);
          return;
        }
        if (abortRef.current) abortRef.current.abort();
        var controller = new AbortController();
        abortRef.current = controller;
        var seq = seqRef.current + 1;
        seqRef.current = seq;
        setLoading(true);
        setError(null);
        var timer = window.setTimeout(function () {
          searchAcrossSources(props.api, q, 1, selectedSource, customSources, controller.signal, t)
            .then(function (payload) {
              if (seq !== seqRef.current) return;
              setResult(payload);
              setLoading(false);
            })
            .catch(function (cause) {
              if (controller.signal.aborted) return;
              if (seq !== seqRef.current) return;
              setLoading(false);
              setError(cause);
            });
        }, 320);
        return function () {
          window.clearTimeout(timer);
          controller.abort();
        };
      }, [query, props.api, retryTick, selectedSource, customSources]);

      // Fill in covers after the result grid has painted. Metadata resolution is
      // slower than search, so it runs in the background and only touches the
      // cards whose cover is still missing.
      useEffect(function () {
        if (result === null || !Array.isArray(result.items)) return undefined;
        var cancelled = false;
        var queue = result.items
          .filter(function (item) {
            return item.source === 'archive' && !item.coverUrl && !coverFetchedRef.current.has(item.id);
          })
          .slice(0, 12);
        if (queue.length === 0) return undefined;
        var run = async function () {
          for (;;) {
            if (cancelled || queue.length === 0) return;
            var item = queue.shift();
            coverFetchedRef.current.add(item.id);
            try {
              var resolved = await props.api.resolve(item.id, item.source);
              if (cancelled) return;
              if (resolved && resolved.coverUrl) {
                setResult(function (previous) {
                  if (previous === null) return previous;
                  var items = previous.items.map(function (candidate) {
                    return candidate.id === item.id
                      ? Object.assign({}, candidate, { coverUrl: resolved.coverUrl })
                      : candidate;
                  });
                  return Object.assign({}, previous, { items: items });
                });
              }
            } catch (e) {
              // A missing cover is cosmetic; leave the placeholder.
            }
          }
        };
        Promise.all([run(), run(), run()]);
        return function () {
          cancelled = true;
        };
      }, [result && result.query, result && result.page, props.api]);

      var loadMore = useCallback(function () {
        if (result === null || loadingMore) return;
        setLoadingMore(true);
        var seq = seqRef.current;
        searchAcrossSources(props.api, result.query, result.page + 1, selectedSource, customSources, undefined, t)
          .then(function (payload) {
            if (seq !== seqRef.current) return;
            setResult(function (previous) {
              if (previous === null) return payload;
              var seen = new Set(previous.items.map(function (item) { return item.id; }));
              var merged = previous.items.concat(payload.items.filter(function (item) { return !seen.has(item.id); }));
              return Object.assign({}, payload, { items: merged });
            });
            setLoadingMore(false);
          })
          .catch(function () {
            setLoadingMore(false);
          });
      }, [result, loadingMore, props.api, selectedSource, customSources, t]);

      var dismissNotice = function () {
        setNoticeVisible(false);
        saveJson(NOTICE_KEY, true);
      };

      var onImportFile = function (event) {
        var input = event.target;
        var file = input.files && input.files[0];
        input.value = '';
        if (!file) return;
        setImportError(null);
        if (!/\.nes$/i.test(file.name)) {
          setImportError(t('import.error'));
          return;
        }
        var reader = new FileReader();
        reader.onerror = function () {
          setImportError(t('import.error'));
        };
        reader.onload = function () {
          var buffer = reader.result;
          if (!(buffer instanceof ArrayBuffer) || buffer.byteLength < 16 || buffer.byteLength > MAX_ROM_BYTES) {
            setImportError(t('import.error'));
            return;
          }
          var head = new Uint8Array(buffer, 0, 4);
          if (head[0] !== 0x4e || head[1] !== 0x45 || head[2] !== 0x53 || head[3] !== 0x1a) {
            setImportError(t('import.error'));
            return;
          }
          props.onImport({
            id: 'local-' + Date.now().toString(36),
            source: 'local',
            title: file.name.replace(/\.nes$/i, ''),
            coverUrl: null,
            file: file.name,
            bytes: new Uint8Array(buffer),
          });
        };
        reader.readAsArrayBuffer(file);
      };

      useEffect(function () {
        if (selectedSource === 'all' || selectedSource === 'archive' || selectedSource === 'github') return;
        if (selectedSource.indexOf('custom:') === 0) {
          var id = selectedSource.slice('custom:'.length);
          var exists = customSources.some(function (source) { return source.id === id; });
          if (!exists) setSelectedSource('all');
        } else {
          setSelectedSource('all');
        }
      }, [selectedSource, customSources]);

      var changeSource = function (value) {
        setSelectedSource(value);
        saveJson(SELECTED_SOURCE_KEY, value);
      };

      var onSourcesChange = function (next) {
        setCustomSources(next);
        saveCustomSources(next);
        if (selectedSource.indexOf('custom:') === 0) {
          var id = selectedSource.slice('custom:'.length);
          var exists = next.some(function (source) { return source.id === id; });
          if (!exists) changeSource('all');
        }
      };

      var addUrlGame = function (item) {
        var next = [item].concat(urlGames.filter(function (entry) { return entry.id !== item.id; })).slice(0, 60);
        setUrlGames(next);
        saveUrlGames(next);
      };

      var removeUrlGame = function (id) {
        var next = urlGames.filter(function (entry) { return entry.id !== id; });
        setUrlGames(next);
        saveUrlGames(next);
      };

      var sourceOptions = BUILTIN_SOURCES.map(function (entry) {
        return { id: entry.id, label: t(entry.labelKey) };
      }).concat(customSources.map(function (entry) {
        return { id: 'custom:' + entry.id, label: entry.name };
      }));

      var cardProps = function (game, recent) {
        var info = cachedInfoFor(game);
        return {
          key: game.key || game.id,
          game: game,
          recent: recent,
          t: t,
          locale: props.locale,
          cached: info.cached,
          cachedFile: info.file,
          onView: function (target) { setDetailsGame(target); },
          onDownload: function (target) { playGame(target, {}); },
          onContinue: function (target, file) { playGame(target, { file: file }); },
          onRestart: function (target, file) { playGame(target, { file: file, freshStart: true }); },
          onDelete: function (target) { setDeleteGame(target); },
        };
      };
      var searchMode = String(query || '').trim().length > 0;
      var allRecent = Array.isArray(props.recent) ? props.recent : [];
      var cachedRecent = allRecent.filter(function (game) { return cachedInfoFor(game).cached; });
      var recent = (downloadedOnly ? cachedRecent : allRecent).slice(0, downloadedOnly ? 24 : 12);
      var cachedCount = Object.keys(cachedMap).length;

      return h(
        'div',
        { className: 'dfg-library' },
        props.showHero &&
          h('section', { className: 'dfg-hero' },
            h('div', { className: 'dfg-hero-copy' },
              h('span', { className: 'dfg-hero-kicker' }, '1983 · FAMILY COMPUTER'),
              h('h1', null, 'FAMICOM'),
              h('p', null, t('page.subtitle')),
              h('div', { className: 'dfg-hero-tags' },
                h('span', null, '8-BIT'),
                h('span', null, 'INSERT COIN'),
                h('span', null, '60 FPS'),
              ),
            ),
            h('div', { className: 'dfg-hero-badge', 'aria-hidden': true },
              h('span', null, 'FC'),
              h('small', null, '1983'),
            ),
          ),
        h(
          'div',
          { className: 'dfg-marquee', 'aria-hidden': true },
          h('span', { className: 'dfg-marquee-title' }, 'FAMICOM'),
          h('span', { className: 'dfg-marquee-sep' }, '◆'),
          h('span', { className: 'dfg-marquee-sub' }, '8-BIT GAME LIBRARY'),
          h('span', { className: 'dfg-marquee-spacer' }),
          h('span', { className: 'dfg-marquee-year' }, '1983'),
        ),
        h(SearchBar, {
          value: query,
          t: t,
          loading: loading,
          onChange: setQuery,
          onSubmit: function () {
            setRetryTick(function (value) { return value + 1; });
          },
        }),
        h('div', { className: 'dfg-sourcebar' },
          h('label', null,
            h('span', null, t('sources.label')),
            h('select', {
              value: selectedSource,
              'aria-label': t('sources.label'),
              onChange: function (event) { changeSource(event.target.value); },
            },
              sourceOptions.map(function (entry) {
                return h('option', { key: entry.id, value: entry.id }, entry.label);
              }),
            ),
          ),
          h('div', { className: 'dfg-source-actions' },
            h('button', {
              type: 'button',
              className: 'dfg-source-manage',
              onClick: function () { setSourceDialog(true); },
            }, t('sources.manage')),
            h('button', {
              type: 'button',
              className: 'dfg-source-add',
              onClick: function () { setUrlDialog(true); },
            }, t('urlGames.add')),
          ),
        ),
        noticeVisible &&
          h('div', { className: 'dfg-notice' },
            h('span', null, t('notice.legal')),
            h('button', { type: 'button', onClick: dismissNotice }, t('notice.dismiss')),
          ),
        importError && h('div', { className: 'dfg-inline-error', role: 'alert' }, importError),
        result && result.warnings && result.warnings.length > 0 &&
          h('div', { className: 'dfg-source-warning' },
            tFormat(t, 'sources.partial', {
              sources: result.warnings.map(function (warning) { return warning.source; }).join(', '),
            }),
          ),
        urlGames.length > 0 &&
          h('section', { className: 'dfg-section dfg-url-games' },
            h('div', { className: 'dfg-section-head' },
              h('h2', null, t('urlGames.title')),
              h('span', null, String(urlGames.length)),
            ),
            h('div', { className: 'dfg-grid' },
              urlGames.map(function (game) {
                return h(GameCard, cardProps(game, false));
              }),
            ),
          ),
        searchMode
          ? h(
              'section',
              { className: 'dfg-section' },
              result !== null &&
                h('div', { className: 'dfg-section-head' },
                  h('h2', null, t('search.results')),
                  h('span', null, tFormat(t, 'search.resultCount', { count: result.items.length })),
                ),
              result !== null && result.filtered &&
                h('div', { className: 'dfg-expanded' }, t('search.playableOnly')),
              result !== null &&
                result.expandedQuery &&
                result.expandedQuery.toLowerCase() !== result.query.toLowerCase() &&
                h('div', { className: 'dfg-expanded' }, tFormat(t, 'search.expanded', { query: result.expandedQuery })),
              loading && h(SkeletonGrid),
              error && h('div', { className: 'dfg-error', role: 'alert' },
                h('div', { className: 'dfg-error-title' }, t('search.error')),
                h('div', { className: 'dfg-error-text' }, error.code === 'NETWORK' ? t('error.network') : String(error.message || '')),
                h('button', { type: 'button', className: 'dfg-button', onClick: function () { setRetryTick(function (value) { return value + 1; }); } }, t('search.retry')),
              ),
              !loading && !error && result !== null && result.items.length === 0 &&
                h('div', { className: 'dfg-empty' },
                  h('p', null, t('search.empty')),
                  h('div', { className: 'dfg-chips' },
                    props.suggestions.map(function (suggestion) {
                      return h('button', { key: suggestion, type: 'button', className: 'dfg-chip', onClick: function () { setQuery(suggestion); } }, suggestion);
                    }),
                  ),
                ),
              !loading && !error && result !== null && result.items.length > 0 &&
                h('div', { className: 'dfg-grid' },
                  result.items.map(function (game) {
                    return h(GameCard, cardProps(game, false));
                  }),
                ),
              !loading && !error && result !== null && result.hasMore &&
                h('div', { className: 'dfg-more' },
                  h('button', { type: 'button', className: 'dfg-button', disabled: loadingMore, onClick: loadMore }, loadingMore ? t('search.searching') : t('search.loadMore')),
                ),
            )
          : h(
              'div',
              null,
              h('section', { className: 'dfg-section' },
                h('div', { className: 'dfg-section-head' },
                  h('h2', null, downloadedOnly ? t('downloads.title') : t('recent.title')),
                  h('div', { className: 'dfg-section-right' },
                    (cachedCount > 0 || downloadedOnly) && h('div', { className: 'dfg-view-toggle' },
                      h('button', {
                        type: 'button',
                        className: cx('dfg-view-toggle-btn', !downloadedOnly && 'dfg-view-toggle-active'),
                        onClick: function () { setDownloadedOnly(false); },
                      }, t('downloads.all')),
                      h('button', {
                        type: 'button',
                        className: cx('dfg-view-toggle-btn', downloadedOnly && 'dfg-view-toggle-active'),
                        onClick: function () { setDownloadedOnly(true); },
                      }, t('downloads.title') + (cachedCount > 0 ? ' ' + cachedCount : '')),
                    ),
                    !downloadedOnly && recent.length > 0 && h('span', null, relativeTime(recent[0].lastPlayedAt, props.locale)),
                  ),
                ),
                recent.length === 0
                  ? h('div', { className: 'dfg-empty dfg-empty-recent' },
                      h('p', null, downloadedOnly ? t('downloads.empty') : t('recent.empty')),
                      h('button', { type: 'button', className: 'dfg-button', onClick: function () { if (downloadedOnly) setDownloadedOnly(false); else if (fileRef.current) fileRef.current.click(); } }, downloadedOnly ? t('downloads.all') : t('import.button')),
                    )
                  : h('div', { className: 'dfg-grid' },
                      recent.map(function (game) {
                        return h(GameCard, cardProps(game, true));
                      }),
                    ),
              ),
              h('section', { className: 'dfg-section' },
                h('div', { className: 'dfg-section-head' }, h('h2', null, t('suggestions.title'))),
                h('div', { className: 'dfg-chips' },
                  props.suggestions.map(function (suggestion) {
                    return h('button', { key: suggestion, type: 'button', className: 'dfg-chip', onClick: function () { setQuery(suggestion); } }, suggestion);
                  }),
                ),
              ),
              h('section', { className: 'dfg-section dfg-import-section' },
                h('div', null,
                  h('h2', null, t('import.button')),
                  h('p', { className: 'dfg-muted' }, t('import.hint')),
                ),
                h('button', { type: 'button', className: 'dfg-button', onClick: function () { if (fileRef.current) fileRef.current.click(); } }, t('import.button')),
              ),
            ),
        h('input', {
          ref: fileRef,
          type: 'file',
          accept: '.nes',
          className: 'dfg-hidden',
          onChange: onImportFile,
        }),
        h('footer', { className: 'dfg-footer' },
          h('span', null, t('footer.source')),
          h('span', { className: 'dfg-footer-sep' }, '·'),
          h('span', null, t('footer.covers')),
        ),
        sourceDialog && h(SourceDialog, {
          t: t,
          sources: customSources,
          onChange: onSourcesChange,
          onClose: function () { setSourceDialog(false); },
        }),
        urlDialog && h(AddUrlDialog, {
          t: t,
          api: props.api,
          games: urlGames,
          onAdd: function (item) {
            addUrlGame(item);
            setUrlDialog(false);
          },
          onRemove: removeUrlGame,
          onClose: function () { setUrlDialog(false); },
        }),
        detailsGame && h(GameDetailsDialog, {
          key: detailsGame.id,
          t: t,
          game: detailsGame,
          api: props.api,
          cachedInfo: cachedInfoFor(detailsGame),
          onPlay: playGame,
          onClose: function () { setDetailsGame(null); },
        }),
        deleteGame && h(DeleteDownloadDialog, {
          key: deleteGame.id,
          t: t,
          game: deleteGame,
          onConfirm: deleteDownload,
          onClose: function () { setDeleteGame(null); },
        }),
        deleteNotice && h('div', { className: 'dfg-toast', role: 'status' }, t('downloads.deleted')),
      );
    }

    function Modal(props) {
      var panelRef = useRef(null);
      useEffect(function () {
        var onKey = function (event) {
          if (event.key === 'Escape') {
            event.preventDefault();
            props.onClose();
          }
        };
        document.addEventListener('keydown', onKey, true);
        var focusable = panelRef.current ? panelRef.current.querySelector('button, input, textarea, select') : null;
        if (focusable && typeof focusable.focus === 'function') focusable.focus();
        return function () {
          document.removeEventListener('keydown', onKey, true);
        };
      }, [props.onClose]);
      return h(
        'div',
        {
          className: 'dfg-modal-backdrop',
          role: 'presentation',
          onMouseDown: function (event) {
            if (event.target === event.currentTarget) props.onClose();
          },
        },
        h(
          'div',
          {
            ref: panelRef,
            className: cx('dfg-modal', props.wide && 'dfg-modal-wide'),
            role: 'dialog',
            'aria-modal': 'true',
            'aria-label': props.title,
          },
          h('div', { className: 'dfg-modal-head' },
            h('h2', null, props.title),
            h('button', { type: 'button', className: 'dfg-modal-close', 'aria-label': props.t('common.close'), onClick: props.onClose }, '×'),
          ),
          h('div', { className: 'dfg-modal-body' }, props.children),
          props.footer && h('div', { className: 'dfg-modal-foot' }, props.footer),
        ),
      );
    }

    function SourceDialog(props) {
      var t = props.t;
      var nameState = useState('');
      var name = nameState[0];
      var setName = nameState[1];
      var urlState = useState('');
      var url = urlState[0];
      var setUrl = urlState[1];
      var errorState = useState(null);
      var error = errorState[0];
      var setError = errorState[1];

      var add = function () {
        var sourceName = name.trim();
        var sourceUrl = url.trim();
        if (sourceName === '') {
          setError(t('sources.invalidName'));
          return;
        }
        var parsed;
        try {
          parsed = new URL(sourceUrl);
        } catch {
          parsed = null;
        }
        if (parsed === null || parsed.protocol !== 'https:') {
          setError(t('sources.invalidUrl'));
          return;
        }
        var id = 'custom-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6);
        props.onChange(props.sources.concat([{ id: id, name: sourceName.slice(0, 60), searchUrl: sourceUrl }]));
        setName('');
        setUrl('');
        setError(null);
      };

      return h(Modal, {
        title: t('sources.title'),
        t: t,
        onClose: props.onClose,
        footer: h('button', { type: 'button', className: 'dfg-button', onClick: props.onClose }, t('common.close')),
      },
        h('p', { className: 'dfg-muted' }, t('sources.intro')),
        h('p', { className: 'dfg-source-hint' }, t('sources.hint')),
        h('p', { className: 'dfg-source-hint dfg-source-format' }, t('sources.format')),
        h('p', { className: 'dfg-source-hint' }, t('sources.directOnly')),
        h('div', { className: 'dfg-source-form' },
          h('label', null,
            h('span', null, t('sources.name')),
            h('input', {
              type: 'text',
              value: name,
              maxLength: 60,
              placeholder: t('sources.namePlaceholder'),
              onChange: function (event) { setName(event.target.value); },
            }),
          ),
          h('label', null,
            h('span', null, t('sources.url')),
            h('input', {
              type: 'url',
              value: url,
              placeholder: t('sources.urlPlaceholder'),
              onChange: function (event) { setUrl(event.target.value); },
              onKeyDown: function (event) {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  add();
                }
              },
            }),
          ),
          h('button', { type: 'button', className: 'dfg-button', onClick: add }, t('sources.add')),
        ),
        error && h('div', { className: 'dfg-inline-error', role: 'alert' }, error),
        h('div', { className: 'dfg-source-list' },
          props.sources.length === 0
            ? h('p', { className: 'dfg-muted' }, t('sources.empty'))
            : props.sources.map(function (source) {
                return h('div', { key: source.id, className: 'dfg-source-row' },
                  h('div', { className: 'dfg-source-info' },
                    h('strong', null, source.name),
                    h('code', null, source.searchUrl),
                  ),
                  h('button', {
                    type: 'button',
                    className: 'dfg-button dfg-button-small dfg-button-ghost',
                    onClick: function () {
                      props.onChange(props.sources.filter(function (entry) { return entry.id !== source.id; }));
                    },
                  }, t('sources.delete')),
                );
              }),
        ),
      );
    }

    function DeleteDownloadDialog(props) {
      var t = props.t;
      return h(Modal, {
        title: t('downloads.deleteTitle'),
        t: t,
        onClose: props.onClose,
        footer: [
          h('button', {
            key: 'cancel',
            type: 'button',
            className: 'dfg-button dfg-button-ghost',
            onClick: props.onClose,
          }, t('common.cancel')),
          h('button', {
            key: 'delete',
            type: 'button',
            className: 'dfg-button dfg-button-danger',
            onClick: function () { props.onConfirm(props.game); },
          }, t('downloads.delete')),
        ],
      },
        h('div', { className: 'dfg-delete-dialog' },
          h('div', { className: 'dfg-delete-cover' },
            h(Cover, { url: props.game.coverUrl, title: props.game.title }),
          ),
          h('div', { className: 'dfg-delete-copy' },
            h('h3', null, props.game.title),
            h('p', null, t('downloads.deleteBody')),
            h('p', { className: 'dfg-delete-hint' }, t('downloads.deleteHint')),
          ),
        ),
      );
    }

    function AddUrlDialog(props) {
      var t = props.t;
      var urlState = useState('');
      var url = urlState[0];
      var setUrl = urlState[1];
      var loadingState = useState(false);
      var loading = loadingState[0];
      var setLoading = loadingState[1];
      var errorState = useState(null);
      var error = errorState[0];
      var setError = errorState[1];
      var previewState = useState(null);
      var preview = previewState[0];
      var setPreview = previewState[1];

      var parse = function () {
        var target = url.trim();
        if (!/^https:\/\//i.test(target)) {
          setError(t('sources.invalidUrl'));
          return;
        }
        setLoading(true);
        setError(null);
        setPreview(null);
        props.api.parseUrl(target)
          .then(function (payload) {
            if (!payload || !payload.item) throw new Error(t('urlGames.error'));
            setPreview(payload.item);
            setLoading(false);
          })
          .catch(function (cause) {
            setLoading(false);
            setError(String(cause && cause.message ? cause.message : cause));
          });
      };

      var add = function () {
        if (!preview) return;
        var exists = props.games.some(function (entry) { return entry.id === preview.id; });
        if (exists) {
          setError(t('urlGames.duplicate'));
          return;
        }
        props.onAdd(preview);
      };

      return h(Modal, {
        title: t('urlGames.dialogTitle'),
        t: t,
        wide: true,
        onClose: props.onClose,
        footer: h('button', { type: 'button', className: 'dfg-button dfg-button-ghost', onClick: props.onClose }, t('common.close')),
      },
        h('p', { className: 'dfg-source-hint' }, t('urlGames.intro')),
        h('div', { className: 'dfg-url-form' },
          h('input', {
            type: 'url',
            value: url,
            placeholder: t('urlGames.placeholder'),
            onChange: function (event) { setUrl(event.target.value); },
            onKeyDown: function (event) {
              if (event.key === 'Enter') {
                event.preventDefault();
                parse();
              }
            },
          }),
          h('button', { type: 'button', className: 'dfg-button', disabled: loading, onClick: parse }, loading ? t('urlGames.loading') : t('urlGames.parse')),
        ),
        error && h('div', { className: 'dfg-inline-error', role: 'alert' }, error),
        loading && h('div', { className: 'dfg-details-loading' }, h('span', { className: 'dfg-spinner dfg-spinner-small' }), t('urlGames.loading')),
        preview && h('div', { className: 'dfg-url-preview' },
          h('div', { className: 'dfg-url-cover' }, h(Cover, { url: preview.coverUrl, title: preview.title })),
          h('div', { className: 'dfg-url-info' },
            h('h3', null, preview.title),
            h('div', { className: 'dfg-details-meta' },
              preview.sourceName || t('sources.url'),
              preview.year ? ' · ' + tFormat(t, 'common.year', { year: preview.year }) : '',
            ),
            preview.fileName && h('p', { className: 'dfg-url-file' }, preview.fileName),
            preview.itemUrl && h('a', { className: 'dfg-details-link', href: preview.itemUrl, target: '_blank', rel: 'noreferrer' }, t('common.openSource')),
            h('button', { type: 'button', className: 'dfg-button dfg-url-add', onClick: add }, t('urlGames.addCard')),
          ),
        ),
        h('div', { className: 'dfg-url-existing' },
          h('strong', null, t('urlGames.existing')),
          props.games.length === 0
            ? h('p', { className: 'dfg-muted' }, t('urlGames.empty'))
            : props.games.map(function (game) {
                return h('div', { key: game.id, className: 'dfg-url-existing-row' },
                  h('span', null, game.title),
                  h('button', {
                    type: 'button',
                    className: 'dfg-button dfg-button-small dfg-button-ghost',
                    onClick: function () { props.onRemove(game.id); },
                  }, t('urlGames.remove')),
                );
              }),
        ),
      );
    }

    function GameDetailsDialog(props) {
      var t = props.t;
      var game = props.game;
      var infoState = useState({ loading: true, resolved: null, error: null });
      var info = infoState[0];
      var setInfo = infoState[1];
      var initialFile = (props.cachedInfo && props.cachedInfo.file) || game.file || game.fileName || null;
      var fileState = useState(initialFile);
      var selectedFile = fileState[0];
      var setSelectedFile = fileState[1];

      useEffect(function () {
        var alive = true;
        if (game.source === 'local') {
          setInfo({ loading: false, resolved: { files: game.file ? [{ name: game.file }] : [], description: '' }, error: null });
          return function () { alive = false; };
        }
        setInfo({ loading: true, resolved: null, error: null });
        props.api.resolve(game.id, game.source).then(function (resolved) {
          if (!alive) return;
          setInfo({ loading: false, resolved: resolved, error: null });
          var files = resolved && Array.isArray(resolved.files) ? resolved.files : [];
          var known = initialFile && files.some(function (file) { return file.name === initialFile; });
          if (!known && files.length > 0) setSelectedFile(files[0].name);
        }).catch(function (cause) {
          if (!alive) return;
          setInfo({ loading: false, resolved: null, error: cause });
        });
        return function () { alive = false; };
      }, [game.id, game.source, props.api]);

      var sourceName = game.source === 'github'
        ? t('sources.github')
        : game.source === 'archive'
          ? t('sources.archive')
          : game.source === 'url'
            ? t('sources.url')
            : game.sourceName || (game.source === 'local' ? t('source.local') : t('sources.custom'));
      var cached = props.cachedInfo && props.cachedInfo.cached;
      var canPlay = info.resolved !== null && info.resolved.files && info.resolved.files.length > 0;
      var footer = [
        cached
          ? h('button', {
              key: 'continue',
              type: 'button',
              className: 'dfg-button',
              disabled: !canPlay,
              onClick: function () { props.onPlay(game, { file: selectedFile || initialFile }); },
            }, t('card.continue'))
          : h('button', {
              key: 'download',
              type: 'button',
              className: 'dfg-button',
              disabled: !canPlay,
              onClick: function () { props.onPlay(game, { file: selectedFile }); },
            }, t('details.downloadPlay')),
        cached && h('button', {
          key: 'restart',
          type: 'button',
          className: 'dfg-button dfg-button-ghost',
          disabled: !canPlay,
          onClick: function () { props.onPlay(game, { file: selectedFile || initialFile, freshStart: true }); },
        }, t('card.restart')),
        h('button', {
          key: 'close',
          type: 'button',
          className: 'dfg-button dfg-button-ghost',
          onClick: props.onClose,
        }, t('common.close')),
      ];

      var files = info.resolved && Array.isArray(info.resolved.files) ? info.resolved.files : [];
      return h(Modal, {
        title: t('details.title'),
        t: t,
        wide: true,
        onClose: props.onClose,
        footer: footer,
      },
        h('div', { className: 'dfg-details' },
          h('div', { className: 'dfg-details-cover' },
            h(Cover, { url: game.coverUrl, title: game.title }),
          ),
          h('div', { className: 'dfg-details-info' },
            h('h3', null, game.title),
            h('div', { className: 'dfg-details-meta' },
              sourceName,
              game.year ? ' · ' + tFormat(t, 'common.year', { year: game.year }) : '',
              cached ? h('span', { className: 'dfg-details-cached' }, t('details.cached')) : null,
            ),
            info.resolved && info.resolved.description && h('p', { className: 'dfg-details-desc' }, info.resolved.description),
            game.itemUrl && h('a', { className: 'dfg-details-link', href: game.itemUrl, target: '_blank', rel: 'noreferrer' }, t('common.openSource')),
          ),
        ),
        info.loading && h('div', { className: 'dfg-details-loading' }, h('span', { className: 'dfg-spinner dfg-spinner-small' }), t('details.loading')),
        info.error && h('div', { className: 'dfg-inline-error', role: 'alert' }, t('details.error') + ': ' + String(info.error.message || info.error)),
        !info.loading && !info.error && files.length > 0 &&
          h('div', { className: 'dfg-details-files' },
            h('strong', null, t('details.files')),
            files.map(function (file) {
              var active = file.name === selectedFile;
              return h('button', {
                key: file.name,
                type: 'button',
                className: cx('dfg-detail-file', active && 'dfg-detail-file-active'),
                onClick: function () { setSelectedFile(file.name); },
              },
                h('span', null, file.name),
                file.size ? h('small', null, formatBytes(file.size)) : null,
              );
            }),
          ),
      );
    }

    function SaveDialog(props) {
      var t = props.t;
      var slots = [1, 2, 3, 4];
      return h(Modal, {
        title: t('save.title'),
        t: t,
        onClose: props.onClose,
        footer: h('button', { type: 'button', className: 'dfg-button', onClick: props.onClose }, t('common.close')),
      },
        h('p', { className: 'dfg-muted' }, t('save.hint')),
        h('div', { className: 'dfg-slot-list' },
          slots.map(function (slot) {
            var row = props.slots[slot];
            return h('div', { key: slot, className: 'dfg-slot' },
              h('div', { className: 'dfg-slot-thumb' },
                row && row.thumbnail
                  ? h('img', { src: row.thumbnail, alt: '', referrerPolicy: 'no-referrer' })
                  : h('span', null, '—'),
              ),
              h('div', { className: 'dfg-slot-info' },
                h('strong', null, tFormat(t, 'save.slot', { slot: slot })),
                h('span', null, row ? new Date(row.updatedAt).toLocaleString() : t('common.empty')),
              ),
              h('div', { className: 'dfg-slot-actions' },
                props.mode === 'save'
                  ? h('button', { type: 'button', className: 'dfg-button dfg-button-small', onClick: function () { props.onSave(slot); } }, t('common.save'))
                  : h('button', { type: 'button', className: 'dfg-button dfg-button-small', disabled: !row, onClick: function () { props.onLoad(slot); } }, t('common.load')),
                row && h('button', { type: 'button', className: 'dfg-button dfg-button-small dfg-button-ghost', onClick: function () { props.onDelete(slot); } }, t('common.delete')),
              ),
            );
          }),
        ),
      );
    }

    function keyLabel(code) {
      var labels = {
        ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→',
        Enter: 'Enter', ShiftLeft: 'L-Shift', ShiftRight: 'R-Shift', Space: 'Space',
        Escape: 'Esc', Backspace: 'Backspace', Tab: 'Tab',
      };
      return labels[code] || String(code || '').replace(/^Key/, '').replace(/^Digit/, '');
    }

    function ControlsDialog(props) {
      var t = props.t;
      var state = useState(props.initial || loadControls());
      var controls = state[0];
      var setControls = state[1];
      var tabState = useState('keyboard');
      var tab = tabState[0];
      var setTab = tabState[1];
      var captureState = useState(null);
      var capture = captureState[0];
      var setCapture = captureState[1];
      var prevPadRef = useRef({});

      useEffect(function () {
        if (capture === null || capture.type !== 'keyboard') return undefined;
        var onKey = function (event) {
          if (event.key === 'Escape') {
            event.preventDefault();
            setCapture(null);
            return;
          }
          if (['ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'MetaLeft', 'MetaRight'].includes(event.code)) return;
          event.preventDefault();
          event.stopPropagation();
          var next = Object.assign({}, controls, { keyboard: Object.assign({}, controls.keyboard) });
          next.keyboard[capture.action] = event.code;
          setControls(next);
          setCapture(null);
        };
        window.addEventListener('keydown', onKey, true);
        return function () {
          window.removeEventListener('keydown', onKey, true);
        };
      }, [capture, controls]);

      useEffect(function () {
        if (capture === null || capture.type !== 'gamepad') return undefined;
        var timer = window.setInterval(function () {
          if (typeof navigator.getGamepads !== 'function') return;
          var pads = navigator.getGamepads();
          for (var p = 0; p < pads.length; p += 1) {
            var pad = pads[p];
            if (!pad) continue;
            var previous = prevPadRef.current[p] || [];
            for (var i = 0; i < pad.buttons.length; i += 1) {
              if (pad.buttons[i].pressed && !previous[i]) {
                var next = Object.assign({}, controls, { gamepad: Object.assign({}, controls.gamepad) });
                next.gamepad[capture.action] = i;
                setControls(next);
                setCapture(null);
                prevPadRef.current[p] = pad.buttons.map(function (button) { return button.pressed; });
                return;
              }
            }
            prevPadRef.current[p] = pad.buttons.map(function (button) { return button.pressed; });
          }
        }, 80);
        return function () {
          window.clearInterval(timer);
        };
      }, [capture, controls]);

      var actions = Object.keys(DEFAULT_KEYBOARD);
      return h(Modal, {
        title: t('controls.title'),
        t: t,
        wide: true,
        onClose: props.onClose,
        footer: [
          h('button', { key: 'reset', type: 'button', className: 'dfg-button dfg-button-ghost', onClick: function () { setControls({ keyboard: Object.assign({}, DEFAULT_KEYBOARD), gamepad: Object.assign({}, DEFAULT_GAMEPAD), autoFire: Object.assign({}, DEFAULT_AUTOFIRE) }); } }, t('controls.reset')),
          h('button', { key: 'cancel', type: 'button', className: 'dfg-button dfg-button-ghost', onClick: props.onClose }, t('common.cancel')),
          h('button', { key: 'save', type: 'button', className: 'dfg-button', onClick: function () { props.onSave(controls); } }, t('common.save')),
        ],
      },
        h('div', { className: 'dfg-tabs' },
          h('button', { type: 'button', className: cx('dfg-tab', tab === 'keyboard' && 'dfg-tab-active'), onClick: function () { setTab('keyboard'); setCapture(null); } }, t('controls.keyboard')),
          h('button', { type: 'button', className: cx('dfg-tab', tab === 'gamepad' && 'dfg-tab-active'), onClick: function () { setTab('gamepad'); setCapture(null); } }, t('controls.gamepad')),
        ),
        h('div', { className: 'dfg-autofire' },
          h('label', null,
            h('input', {
              type: 'checkbox',
              checked: !!(controls.autoFire && controls.autoFire.a),
              onChange: function (event) {
                var next = Object.assign({}, controls, {
                  autoFire: Object.assign({ a: false, b: false }, controls.autoFire || {}, { a: event.target.checked }),
                });
                setControls(next);
              },
            }),
            h('span', null, t('controls.autofireA')),
          ),
          h('label', null,
            h('input', {
              type: 'checkbox',
              checked: !!(controls.autoFire && controls.autoFire.b),
              onChange: function (event) {
                var next = Object.assign({}, controls, {
                  autoFire: Object.assign({ a: false, b: false }, controls.autoFire || {}, { b: event.target.checked }),
                });
                setControls(next);
              },
            }),
            h('span', null, t('controls.autofireB')),
          ),
        ),
        h('label', { className: 'dfg-aspect-setting' },
          h('span', null, t('game.aspect')),
          h('select', {
            value: props.aspect,
            'aria-label': t('game.aspect'),
            onChange: function (event) {
              props.onAspectChange(event.target.value);
            },
          },
            props.aspects.map(function (entry) {
              return h('option', { key: entry.id, value: entry.id }, t(entry.labelKey));
            }),
          ),
        ),
        h('div', { className: 'dfg-control-list' },
          actions.map(function (action) {
            var label = t('controls.action.' + action);
            var value = tab === 'keyboard' ? keyLabel(controls.keyboard[action]) : '#' + controls.gamepad[action];
            var isCapturing = capture !== null && capture.action === action && capture.type === tab;
            return h('div', { key: action, className: 'dfg-control-row' },
              h('span', { className: 'dfg-control-name' }, label),
              h('span', { className: cx('dfg-control-value', isCapturing && 'dfg-capturing') },
                isCapturing ? (tab === 'keyboard' ? t('controls.pressKey') : t('controls.pressButton')) : value,
              ),
              h('button', {
                type: 'button',
                className: 'dfg-button dfg-button-small',
                onClick: function () {
                  setCapture({ action: action, type: tab });
                },
              }, t('controls.remap')),
            );
          }),
        ),
        h('p', { className: 'dfg-muted' }, t('game.controlsHint')),
      );
    }

    function CheatDialog(props) {
      var t = props.t;
      var state = useState(props.initial || '');
      var text = state[0];
      var setText = state[1];
      var errorState = useState(null);
      var error = errorState[0];
      var setError = errorState[1];
      var submit = function () {
        var lines = String(text || '').split(/\r?\n/).map(function (line) { return line.trim(); }).filter(Boolean);
        for (var i = 0; i < lines.length; i += 1) {
          if (!/^[A-Za-z]{6}$|^[A-Za-z]{8}$|^[0-9a-fA-F]{1,4}:[0-9a-fA-F]{1,2}(\?[0-9a-fA-F]{0,2})?$/.test(lines[i])) {
            setError(tFormat(t, 'cheats.invalid', { code: lines[i] }));
            return;
          }
        }
        props.onApply(lines);
      };
      return h(Modal, {
        title: t('cheats.title'),
        t: t,
        onClose: props.onClose,
        footer: [
          h('button', { key: 'clear', type: 'button', className: 'dfg-button dfg-button-ghost', onClick: function () { setText(''); props.onApply([]); } }, t('cheats.clear')),
          h('button', { key: 'cancel', type: 'button', className: 'dfg-button dfg-button-ghost', onClick: props.onClose }, t('common.cancel')),
          h('button', { key: 'apply', type: 'button', className: 'dfg-button', onClick: submit }, t('cheats.apply')),
        ],
      },
        h('p', { className: 'dfg-muted' }, t('cheats.hint')),
        error && h('div', { className: 'dfg-inline-error', role: 'alert' }, error),
        h('textarea', {
          className: 'dfg-textarea',
          rows: 8,
          value: text,
          placeholder: 'SXIOPO\nGOSSIP',
          onChange: function (event) {
            setText(event.target.value);
            setError(null);
          },
        }),
      );
    }

    function FileChooser(props) {
      var t = props.t;
      return h(Modal, {
        title: props.game.title || t('game.chooseFile'),
        t: t,
        onClose: props.onBack,
        footer: h('button', { type: 'button', className: 'dfg-button dfg-button-ghost', onClick: props.onBack }, t('common.back')),
      },
        h('p', { className: 'dfg-muted' }, t('game.chooseFile')),
        h('div', { className: 'dfg-file-list' },
          props.files.map(function (file) {
            return h('button', {
              key: file.name,
              type: 'button',
              className: 'dfg-file',
              onClick: function () { props.onChoose(file.name); },
            },
              h('span', { className: 'dfg-file-name' }, file.name),
              h('span', { className: 'dfg-file-size' }, formatBytes(file.size)),
            );
          }),
        ),
      );
    }

    function GameView(props) {
      var t = props.t;
      var locale = props.locale;
      var game = props.game;
      var api = props.api;
      var initialBytes = props.initialBytes || null;
      var initialFile = props.initialFile || game.file || null;

      var loadSeqRef = useRef(0);
      var canvasRef = useRef(null);
      var stageRef = useRef(null);
      var emuRef = useRef(null);
      var activeKeyRef = useRef(makeGameKey(game.id, initialFile || ''));
      var autoTimerRef = useRef(0);
      var rewindTimerRef = useRef(0);
      var rewindHoldRef = useRef(0);
      var rewindWasPausedRef = useRef(false);
      var rewindBufRef = useRef([]);
      var autoBusyRef = useRef(false);
      var batteryTimerRef = useRef(0);
      var toastTimerRef = useRef(0);
      var recordedRef = useRef(false);
      var brokenRef = useRef(false);
      var dialogWasRunningRef = useRef(false);
      var mountRef = useRef(true);
      var speedRef = useRef(1);
      var mutedRef = useRef(false);
      var volumeRef = useRef(loadJson(VOLUME_KEY, 0.65));
      var onPlayedRef = useRef(props.onPlayed);
      onPlayedRef.current = props.onPlayed;

      var phaseState = useState(initialBytes ? 'ready' : 'loading');
      var phase = phaseState[0];
      var setPhase = phaseState[1];
      var resolvedState = useState(null);
      var resolved = resolvedState[0];
      var setResolved = resolvedState[1];
      var chosenState = useState(initialFile || (initialBytes ? 'local.nes' : null));
      var chosenFile = chosenState[0];
      var setChosenFile = chosenState[1];
      var bytesState = useState(initialBytes);
      var bytes = bytesState[0];
      var setBytes = bytesState[1];
      var errorState = useState(null);
      var error = errorState[0];
      var setError = errorState[1];
      var progressState = useState(null);
      var progress = progressState[0];
      var setProgress = progressState[1];
      var reloadState = useState(0);
      var reloadTick = reloadState[0];
      var setReloadTick = reloadState[1];

      var pausedState = useState(true);
      var paused = pausedState[0];
      var setPaused = pausedState[1];
      var speedState = useState(1);
      var speed = speedState[0];
      var setSpeed = speedState[1];
      var volumeState = useState(volumeRef.current);
      var volume = volumeState[0];
      var setVolume = volumeState[1];
      var aspectState = useState(function () {
        var saved = loadJson(ASPECT_KEY, '4:3');
        for (var i = 0; i < ASPECTS.length; i += 1) {
          if (ASPECTS[i].id === saved) return saved;
        }
        return '4:3';
      });
      var aspect = aspectState[0];
      var setAspect = aspectState[1];
      var aspectMenuState = useState(false);
      var aspectMenuOpen = aspectMenuState[0];
      var setAspectMenuOpen = aspectMenuState[1];
      var aspectMenuRef = useRef(null);
      var mutedState = useState(false);
      var muted = mutedState[0];
      var setMuted = mutedState[1];
      var fpsState = useState(0);
      var fps = fpsState[0];
      var setFps = fpsState[1];
      var dialogState = useState(null);
      var dialog = dialogState[0];
      var setDialog = dialogState[1];
      var slotsState = useState({});
      var slots = slotsState[0];
      var setSlots = slotsState[1];
      var toastState = useState(null);
      var toast = toastState[0];
      var setToast = toastState[1];
      var fullscreenState = useState(false);
      var fullscreen = fullscreenState[0];
      var setFullscreen = fullscreenState[1];
      var padState = useState(0);
      var gamepadCount = padState[0];
      var setGamepadCount = padState[1];
      var cheatTextState = useState('');
      var cheatText = cheatTextState[0];
      var setCheatText = cheatTextState[1];

      speedRef.current = speed;
      mutedRef.current = muted;
      volumeRef.current = volume;

      var showToast = useCallback(function (message) {
        setToast(message);
        if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
        toastTimerRef.current = window.setTimeout(function () {
          setToast(null);
          toastTimerRef.current = 0;
        }, 2800);
      }, []);

      useEffect(function () {
        mountRef.current = true;
        return function () {
          mountRef.current = false;
          if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
        };
      }, []);

      var saveAuto = useCallback(async function () {
        var emu = emuRef.current;
        var key = activeKeyRef.current;
        if (!emu || !key || autoBusyRef.current || brokenRef.current) return;
        autoBusyRef.current = true;
        var data;
        var thumbnail;
        try {
          data = emu.snapshot();
          thumbnail = emu.thumbnail();
        } catch (e) {
          autoBusyRef.current = false;
          return;
        }
        try {
          await idbPut('states', {
            key: key + '::auto',
            gameKey: key,
            slot: 'auto',
            version: 1,
            data: data,
            thumbnail: thumbnail,
            updatedAt: Date.now(),
          });
        } catch (e) {
          // Quota or private mode: the game keeps running.
        } finally {
          autoBusyRef.current = false;
        }
      }, []);

      var scheduleAuto = useCallback(function () {
        if (batteryTimerRef.current) window.clearTimeout(batteryTimerRef.current);
        batteryTimerRef.current = window.setTimeout(function () {
          batteryTimerRef.current = 0;
          saveAuto();
        }, 10000);
      }, [saveAuto]);

      var refreshSlots = useCallback(async function () {
        var key = activeKeyRef.current;
        if (!key) return;
        try {
          var rows = await idbAll('states');
          var map = {};
          rows.forEach(function (row) {
            if (row && row.gameKey === key) map[row.slot] = row;
          });
          setSlots(map);
        } catch (e) {
          setSlots({});
        }
      }, []);

      // Resolve the item and choose a playable file (unless local bytes were given).
      useEffect(function () {
        var controller = new AbortController();
        var seq = loadSeqRef.current + 1;
        loadSeqRef.current = seq;
        recordedRef.current = false;
        setError(null);
        setProgress(null);
        setResolved(null);
        setBytes(initialBytes || null);
        setPhase(initialBytes ? 'ready' : 'loading');
        if (initialBytes) {
          setChosenFile(initialFile || 'local.nes');
          return function () {
            controller.abort();
          };
        }
        (async function () {
          try {
            if (game.source === 'local') {
              var localTarget = initialFile || game.file;
              if (!localTarget) {
                setError({ code: 'NOT_FOUND', message: t('error.notFound') });
                setPhase('error');
                return;
              }
              setChosenFile(localTarget);
              return;
            }
            var res = await api.resolve(game.id, game.source || 'archive', controller.signal);
            if (seq !== loadSeqRef.current) return;
            setResolved(res);
            if (!res.files || res.files.length === 0) {
              var message = t('game.unsupportedNone');
              if (res.unsupported === 'zip') message = t('game.unsupportedZip');
              if (res.unsupported === 'fds') message = t('game.unsupportedFds');
              setError({ code: 'UNSUPPORTED', message: message });
              setPhase('error');
              return;
            }
            var target = initialFile || game.file;
            var known = target && res.files.some(function (file) { return file.name === target; });
            if (!known) target = res.files.length === 1 ? res.files[0].name : null;
            if (target === null) {
              setPhase('choose');
              return;
            }
            setChosenFile(target);
          } catch (cause) {
            if (controller.signal.aborted) return;
            if (seq !== loadSeqRef.current) return;
            setError({ code: cause.code || 'ERROR', message: cause.message });
            setPhase('error');
          }
        })();
        return function () {
          controller.abort();
        };
      }, [game.id, reloadTick, initialBytes, initialFile, game.file, api, t]);

      // Download or reuse the ROM, then hand it to the emulator effect.
      useEffect(function () {
        if (!chosenFile) return undefined;
        var controller = new AbortController();
        var seq = loadSeqRef.current + 1;
        loadSeqRef.current = seq;
        setError(null);
        if (initialBytes) {
          setBytes(initialBytes);
          setPhase('ready');
          var localCopy = initialBytes.buffer.slice(initialBytes.byteOffset, initialBytes.byteOffset + initialBytes.byteLength);
          putCachedRom(makeGameKey(game.id, chosenFile), localCopy, { id: game.id, title: game.title, file: chosenFile }).catch(function () {});
          if (!recordedRef.current) {
            recordedRef.current = true;
            onPlayedRef.current(game, chosenFile, game.coverUrl || null);
          }
          return function () {
            controller.abort();
          };
        }
        setPhase('loading');
        setProgress(null);
        (async function () {
          try {
            var key = makeGameKey(game.id, chosenFile);
            var cached = await getCachedRom(key);
            var data = cached && cached.bytes ? new Uint8Array(cached.bytes) : null;
            if (data === null && game.source === 'local') {
              var missing = new Error(t('error.notFound'));
              missing.code = 'NOT_FOUND';
              throw missing;
            }
            if (data === null) {
              data = await api.fetchRom(game.id, chosenFile, game.source || 'archive', controller.signal, function (received, total) {
                setProgress({ received: received, total: total });
              });
              var copy = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
              await putCachedRom(key, copy, { id: game.id, title: game.title, file: chosenFile }).catch(function () {});
              pruneRoms(20).catch(function () {});
            }
            if (seq !== loadSeqRef.current) return;
            if (data.length < 16 || data[0] !== 0x4e || data[1] !== 0x45 || data[2] !== 0x53 || data[3] !== 0x1a) {
              var invalid = new Error(t('game.romError'));
              invalid.code = 'NOT_A_ROM';
              throw invalid;
            }
            setBytes(data);
            setPhase('ready');
            if (!recordedRef.current) {
              recordedRef.current = true;
              onPlayedRef.current(game, chosenFile, (resolved && resolved.coverUrl) || game.coverUrl || null);
            }
          } catch (cause) {
            if (controller.signal.aborted) return;
            if (seq !== loadSeqRef.current) return;
            setError({ code: cause.code || 'ERROR', message: cause.message });
            setPhase('error');
          }
        })();
        return function () {
          controller.abort();
        };
      }, [chosenFile, initialBytes, resolved, game, api, t]);

      // Create/destroy the emulator for the current ROM bytes.
      useEffect(function () {
        if (!bytes || phase !== 'ready' || !canvasRef.current || !stageRef.current) return undefined;
        var key = makeGameKey(game.id, chosenFile || game.file || '');
        activeKeyRef.current = key;
        brokenRef.current = false;
        var emu;
        try {
          emu = new Emulator(canvasRef.current, bytes, {
            volume: volumeRef.current,
            muted: mutedRef.current,
            onFps: function (value) { setFps(value); },
            onBatteryWrite: scheduleAuto,
            onError: function (cause) {
              brokenRef.current = true;
              idbDelete('states', key + '::auto').catch(function () {});
              setError({ code: 'RUNTIME', message: String(cause && cause.message ? cause.message : cause) });
              setPhase('error');
            },
            onPauseToggle: function () {
              var current = emuRef.current;
              if (!current) return;
              var nowPaused = current.togglePause();
              setPaused(nowPaused);
            },
          });
        } catch (cause) {
          setError({ code: cause.code || 'RUNTIME', message: String(cause && cause.message ? cause.message : cause) });
          setPhase('error');
          return undefined;
        }
        emuRef.current = emu;
        emu.bindInput(stageRef.current);
        emu.setVolume(volumeRef.current);
        emu.setMuted(mutedRef.current || speedRef.current > 1);
        emu.setSpeed(speedRef.current);
        emu.setControls(loadControls());
        try {
          var cheats = loadJson(CHEATS_KEY, {});
          var codes = cheats[key];
          if (Array.isArray(codes) && codes.length > 0) emu.setCheats(codes);
        } catch (e) {
          // Ignore malformed stored cheats.
        }

        (async function () {
          try {
            if (!props.freshStart) {
              var row = await idbGet('states', key + '::auto');
              if (row && row.data && mountRef.current) {
                try {
                  emu.restore(row.data);
                  showToast(t('game.autoRestored'));
                } catch (e) {
                  // Incompatible state: start fresh.
                }
              }
            }
          } catch (e) {
            // ignore
          }
          if (!mountRef.current) return;
          emu.start();
          setPaused(false);
          if (stageRef.current) {
            try {
              stageRef.current.focus({ preventScroll: true });
            } catch (e) {
              stageRef.current.focus();
            }
          }
        })();

        autoTimerRef.current = window.setInterval(function () {
          saveAuto();
        }, 30000);
        var countdown = window.setInterval(function () {
          if (rewindHoldRef.current) return;
          var current = emuRef.current;
          if (!current || current.paused) return;
          try {
            rewindBufRef.current.push(current.snapshot());
            while (rewindBufRef.current.length > 15) rewindBufRef.current.shift();
          } catch (e) {
            // ignore
          }
        }, 1000);
        rewindTimerRef.current = countdown;

        var visibilityTimer = 0;
        var visibilityPaused = false;
        var onVisibility = function () {
          if (document.hidden) {
            if (visibilityTimer) window.clearTimeout(visibilityTimer);
            visibilityTimer = window.setTimeout(function () {
              visibilityTimer = 0;
              var current = emuRef.current;
              if (current && !current.paused) {
                current.pause();
                visibilityPaused = true;
                setPaused(true);
                saveAuto();
              }
            }, 900);
            return;
          }
          if (visibilityTimer) {
            window.clearTimeout(visibilityTimer);
            visibilityTimer = 0;
          }
          if (visibilityPaused && emuRef.current) {
            visibilityPaused = false;
            emuRef.current.resume();
            setPaused(false);
          }
        };
        document.addEventListener('visibilitychange', onVisibility);

        var updatePads = function () {
          if (typeof navigator.getGamepads !== 'function') {
            setGamepadCount(0);
            return;
          }
          var pads = navigator.getGamepads();
          var count = 0;
          for (var i = 0; i < pads.length; i += 1) if (pads[i]) count += 1;
          setGamepadCount(count);
        };
        updatePads();
        window.addEventListener('gamepadconnected', updatePads);
        window.addEventListener('gamepaddisconnected', updatePads);

        return function () {
          document.removeEventListener('visibilitychange', onVisibility);
          if (visibilityTimer) window.clearTimeout(visibilityTimer);
          window.removeEventListener('gamepadconnected', updatePads);
          window.removeEventListener('gamepaddisconnected', updatePads);
          if (autoTimerRef.current) window.clearInterval(autoTimerRef.current);
          if (rewindTimerRef.current) window.clearInterval(rewindTimerRef.current);
          if (batteryTimerRef.current) window.clearTimeout(batteryTimerRef.current);
          autoTimerRef.current = 0;
          rewindTimerRef.current = 0;
          batteryTimerRef.current = 0;
          saveAuto();
          emu.destroy();
          emuRef.current = null;
        };
      }, [bytes, phase, chosenFile, game.id, game.file, scheduleAuto, saveAuto, showToast, t]);

      useEffect(function () {
        refreshSlots();
      }, [chosenFile, refreshSlots]);

      useEffect(function () {
        var onFullscreen = function () {
          setFullscreen(document.fullscreenElement === stageRef.current);
        };
        document.addEventListener('fullscreenchange', onFullscreen);
        return function () {
          document.removeEventListener('fullscreenchange', onFullscreen);
        };
      }, []);

      var openDialog = function (name) {
        var emu = emuRef.current;
        dialogWasRunningRef.current = !!(emu && !emu.paused);
        if (dialogWasRunningRef.current) {
          emu.pause();
          setPaused(true);
        }
        if (name === 'save' || name === 'load') refreshSlots();
        if (name === 'cheats') {
          var map = loadJson(CHEATS_KEY, {});
          var codes = map[activeKeyRef.current];
          setCheatText(Array.isArray(codes) ? codes.join('\n') : '');
        }
        setDialog(name);
      };

      var closeDialog = function () {
        setDialog(null);
        if (dialogWasRunningRef.current && emuRef.current) {
          emuRef.current.resume();
          setPaused(false);
        }
        dialogWasRunningRef.current = false;
      };

      var togglePause = function () {
        var emu = emuRef.current;
        if (!emu) return;
        var nowPaused = emu.togglePause();
        setPaused(nowPaused);
        if (!nowPaused && stageRef.current) stageRef.current.focus();
      };

      var cycleSpeed = function () {
        var next = speed === 1 ? 2 : speed === 2 ? 4 : 1;
        setSpeed(next);
        if (emuRef.current) {
          emuRef.current.setSpeed(next);
          emuRef.current.setMuted(mutedRef.current || next > 1);
        }
      };

      var toggleMute = function () {
        var next = !muted;
        setMuted(next);
        if (emuRef.current) emuRef.current.setMuted(next || speed > 1);
      };

      var changeVolume = function (value) {
        var v = Math.max(0, Math.min(1, Number(value) || 0));
        setVolume(v);
        saveJson(VOLUME_KEY, v);
        if (emuRef.current) emuRef.current.setVolume(v);
      };

      var currentAspect = ASPECTS[0];
      for (var aspectIndex = 0; aspectIndex < ASPECTS.length; aspectIndex += 1) {
        if (ASPECTS[aspectIndex].id === aspect) currentAspect = ASPECTS[aspectIndex];
      }

      var changeAspect = function (next) {
        var found = null;
        for (var i = 0; i < ASPECTS.length; i += 1) {
          if (ASPECTS[i].id === next) found = ASPECTS[i];
        }
        if (found === null) return;
        setAspect(found.id);
        saveJson(ASPECT_KEY, found.id);
        setAspectMenuOpen(false);
      };

      useEffect(function () {
        if (!aspectMenuOpen) return undefined;
        var onPointerDown = function (event) {
          if (aspectMenuRef.current === null) return;
          if (!aspectMenuRef.current.contains(event.target)) setAspectMenuOpen(false);
        };
        var onKeyDown = function (event) {
          if (event.key === 'Escape') {
            event.preventDefault();
            setAspectMenuOpen(false);
          }
        };
        document.addEventListener('pointerdown', onPointerDown, true);
        document.addEventListener('keydown', onKeyDown, true);
        return function () {
          document.removeEventListener('pointerdown', onPointerDown, true);
          document.removeEventListener('keydown', onKeyDown, true);
        };
      }, [aspectMenuOpen]);

      var saveSlot = async function (slot) {
        var emu = emuRef.current;
        if (!emu) return;
        try {
          var data = emu.snapshot();
          var thumbnail = emu.thumbnail();
          await idbPut('states', {
            key: activeKeyRef.current + '::' + slot,
            gameKey: activeKeyRef.current,
            slot: slot,
            version: 1,
            data: data,
            thumbnail: thumbnail,
            updatedAt: Date.now(),
          });
          await refreshSlots();
          showToast(tFormat(t, 'game.stateSaved', { slot: slot }));
        } catch (cause) {
          showToast(String(cause && cause.message ? cause.message : cause));
        }
      };

      var loadSlot = async function (slot) {
        var emu = emuRef.current;
        if (!emu) return;
        try {
          var row = await idbGet('states', activeKeyRef.current + '::' + slot);
          if (!row || !row.data) return;
          emu.restore(row.data);
          showToast(tFormat(t, 'game.stateLoaded', { slot: slot }));
          closeDialog();
        } catch (cause) {
          showToast(String(cause && cause.message ? cause.message : cause));
        }
      };

      var deleteSlot = async function (slot) {
        try {
          await idbDelete('states', activeKeyRef.current + '::' + slot);
          await refreshSlots();
          showToast(tFormat(t, 'game.stateDeleted', { slot: slot }));
        } catch (cause) {
          showToast(String(cause && cause.message ? cause.message : cause));
        }
      };

      var applyControls = function (next) {
        saveControls(next);
        if (emuRef.current) emuRef.current.setControls(next);
        setDialog(null);
        if (dialogWasRunningRef.current && emuRef.current) {
          emuRef.current.resume();
          setPaused(false);
        }
        dialogWasRunningRef.current = false;
        showToast(t('controls.saved'));
      };

      var applyCheats = function (codes) {
        try {
          if (emuRef.current) emuRef.current.setCheats(codes);
          var map = loadJson(CHEATS_KEY, {});
          map[activeKeyRef.current] = codes;
          saveJson(CHEATS_KEY, map);
          closeDialog();
          showToast(t('game.cheatsApplied'));
        } catch (cause) {
          showToast(String(cause && cause.message ? cause.message : cause));
        }
      };

      var takeScreenshot = function () {
        var emu = emuRef.current;
        if (!emu) return;
        try {
          var url = emu.screenshot();
          var link = document.createElement('a');
          link.href = url;
          link.download = String(game.title || 'fc-game').replace(/[\\/:*?"<>|]+/g, '_') + '.png';
          document.body.appendChild(link);
          link.click();
          link.remove();
          showToast(t('game.screenshotSaved'));
        } catch (e) {
          // ignore
        }
      };

      var toggleFullscreen = function () {
        var stage = stageRef.current;
        if (!stage) return;
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(function () {});
        } else if (typeof stage.requestFullscreen === 'function') {
          stage.requestFullscreen().catch(function () {});
        }
      };

      var startRewind = function (event) {
        if (event) event.preventDefault();
        var emu = emuRef.current;
        if (!emu || rewindHoldRef.current) return;
        rewindWasPausedRef.current = emu.paused;
        if (!emu.paused) {
          emu.pause();
          setPaused(true);
        }
        var step = function () {
          var current = emuRef.current;
          if (!current) return;
          var buffer = rewindBufRef.current;
          if (buffer.length === 0) {
            showToast(t('game.rewindEmpty'));
            stopRewind();
            return;
          }
          var snapshot = buffer.pop();
          try {
            current.restore(snapshot);
            current.draw();
          } catch (e) {
            // ignore
          }
        };
        step();
        rewindHoldRef.current = window.setInterval(step, 120);
      };

      var stopRewind = function () {
        if (rewindHoldRef.current) {
          window.clearInterval(rewindHoldRef.current);
          rewindHoldRef.current = 0;
        }
        if (!rewindWasPausedRef.current && emuRef.current) {
          emuRef.current.resume();
          setPaused(false);
        }
      };

      var goBack = function () {
        if (emuRef.current) emuRef.current.pause();
        saveAuto();
        props.onBack();
      };

      var errorMessage = function () {
        if (!error) return t('error.title');
        if (error.code === 'NETWORK') return t('error.network');
        if (error.code === 'NOT_A_ROM') return t('game.romError');
        if (error.code === 'ROM_TOO_LARGE') return t('error.tooLarge');
        if (error.code === 'UNSUPPORTED') return error.message || t('error.unsupported');
        return error.message || t('error.title');
      };

      var sourceUrl = (resolved && resolved.itemUrl) || game.itemUrl || null;
      var title = (resolved && resolved.title) || game.title;

      var header = h('header', { className: 'dfg-game-head' },
        h('button', { type: 'button', className: 'dfg-back', onClick: goBack }, '← ' + t('common.back')),
        h('div', { className: 'dfg-game-title' },
          h('h1', null, title),
          h('div', { className: 'dfg-game-sub' },
            resolved && resolved.year ? String(resolved.year) : game.year ? String(game.year) : '',
            resolved && resolved.year ? ' · ' : '',
            game.source === 'local' ? t('source.local') : game.source === 'github' ? t('sources.github') : game.source === 'url' ? t('sources.url') : game.source === 'custom' ? (game.sourceName || t('sources.custom')) : t('source.archive'),
            sourceUrl && h('a', { href: sourceUrl, target: '_blank', rel: 'noreferrer' }, t('common.openSource')),
          ),
        ),
      );

      var body;
      if (phase === 'loading') {
        var progressText = t('game.loading');
        if (progress && progress.total) {
          progressText = t('game.loadingRom') + ' ' + Math.min(100, Math.round((progress.received / progress.total) * 100)) + '%';
        } else if (progress && progress.received) {
          progressText = t('game.loadingRom') + ' ' + formatBytes(progress.received);
        }
        body = h('div', { className: 'dfg-game-loading' },
          h('span', { className: 'dfg-spinner' }),
          h('p', null, progressText),
        );
      } else if (phase === 'choose') {
        body = h(FileChooser, {
          t: t,
          game: game,
          files: resolved ? resolved.files : [],
          onChoose: function (name) {
            recordedRef.current = false;
            setChosenFile(name);
          },
          onBack: goBack,
        });
      } else if (phase === 'error') {
        body = h('div', { className: 'dfg-game-error' },
          h('h2', null, t('game.loadError')),
          h('p', null, errorMessage()),
          h('div', { className: 'dfg-row' },
            h('button', {
              type: 'button',
              className: 'dfg-button',
              onClick: function () {
                setReloadTick(function (value) { return value + 1; });
              },
            }, t('game.retry')),
            h('button', { type: 'button', className: 'dfg-button dfg-button-ghost', onClick: goBack }, t('common.back')),
            sourceUrl && h('a', { className: 'dfg-button dfg-button-ghost', href: sourceUrl, target: '_blank', rel: 'noreferrer' }, t('common.openSource')),
          ),
        );
      } else {
        body = h('div', { className: 'dfg-game-body' },
          h('div', {
            ref: stageRef,
            className: 'dfg-stage',
            tabIndex: 0,
            'aria-label': title,
            style: { '--dfg-aspect': currentAspect.value },
            onPointerDown: function () {
              if (stageRef.current) stageRef.current.focus();
              var emu = emuRef.current;
              if (emu) emu.audio.resume();
            },
          },
            h('canvas', { ref: canvasRef, className: 'dfg-canvas', width: SCREEN_W, height: SCREEN_H }),
            paused && h('div', { className: 'dfg-paused', 'aria-live': 'polite' },
              h('span', null, t('game.pause')),
            ),
          ),
          h('div', { className: 'dfg-toolbar' },
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': paused ? t('game.resume') : t('game.pause'),
              'aria-label': paused ? t('game.resume') : t('game.pause'),
              onClick: togglePause,
            },
              h('span', { className: 'dfg-tool-icon' }, paused ? '▶' : '❚❚'),
              h('span', null, paused ? t('game.resume') : t('game.pause')),
            ),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.reset'),
              'aria-label': t('game.reset'),
              onClick: function () { if (emuRef.current) emuRef.current.reset(); },
            },
              h('span', { className: 'dfg-tool-icon' }, '⟲'), h('span', null, t('game.reset')),
            ),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.saveState'),
              'aria-label': t('game.saveState'),
              onClick: function () { openDialog('save'); },
            }, h('span', { className: 'dfg-tool-icon' }, '💾'), h('span', null, t('game.saveState'))),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.loadState'),
              'aria-label': t('game.loadState'),
              onClick: function () { openDialog('load'); },
            }, h('span', { className: 'dfg-tool-icon' }, '📂'), h('span', null, t('game.loadState'))),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.rewind'),
              'aria-label': t('game.rewind'),
              onPointerDown: startRewind,
              onPointerUp: stopRewind,
              onPointerLeave: stopRewind,
              onPointerCancel: stopRewind,
              onKeyDown: function (event) {
                if (event.key === 'Enter' || event.key === ' ') startRewind(event);
              },
              onKeyUp: stopRewind,
            }, h('span', { className: 'dfg-tool-icon' }, '⏪'), h('span', null, t('game.rewind'))),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.fastForward') + ' ' + speed + 'x',
              'aria-label': t('game.fastForward') + ' ' + speed + 'x',
              onClick: cycleSpeed,
            },
              h('span', { className: 'dfg-tool-icon' }, '⏩'), h('span', null, t('game.fastForward') + ' ' + speed + 'x'),
            ),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.screenshot'),
              'aria-label': t('game.screenshot'),
              onClick: takeScreenshot,
            }, h('span', { className: 'dfg-tool-icon' }, '📷'), h('span', null, t('game.screenshot'))),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': muted ? t('game.unmute') : t('game.mute'),
              'aria-label': muted ? t('game.unmute') : t('game.mute'),
              onClick: toggleMute,
            }, h('span', { className: 'dfg-tool-icon' }, muted ? '🔇' : '🔊'), h('span', null, muted ? t('game.unmute') : t('game.mute'))),
            h('label', { className: 'dfg-volume', 'data-tip': t('game.volume'), 'aria-label': t('game.volume') },
              h('span', { className: 'dfg-tool-icon' }, '🎚'),
              h('input', {
                type: 'range',
                min: 0,
                max: 1,
                step: 0.05,
                value: volume,
                'aria-label': t('game.volume'),
                onChange: function (event) { changeVolume(event.target.value); },
              }),
            ),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': fullscreen ? t('game.exitFullscreen') : t('game.fullscreen'),
              'aria-label': fullscreen ? t('game.exitFullscreen') : t('game.fullscreen'),
              onClick: toggleFullscreen,
            },
              h('span', { className: 'dfg-tool-icon' }, fullscreen ? '⤢' : '⛶'),
              h('span', null, fullscreen ? t('game.exitFullscreen') : t('game.fullscreen')),
            ),
            h('div', { ref: aspectMenuRef, className: 'dfg-aspect-wrap' },
              h('button', {
                type: 'button',
                className: 'dfg-tool',
                'data-tip': t('game.aspect') + ' · ' + t(currentAspect.labelKey),
                'aria-label': t('game.aspect') + ' · ' + t(currentAspect.labelKey),
                'aria-haspopup': 'menu',
                'aria-expanded': aspectMenuOpen,
                onClick: function () { setAspectMenuOpen(function (value) { return !value; }); },
              },
                h('span', { className: 'dfg-tool-icon' }, '▭'),
                h('span', null, t('game.aspect') + ' ' + currentAspect.id + ' ▾'),
              ),
              aspectMenuOpen && h('div', { className: 'dfg-aspect-menu', role: 'menu', 'aria-label': t('game.aspect') },
                ASPECTS.map(function (entry) {
                  var active = entry.id === aspect;
                  return h('button', {
                    key: entry.id,
                    type: 'button',
                    role: 'menuitemradio',
                    'aria-checked': active,
                    className: cx('dfg-aspect-item', active && 'dfg-aspect-item-active'),
                    onClick: function () { changeAspect(entry.id); },
                  },
                    h('span', { className: 'dfg-aspect-check' }, active ? '✓' : ''),
                    h('span', { className: 'dfg-aspect-name' }, t(entry.labelKey)),
                  );
                }),
              ),
            ),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.controls'),
              'aria-label': t('game.controls'),
              onClick: function () { openDialog('controls'); },
            }, h('span', { className: 'dfg-tool-icon' }, '🎮'), h('span', null, t('game.controls'))),
            h('button', {
              type: 'button',
              className: 'dfg-tool',
              'data-tip': t('game.cheats'),
              'aria-label': t('game.cheats'),
              onClick: function () { openDialog('cheats'); },
            }, h('span', { className: 'dfg-tool-icon' }, '✦'), h('span', null, t('game.cheats'))),
          ),
          h('div', { className: 'dfg-status' },
            h('span', null, tFormat(t, 'game.fps', { fps: fps || 0 })),
            h('span', null, tFormat(t, 'game.speed', { speed: speed })),
            h('span', { className: gamepadCount > 0 ? 'dfg-ok' : 'dfg-muted' }, gamepadCount > 0 ? t('game.gamepadConnected') : t('game.gamepadDisconnected')),
            h('span', { className: 'dfg-muted' }, chosenFile || ''),
          ),
        );
      }

      var dialogs = null;
      if (dialog === 'save' || dialog === 'load') {
        dialogs = h(SaveDialog, {
          t: t,
          mode: dialog,
          slots: slots,
          onClose: closeDialog,
          onSave: saveSlot,
          onLoad: loadSlot,
          onDelete: deleteSlot,
        });
      } else if (dialog === 'controls') {
        dialogs = h(ControlsDialog, {
          t: t,
          initial: loadControls(),
          aspect: aspect,
          aspects: ASPECTS,
          onAspectChange: changeAspect,
          onSave: applyControls,
          onClose: closeDialog,
        });
      } else if (dialog === 'cheats') {
        dialogs = h(CheatDialog, {
          t: t,
          initial: cheatText,
          onApply: applyCheats,
          onClose: closeDialog,
        });
      }

      return h('div', { className: cx('dfg-game', props.tabMode && 'dfg-tab-game') },
        header,
        body,
        dialogs,
        toast && h('div', { className: 'dfg-toast', role: 'status' }, toast),
      );
    }

    function useRecent() {
      var state = useState(readRecent);
      var recent = state[0];
      var setRecent = state[1];
      useEffect(function () {
        var sync = function () {
          setRecent(readRecent());
        };
        window.addEventListener('dsh-fc-games:recent', sync);
        window.addEventListener('storage', sync);
        return function () {
          window.removeEventListener('dsh-fc-games:recent', sync);
          window.removeEventListener('storage', sync);
        };
      }, []);
      return [recent, setRecent];
    }

    var SUGGESTIONS = ['超级马里奥', '魂斗罗', '坦克大战', '冒险岛', '忍者龙剑传', '双截龙', '赤色要塞', '绿色兵团'];

    function FcGamesPage(props) {
      var t = props.t;
      var ctx = props.ctx;
      var recentState = useRecent();
      var recent = recentState[0];
      var setRecent = recentState[1];
      var bootState = useState({ status: 'loading', api: null, error: null });
      var boot = bootState[0];
      var setBoot = bootState[1];
      var viewState = useState({ type: 'library' });
      var view = viewState[0];
      var setView = viewState[1];
      var redirectState = useState(props.tabMode !== true);
      var redirecting = redirectState[0];
      var setRedirecting = redirectState[1];
      var locale = (typeof navigator !== 'undefined' && navigator.language && navigator.language.toLowerCase().indexOf('zh') === 0) ? 'zh' : 'en';

      // The sidebar row is owned by the sidebar and always selects `main`.
      // This page acts as a launcher when it is selected there: open (or focus)
      // the real tab in the right sidebar, then return the center column to the
      // conversation. Without an on-screen Session the right sidebar cannot
      // open, so the page stays here as the fallback browser.
      useEffect(function () {
        if (props.tabMode) return;
        if (suppressMainRedirect) {
          suppressMainRedirect = false;
          setRedirecting(false);
          return;
        }
        var service = ctx.get('sidebarRight');
        if (!service || typeof service.openTab !== 'function') {
          setRedirecting(false);
          return;
        }
        var attempts = 0;
        var tryOpen = function () {
          try {
            service.openTab(FC_TAB_KIND, { preferNewPane: false });
          } catch (error) {
            attempts += 1;
            if (attempts < 6) {
              window.setTimeout(tryOpen, 80);
              return;
            }
            // No on-screen Session: the right Sidebar has no surface to open
            // into. Return to the main-panel library once, without retrying.
            try {
              suppressMainRedirect = true;
              ctx.layout.selectPanel('fc-games');
            } catch (e) {
              setRedirecting(false);
            }
          }
        };
        // Leave the main panel first: the right Sidebar only mounts while the
        // conversation is on screen. The first attempt may race that mount, so
        // retry briefly before falling back.
        ctx.layout.selectPanel(null);
        window.setTimeout(tryOpen, 60);
      }, []);

      useEffect(function () {
        var alive = true;
        props.bootstrap()
          .then(function (info) {
            if (!alive) return;
            setBoot({ status: 'ready', api: createApi(info), error: null });
          })
          .catch(function (cause) {
            if (!alive) return;
            setBoot({ status: 'error', api: null, error: cause });
          });
        return function () {
          alive = false;
        };
      }, [props.bootstrap]);

      var openGame = useCallback(function (game, options) {
        var next = options && options.file ? Object.assign({}, game, { file: options.file }) : game;
        setView({ type: 'game', game: next, freshStart: !!(options && options.freshStart) });
      }, []);

      var openImport = useCallback(function (local) {
        var game = {
          id: local.id,
          source: 'local',
          title: local.title,
          coverUrl: local.coverUrl,
          file: local.file,
          itemUrl: null,
        };
        setView({ type: 'game', game: game, initialBytes: local.bytes });
      }, []);

      var onPlayed = useCallback(function (game, file, coverUrl) {
        recordPlay(game, file, coverUrl);
        setRecent(readRecent());
      }, [setRecent]);

      var backToChat = function () {
        ctx.layout.selectPanel(null);
      };

      if (redirecting) {
        return h('div', { className: 'dfg-page dfg-page-centered' },
          h('span', { className: 'dfg-spinner' }),
          h('p', null, t('page.title') + '…'),
        );
      }

      if (boot.status === 'loading') {
        return h('div', { className: 'dfg-page dfg-page-centered' },
          h('span', { className: 'dfg-spinner' }),
          h('p', null, t('page.title') + '…'),
        );
      }

      if (boot.status === 'error') {
        return h('div', { className: 'dfg-page dfg-page-centered' },
          h('h1', null, t('error.title')),
          h('p', null, t('error.host')),
          boot.error && boot.error.message && h('p', { className: 'dfg-muted' }, String(boot.error.message)),
          h('button', { type: 'button', className: 'dfg-button', onClick: function () { window.location.reload(); } }, t('error.retry')),
          h('button', { type: 'button', className: 'dfg-button dfg-button-ghost', onClick: backToChat }, t('page.backToChat')),
        );
      }

      if (view.type === 'game') {
        return h(GameView, {
          key: view.game.id + '::' + (view.game.file || ''),
          t: t,
          locale: locale,
          api: boot.api,
          game: view.game,
          tabMode: props.tabMode === true,
          freshStart: view.freshStart === true,
          initialBytes: view.initialBytes || null,
          initialFile: view.game.file || null,
          onBack: function () {
            setView({ type: 'library' });
            setRecent(readRecent());
          },
          onPlayed: onPlayed,
        });
      }

      return h('div', { className: cx('dfg-page', props.tabMode && 'dfg-page-tab') },
        h('div', { className: 'dfg-content' },
          !props.tabMode && h('header', { className: 'dfg-page-head' },
            h('div', null,
              h('h1', null, t('page.title')),
              h('p', null, t('page.subtitle')),
            ),
            h('button', { type: 'button', className: 'dfg-button dfg-button-ghost', onClick: backToChat }, t('page.backToChat')),
          ),
          h(LibraryView, {
            api: boot.api,
            t: t,
            locale: locale,
            recent: recent,
            suggestions: SUGGESTIONS,
            showHero: props.tabMode === true,
            onOpenGame: openGame,
            onImport: openImport,
            onRecentChanged: function () { setRecent(readRecent()); },
          }),
        ),
      );
    }

    function FcGamesIcon(props) {
      var size = Number(props.size) || 18;
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: 'none',
        'aria-hidden': true,
        style: { display: 'block', opacity: props.active ? 1 : 0.9 },
      },
        h('rect', { x: 2.2, y: 6.2, width: 19.6, height: 12, rx: 4.4, stroke: 'currentColor', strokeWidth: 1.5 }),
        h('path', { d: 'M7 9.4v5.2M4.4 12h5.2', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' }),
        h('circle', { cx: 16.2, cy: 10.8, r: 1.35, fill: 'currentColor' }),
        h('circle', { cx: 18.8, cy: 13.4, r: 1.35, fill: 'currentColor' }),
        h('path', { d: 'M10.2 18.2h3.6', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', opacity: 0.55 }),
      );
    }

    var CSS =
      '.dfg-page{height:100%;overflow:auto;box-sizing:border-box;padding:24px 28px 40px;max-width:1180px;margin:0 auto;color:var(--dsw-alias-label-primary);font-size:14px;line-height:1.5}' +
      '.dfg-page-centered{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;min-height:60vh;text-align:center}' +
      '.dfg-page-head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding-bottom:16px;margin-bottom:18px;border-bottom:1px solid var(--dsw-alias-border-l1)}' +
      '.dfg-page-head h1{margin:0;font-size:20px;line-height:28px;font-weight:600;letter-spacing:.2px}' +
      '.dfg-page-head p{margin:2px 0 0;color:var(--dsw-alias-label-secondary);font-size:13px}' +
      '.dfg-section{margin:22px 0 0}' +
      '.dfg-section-head{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:12px}' +
      '.dfg-section-head h2{margin:0;font-size:15px;line-height:24px;font-weight:600}' +
      '.dfg-section-head span{color:var(--dsw-alias-label-secondary);font-size:12px}' +
      '.dfg-search{position:sticky;top:0;z-index:4;display:flex;align-items:center;gap:8px;background:var(--dsw-alias-bg-base);padding:6px 0 10px;margin-bottom:6px}' +
      '.dfg-search-icon{color:var(--dsw-alias-label-secondary);font-size:20px;line-height:1;transform:translateY(-1px)}' +
      '.dfg-search input{flex:1;min-width:0;height:40px;box-sizing:border-box;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);padding:0 38px 0 12px;font:inherit;outline:none;transition:border-color .15s,box-shadow .15s}' +
      '.dfg-search input:focus{border-color:var(--dsw-alias-brand-primary);box-shadow:0 0 0 3px rgba(77,107,254,.18)}' +
      '.dfg-search input::-webkit-search-cancel-button{display:none}' +
      '.dfg-search-clear{position:relative;margin-left:-38px;width:30px;height:30px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:18px;line-height:1;cursor:pointer}' +
      '.dfg-search-clear:hover{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}' +
      '.dfg-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:16px}' +
      '.dfg-card{position:relative;display:flex;flex-direction:column;gap:0;text-align:left;padding:0;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-layer-1);color:inherit;cursor:pointer;overflow:hidden;font:inherit;transition:border-color .15s,transform .15s,background .15s}' +
      '.dfg-card:hover{border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);transform:translateY(-1px)}' +
      '.dfg-card:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}' +
      '.dfg-cover{position:relative;aspect-ratio:4/3;width:100%;background:var(--dsw-alias-bg-layer-2);overflow:hidden;display:flex;align-items:center;justify-content:center}' +
      '.dfg-cover-bg{position:absolute;inset:-10%;width:120%;height:120%;object-fit:cover;filter:blur(18px) saturate(1.15);opacity:.34;pointer-events:none}' +
      '.dfg-cover-art{position:relative;z-index:1;width:100%;height:100%;object-fit:contain;display:block}' +
      '.dfg-cover-fallback{flex-direction:column;gap:6px;color:rgba(255,255,255,.86)}' +
      '.dfg-cover-initials{font-size:26px;font-weight:700;letter-spacing:1px}' +
      '.dfg-cover-glyph{font-size:10px;letter-spacing:2px;opacity:.55}' +
      '.dfg-card-body{display:flex;flex-direction:column;gap:2px;padding:8px 10px 4px;min-width:0}' +
      '.dfg-card-title{font-size:13px;line-height:18px;font-weight:500;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:18px}' +
      '.dfg-card-meta{font-size:11px;color:var(--dsw-alias-label-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.dfg-card-time{font-size:11px;color:var(--dsw-alias-label-secondary);opacity:.8}' +
      '.dfg-card-play{position:absolute;left:8px;right:8px;bottom:8px;display:none;align-items:center;justify-content:center;height:26px;border-radius:8px;background:var(--dsw-alias-bg-overlay);border:1px solid var(--dsw-alias-border-l2);font-size:12px;color:var(--dsw-alias-label-primary)}' +
      '.dfg-card:hover .dfg-card-play{display:flex}' +
      '.dfg-chips{display:flex;flex-wrap:wrap;gap:8px}' +
      '.dfg-chip{border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);border-radius:999px;padding:6px 12px;font:inherit;font-size:12px;cursor:pointer}' +
      '.dfg-chip:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l2)}' +
      '.dfg-empty{margin-top:16px;padding:22px;border:1px dashed var(--dsw-alias-border-l1);border-radius:12px;color:var(--dsw-alias-label-secondary);text-align:center;display:flex;flex-direction:column;align-items:center;gap:12px}' +
      '.dfg-empty-recent{padding:28px}' +
      '.dfg-empty p{margin:0}' +
      '.dfg-error{margin-top:16px;padding:16px 18px;border:1px solid var(--dsw-alias-state-error-primary);border-radius:12px;background:var(--dsw-alias-bg-layer-1);display:flex;flex-direction:column;gap:8px}' +
      '.dfg-error-title{font-weight:600;color:var(--dsw-alias-state-error-primary)}' +
      '.dfg-error-text{color:var(--dsw-alias-label-secondary);font-size:13px}' +
      '.dfg-inline-error{margin:8px 0;color:var(--dsw-alias-state-error-primary);font-size:12px}' +
      '.dfg-button{display:inline-flex;align-items:center;justify-content:center;gap:6px;height:32px;padding:0 14px;border-radius:8px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;cursor:pointer;text-decoration:none}' +
      '.dfg-button:hover{border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1)}' +
      '.dfg-button:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}' +
      '.dfg-button:disabled{opacity:.45;cursor:default}' +
      '.dfg-button-ghost{background:transparent}' +
      '.dfg-button-small{height:28px;padding:0 10px;font-size:12px}' +
      '.dfg-more{display:flex;justify-content:center;margin:20px 0}' +
      '.dfg-notice{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:6px 0 4px;padding:10px 14px;border-radius:10px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px}' +
      '.dfg-notice button{border:0;background:transparent;color:var(--dsw-alias-brand-primary);font:inherit;font-size:12px;cursor:pointer;white-space:nowrap}' +
      '.dfg-footer{display:flex;flex-wrap:wrap;gap:6px;margin-top:28px;padding-top:14px;border-top:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-secondary);font-size:11px}' +
      '.dfg-footer-sep{opacity:.5}' +
      '.dfg-muted{color:var(--dsw-alias-label-secondary)}' +
      '.dfg-hidden{display:none}' +
      '.dfg-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}' +
      '.dfg-spinner{display:inline-block;width:22px;height:22px;border-radius:50%;border:2px solid var(--dsw-alias-border-l1);border-top-color:var(--dsw-alias-brand-primary);animation:dfg-spin .8s linear infinite}' +
      '.dfg-spinner-small{width:16px;height:16px;border-width:2px;flex:none;margin-right:2px}' +
      '@keyframes dfg-spin{to{transform:rotate(360deg)}}' +
      '.dfg-skeleton{display:flex;flex-direction:column;gap:6px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;overflow:hidden;background:var(--dsw-alias-bg-layer-1)}' +
      '.dfg-skeleton-cover{aspect-ratio:4/3;background:var(--dsw-alias-bg-layer-2);animation:dfg-pulse 1.4s ease-in-out infinite}' +
      '.dfg-skeleton-line{height:10px;margin:0 10px;border-radius:4px;background:var(--dsw-alias-bg-layer-2);animation:dfg-pulse 1.4s ease-in-out infinite}' +
      '.dfg-skeleton-line.short{width:50%;margin-bottom:10px}' +
      '@keyframes dfg-pulse{0%,100%{opacity:.55}50%{opacity:1}}' +
      '.dfg-game{height:100%;display:flex;flex-direction:column;overflow:hidden;color:var(--dsw-alias-label-primary)}' +
      '.dfg-game-head{display:flex;align-items:center;gap:14px;padding:12px 22px;border-bottom:1px solid var(--dsw-alias-border-l1);flex:none}' +
      '.dfg-back{height:30px;padding:0 10px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;cursor:pointer;white-space:nowrap}' +
      '.dfg-back:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l2)}' +
      '.dfg-game-title{min-width:0}' +
      '.dfg-game-title h1{margin:0;font-size:16px;line-height:22px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.dfg-game-sub{display:flex;gap:8px;align-items:center;color:var(--dsw-alias-label-secondary);font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.dfg-game-sub a{color:var(--dsw-alias-brand-primary);text-decoration:none}' +
      '.dfg-game-body{flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;align-items:center;padding:14px 18px 18px;gap:10px}' +
      '.dfg-stage{position:relative;width:100%;max-width:920px;aspect-ratio:var(--dfg-aspect,4 / 3);background:#000;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center;outline:none;flex:none}' +
      '.dfg-stage:focus-visible{box-shadow:0 0 0 3px rgba(77,107,254,.35)}' +
      '.dfg-stage:fullscreen{max-width:none;width:100vw;height:100vh;border-radius:0;border:0;aspect-ratio:auto}' +
      '.dfg-canvas{width:100%;height:100%;object-fit:fill;image-rendering:pixelated;display:block;background:#000}' +
      '.dfg-stage:fullscreen .dfg-canvas{object-fit:contain}' +
      '.dfg-paused{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.42);color:#fff;font-size:18px;letter-spacing:2px;pointer-events:none}' +
      '.dfg-toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:6px;max-width:920px;width:100%}' +
      '.dfg-tool{position:relative;display:inline-flex;align-items:center;gap:5px;height:30px;padding:0 9px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);font:inherit;font-size:11px;cursor:pointer;white-space:nowrap}' +
      '.dfg-tool[data-tip]::after,.dfg-volume[data-tip]::after{content:attr(data-tip);position:absolute;left:50%;bottom:calc(100% + 7px);transform:translateX(-50%);z-index:45;max-width:240px;padding:5px 8px;border-radius:6px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);font-size:11px;line-height:15px;white-space:nowrap;pointer-events:none;opacity:0;visibility:hidden;box-shadow:0 6px 20px rgba(0,0,0,.28)}' +
      '.dfg-tool[data-tip]:hover::after,.dfg-volume[data-tip]:hover::after{opacity:1;visibility:visible}' +
      '.dfg-tool[aria-expanded="true"]::after{display:none}' +
      '.dfg-volume{position:relative}' +
      '.dfg-aspect-wrap{position:relative;display:inline-flex}' +
      '.dfg-aspect-menu{position:absolute;left:50%;bottom:calc(100% + 7px);transform:translateX(-50%);z-index:50;display:flex;flex-direction:column;gap:2px;min-width:178px;padding:5px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-overlay);box-shadow:0 8px 28px rgba(0,0,0,.32)}' +
      '.dfg-aspect-item{display:flex;align-items:center;gap:8px;height:30px;padding:0 8px;border:0;border-radius:7px;background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;text-align:left;cursor:pointer}' +
      '.dfg-aspect-item:hover,.dfg-aspect-item-active{background:var(--dsw-alias-bg-layer-2)}' +
      '.dfg-aspect-check{width:12px;flex:none;color:var(--dsw-alias-brand-primary);font-size:12px}' +
      '.dfg-aspect-name{flex:1;white-space:nowrap}' +
      '.dfg-aspect-id{color:var(--dsw-alias-label-secondary);font-size:11px;font-variant-numeric:tabular-nums}' +
      '.dfg-tool:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2)}' +
      '.dfg-tool:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}' +
      '.dfg-tool-active{color:var(--dsw-alias-brand-primary);border-color:var(--dsw-alias-brand-primary)}' +
      '.dfg-tool-icon{font-size:12px;line-height:1}' +
      '.dfg-volume{display:inline-flex;align-items:center;gap:4px;height:30px;padding:0 8px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary)}' +
      '.dfg-volume input{width:76px;accent-color:var(--dsw-alias-brand-primary)}' +
      '.dfg-status{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;font-size:11px;color:var(--dsw-alias-label-secondary);max-width:920px;width:100%;padding-top:2px}' +
      '.dfg-ok{color:var(--dsw-alias-state-success-primary)}' +
      '.dfg-game-loading{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:var(--dsw-alias-label-secondary)}' +
      '.dfg-game-error{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:12px;padding:24px;max-width:620px;margin:0 auto}' +
      '.dfg-game-error h2{margin:0;font-size:17px}' +
      '.dfg-game-error p{margin:0;color:var(--dsw-alias-label-secondary);line-height:1.7}' +
      '.dfg-modal-backdrop{position:fixed;inset:0;z-index:70;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:24px}' +
      '.dfg-modal{width:min(560px,100%);max-height:min(78vh,720px);display:flex;flex-direction:column;background:var(--dsw-alias-bg-overlay);border:1px solid var(--dsw-alias-border-l1);border-radius:16px;box-shadow:0 18px 60px rgba(0,0,0,.45);overflow:hidden}' +
      '.dfg-modal-wide{width:min(720px,100%)}' +
      '.dfg-modal-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--dsw-alias-border-l1)}' +
      '.dfg-modal-head h2{margin:0;font-size:15px;font-weight:600}' +
      '.dfg-modal-close{width:28px;height:28px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:18px;line-height:1;cursor:pointer}' +
      '.dfg-modal-close:hover{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}' +
      '.dfg-modal-body{padding:16px 18px;overflow:auto;display:flex;flex-direction:column;gap:12px}' +
      '.dfg-modal-foot{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px;padding:12px 18px;border-top:1px solid var(--dsw-alias-border-l1)}' +
      '.dfg-slot-list{display:flex;flex-direction:column;gap:8px}' +
      '.dfg-slot{display:flex;align-items:center;gap:12px;padding:8px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}' +
      '.dfg-slot-thumb{width:64px;height:48px;flex:none;border-radius:6px;overflow:hidden;background:var(--dsw-alias-bg-layer-2);display:flex;align-items:center;justify-content:center;color:var(--dsw-alias-label-secondary);font-size:12px}' +
      '.dfg-slot-thumb img{width:100%;height:100%;object-fit:cover;display:block}' +
      '.dfg-slot-info{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;font-size:12px}' +
      '.dfg-slot-info span{color:var(--dsw-alias-label-secondary);font-size:11px}' +
      '.dfg-slot-actions{display:flex;gap:6px;flex:none}' +
      '.dfg-tabs{display:flex;gap:6px;border-bottom:1px solid var(--dsw-alias-border-l1);padding-bottom:8px}' +
      '.dfg-tab{border:0;background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:13px;padding:6px 10px;border-radius:8px;cursor:pointer}' +
      '.dfg-tab-active{background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary)}' +
      '.dfg-autofire{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:8px;padding:8px 10px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1)}' +
      '.dfg-autofire label{display:inline-flex;align-items:center;gap:6px;font-size:12px;color:var(--dsw-alias-label-primary);cursor:pointer}' +
      '.dfg-autofire input{accent-color:var(--dsw-alias-brand-primary);width:15px;height:15px}' +
      '.dfg-aspect-setting{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:8px;padding:8px 10px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-layer-1);font-size:12px}' +
      '.dfg-aspect-setting select{height:28px;border:1px solid var(--dsw-alias-border-l1);border-radius:7px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;padding:0 6px}' +
      '.dfg-control-list{display:grid;grid-template-columns:1fr 1fr;gap:6px 18px}' +
      '.dfg-control-row{display:flex;align-items:center;gap:8px;min-width:0;padding:4px 0;border-bottom:1px solid var(--dsw-alias-border-l1)}' +
      '.dfg-control-name{width:64px;flex:none;color:var(--dsw-alias-label-secondary);font-size:12px}' +
      '.dfg-control-value{flex:1;min-width:0;font-size:12px;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.dfg-capturing{color:var(--dsw-alias-brand-primary)}' +
      '.dfg-textarea{width:100%;box-sizing:border-box;resize:vertical;min-height:150px;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);padding:10px 12px;font:12px/1.6 ui-monospace,SFMono-Regular,Consolas,monospace;outline:none}' +
      '.dfg-textarea:focus{border-color:var(--dsw-alias-brand-primary)}' +
      '.dfg-file-list{display:flex;flex-direction:column;gap:6px}' +
      '.dfg-file{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 12px;border:1px solid var(--dsw-alias-border-l1);border-radius:8px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;text-align:left;cursor:pointer}' +
      '.dfg-file:hover{border-color:var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2)}' +
      '.dfg-file-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
      '.dfg-file-size{color:var(--dsw-alias-label-secondary);flex:none}' +
      '.dfg-toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);z-index:80;max-width:min(520px,90vw);padding:10px 16px;border-radius:10px;background:var(--dsw-alias-bg-overlay);border:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-primary);font-size:12px;box-shadow:0 8px 30px rgba(0,0,0,.35);text-align:center}' +
      '.dfg-import-section{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 16px;border:1px solid var(--dsw-alias-border-l1);border-radius:12px;background:var(--dsw-alias-bg-layer-1)}' +
      '.dfg-import-section h2{margin:0 0 2px;font-size:14px;font-weight:600}' +
      '.dfg-import-section p{margin:0;font-size:12px}' +
      '.dfg-expanded{margin:-4px 0 12px;color:var(--dsw-alias-label-secondary);font-size:12px}' +
      '.dfg-page,.dfg-game{--fc-red:#c8102e;--fc-red-bright:#e0253d;--fc-red-deep:#7f1020;--fc-cream:#f5e7c6;--fc-cream-dim:#d8c3a2;--fc-gold:#f6c445;--fc-ink:#0b080c;--fc-panel:#1a1319;--fc-panel-2:#241a21;--fc-line:#4a3742;--dsw-alias-bg-base:#110d12;--dsw-alias-bg-layer-1:#1a1319;--dsw-alias-bg-layer-2:#2a1e26;--dsw-alias-bg-overlay:#1c141a;--dsw-alias-label-primary:#f5e7c6;--dsw-alias-label-secondary:#c9b79e;--dsw-alias-border-l1:#4a3742;--dsw-alias-border-l2:#7a5a62;--dsw-alias-brand-primary:#e0253d;--dsw-alias-state-error-primary:#ff6b6b;--dsw-alias-state-success-primary:#9fe6a0;font-family:"Cascadia Mono","Consolas","Courier New","MS Gothic",monospace;text-rendering:geometricPrecision;color-scheme:dark}' +
      '.dfg-page{background:radial-gradient(circle at 50% -30%,rgba(200,16,46,.24),transparent 55%),repeating-linear-gradient(0deg,rgba(255,255,255,.022) 0 1px,transparent 1px 3px),#110d12;border:1px solid #352631;box-shadow:inset 0 0 90px rgba(0,0,0,.62);padding:0;color:var(--fc-cream);width:100%;max-width:none;margin:0}' +
      '.dfg-content{width:100%;max-width:1200px;margin:0 auto;padding:18px 24px 32px;box-sizing:border-box}' +
      '.dfg-page-centered{padding:24px}' +
      '.dfg-page::-webkit-scrollbar,.dfg-game-body::-webkit-scrollbar{width:10px;height:10px}' +
      '.dfg-page::-webkit-scrollbar-track,.dfg-game-body::-webkit-scrollbar-track{background:#080609}' +
      '.dfg-page::-webkit-scrollbar-thumb,.dfg-game-body::-webkit-scrollbar-thumb{background:#b3122e;border:2px solid #080609}' +
      '.dfg-page-head{position:relative;background:linear-gradient(180deg,#92101e,#c8102e 55%,#8f111b);border:2px solid var(--fc-cream);border-radius:5px 5px 0 0;padding:16px 18px 18px;margin:0 0 24px;box-shadow:6px 6px 0 #050305;color:#fff3d6;align-items:center}' +
      '.dfg-page-head::after{content:"";position:absolute;left:-2px;right:-2px;bottom:-9px;height:8px;border:2px solid #050305;background:repeating-linear-gradient(90deg,#120d12 0 10px,var(--fc-gold) 10px 14px)}' +
      '.dfg-page-head h1{font-size:32px;line-height:38px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;text-shadow:4px 4px 0 #3b050b;color:#fff6de}' +
      '.dfg-page-head p{color:#ffd98a;font-size:11px;line-height:17px;text-transform:uppercase;letter-spacing:.12em;margin-top:5px}' +
      '.dfg-page-head .dfg-button,.dfg-page-head .dfg-button-ghost{border:2px solid var(--fc-cream);background:rgba(0,0,0,.2);color:#fff3d6;box-shadow:3px 3px 0 #3b050b;border-radius:3px;font-size:10px;letter-spacing:.08em;text-transform:uppercase}' +
      '.dfg-page-head .dfg-button:hover,.dfg-page-head .dfg-button-ghost:hover{background:var(--fc-cream);border-color:#fff;color:#8f111b}' +
      '.dfg-marquee{display:flex;align-items:center;gap:8px;height:32px;margin:0 0 14px;padding:0 9px;background:linear-gradient(90deg,#8f111b,#c8102e 55%,#7f1020);border:2px solid var(--fc-cream);border-radius:3px;box-shadow:4px 4px 0 #050305;color:#fff3d6;font-size:9px;line-height:1;font-weight:700;letter-spacing:.18em;text-transform:uppercase;overflow:hidden;white-space:nowrap}' +
      '.dfg-marquee-title{font-size:12px;letter-spacing:.22em;color:#fff;text-shadow:2px 2px 0 #4a0610}' +
      '.dfg-marquee-sep{color:var(--fc-gold);font-size:7px}' +
      '.dfg-marquee-sub{color:#ffd98a}' +
      '.dfg-marquee-spacer{flex:1;min-width:8px;border-top:1px dashed rgba(245,231,198,.42);height:1px}' +
      '.dfg-marquee-year{color:var(--fc-gold);border-left:1px solid rgba(245,231,198,.35);padding-left:8px;letter-spacing:.12em}' +
      '.dfg-hero{position:relative;display:flex;align-items:center;justify-content:space-between;gap:20px;min-height:178px;margin:0 0 18px;padding:20px 22px;border:2px solid var(--fc-cream);border-radius:4px;background:linear-gradient(120deg,rgba(11,8,12,.1),rgba(11,8,12,.72)),repeating-linear-gradient(135deg,rgba(200,16,46,.7) 0 3px,rgba(11,8,12,.2) 3px 14px),#7f1020;box-shadow:7px 7px 0 #050305;overflow:hidden;color:#fff3d6}' +
      '.dfg-hero::after{content:"";position:absolute;inset:0;z-index:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.22) 0 1px,transparent 1px 4px);pointer-events:none;mix-blend-mode:multiply}' +
      '.dfg-hero-copy{position:relative;z-index:1;min-width:0;flex:1}' +
      '.dfg-hero-kicker{display:inline-block;margin-bottom:6px;color:var(--fc-gold);font-size:10px;line-height:14px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;border-left:4px solid var(--fc-gold);padding-left:7px}' +
      '.dfg-hero h1{margin:0;color:#fff6de;font-size:42px;line-height:44px;font-weight:900;letter-spacing:.06em;text-transform:uppercase;text-shadow:4px 4px 0 #3b050b,8px 8px 0 rgba(0,0,0,.35)}' +
      '.dfg-hero p{margin:7px 0 0;color:#ffe0a3;font-size:11px;line-height:17px;letter-spacing:.04em}' +
      '.dfg-hero-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}' +
      '.dfg-hero-tags span{padding:3px 7px;border:1px solid rgba(245,231,198,.75);background:rgba(11,8,12,.35);color:#fff3d6;font-size:8px;line-height:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}' +
      '.dfg-hero-badge{position:relative;z-index:1;flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;width:118px;height:118px;border:3px solid #fff3d6;border-radius:6px;background:linear-gradient(180deg,#f5e7c6,#d8c3a2);color:#a50d23;box-shadow:5px 5px 0 #3b050b;transform:rotate(2deg)}' +
      '.dfg-hero-badge span{font-size:46px;line-height:46px;font-weight:900;letter-spacing:.04em;text-shadow:2px 2px 0 #e6cfa9}' +
      '.dfg-hero-badge small{font-size:10px;line-height:14px;font-weight:800;letter-spacing:.2em;margin-top:2px}' +
      '.dfg-search{background:linear-gradient(180deg,#110d12 85%,rgba(17,13,18,0));padding:2px 0 10px;margin-bottom:8px;border-bottom:2px solid #3a2834;gap:7px}' +
      '.dfg-search-icon{display:inline-flex;align-items:center;justify-content:center;flex:none;width:42px;height:44px;box-sizing:border-box;background:var(--fc-red);border:2px solid var(--fc-cream);border-radius:3px;color:#fff3d6;font-size:18px;line-height:1;box-shadow:3px 3px 0 #050305;transform:none}' +
      '.dfg-search input{height:46px;border:2px solid #6b4a56;border-radius:3px;background:#1a1319;color:var(--fc-cream);box-shadow:inset 0 0 0 2px #090609;font-size:14px;letter-spacing:.03em}' +
      '.dfg-search input::placeholder{color:#9d877d;text-transform:none}' +
      '.dfg-search input:focus{border-color:var(--fc-gold);box-shadow:inset 0 0 0 2px #090609,0 0 0 3px rgba(246,196,69,.2)}' +
      '.dfg-search-clear{width:28px;height:28px;border-radius:2px;border:1px solid transparent;color:var(--fc-cream-dim);font-size:17px}' +
      '.dfg-search-clear:hover{border-color:var(--fc-gold);background:#3a2430;color:var(--fc-gold)}' +
      '.dfg-section{margin:20px 0 0;padding-top:10px;border-top:1px dashed #3a2834}' +
      '.dfg-section-head{margin-bottom:12px;align-items:center}' +
      '.dfg-section-head h2{font-size:15px;line-height:22px;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--fc-gold);border-left:5px solid var(--fc-red);padding-left:9px;text-shadow:2px 2px 0 #050305}' +
      '.dfg-section-head span{color:#e8d4b0;background:#1a1319;border:1px solid #6b4a56;border-radius:2px;padding:3px 7px;font-size:10px;line-height:15px;letter-spacing:.06em;text-transform:uppercase;box-shadow:2px 2px 0 #050305}' +
      '.dfg-expanded{color:#d9b46b;font-size:11px;line-height:17px;letter-spacing:.04em;margin-bottom:8px}' +
      '.dfg-grid{display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-start;gap:20px;grid-template-columns:none}' +
      '.dfg-card{border:2px solid #5a3a46;border-radius:5px;background:#1a1319;box-shadow:5px 5px 0 #050305;transition:transform .12s,box-shadow .12s,border-color .12s,background .12s;width:auto;flex:1 1 230px;max-width:300px;overflow:hidden}' +
      '.dfg-skeleton{flex:1 1 230px;max-width:300px}' +
      '.dfg-card:hover{border-color:var(--fc-gold);background:#241a21;transform:translate(-2px,-2px);box-shadow:8px 8px 0 var(--fc-red-deep)}' +
      '.dfg-card:focus-visible{outline:3px solid var(--fc-gold);outline-offset:2px}' +
      '.dfg-cover{background:linear-gradient(180deg,rgba(26,11,16,.35),rgba(11,8,12,.72)),repeating-linear-gradient(135deg,rgba(200,16,46,.4) 0 2px,rgba(11,8,12,0) 2px 7px),#0b080c;border-bottom:2px solid #3a2834;box-shadow:inset 0 0 20px rgba(0,0,0,.55)}' +
      '.dfg-cover::before{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(90deg,rgba(11,8,12,.55),transparent 20%,transparent 80%,rgba(11,8,12,.55)),linear-gradient(180deg,rgba(11,8,12,.2),transparent 30%,transparent 70%,rgba(11,8,12,.35))}' +
      '.dfg-cover::after{content:"FC";position:absolute;top:6px;right:6px;z-index:3;background:var(--fc-red);color:#fff3d6;border:1px solid #ffb3b3;border-radius:2px;padding:2px 4px;font-size:8px;line-height:10px;font-weight:800;letter-spacing:.12em;box-shadow:2px 2px 0 #050305}' +
      '.dfg-cover-art{z-index:2;filter:drop-shadow(0 2px 5px rgba(0,0,0,.45))}' +
      '.dfg-cover-fallback{background:linear-gradient(135deg,#7f1020,#1b1118 60%,#2b1c2a) !important}' +
      '.dfg-cover-fallback .dfg-cover-initials,.dfg-cover-fallback .dfg-cover-glyph{position:relative;z-index:2}' +
      '.dfg-cover-initials{color:#fff3d6;font-size:30px;font-weight:800;letter-spacing:.08em;text-shadow:3px 3px 0 #3b050b}' +
      '.dfg-cover-glyph{color:var(--fc-gold);font-size:9px;letter-spacing:.24em}' +
      '.dfg-card-body{padding:10px 11px 9px;border-top:2px solid #3a2834;background:linear-gradient(180deg,#241a21,#181118);gap:4px}' +
      '.dfg-card-title{color:var(--fc-cream);font-size:14px;line-height:20px;font-weight:700;letter-spacing:.02em;min-height:20px}' +
      '.dfg-card-meta{color:var(--fc-gold);font-size:10px;line-height:15px;text-transform:uppercase;letter-spacing:.05em}' +
      '.dfg-card-time{color:#a98d77;font-size:10px;line-height:15px}' +
      '.dfg-card-play{left:8px;right:8px;bottom:8px;height:30px;background:var(--fc-red);border:2px solid var(--fc-cream);border-radius:3px;color:#fff3d6;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;box-shadow:2px 2px 0 #050305}' +
      '.dfg-card-main{display:flex;flex-direction:column;width:100%;padding:0;border:0;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}' +
      '.dfg-card-main:focus-visible{outline:3px solid var(--fc-gold);outline-offset:-3px}' +
      '.dfg-card-actions{display:flex;gap:6px;padding:8px 9px 9px;border-top:1px solid #3a2834;background:#120d12}' +
      '.dfg-card-action{flex:1;min-width:0;height:30px;padding:0 5px;border:2px solid #6b4a56;border-radius:2px;background:#241a21;color:#e8d4b0;font:inherit;font-size:10px;line-height:14px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;cursor:pointer;box-shadow:2px 2px 0 #050305;white-space:nowrap}' +
      '.dfg-card-action:hover{border-color:var(--fc-gold);background:#3a2430;color:#fff3d6}' +
      '.dfg-card-action-primary{border-color:var(--fc-cream);background:var(--fc-red);color:#fff3d6}' +
      '.dfg-card-action-primary:hover{border-color:var(--fc-gold);background:var(--fc-red-bright)}' +
      '.dfg-card-delete{flex:0 0 34px;width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;border:2px solid #7a323c;border-radius:2px;background:#2a151a;color:#e6a0a0;cursor:pointer;box-shadow:2px 2px 0 #050305}' +
      '.dfg-card-delete:hover{border-color:#ff8d8d;background:#7f1020;color:#fff3d6}' +
      '.dfg-card-delete:focus-visible{outline:2px solid var(--fc-gold);outline-offset:1px}' +
      '.dfg-button-danger{border-color:#ffb3b3;background:#a50d23;color:#fff3d6}' +
      '.dfg-button-danger:hover{background:#d21f2b;border-color:#fff3d6}' +
      '.dfg-delete-dialog{display:grid;grid-template-columns:130px minmax(0,1fr);gap:16px;align-items:start}' +
      '.dfg-delete-cover .dfg-cover{aspect-ratio:3/4;border:2px solid #6b4a56;border-radius:3px;box-shadow:4px 4px 0 #050305}' +
      '.dfg-delete-copy h3{margin:0;color:var(--fc-cream);font-size:19px;line-height:25px;font-weight:800}' +
      '.dfg-delete-copy p{margin:8px 0 0;color:#d8c3a2;font-size:12px;line-height:18px}' +
      '.dfg-delete-copy .dfg-delete-hint{color:#b9a38c;font-size:12px;line-height:18px}' +
      '.dfg-section-right{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:8px;margin-left:auto}' +
      '.dfg-view-toggle{display:inline-flex;border:2px solid #3a2834;border-radius:3px;background:#120d12;box-shadow:2px 2px 0 #050305;overflow:hidden}' +
      '.dfg-view-toggle-btn{height:34px;padding:0 10px;border:0;border-right:1px solid #3a2834;background:transparent;color:#b9a38c;font:inherit;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;cursor:pointer;white-space:nowrap}' +
      '.dfg-view-toggle-btn:last-child{border-right:0}' +
      '.dfg-view-toggle-btn:hover{background:#2a1e26;color:var(--fc-cream)}' +
      '.dfg-view-toggle-active{background:var(--fc-red);color:#fff3d6}' +
      '.dfg-details{display:grid;grid-template-columns:150px minmax(0,1fr);gap:16px;align-items:start}' +
      '.dfg-details-cover .dfg-cover{aspect-ratio:3/4;border:2px solid #6b4a56;border-radius:3px;box-shadow:4px 4px 0 #050305}' +
      '.dfg-details-info{min-width:0}' +
      '.dfg-details-info h3{margin:0;color:var(--fc-cream);font-size:20px;line-height:26px;font-weight:800;letter-spacing:.02em}' +
      '.dfg-details-meta{display:flex;flex-wrap:wrap;align-items:center;gap:5px;margin-top:5px;color:var(--fc-gold);font-size:10px;line-height:15px;text-transform:uppercase;letter-spacing:.05em}' +
      '.dfg-details-cached{padding:2px 5px;border:1px solid #7fbf7f;border-radius:2px;color:#b9e6b9;font-size:8px;line-height:11px;background:#122016}' +
      '.dfg-details-desc{margin:9px 0 0;color:#cdbb9f;font-size:11px;line-height:17px;max-height:80px;overflow:auto}' +
      '.dfg-details-link{display:inline-block;margin-top:8px;color:var(--fc-gold);font-size:10px;text-decoration:underline;text-underline-offset:2px}' +
      '.dfg-details-loading{display:flex;align-items:center;gap:8px;color:#d9b46b;font-size:11px}' +
      '.dfg-details-files{display:flex;flex-direction:column;gap:5px;margin-top:12px;padding-top:10px;border-top:1px dashed #3a2834}' +
      '.dfg-details-files strong{color:var(--fc-gold);font-size:10px;text-transform:uppercase;letter-spacing:.1em}' +
      '.dfg-detail-file{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:32px;padding:6px 8px;border:2px solid #3a2834;border-radius:2px;background:#1a1319;color:#e8d4b0;font:inherit;font-size:11px;text-align:left;cursor:pointer}' +
      '.dfg-detail-file:hover{border-color:var(--fc-gold)}' +
      '.dfg-detail-file-active{border-color:var(--fc-gold);background:#3a2430;color:#fff3d6}' +
      '.dfg-detail-file small{color:#b9a38c;font-size:9px}' +
      '.dfg-page-tab .dfg-card-action{font-size:9px;height:29px}' +
      '.dfg-chips{gap:7px}' +
      '.dfg-chip{border:2px solid #6b4a56;border-radius:3px;background:#1a1319;color:#e7d3b4;box-shadow:2px 2px 0 #050305;font-size:11px;line-height:16px;padding:5px 10px;letter-spacing:.03em}' +
      '.dfg-chip:hover{border-color:var(--fc-gold);background:var(--fc-red);color:#fff3d6}' +
      '.dfg-button{border:2px solid var(--fc-cream);border-radius:3px;background:var(--fc-red);color:#fff3d6;box-shadow:3px 3px 0 #050305;font-weight:800;text-transform:uppercase;letter-spacing:.06em;font-size:12px;height:36px}' +
      '.dfg-button:hover{background:var(--fc-red-bright);border-color:var(--fc-gold);transform:translate(-1px,-1px);box-shadow:4px 4px 0 #050305}' +
      '.dfg-button:active{transform:translate(2px,2px);box-shadow:1px 1px 0 #050305}' +
      '.dfg-button-ghost{background:#1a1319;color:var(--fc-cream);border-color:#6b4a56}' +
      '.dfg-button-ghost:hover{background:#2a1e26;color:var(--fc-gold);border-color:var(--fc-gold)}' +
      '.dfg-button:disabled{opacity:.45;transform:none;box-shadow:3px 3px 0 #050305}' +
      '.dfg-notice{border:2px solid var(--fc-gold);border-left:8px solid var(--fc-red);border-radius:3px;background:#231b13;color:#e8d4b0;box-shadow:3px 3px 0 #050305;font-size:11px;line-height:17px;letter-spacing:.02em;padding:11px 14px}' +
      '.dfg-notice button{border:1px solid #6b4a56;border-radius:2px;background:#1a1319;color:var(--fc-gold);padding:4px 8px;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.06em}' +
      '.dfg-notice button:hover{border-color:var(--fc-gold);background:#3a2430}' +
      '.dfg-empty{border:2px dashed #6b4a56;border-radius:3px;background:#181118;color:#c9b79e;box-shadow:inset 0 0 30px rgba(0,0,0,.55);font-size:13px}' +
      '.dfg-empty-recent{padding:26px 18px}' +
      '.dfg-error{border:2px solid var(--dsw-alias-state-error-primary);border-left:8px solid var(--dsw-alias-state-error-primary);border-radius:3px;background:#241015;box-shadow:3px 3px 0 #050305}' +
      '.dfg-error-title{text-transform:uppercase;letter-spacing:.08em;font-size:12px}' +
      '.dfg-error-text{color:#e8c4c4;font-size:11px}' +
      '.dfg-inline-error{color:#ff8d8d;font-size:11px;letter-spacing:.02em}' +
      '.dfg-import-section{border:2px dashed #6b4a56;border-radius:3px;background:#1a1319;box-shadow:4px 4px 0 #050305;padding:13px 14px}' +
      '.dfg-import-section h2{color:var(--fc-gold);font-size:12px;text-transform:uppercase;letter-spacing:.08em}' +
      '.dfg-import-section p{color:#b9a38c;font-size:10px}' +
      '.dfg-footer{border-top:2px dashed #3a2834;color:#9d877d;font-size:10px;text-transform:uppercase;letter-spacing:.07em;padding-top:14px}' +
      '.dfg-footer::after{content:"INSERT COIN  ·  1983";margin-left:auto;color:var(--fc-gold);letter-spacing:.1em}' +
      '.dfg-muted{color:#b9a38c}' +
      '.dfg-skeleton{border:2px solid #3a2834;border-radius:3px;background:#1a1319;box-shadow:4px 4px 0 #050305}' +
      '.dfg-skeleton-cover{background:#241a21}' +
      '.dfg-skeleton-line{background:#2a1e26;border-radius:2px}' +
      '.dfg-game{background:radial-gradient(circle at 50% -20%,rgba(200,16,46,.14),transparent 58%),#0f0b10}' +
      '.dfg-game-head{background:linear-gradient(180deg,#241a21,#140e13);border-bottom:3px solid var(--fc-red);padding:10px 18px;box-shadow:0 3px 0 #050305;gap:12px}' +
      '.dfg-back{border:2px solid #6b4a56;border-radius:3px;background:#1a1319;color:var(--fc-cream-dim);box-shadow:2px 2px 0 #050305;font-size:10px;text-transform:uppercase;letter-spacing:.06em;height:30px}' +
      '.dfg-back:hover{border-color:var(--fc-gold);color:var(--fc-gold);background:#2a1e26}' +
      '.dfg-game-title h1{font-size:18px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--fc-cream);text-shadow:2px 2px 0 #050305}' +
      '.dfg-game-title h1::before{content:"▶";color:var(--fc-red-bright);font-size:10px;margin-right:7px;vertical-align:2px}' +
      '.dfg-game-sub{color:#d9b46b;font-size:9px;text-transform:uppercase;letter-spacing:.05em}' +
      '.dfg-game-sub a{color:var(--fc-gold);text-decoration:underline;text-underline-offset:2px}' +
      '.dfg-game-body{background:repeating-linear-gradient(0deg,rgba(255,255,255,.018) 0 1px,transparent 1px 3px),#0f0b10;padding:16px 18px 18px;gap:10px}' +
      '.dfg-stage{border:8px solid #2a2029;outline:2px solid #5a3a46;border-radius:5px;box-shadow:0 0 0 2px #070508,0 12px 32px rgba(0,0,0,.7);box-sizing:border-box;background:#000;max-width:1000px}' +
      '.dfg-stage::after{content:"";position:absolute;inset:0;z-index:2;background:repeating-linear-gradient(0deg,rgba(0,0,0,.18) 0 1px,transparent 1px 3px);pointer-events:none;mix-blend-mode:multiply}' +
      '.dfg-stage:focus-visible{box-shadow:0 0 0 3px var(--fc-gold),0 0 0 2px #070508,0 12px 32px rgba(0,0,0,.7)}' +
      '.dfg-canvas{filter:contrast(1.04) saturate(1.08)}' +
      '.dfg-paused{z-index:3;background:rgba(0,0,0,.58);color:var(--fc-gold);font-size:16px;font-weight:800;letter-spacing:.22em;text-transform:uppercase;text-shadow:2px 2px 0 #000}' +
      '.dfg-toolbar{background:#171118;border:2px solid #4a3742;border-radius:4px;padding:6px;box-shadow:4px 4px 0 #050305;box-sizing:border-box}' +
      '.dfg-tool{border:2px solid #4a3742;border-radius:3px;background:#241a21;color:#e8d4b0;font-size:11px;line-height:15px;font-family:inherit;text-transform:uppercase;letter-spacing:.03em;box-shadow:2px 2px 0 #050305;height:32px}' +
      '.dfg-tool:hover{border-color:var(--fc-gold);background:#3a2430;color:#fff3d6}' +
      '.dfg-tool:active{transform:translate(1px,1px);box-shadow:1px 1px 0 #050305}' +
      '.dfg-tool-active{background:var(--fc-red);border-color:var(--fc-gold);color:#fff3d6}' +
      '.dfg-tool-icon{font-size:13px;line-height:1}' +
      '.dfg-volume{border:2px solid #4a3742;border-radius:3px;background:#241a21;box-shadow:2px 2px 0 #050305;height:32px}' +
      '.dfg-volume input{accent-color:var(--fc-gold)}' +
      '.dfg-status{color:#d9b46b;font-size:10px;line-height:16px;text-transform:uppercase;letter-spacing:.08em;border-top:1px dashed #3a2834;padding-top:6px;gap:6px}' +
      '.dfg-status span{background:#1a1319;border:1px solid #3a2834;border-radius:2px;padding:2px 6px}' +
      '.dfg-tool[data-tip]::after,.dfg-volume[data-tip]::after{border:2px solid var(--fc-gold);border-radius:2px;background:#120d12;color:var(--fc-gold);font-family:inherit;font-size:9px;line-height:13px;text-transform:uppercase;letter-spacing:.05em;box-shadow:3px 3px 0 #050305;padding:4px 7px}' +
      '.dfg-aspect-menu{border:2px solid var(--fc-gold);border-radius:3px;background:#171118;box-shadow:5px 5px 0 #050305;padding:4px}' +
      '.dfg-aspect-item{border-radius:2px;color:#e8d4b0;font-family:inherit;font-size:10px;text-transform:uppercase;letter-spacing:.04em;height:30px}' +
      '.dfg-aspect-item:hover,.dfg-aspect-item-active{background:var(--fc-red);color:#fff3d6}' +
      '.dfg-aspect-check{color:var(--fc-gold)}' +
      '.dfg-aspect-item-active .dfg-aspect-check{color:#fff3d6}' +
      '.dfg-spinner{border-radius:2px;border:3px solid #4a3742;border-top-color:var(--fc-gold);box-shadow:2px 2px 0 #050305}' +
      '.dfg-game-loading{color:var(--fc-gold);font-size:11px;text-transform:uppercase;letter-spacing:.08em}' +
      '.dfg-game-error{background:#171118;border:2px solid #6b4a56;border-radius:3px;box-shadow:5px 5px 0 #050305;padding:24px 28px;margin:auto;max-width:560px}' +
      '.dfg-game-error h2{color:var(--fc-gold);font-size:14px;text-transform:uppercase;letter-spacing:.08em}' +
      '.dfg-game-error p{color:#e8c4c4;font-size:11px}' +
      '.dfg-modal-backdrop{background:rgba(5,2,6,.84);backdrop-filter:blur(2px)}' +
      '.dfg-modal{width:min(620px,100%);max-height:min(80vh,760px);border:2px solid var(--fc-gold);border-radius:3px;background:#171118;box-shadow:8px 8px 0 #050305}' +
      '.dfg-modal-head{background:var(--fc-red);border-bottom:2px solid var(--fc-gold);color:#fff3d6;padding:10px 14px}' +
      '.dfg-modal-head h2{font-size:12px;text-transform:uppercase;letter-spacing:.1em;text-shadow:2px 2px 0 #3b050b}' +
      '.dfg-modal-close{width:26px;height:26px;border:2px solid var(--fc-cream);border-radius:2px;background:#8f111b;color:#fff3d6;font-size:16px}' +
      '.dfg-modal-close:hover{background:#f5e7c6;color:#8f111b}' +
      '.dfg-modal-body{background:#171118;color:var(--fc-cream);gap:10px}' +
      '.dfg-modal-foot{border-top:2px solid #3a2834;background:#120d12}' +
      '.dfg-slot-list{gap:7px}' +
      '.dfg-slot{border:2px solid #3a2834;border-radius:3px;background:#1a1319;box-shadow:2px 2px 0 #050305;padding:7px}' +
      '.dfg-slot-thumb{border:1px solid #6b4a56;border-radius:2px;background:#08070a}' +
      '.dfg-slot-info span{color:#b9a38c}' +
      '.dfg-tabs{border-bottom:2px solid #3a2834;gap:4px;padding-bottom:6px}' +
      '.dfg-tab{border:2px solid transparent;border-radius:2px;color:#c9b79e;font-size:11px;text-transform:uppercase;letter-spacing:.04em;padding:5px 9px}' +
      '.dfg-tab:hover{color:var(--fc-cream);border-color:#4a3742}' +
      '.dfg-tab-active{background:var(--fc-red);border-color:var(--fc-gold);color:#fff3d6}' +
      '.dfg-autofire{border:2px solid #3a2834;border-radius:3px;background:#1a1319}' +
      '.dfg-autofire label{font-size:11px;color:var(--fc-cream)}' +
      '.dfg-autofire input{accent-color:var(--fc-gold)}' +
      '.dfg-aspect-setting{border:2px solid #3a2834;border-radius:3px;background:#1a1319;font-size:11px}' +
      '.dfg-aspect-setting select{border:2px solid #6b4a56;border-radius:2px;background:#120d12;color:var(--fc-cream);font-size:11px}' +
      '.dfg-control-list{gap:4px 16px}' +
      '.dfg-control-row{border-bottom:1px dashed #3a2834;padding:5px 0}' +
      '.dfg-control-name{color:#b9a38c;font-size:10px;text-transform:uppercase;letter-spacing:.04em}' +
      '.dfg-control-value{color:var(--fc-gold);font-size:11px}' +
      '.dfg-capturing{color:var(--fc-red-bright);font-weight:800}' +
      '.dfg-textarea{border:2px solid #3a2834;border-radius:2px;background:#08120b;color:#9fe6a0;font-family:inherit;box-shadow:inset 0 0 14px rgba(0,0,0,.7)}' +
      '.dfg-textarea:focus{border-color:var(--fc-gold)}' +
      '.dfg-file-list{gap:5px}' +
      '.dfg-file{border:2px solid #3a2834;border-radius:3px;background:#1a1319;color:var(--fc-cream);font-size:11px;padding:9px 10px}' +
      '.dfg-file:hover{border-color:var(--fc-gold);background:#2a1e26}' +
      '.dfg-file-size{color:#b9a38c}' +
      '.dfg-toast{border:2px solid var(--fc-gold);border-radius:3px;background:#171118;color:var(--fc-cream);box-shadow:5px 5px 0 #050305;font-size:11px;letter-spacing:.02em}' +
      '.dfg-card-source{font-size:9px;line-height:12px;color:var(--fc-gold);text-transform:uppercase;letter-spacing:.08em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-left:3px solid var(--fc-red);padding-left:5px}' +
      '.dfg-sourcebar{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 0 12px;padding:8px 9px;border:2px solid #3a2834;border-radius:3px;background:#171118;box-shadow:3px 3px 0 #050305;flex-wrap:wrap}' +
      '.dfg-sourcebar label{display:flex;align-items:center;gap:8px;min-width:0;color:#d9b46b;font-size:10px;line-height:15px;text-transform:uppercase;letter-spacing:.08em;white-space:nowrap}' +
      '.dfg-sourcebar select{height:32px;min-width:0;max-width:300px;border:2px solid #6b4a56;border-radius:2px;background:#120d12;color:var(--fc-cream);font:inherit;font-size:11px;padding:0 7px}' +
      '.dfg-sourcebar select:focus-visible{outline:2px solid var(--fc-gold);outline-offset:1px}' +
      '.dfg-source-manage{flex:none;height:32px;padding:0 10px;border:2px solid #6b4a56;border-radius:2px;background:#241a21;color:var(--fc-cream);font:inherit;font-size:10px;text-transform:uppercase;letter-spacing:.04em;cursor:pointer;box-shadow:2px 2px 0 #050305;white-space:nowrap}' +
      '.dfg-source-actions{display:flex;align-items:center;gap:6px;flex:none;flex-wrap:wrap;justify-content:flex-end}' +
      '.dfg-source-add{flex:none;height:32px;padding:0 10px;border:2px solid var(--fc-gold);border-radius:2px;background:#3a2430;color:var(--fc-gold);font:inherit;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;cursor:pointer;box-shadow:2px 2px 0 #050305;white-space:nowrap}' +
      '.dfg-source-add:hover{background:var(--fc-gold);color:#3b050b}' +
      '.dfg-url-form{display:flex;gap:8px;align-items:stretch;padding:10px;border:2px solid #3a2834;background:#1a1319}' +
      '.dfg-url-form input{flex:1;min-width:0;height:38px;border:2px solid #6b4a56;border-radius:2px;background:#120d12;color:var(--fc-cream);font:inherit;font-size:13px;padding:0 9px;outline:none}' +
      '.dfg-url-form input:focus{border-color:var(--fc-gold)}' +
      '.dfg-url-form .dfg-button{flex:none}' +
      '.dfg-url-preview{display:grid;grid-template-columns:130px minmax(0,1fr);gap:14px;align-items:start;margin-top:12px;padding:12px;border:2px solid var(--fc-gold);background:#171118;box-shadow:4px 4px 0 #050305}' +
      '.dfg-url-cover .dfg-cover{aspect-ratio:3/4;border:2px solid #6b4a56;border-radius:3px}' +
      '.dfg-url-info{min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:5px}' +
      '.dfg-url-info h3{margin:0;color:var(--fc-cream);font-size:19px;line-height:25px}' +
      '.dfg-url-file{margin:2px 0 0;color:#d9b46b;font-size:12px;line-height:17px;word-break:break-all}' +
      '.dfg-url-add{margin-top:7px}' +
      '.dfg-url-existing{display:flex;flex-direction:column;gap:6px;margin-top:14px;padding-top:12px;border-top:1px dashed #3a2834}' +
      '.dfg-url-existing strong{color:var(--fc-gold);font-size:12px;text-transform:uppercase;letter-spacing:.08em}' +
      '.dfg-url-existing-row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:7px 8px;border:1px solid #3a2834;background:#1a1319;color:#e8d4b0;font-size:12px}' +
      '.dfg-url-existing-row span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
      '.dfg-source-manage:hover{border-color:var(--fc-gold);background:var(--fc-red);color:#fff3d6}' +
      '.dfg-source-warning{margin:4px 0 8px;padding:7px 9px;border:2px solid #f6c445;border-left:7px solid #c8102e;border-radius:2px;background:#2a2014;color:#f0d49a;font-size:9px;line-height:14px}' +
      '.dfg-source-hint{margin:0;color:#c9b79e;font-size:10px;line-height:16px}' +
      '.dfg-source-format{color:#e8d4b0;background:#120d12;border:1px dashed #4a3742;padding:6px 8px;word-break:break-all;font-size:9px;line-height:14px}' +
      '.dfg-source-form{display:flex;flex-direction:column;gap:8px;padding:10px;border:2px solid #3a2834;background:#1a1319}' +
      '.dfg-source-form label{display:flex;flex-direction:column;gap:4px;color:#d9b46b;font-size:10px;line-height:15px;text-transform:uppercase;letter-spacing:.05em}' +
      '.dfg-source-form input{height:32px;border:2px solid #6b4a56;border-radius:2px;background:#120d12;color:var(--fc-cream);font:inherit;font-size:11px;padding:0 8px;outline:none}' +
      '.dfg-source-form input:focus{border-color:var(--fc-gold)}' +
      '.dfg-source-form .dfg-button{align-self:flex-start}' +
      '.dfg-source-list{display:flex;flex-direction:column;gap:6px;margin-top:10px}' +
      '.dfg-source-row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px;border:2px solid #3a2834;background:#1a1319}' +
      '.dfg-source-info{display:flex;flex-direction:column;gap:3px;min-width:0}' +
      '.dfg-source-info strong{font-size:11px;color:var(--fc-cream)}' +
      '.dfg-source-info code{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#b9a38c;font-size:9px}' +
      '.dfg-page-tab .dfg-sourcebar{padding:6px 7px}' +
      '.dfg-page-tab .dfg-sourcebar label{gap:6px;font-size:9px}' +
      '.dfg-page-tab .dfg-sourcebar select{height:30px;max-width:170px;font-size:10px}' +
      '.dfg-page-tab .dfg-source-manage{height:30px;font-size:9px;padding:0 7px}' +
      '.dfg-page-tab{padding:0;max-width:none;height:100%}' +
      '.dfg-page-tab .dfg-content{padding:12px 12px 24px;max-width:1200px}' +
      '.dfg-page-tab .dfg-marquee{display:none}' +
      '.dfg-page-tab .dfg-hero{min-height:150px;padding:16px 18px;margin-bottom:14px;gap:12px}' +
      '.dfg-page-tab .dfg-hero h1{font-size:34px;line-height:36px}' +
      '.dfg-page-tab .dfg-hero p{font-size:10px;line-height:16px}' +
      '.dfg-page-tab .dfg-hero-badge{display:none}' +
      '@media (min-width:900px){.dfg-page-tab .dfg-hero-badge{display:flex}.dfg-page-tab .dfg-hero{min-height:200px;padding:20px 24px}.dfg-page-tab .dfg-hero h1{font-size:50px;line-height:52px}.dfg-page-tab .dfg-hero p{font-size:12px;line-height:18px}}' +
      '.dfg-page-tab .dfg-hero-tags{margin-top:9px}' +
      '.dfg-page-tab .dfg-grid{display:flex;flex-wrap:wrap;gap:14px;justify-content:center}' +
      '.dfg-page-tab .dfg-card{width:auto;flex:1 1 220px;max-width:280px}' +
      '.dfg-page-tab .dfg-skeleton{flex:1 1 220px;max-width:280px}' +
      '.dfg-page-tab .dfg-card-title{font-size:13px;line-height:18px;min-height:18px}' +
      '.dfg-page-tab .dfg-card-source{font-size:8px;line-height:11px}' +
      '.dfg-page-tab .dfg-card-body{padding:8px 9px 7px}' +
      '.dfg-page-tab .dfg-search-icon{width:38px;height:42px;font-size:16px}' +
      '.dfg-page-tab .dfg-search input{height:46px;font-size:14px}' +
      '.dfg-page-tab .dfg-section{margin-top:14px}' +
      '.dfg-page-tab .dfg-search{padding-top:2px}' +
      '.dfg-page-tab .dfg-marquee{height:28px;margin-bottom:10px;font-size:8px;letter-spacing:.12em}' +
      '.dfg-page-tab .dfg-marquee-title{font-size:10px;letter-spacing:.14em}' +
      '.dfg-page-tab .dfg-marquee-year{display:none}' +
      '.dfg-page-tab .dfg-footer::after{display:none}' +
      '.dfg-tab-game .dfg-game-head{padding:8px 12px}' +
      '.dfg-tab-game .dfg-game-body{padding:8px 8px 12px}' +
      '.dfg-tab-game .dfg-game-title h1{font-size:14px;line-height:20px}' +
      '.dfg-tab-game .dfg-toolbar{flex-wrap:wrap;justify-content:center;overflow:visible;max-width:none;gap:4px;padding:5px}' +
      '.dfg-tab-game .dfg-tool{padding:0 7px}' +
      '.dfg-tab-game .dfg-volume{padding:0 6px}' +
      '.dfg-tab-game .dfg-volume input{width:64px}' +
      '.dfg-tab-game .dfg-tool > span:last-child{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}' +
      '.dfg-tab-game .dfg-status{justify-content:flex-start}' +
      '@media (max-width:720px){.dfg-details,.dfg-delete-dialog,.dfg-url-preview{grid-template-columns:1fr}.dfg-details-cover,.dfg-delete-cover,.dfg-url-cover{max-width:180px}.dfg-url-form{flex-direction:column}.dfg-content{padding:14px 14px 26px}.dfg-page-head{flex-direction:column;align-items:stretch}.dfg-control-list{grid-template-columns:1fr}.dfg-tool span:last-child{display:none}.dfg-tool{padding:0 8px}.dfg-game-head{padding:10px 14px}.dfg-game-body{padding:10px 10px 14px}.dfg-toolbar{gap:4px}.dfg-import-section{flex-direction:column;align-items:flex-start}}' +
      '@media (prefers-reduced-motion:reduce){.dfg-card,.dfg-spinner,.dfg-skeleton-cover,.dfg-skeleton-line{transition:none;animation:none}}' +
      '.dfg-page,.dfg-game{font-size:15px}' +
      '.dfg-page-head p{font-size:12px;line-height:18px}' +
      '.dfg-page-head .dfg-button,.dfg-page-head .dfg-button-ghost{font-size:12px;height:36px}' +
      '.dfg-marquee{font-size:12px;line-height:16px}' +
      '.dfg-marquee-title{font-size:14px}' +
      '.dfg-hero-kicker{font-size:12px;line-height:17px}' +
      '.dfg-hero p{font-size:13px;line-height:19px}' +
      '.dfg-hero-tags span{font-size:11px;line-height:15px;padding:4px 8px}' +
      '.dfg-hero-badge small{font-size:11px;line-height:15px}' +
      '.dfg-search input{font-size:15px;height:48px}' +
      '.dfg-sourcebar label{font-size:12px;line-height:17px;gap:9px}' +
      '.dfg-sourcebar select{font-size:12px;height:36px;max-width:270px}' +
      '.dfg-source-manage{font-size:11px;height:36px;padding:0 10px}' +
      '.dfg-source-add{font-size:12px;height:36px;padding:0 10px}' +
      '.dfg-notice{font-size:12px;line-height:19px}' +
      '.dfg-notice button{font-size:11px;padding:5px 9px}' +
      '.dfg-section-head h2{font-size:17px;line-height:24px}' +
      '.dfg-section-head span{font-size:12px;line-height:17px;padding:4px 8px}' +
      '.dfg-expanded{font-size:12px;line-height:18px}' +
      '.dfg-card-title{font-size:15px;line-height:21px;min-height:21px}' +
      '.dfg-card-source{font-size:11px;line-height:15px}' +
      '.dfg-card-meta,.dfg-card-time{font-size:12px;line-height:17px}' +
      '.dfg-card-action{font-size:12px;line-height:16px;height:34px}' +
      '.dfg-chip{font-size:12px;line-height:17px;padding:6px 11px}' +
      '.dfg-button{font-size:13px;height:38px}' +
      '.dfg-button-small{font-size:12px;height:32px}' +
      '.dfg-empty{font-size:14px;line-height:20px}' +
      '.dfg-footer{font-size:12px;line-height:17px}' +
      '.dfg-muted{font-size:12px;line-height:18px}' +
      '.dfg-game-title h1{font-size:20px;line-height:26px}' +
      '.dfg-game-sub{font-size:12px;line-height:17px}' +
      '.dfg-tool{font-size:12px;line-height:16px;height:34px}' +
      '.dfg-volume{height:34px}' +
      '.dfg-status{font-size:11px;line-height:17px}' +
      '.dfg-tool[data-tip]::after,.dfg-volume[data-tip]::after{font-size:12px;line-height:16px;padding:5px 8px}' +
      '.dfg-aspect-item{font-size:12px;line-height:16px;height:34px}' +
      '.dfg-game-loading{font-size:13px;line-height:19px}' +
      '.dfg-game-error h2{font-size:17px;line-height:23px}' +
      '.dfg-game-error p{font-size:13px;line-height:20px}' +
      '.dfg-modal-body{font-size:13px;line-height:20px}' +
      '.dfg-modal-head h2{font-size:14px;line-height:20px}' +
      '.dfg-slot-info{font-size:13px;line-height:18px}' +
      '.dfg-slot-info span{font-size:12px;line-height:17px}' +
      '.dfg-tab{font-size:12px;line-height:17px}' +
      '.dfg-control-name{font-size:11px;line-height:16px}' +
      '.dfg-control-value{font-size:13px;line-height:18px}' +
      '.dfg-file{font-size:13px;line-height:18px}' +
      '.dfg-details-info h3{font-size:22px;line-height:28px}' +
      '.dfg-details-meta{font-size:12px;line-height:17px}' +
      '.dfg-details-desc{font-size:13px;line-height:19px}' +
      '.dfg-details-loading{font-size:13px}' +
      '.dfg-details-files strong{font-size:12px;line-height:17px}' +
      '.dfg-detail-file{font-size:13px;line-height:18px;min-height:36px}' +
      '.dfg-detail-file small{font-size:12px}' +
      '.dfg-source-hint{font-size:13px;line-height:19px}' +
      '.dfg-source-format{font-size:12px;line-height:17px}' +
      '.dfg-source-form label{font-size:12px;line-height:17px}' +
      '.dfg-source-form input{font-size:13px;height:36px}' +
      '.dfg-source-info strong{font-size:13px;line-height:18px}' +
      '.dfg-source-info code{font-size:12px;line-height:17px}' +
      '.dfg-page-tab .dfg-marquee,.dfg-page-tab .dfg-hero-kicker{font-size:12px}' +
      '.dfg-page-tab .dfg-hero p{font-size:13px;line-height:19px}' +
      '.dfg-page-tab .dfg-sourcebar label{font-size:12px}' +
      '.dfg-page-tab .dfg-sourcebar select{font-size:12px;height:36px;max-width:200px}' +
      '.dfg-page-tab .dfg-source-manage{font-size:12px;height:36px}' +
      '.dfg-page-tab .dfg-source-add{font-size:11px;height:34px}' +
      '.dfg-page-tab .dfg-card-title{font-size:15px;line-height:21px;min-height:21px}' +
      '.dfg-page-tab .dfg-card-source{font-size:12px;line-height:16px}' +
      '.dfg-page-tab .dfg-card-action{font-size:12px;height:34px}' +
      '.dfg-page-tab .dfg-game-title h1{font-size:17px;line-height:23px}' +
      '.dfg-page-tab .dfg-status{font-size:12px}' +
      '.dfg-page-tab .dfg-details-info h3{font-size:20px;line-height:26px}';

    var CSS_TAG_ID = 'dsh-fc-games/styles';
    function installStyles() {
      if (typeof document === 'undefined') return function () {};
      if (document.querySelector('style[data-plugin-css="' + CSS_TAG_ID + '"]') === null) {
        var tag = document.createElement('style');
        tag.dataset.plugin = 'dsh-fc-games';
        tag.dataset.pluginCss = CSS_TAG_ID;
        tag.textContent = CSS;
        document.head.appendChild(tag);
      }
      return function () {
        var tag = document.querySelector('style[data-plugin-css="' + CSS_TAG_ID + '"]');
        if (tag && tag.parentNode) tag.parentNode.removeChild(tag);
      };
    }

    var REMOTE_INVOCATION = {
      id: 'dsh-fc-games#fcGames/bootstrap',
      service: 'fcGames',
      namespace: 'fcGames',
      method: 'bootstrap',
      invocation: { kind: 'direct' },
      parameters: [],
      result: {
        mode: 'strict',
        typeSymbol: 'dsh-fc-games#FcGamesBootstrap',
        create: function () {
          return {
            parse: function (value) {
              if (value === null || typeof value !== 'object') throw new Error('dsh-fc-games: invalid bootstrap result');
              if (typeof value.base !== 'string' || typeof value.token !== 'string') {
                throw new Error('dsh-fc-games: invalid bootstrap result');
              }
              return value;
            },
          };
        },
      },
    };
    var FC_REMOTE = { package: 'dsh-fc-games', descriptors: [REMOTE_INVOCATION] };

    function apply(ctx) {
      ctx.effect(function () {
        var zhDispose = ctx.locale.register('fc-games', 'zh', zh);
        var enDispose = ctx.locale.register('fc-games', 'en', en);
        return function () {
          zhDispose();
          enDispose();
        };
      }, 'fc-games: dictionaries');

      var t = ctx.locale.bind('fc-games');

      ctx.effect(installStyles, 'fc-games: styles');

      var boot = {
        promise: null,
        resolve: null,
        reject: null,
        value: null,
        error: null,
      };
      function bootstrap() {
        if (boot.value !== null) return Promise.resolve(boot.value);
        if (boot.error !== null) return Promise.reject(boot.error);
        if (boot.promise !== null) return boot.promise;
        boot.promise = new Promise(function (resolve, reject) {
          boot.resolve = resolve;
          boot.reject = reject;
        });
        return boot.promise;
      }

      var remoteState = { dispose: null, service: null, info: null };

      ctx.effect(async function () {
        try {
          var dispose = await ctx.remote.$mount(FC_REMOTE);
          var service = ctx.reflect.get('remote.fcGames');
          if (!service) {
            void dispose();
            throw new Error('dsh-fc-games: remote namespace did not mount');
          }
          var info = await service.bootstrap();
          if (info && info.ok === true && info.value) info = info.value;
          if (info === null || typeof info !== 'object' || typeof info.base !== 'string' || typeof info.token !== 'string') {
            throw new Error('dsh-fc-games: bootstrap returned an invalid payload');
          }
          remoteState.dispose = dispose;
          remoteState.service = service;
          remoteState.info = info;
          boot.value = info;
          if (boot.resolve) boot.resolve(info);
          return function () {
            remoteState.dispose = null;
            remoteState.service = null;
            remoteState.info = null;
            void dispose();
          };
        } catch (error) {
          boot.error = error;
          if (boot.reject) boot.reject(error);
          if (typeof console !== 'undefined' && console.error) console.error('[dsh-fc-games] bootstrap failed', error);
          throw error;
        }
      }, 'fc-games: remote bootstrap');

      ctx.effect(function () {
        return ctx.slots.inject('sidebar.panellist', function () {
          return ctx.slots.register(
            {
              name: 'sidebar.panellist',
              id: 'fc-games',
              order: -10,
              label: function () {
                return t('panel.label');
              },
            },
            FcGamesIcon,
          );
        });
      }, 'fc-games: sidebar entry');

      // A page type in the right Sidebar: one tab per Session, focused instead
      // of duplicated when the sidebar entry is clicked again.
      ctx.effect(function () {
        return ctx.sidebarRightTabs.register({
          id: FC_TAB_ID,
          kind: FC_TAB_KIND,
          title: function () {
            return t('page.title');
          },
          keepMounted: true,
        });
      }, 'fc-games: right sidebar type');

      ctx.effect(function () {
        return ctx.slots.inject('sidebar.right.pane.tab', function () {
          return ctx.slots.register(
            {
              name: 'sidebar.right.pane.tab',
              key: FC_TAB_ID,
            },
            function () {
              return h(FcGamesPage, { ctx: ctx, t: t, bootstrap: bootstrap, tabMode: true });
            },
          );
        });
      }, 'fc-games: right sidebar body');

      ctx.effect(function () {
        return ctx.slots.inject('main', function () {
          return ctx.slots.register(
            {
              name: 'main',
              key: 'fc-games',
            },
            function () {
              return h(FcGamesPage, { ctx: ctx, t: t, bootstrap: bootstrap });
            },
          );
        });
      }, 'fc-games: main panel');
    }





    module.exports = { inject: inject, apply: apply };
    return module.exports;
  },
});

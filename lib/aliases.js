/**
 * Small Chinese -> English alias table for the FC library search box. The
 * Internet Archive metadata is overwhelmingly English/Japanese, so a Chinese
 * query is expanded before it reaches the archive query parser.
 */

export const ALIASES = Object.freeze({
  '超级马里奥': 'Super Mario Bros.',
  '超级玛丽': 'Super Mario Bros.',
  '马里奥': 'Super Mario Bros.',
  '魂斗罗': 'Contra',
  '坦克大战': 'Battle City',
  '冒险岛': 'Adventure Island',
  '忍者龙剑传': 'Ninja Gaiden',
  '忍龙': 'Ninja Gaiden',
  '双截龙': 'Double Dragon',
  '赤色要塞': 'Jackal',
  '绿色兵团': "Rush'n Attack",
  '沙罗曼蛇': 'Life Force',
  '恶魔城': 'Castlevania',
  '洛克人': 'Mega Man',
  '最终幻想': 'Final Fantasy',
  '勇者斗恶龙': 'Dragon Warrior',
  '塞尔达传说': 'The Legend of Zelda',
  '塞尔达': 'The Legend of Zelda',
  '银河战士': 'Metroid',
  '星之卡比': "Kirby's Adventure",
  '热血物语': 'River City Ransom',
  '热血系列': 'Kunio-kun',
  '三目童子': 'Mitsume ga Tooru',
  '松鼠大战': "Chip 'n Dale Rescue Rangers",
  '赤影战士': 'Shadow of the Ninja',
  '踢王': 'Kick Master',
  '重装机兵': 'Metal Max',
  '吞食天地': 'Destiny of an Emperor',
  '热血硬派': 'Renegade',
  '导弹坦克': 'Battle City',
  '打鸭子': 'Duck Hunt',
  '越野摩托车': 'Excitebike',
  '大金刚': 'Donkey Kong',
  '小蜜蜂': 'Galaga',
  '马戏团': 'Circus Charlie',
});

function aliasKey(query) {
  return String(query ?? '')
    .trim()
    .toLowerCase()
    .replace(/[《》「」\s]/g, '');
}

/**
 * Expand a Chinese query. Returns the English title when a known alias is
 * matched, otherwise the original trimmed query.
 */
export function expandAlias(query) {
  const raw = String(query ?? '').trim();
  const english = ALIASES[aliasKey(raw)];
  return english === undefined
    ? { query: raw, expanded: false }
    : { query: english, expanded: english !== raw };
}

/** Popular search chips for the empty state. */
export const SUGGESTIONS = Object.freeze([
  '超级马里奥',
  '魂斗罗',
  '坦克大战',
  '冒险岛',
  '忍者龙剑传',
  '双截龙',
  '赤色要塞',
  '绿色兵团',
]);

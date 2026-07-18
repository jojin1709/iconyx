import { describe, it, expect } from 'vitest';
import { icons, matchesSearch } from '../../lib/icons';

describe('Icons Library Manifest', () => {
  it('should contain exactly 174 icons', () => {
    expect(icons.length).toBe(174);
  });

  it('should resolve synonym matches accurately', () => {
    const trashIcon = icons.find(i => i.name === 'trash');
    expect(trashIcon).toBeDefined();
    if (trashIcon) {
      expect(matchesSearch(trashIcon, 'delete')).toBe(true);
      expect(matchesSearch(trashIcon, 'bin')).toBe(true);
      expect(matchesSearch(trashIcon, 'rubbish')).toBe(true);
      expect(matchesSearch(trashIcon, 'other-query')).toBe(false);
    }
  });

  it('should find icons by categories', () => {
    const weatherIcons = icons.filter(i => i.category === 'weather');
    expect(weatherIcons.length).toBeGreaterThan(0);
  });
});

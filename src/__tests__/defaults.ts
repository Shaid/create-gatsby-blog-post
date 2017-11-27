import defaults from '../defaults';

describe('defaults', () => {
  it('contains expected default keys', () => {
    ['dry', 'root', 'useNewLine'].forEach(key =>
      expect(defaults[key]).toBeDefined()
    );
  });

  it('defaults to src/pages/tests for root', () => {
    expect(defaults.root).toBe('src/pages/tests/');
  });

  it('defaults to dry=false', () => {
    expect(defaults.dry).toBe(false);
  });
});

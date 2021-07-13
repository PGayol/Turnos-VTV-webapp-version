import { TurnosVtvPage } from './app.po';

describe('turnos-vtv App', function() {
  let page: TurnosVtvPage;

  beforeEach(() => {
    page = new TurnosVtvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

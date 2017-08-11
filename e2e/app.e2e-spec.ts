import { FlashcardsPdfPage } from './app.po';

describe('flashcards-pdf App', () => {
  let page: FlashcardsPdfPage;

  beforeEach(() => {
    page = new FlashcardsPdfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

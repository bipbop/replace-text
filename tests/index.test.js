const { replaceText, ReplaceElement } = require('../dist/index');


const regex = /Lucas/;

test('replace content', () => {
    document.body.innerHTML = '<div>Olá, meu nome é Lucas</div>';
    replaceText(regex, (payload, element) => {
        expect(payload).toMatch(regex);
        expect(element).toBeInstanceOf(HTMLElement);
    });
    expect(document.getElementsByTagName(ReplaceElement).length).toBe(1);
    expect(document.getElementsByTagName(ReplaceElement)[0].innerText).toBe('Lucas');
});
// con describe creo un gruppo di test
describe("My birthday reminders app", () => {
  // funzione async perché comandi asincroni con WebdriverIO come browser.url() e browser.execute()
  it("should look correctly", async () => {
    // vuoto ('') poichè punta all’app locale in esecuzione sullo stesso server di test.
    await browser.url(``);

    // '/*@visual.init*/' è un marcatore per inizializzare il test visivo
    await browser.execute("/*@visual.init*/", "Birthday Reminder App");

    // Questo comando scatta uno snapshot visivo dello stato corrente della pagina
    await browser.execute("/*@visual.snapshot*/", "Default State");

    await $('[data-testid="clear"]').click();
    await browser.execute("/*@visual.snapshot*/", "Clear State");

    // /*@visual.end*/ termina la sessione del test visivo
    const result = await browser.execute("/*@visual.end*/");
    expect(result.message).toBeNull();
  });
});

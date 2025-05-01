import React from "react";

const ChiSiamo = () => {
  return (
    <section className="chi-siamo grid grid-cols-1 lg:grid-cols-2 gap-4 items-center py-4">
      <div className="content order-2 lg:order-2">
        <h2 className="text-3xl font-bold title">Chi Siamo</h2>
        <p className="mt-2 text-start">
          TAB30 a Macerata nasce dalla passione per il collezionismo e
          dall’esperienza consolidata nel mondo della filatelia e numismatica.
          Da decenni, offriamo ai nostri clienti prodotti autentici e un
          servizio altamente personalizzato, diventando il punto di riferimento
          per collezionisti e appassionati in cerca di qualità, rarità e
          affidabilità. Presso il nostro negozio, ogni articolo viene
          selezionato con cura per garantire l’autenticità e il valore, offrendo
          soluzioni ideali per arricchire e valorizzare le collezioni di ogni
          cliente. Inoltre, la nostra offerta si arricchisce di idee regalo
          uniche, tra cui borse artigianali e oggetti di artigianato locale,
          perfetti per chi cerca un regalo originale e di qualità. <br />
          <p class="mt-2">
            <strong>Orari di apertura:</strong>
          </p>
          <ul className="mt-2 list-disc list-inside text-start py-4">
            <li>
              <strong>Lunedì-Sabato:</strong> <br />
              8:00 - 13:00 | 16:00 - 20:00
            </li>
            <li class="mt-2">
              <strong>Domenica:</strong> <br />
              9:00 - 12:00
            </li>
          </ul>
        </p>
      </div>

      <div className="image order-1 lg:order-2 text-center">
        <img src="/images/1.png" alt="Chi Siamo" className="w-full rounded" />
      </div>
    </section>
  );
};

export default ChiSiamo;

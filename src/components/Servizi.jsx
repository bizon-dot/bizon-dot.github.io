import React from "react";

const Servizi = () => {
  return (
    <section className="servizi grid grid-cols-1 lg:grid-cols-2 gap-4 items-center py-4">
      <div className="content order-2 lg:order-2">
        <h2 className="text-3xl font-bold title">Servizi</h2>
        <p className="mt-4 text-start">
          Offriamo una gamma completa di servizi studiati per soddisfare le
          esigenze di ogni cliente. La nostra tabaccheria a Macerata è sempre
          aggiornata sulle novità del settore e ti garantisce un supporto rapido
          e affidabile. Presso la nostra Tabaccheria potrai usufruire di:
        </p>
        <ul className="mt-4 list-disc list-inside text-start">
          <li>
            <strong>Servizi Tradizionali:</strong> Ricariche telefoniche,
            pagamento di bollettini e assistenza per l’acquisto dei biglietti
            della lotteria.
          </li>
          <li>
            <strong>Consulenze di Filatelia e Numismatica:</strong> Valutazione
            e collezione di francobolli e monete, con consulenze personalizzate
            per appassionati e collezionisti alla ricerca di prodotti autentici
            e di qualità.
          </li>
          <li>
            <strong>Idee Regalo Originali:</strong> Una selezione di prodotti
            artigianali, borse realizzate con cura, gadget e accessori unici,
            perfetti per sorprendere amici e familiari.
          </li>
        </ul>
        <p className="mt-4 text-start">
          La combinazione di questi servizi rende la nostra tabaccheria un punto
          di riferimento per chi cerca qualità, convenienza e originalità, con
          orari flessibili pensati per te.
        </p>
      </div>
      <div className="image order-1 lg:order-1">
        <img src="/images/2.png" alt="Servizi" className="w-full rounded" />
      </div>
    </section>
  );
};

export default Servizi;

import React from "react";

const Jumbo = () => {
  return (
    <section className="negozio grid grid-cols-1 lg:grid-cols-2 gap-4 items-center py-4">
      <div className="image order-1 lg:order-2">
        <img
          src="/images/3.png"
          alt="Negozio Filatelico e Numismatico"
          className="w-full rounded"
        />
      </div>
      <div className="content order-2 lg:order-1">
        <h2 className="text-3xl font-bold title">
          Negozio Filatelico / Numismatico
        </h2>
        <p className="mt-4 text-start">
          Nel cuore di Macerata, il nostro negozio filatelico e numismatico
          propone un’offerta esclusiva per i collezionisti e gli appassionati.
          Qui troverai:
        </p>
        <ul className="mt-4 list-disc list-inside text-start">
          <li>
            <strong>Selezione Curata:</strong> Un assortimento di francobolli e
            monete autentiche, accuratamente selezionate per garantire qualità e
            rarità, ideali per arricchire ogni collezione.
          </li>
          <li>
            <strong>Servizio Specializzato:</strong> Un team esperto sempre
            disponibile per consulenze e valutazioni nella scelta degli articoli
            da collezione.
          </li>
          <li>
            <strong>Prodotti da Regalo:</strong> Idee regalo uniche, tra cui
            borse artigianali e oggetti di artigianato locale, perfetti per chi
            cerca un regalo originale.
          </li>
        </ul>
        <p className="mt-4 text-start">
          TAB30 a Macerata è il luogo ideale dove tradizione e innovazione si
          incontrano, offrendo un servizio completo e orari di apertura studiati
          per garantire la massima comodità ai nostri clienti.
        </p>
      </div>
    </section>
  );
};

export default Jumbo;

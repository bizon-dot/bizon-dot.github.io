import React from "react";

const Jumbo = () => {
  return (
    <section className="jumbo grid grid-cols-1 gap-4 items-center py-4">
      <div className="content">
        <h1 className="text-4xl font-bold title">Tab30</h1>
        <h2 className="subtitle">
          Tabaccheria - Negozio Filatelico a Macerata
        </h2>
        <p className="mt-4 text-start">
          Benvenuti alla Tabaccheria di Pietro Aureli a Macerata – il punto di
          riferimento per la filatelia e la numismatica.
          <br /> Scopri la nostra ampia selezione di articoli da collezione e
          approfitta degli orari flessibili pensati per te. <br /> Siamo qui per
          offrire qualità e professionalità ad ogni appassionato.
        </p>
      </div>
    </section>
  );
};

export default Jumbo;

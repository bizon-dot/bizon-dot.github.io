import React from "react";

const ChiSiamo = () => {
  return (
    <section className="contatti grid grid-cols-1 lg:grid-cols-2 gap-4 items-center py-4">
      <div className="content order-2 lg:order-2 flex flex-col justify-center justify-between">
        <h2 className="text-3xl font-bold title">Contatti</h2>
        <p className="mt-4 text-start">
          Per maggiori informazioni, consulenze personalizzate e dettagli sui
          nostri orari, contattaci subito! TAB30 di Macerata è a tua
          disposizione per rispondere a ogni richiesta relativa a filatelia,
          numismatica e prodotti da collezione. Chiamaci per fissare un
          appuntamento o per avere delle informazioni.
        </p>
        <p className="d-flex justify-content-center align-items-center">
          <a href="tel:">Chiamaci</a>
        </p>
      </div>
      <div className="map-container mt-4 order-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.71252135282!2d13.43386287669677!3d43.299341671121226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132df34c557ed01b%3A0x1e598e56fbd8f0a6!2sPiazza%20Indipendenza%2C%2016%2C%2062100%20Macerata%20MC!5e0!3m2!1sit!2sit!4v1743259358990!5m2!1sit!2sit"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ChiSiamo;

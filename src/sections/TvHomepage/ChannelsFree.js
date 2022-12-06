import Title from "components/Title";
import React from "react";

function ChannelsFree() {
  return (
    <section>
      <div className="container">
        <div className="bg-blue-link py-14 rounded-2xl text-center">
          <div className="space-y-2 mb-6">
            <Title variant="44">100s OF CHANNELS.</Title>
            <Title variant="44">
              <span className="text-primary">100% Free</span>
            </Title>
          </div>

          <p className="text-xl max-w-[40rem] mx-auto">
            Drop in to over 100 of hit movies, binge- warthy TV shows, cartoons,
            sports and more. Anytime, always for free.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChannelsFree;
import React from "react";
import Particles from "react-tsparticles";
import '../styles/particleBackground.scss';
import ParticleConfig from "../config/particle-config.js"


export default function ParticleBackground() {
    return (
        <Particles
        id="tsparticles"

        options={ParticleConfig}
      />
    );
}
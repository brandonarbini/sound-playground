"use client";

import { sfxr } from "jsfxr";
import { useState } from "react";

export default function Home() {
  const [waveType, setWaveType] = useState(0);

  const play = () => {
    const params = {
      oldParams: true,
      wave_type: waveType,
      p_env_attack: 0.144208139408526,
      p_env_sustain: 0.20850990792577173,
      p_env_punch: 0.27825682462491635,
      p_env_decay: -0.3018036468215408,
      p_base_freq: 0.3810796234309371,
      p_freq_limit: 0,
      p_freq_ramp: -0.06321103327651668,
      p_freq_dramp: 0.048903422024833845,
      p_vib_strength: -0.23897690345495423,
      p_vib_speed: -0.763533109596537,
      p_arp_mod: -0.47036453479904416,
      p_arp_speed: -0.7280584599085254,
      p_duty: 0.12756896838103327,
      p_duty_ramp: -0.31525829902803754,
      p_repeat_speed: -0.441892592275563,
      p_pha_offset: -0.0000016519967659650196,
      p_pha_ramp: -0.5214239922211829,
      p_lpf_freq: 0.8186586798164993,
      p_lpf_ramp: -0.21014819438662713,
      p_lpf_resonance: 0.011854098683377945,
      p_hpf_freq: 0.04815412596952316,
      p_hpf_ramp: 0.0036065224471236988,
      sound_vol: 0.25,
      sample_rate: 44100,
      sample_size: 8,
    };

    sfxr.play(params);
  };

  return (
    <div className="p-8 space-y-3 flex flex-col justify-start items-start">
      <h1 className="text-4xl mb-4">Sound Playground</h1>
      <select
        className="text-black text-xl"
        value={waveType}
        onChange={e => setWaveType(Number(e.target.value))}
      >
        <option value="0">Square</option>
        <option value="1">Sawtooth</option>
        <option value="2">Sine</option>
        <option value="3">Noise</option>
      </select>
      <button className="p-2 px-3 rounded border bg-stone-600" onClick={play}>
        Play
      </button>
    </div>
  );
}

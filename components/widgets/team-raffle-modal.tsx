"use client";

import React, { useState, useRef } from "react";
import { Shuffle } from "lucide-react";
import posthog from "posthog-js";
import { Modal } from "@/components/ui/modal";
import { shuffleArray } from "@/lib/utils";

export interface TeamRaffleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeamRaffleModal: React.FC<TeamRaffleModalProps> = ({
  isOpen,
  onClose,
}) => {
  const defaultPlayers = [
    { name: "Carlos", rating: "8.5" },
    { name: "Renan", rating: "8.0" },
    { name: "Pedrinho", rating: "7.5" },
    { name: "Lucas", rating: "9.0" },
    { name: "Neco", rating: "7.0" },
    { name: "André", rating: "8.5" },
    { name: "Rafael", rating: "8.2" },
    { name: "Felipe", rating: "8.0" },
    { name: "Gabriel", rating: "8.8" },
    { name: "Marcos", rating: "6.5" },
  ];

  const [teamBlue, setTeamBlue] = useState(defaultPlayers.slice(0, 5));
  const [teamCyan, setTeamCyan] = useState(defaultPlayers.slice(5, 10));
  const shuffleCountRef = useRef(0);

  const handleShuffle = () => {
    const shuffled = shuffleArray(defaultPlayers);
    setTeamBlue(shuffled.slice(0, 5));
    setTeamCyan(shuffled.slice(5, 10));
    shuffleCountRef.current += 1;
    posthog.capture("team_raffle_shuffled", {
      shuffle_count: shuffleCountRef.current,
      player_count: defaultPlayers.length,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="🔀 Widget de Sorteio de Times"
    >
      <div className="space-y-4">
        <p className="text-xs text-slate-600">
          Simule como o algoritmo do Partidinha divide os 10 jogadores confirmados em 2 times equilibrados:
        </p>

        <button
          onClick={handleShuffle}
          className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-xs flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
        >
          <Shuffle className="w-4 h-4" />
          <span>Sortear Agora!</span>
        </button>

        <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
          <div className="bg-sky-50 border border-sky-200 p-3 rounded-xl">
            <div className="font-bold text-sky-700 mb-1.5 font-sans">
              🔵 Time Azul
            </div>
            <div className="space-y-1 text-slate-800 text-[11px]">
              {teamBlue.map((p, i) => (
                <div key={i}>
                  • {p.name} ({p.rating})
                </div>
              ))}
            </div>
          </div>

          <div className="bg-cyan-50 border border-cyan-200 p-3 rounded-xl">
            <div className="font-bold text-cyan-700 mb-1.5 font-sans">
              🌐 Time Ciano
            </div>
            <div className="space-y-1 text-slate-800 text-[11px]">
              {teamCyan.map((p, i) => (
                <div key={i}>
                  • {p.name} ({p.rating})
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

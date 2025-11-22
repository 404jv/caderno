const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function idx(c: string) {
  return A.indexOf(c);
}

function rot(wiring: string) {
  return wiring.split("").map(ch => idx(ch));
}

function encodeWithRotor(i: number, rotor: number[], pos: number) {
  return rotor[(i + pos) % 26];
}

function encodeBackward(i: number, rotor: number[], pos: number) {
  return (rotor.indexOf(i) - pos + 26 * 10) % 26;
}

function shift(pos: number) {
  return (pos + 1) % 26;
}

// ---------- CONFIGURAÇÃO SIMPLES ----------
const ROTOR_I   = rot("EKMFLGDQVZNTOWYHXUSPAIBRCJ");
const ROTOR_II  = rot("AJDKSIRUXBLHWTMCQGZNPYFVOE");
const ROTOR_III = rot("BDFHJLCPRTXVZNYEIWGAKMUSQO");

const REFLECTOR_B = rot("YRUHQSLDPXNGOKMIEBFZCWVJAT");

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;

// plugboard muito simples
const plugboard: Record<string, string> = {
  A: "Q", Q: "A",
  W: "S", S: "W",
  E: "D", D: "E"
};

function plug(c: string) {
  return plugboard[c] ?? c;
}

// ---------- ENCODER ----------
function enigma(text: string) {
  let out = "";

  for (const ch of text.toUpperCase()) {
    if (!/[A-Z]/.test(ch)) { out += ch; continue; }

    // step simples
    pos3 = shift(pos3);
    if (pos3 === 0) pos2 = shift(pos2);
    if (pos2 === 0) pos1 = shift(pos1);

    let i = idx(plug(ch));

    // forward
    i = encodeWithRotor(i, ROTOR_III, pos3);
    i = encodeWithRotor(i, ROTOR_II, pos2);
    i = encodeWithRotor(i, ROTOR_I, pos1);

    // reflector
    i = REFLECTOR_B[i];

    // backward
    i = encodeBackward(i, ROTOR_I, pos1);
    i = encodeBackward(i, ROTOR_II, pos2);
    i = encodeBackward(i, ROTOR_III, pos3);

    const c2 = plug(A[i]);
    out += c2;
  }

  return out;
}

// ---------- TESTE ----------
console.log(enigma("DEIXA SEU LIKE E SE INCREVA NO CANAL!"));

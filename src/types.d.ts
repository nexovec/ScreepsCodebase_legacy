// example declaration file - remove these and add your own custom typings

// memory extension samples
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreepMemory {}

interface Memory {
  UUID: number;
}

// `global` extension samples
declare namespace NodeJS {
  interface Global {
    log: any;
  }
}

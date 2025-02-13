export const slotMachine = {
    calculateStatus: function () {
        // TODO: check for three similar symbols and update 'win'-boolean
    },
    getRandomSymbol: function () {
        // TODO: return a single random symbol
    },
    reset: function () {
        // TODO: Empty out the slots and reset 'win'-boolean
    },
    symbols: ["♠", "♥", "♣", "♦"],
    slots: [],
    slotsAmount: 3,
    spin: function () {
        // TODO: generate three random symbols, and add them to the slots of the slotMachine
    },
    win: true
};
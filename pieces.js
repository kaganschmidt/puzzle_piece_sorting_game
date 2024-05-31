
const pieces = [
    { chart_id: 1, color: "blue", edge: true },
    { chart_id: 2, color: "blue", edge: true },
    { chart_id: 3, color: "bluegreen", edge: true },
    { chart_id: 4, color: "bluegreen", edge: false },
    { chart_id: 5, color: "green", edge: false },
];

const edgePieces = [];

for (let i = 0; i < pieces.length; i++) {
    if (pieces[i].edge) {
        edgePieces.shift(pieces[i]);
        console.log("edge piece moved to edge piece pile");
        console.log(edgePieces);
    } else {
        console.log('inside piece not ready to be sorted!');
    }
};
//your code here

let table = document.getElementById("table1");
let add = document.getElementById("add");

console.log("Enter");

function reset() {
    for (i = 1; i <= 9; i++) {
        const block = document.getElementById(`${i}`);
        block.style.backgroundColor = "transparent";
    }
}
  
document.getElementById('reset_button').addEventListener('click', reset);

document.getElementById('change_button').addEventListener('click', () => {
    reset();
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;
    // alert(colorId)
    const block = document.getElementById(`${blockId}`);
    block.style.backgroundColor = color;
});
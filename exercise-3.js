function createStore() {
  let store = [];
  return function (item) {
    store.push(item);
    return store;
  };
}

const redPants = { id: 1, name: "Red Pants" };
const whiteHat = { id: 2, name: "White Hat" };
const blackSneakers = { id: 3, name: "Black Sneakers" };

console.log("--- Dress Store ---");
const dressStore = createStore();
dressStore(redPants);
const fullDressStore = dressStore(whiteHat);
console.log(fullDressStore);

console.log("--- Shoes Store ---");
const shoesStore = createStore();
const fullShoesStore = shoesStore(blackSneakers);
console.log(fullShoesStore);

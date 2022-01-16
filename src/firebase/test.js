import { ref, set, child, get } from "firebase/database";

const dbRef = ref(database);
get(child(dbRef, `scores/Hưng Ngô`)).then((snapshot) => {
if (snapshot.exists()) {
    console.log(snapshot.val());
} else {
    console.log("No data available");
}
}).catch((error) => {
console.error(error);
});
import { database } from "./firebase";
import { get, ref, set, onValue } from "firebase/database";

type User = {
    userId: string;
    name: string;
    email: string;
    imageUrl: string;
};


const writeUserData = ({userId, name, email, imageUrl}:User) => {
    set(ref(database, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}

const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    updateStarCount(postElement, data);
});



